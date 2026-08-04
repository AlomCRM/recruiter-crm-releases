const { app, BrowserWindow, ipcMain, dialog, shell, Menu } = require("electron");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
const { autoUpdater } = require("electron-updater");

const userDataPath = app.getPath("userData");
const dataFile = path.join(userDataPath, "candidati.json");
const settingsFile = path.join(userDataPath, "settings.json");
const sheetsFile = path.join(userDataPath, "fogli.json");
const cvDir = path.join(userDataPath, "cv");
const backupsDir = path.join(userDataPath, "backup-automatici");
if (!fs.existsSync(cvDir)) fs.mkdirSync(cvDir, { recursive: true });
if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir, { recursive: true });

function autoBackup() {
  try {
    if (!fs.existsSync(dataFile)) return;
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const dest = path.join(backupsDir, `auto-${stamp}.json`);
    fs.copyFileSync(dataFile, dest);
    const files = fs.readdirSync(backupsDir).filter((f) => f.startsWith("auto-")).sort();
    while (files.length > 10) fs.unlinkSync(path.join(backupsDir, files.shift()));
  } catch (e) { /* non bloccante */ }
}

const DEFAULT_SETTINGS = {
  stages: [
    { id: "st-contact", nome: "Da contattare", isHired: false },
    { id: "st-contacted", nome: "Contattato", isHired: false },
    { id: "st-eval", nome: "In valutazione", isHired: false },
    { id: "st-interview", nome: "Colloquio fissato", isHired: false },
    { id: "st-hired", nome: "Assunto", isHired: true },
    { id: "st-rejected", nome: "Rifiutato", isHired: false },
  ],
  recruiter: { nome: "", cognome: "", email: "", telefono: "", azienda: "", sedi: "" },
  templates: [
    {
      id: "tpl-linkedin",
      nome: "LinkedIn - primo contatto",
      corpo: "Ciao {{nome}}, sono {{recruiter_nome}} {{recruiter_cognome}} di {{recruiter_azienda}}. Ho visto il tuo profilo e credo potresti essere in linea con una posizione di {{ruolo}} che stiamo cercando di ricoprire. Ti va di fare due chiacchiere? Puoi scrivermi anche a {{recruiter_email}} oppure chiamarmi al {{recruiter_telefono}}.",
    },
    {
      id: "tpl-invito",
      nome: "Email - invito a colloquio",
      corpo: "Gentile {{nome}} {{cognome}},\n\nLa contatto in merito alla posizione di {{ruolo}}. Le andrebbe di fissare un colloquio conoscitivo nei prossimi giorni?\n\nResto a disposizione,\n{{recruiter_nome}} {{recruiter_cognome}}\n{{recruiter_azienda}} — {{recruiter_sedi}}\n{{recruiter_telefono}} · {{recruiter_email}}",
    },
    {
      id: "tpl-negativo",
      nome: "Email - esito negativo",
      corpo: "Gentile {{nome}} {{cognome}},\n\nLa ringrazio per il tempo dedicato al percorso di selezione per la posizione di {{ruolo}}. Al momento abbiamo deciso di proseguire con un altro profilo, ma conserveremo con piacere il suo CV per future opportunità in linea con il suo profilo.\n\nCordiali saluti,\n{{recruiter_nome}} {{recruiter_cognome}}\n{{recruiter_azienda}}",
    },
  ],
};

const SKILL_LIST = [
  "Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "PHP", "SQL", "NoSQL",
  "HTML", "CSS", "React", "Angular", "Vue", "Node.js", "AWS", "Azure", "Google Cloud",
  "Docker", "Kubernetes", "Git", "Linux", "Windows Server", "Excel", "Word", "PowerPoint",
  "Power BI", "SAP", "Salesforce", "AutoCAD", "Photoshop", "Illustrator", "Figma",
  "Project Management", "Scrum", "Agile", "Contabilità", "Bilancio", "Marketing",
  "Vendite", "Customer Service", "Risorse Umane", "Amministrazione del personale",
  "Analisi dati", "Machine Learning", "Cybersecurity", "Networking", "Negoziazione",
  "Time Management", "Problem Solving", "Leadership", "Comunicazione", "Team Working",
  "Inglese", "Francese", "Tedesco", "Spagnolo", "Logistica", "Supply Chain",
  "Data Entry", "CRM", "ERP", "Recruiting", "Selezione del personale", "E-commerce",
  "SEO", "Social Media Marketing", "Content Writing", "Customer Relationship",
];

function extractSkills(text) {
  const found = [];
  const lower = text.toLowerCase();
  for (const skill of SKILL_LIST) {
    const pattern = skill.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(^|[^a-z0-9à-ù])${pattern}([^a-z0-9à-ù]|$)`, "i");
    if (re.test(lower)) found.push(skill);
  }
  return found;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1360,
    height: 860,
    minWidth: 1024,
    minHeight: 680,
    backgroundColor: "#F4F5F3",
    title: "Recruiter CRM",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, "renderer", "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  setupAutoUpdater();
});

app.on("window-all-closed", () => {
  autoBackup();
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("backup:list", () => {
  try {
    return fs.readdirSync(backupsDir)
      .filter((f) => f.startsWith("auto-"))
      .sort().reverse()
      .map((f) => ({ file: f, time: fs.statSync(path.join(backupsDir, f)).mtime }));
  } catch (e) { return []; }
});

ipcMain.handle("backup:restoreAuto", (event, file) => {
  try {
    const full = path.join(backupsDir, file);
    if (!fs.existsSync(full)) return { ok: false, error: "File non trovato." };
    const parsed = JSON.parse(fs.readFileSync(full, "utf-8"));
    if (!Array.isArray(parsed)) throw new Error("Formato non valido");
    return { ok: true, candidati: parsed };
  } catch (e) {
    return { ok: false, error: "Impossibile leggere questo backup automatico." };
  }
});

// ---------------------------------------------------------------------------
// dati candidati
// ---------------------------------------------------------------------------
ipcMain.handle("data:load", () => {
  try {
    if (fs.existsSync(dataFile)) return JSON.parse(fs.readFileSync(dataFile, "utf-8"));
  } catch (e) { /* file assente o corrotto */ }
  return [];
});

ipcMain.handle("data:save", (event, candidati) => {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(candidati, null, 2), "utf-8");
    autoBackup();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
});

ipcMain.handle("data:export-backup", async (event, candidati) => {
  const { canceled, filePath } = await dialog.showSaveDialog({
    title: "Salva backup CRM",
    defaultPath: `backup-recruiter-crm-${new Date().toISOString().slice(0, 10)}.json`,
    filters: [{ name: "Backup CRM (JSON)", extensions: ["json"] }],
  });
  if (canceled || !filePath) return { ok: false };
  fs.writeFileSync(filePath, JSON.stringify(candidati, null, 2), "utf-8");
  return { ok: true, filePath };
});

ipcMain.handle("data:import-backup", async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: "Ripristina backup CRM",
    properties: ["openFile"],
    filters: [{ name: "Backup CRM (JSON)", extensions: ["json"] }],
  });
  if (canceled || filePaths.length === 0) return { ok: false };
  try {
    const parsed = JSON.parse(fs.readFileSync(filePaths[0], "utf-8"));
    if (!Array.isArray(parsed)) throw new Error("Formato non valido");
    return { ok: true, candidati: parsed };
  } catch (e) {
    return { ok: false, error: "Il file selezionato non è un backup valido." };
  }
});

// ---------------------------------------------------------------------------
// impostazioni: pipeline personalizzata, dati recruiter, template messaggi
// ---------------------------------------------------------------------------
ipcMain.handle("settings:load", () => {
  try {
    if (fs.existsSync(settingsFile)) {
      const saved = JSON.parse(fs.readFileSync(settingsFile, "utf-8"));
      return { ...DEFAULT_SETTINGS, ...saved };
    }
  } catch (e) { /* ignorato */ }
  return DEFAULT_SETTINGS;
});

ipcMain.handle("settings:save", (event, settings) => {
  try {
    fs.writeFileSync(settingsFile, JSON.stringify(settings, null, 2), "utf-8");
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
});

// ---------------------------------------------------------------------------
// import/export Excel
// ---------------------------------------------------------------------------
ipcMain.handle("excel:export", async (event, candidati) => {
  const { canceled, filePath } = await dialog.showSaveDialog({
    title: "Esporta candidati in Excel",
    defaultPath: `candidati-${new Date().toISOString().slice(0, 10)}.xlsx`,
    filters: [{ name: "Excel", extensions: ["xlsx"] }],
  });
  if (canceled || !filePath) return { ok: false };
  const rows = candidati.map((c) => ({
    Nome: c.nome, Cognome: c.cognome, Telefono: c.telefono, Email: c.email,
    Ruolo: c.ruolo, Disponibilita: c.disponibilita, Stato: c.stato,
    Fonte: c.fonte || "", ClienteAzienda: c.clienteAzienda || "",
    Valutazione: c.valutazione || 0, ConsensoPrivacy: c.consenso ? "Sì" : "No",
    Skills: (c.skills || []).join(", "),
    Note: (c.storico || []).map((s) => `${new Date(s.data).toLocaleDateString("it-IT")}: ${s.testo}`).join(" | "),
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Candidati");
  XLSX.writeFile(wb, filePath);
  return { ok: true, filePath };
});

ipcMain.handle("excel:import", async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: "Importa candidati da Excel",
    properties: ["openFile"],
    filters: [{ name: "Excel/CSV", extensions: ["xlsx", "xls", "csv"] }],
  });
  if (canceled || filePaths.length === 0) return { ok: false };
  try {
    const wb = XLSX.readFile(filePaths[0]);
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
    const norm = (s) => String(s).toLowerCase().trim();
    const pick = (row, ...keys) => {
      for (const k of Object.keys(row)) {
        if (keys.includes(norm(k))) return String(row[k]).trim();
      }
      return "";
    };
    const candidati = rows.map((row) => {
      const nota = pick(row, "note", "notes");
      return {
        nome: pick(row, "nome", "name"),
        cognome: pick(row, "cognome", "surname", "last name"),
        telefono: pick(row, "telefono", "phone", "cellulare"),
        email: pick(row, "email"),
        ruolo: pick(row, "ruolo", "posizione", "role"),
        disponibilita: pick(row, "disponibilita", "disponibilità", "availability") || "Ibrido",
        statoNome: pick(row, "stato", "status") || "Da contattare",
        fonte: pick(row, "fonte", "source"),
        clienteAzienda: pick(row, "clienteazienda", "cliente", "client"),
        valutazione: Number(pick(row, "valutazione", "rating")) || 0,
        skills: (pick(row, "skills", "competenze") || "").split(",").map((s) => s.trim()).filter(Boolean),
        storico: nota ? [{ data: new Date().toISOString(), testo: `Importato da Excel: ${nota}` }] : [],
      };
    }).filter((c) => c.nome || c.cognome);
    return { ok: true, candidati };
  } catch (e) {
    return { ok: false, error: "Impossibile leggere il file selezionato." };
  }
});

// ---------------------------------------------------------------------------
// CV: caricamento, estrazione testo e skill
// ---------------------------------------------------------------------------
ipcMain.handle("cv:upload", async (event, candidateId) => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: "Seleziona CV",
    properties: ["openFile"],
    filters: [{ name: "CV", extensions: ["pdf", "docx"] }],
  });
  if (canceled || filePaths.length === 0) return { ok: false };
  const src = filePaths[0];
  const ext = path.extname(src).toLowerCase();

  let text = "";
  try {
    if (ext === ".pdf") {
      const pdfParse = require("pdf-parse");
      const buffer = fs.readFileSync(src);
      const data = await pdfParse(buffer);
      text = data.text || "";
    } else if (ext === ".docx") {
      const mammoth = require("mammoth");
      const result = await mammoth.extractRawText({ path: src });
      text = result.value || "";
    } else {
      return { ok: false, error: "Formato non supportato. Usa PDF o DOCX." };
    }
  } catch (e) {
    return { ok: false, error: "Non sono riuscito a leggere il CV." };
  }

  const destName = `${candidateId}${ext}`;
  const destPath = path.join(cvDir, destName);
  fs.copyFileSync(src, destPath);

  const skills = extractSkills(text);
  return { ok: true, cvPath: destPath, cvName: path.basename(src), skills };
});

ipcMain.handle("cv:open", (event, cvPath) => {
  if (cvPath && fs.existsSync(cvPath)) shell.openPath(cvPath);
  return { ok: true };
});

// ---------------------------------------------------------------------------
// riavvia / esci
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// aggiornamenti automatici (richiede una repo GitHub configurata sopra)
// ---------------------------------------------------------------------------
let updateCheckIsManual = false;

function setupAutoUpdater() {
  autoUpdater.autoDownload = false;

  autoUpdater.on("update-available", (info) => {
    dialog.showMessageBox({
      type: "info",
      title: "Aggiornamento disponibile",
      message: `È disponibile la versione ${info.version} di Recruiter CRM.`,
      detail: "Vuoi scaricarla e installarla ora? I tuoi dati non verranno toccati.",
      buttons: ["Scarica e installa", "Più tardi"],
      cancelId: 1,
    }).then((result) => {
      if (result.response === 0) autoUpdater.downloadUpdate();
    });
  });

  autoUpdater.on("update-downloaded", () => {
    dialog.showMessageBox({
      type: "info",
      title: "Aggiornamento pronto",
      message: "L'aggiornamento è stato scaricato.",
      detail: "Riavvia ora per installarlo, oppure verrà installato alla prossima apertura del programma.",
      buttons: ["Riavvia ora", "Più tardi"],
      cancelId: 1,
    }).then((result) => {
      if (result.response === 0) autoUpdater.quitAndInstall();
    });
  });

  autoUpdater.on("update-not-available", (info) => {
    if (updateCheckIsManual) {
      dialog.showMessageBox({
        type: "info",
        title: "Aggiornamenti",
        message: "Hai già la versione più recente installata.",
        detail: `Versione attuale: ${app.getVersion()}`,
      });
    }
    updateCheckIsManual = false;
  });

  autoUpdater.on("error", () => { /* nessun internet o repo non raggiungibile: ignora silenziosamente */ });

  autoUpdater.checkForUpdates().catch(() => {});
}

ipcMain.handle("app:check-updates", () => {
  updateCheckIsManual = true;
  autoUpdater.checkForUpdates().catch((err) => {
    updateCheckIsManual = false;
    dialog.showMessageBox({
      type: "info",
      title: "Aggiornamenti",
      message: "Impossibile controllare in questo momento.",
      detail: `Dettaglio tecnico: ${err && err.message ? err.message : String(err)}`,
    });
  });
});

ipcMain.handle("app:restart", () => {
  app.relaunch();
  app.exit(0);
});

ipcMain.handle("app:exit", () => {
  app.quit();
});

// ---------------------------------------------------------------------------
// fogli personalizzati (stile Excel: fogli con colonne e righe libere)
// ---------------------------------------------------------------------------
ipcMain.handle("sheets:load", () => {
  try {
    if (fs.existsSync(sheetsFile)) return JSON.parse(fs.readFileSync(sheetsFile, "utf-8"));
  } catch (e) { /* ignorato */ }
  return [];
});

ipcMain.handle("sheets:save", (event, sheets) => {
  try {
    fs.writeFileSync(sheetsFile, JSON.stringify(sheets, null, 2), "utf-8");
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
});
