// =============================================================================
// ICONE (SVG inline, stroke-based)
// =============================================================================
function svg(paths, extra) {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra || ""}>${paths}</svg>`;
}
const ICONS = {
  dashboard: svg('<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>'),
  users: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'),
  check: svg('<path d="M20 6 9 17l-5-5"/>'),
  checkCircle: svg('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>'),
  message: svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
  sliders: svg('<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>'),
  userCircle: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 19a5.8 5.8 0 0 1 11 0"/>'),
  refresh: svg('<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.5 15"/>'),
  power: svg('<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>'),
  plus: svg('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'),
  edit: svg('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'),
  trash: svg('<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>'),
  phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  file: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
  x: svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
  alert: svg('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
  search: svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
  up: svg('<polyline points="18 15 12 9 6 15"/>'),
  down: svg('<polyline points="6 9 12 15 18 9"/>'),
  copy: svg('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'),
  bell: svg('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'),
  table: svg('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>'),
  chart: svg('<polyline points="3 17 9 11 13 15 21 5"/><polyline points="14 5 21 5 21 12"/>'),
};

// =============================================================================
// STATO GLOBALE
// =============================================================================
let candidati = [];
let settings = null;
let sheets = [];
let activeSheetId = null;
let columnDraft = null;
let currentTab = "dashboard";
let query = "";
let filterStato = "Tutti";
let filterDispo = "Tutte";
let editingForm = null;
let notified = new Set();
let pipelineDraft = null;
let fontiDraft = null;
let recruiterDraft = null;
let templateDraft = null;
let candidatiView = "lista"; // "lista" | "kanban"
let sortMode = "recenti"; // "recenti" | "nome" | "valutazione" | "ultimoContatto"
let draggedId = null;

const DISPO = ["Full onsite", "Ibrido", "Remoto"];
const FONTI_DEFAULT = ["LinkedIn", "Segnalazione", "Portale annunci", "Sito aziendale", "Fiera/Evento", "Altro"];
const PRIORITA = ["Alta", "Media", "Bassa"];
const PRIORITY_COLOR = {
  Alta: { bg: "var(--brick-soft)", fg: "var(--brick)" },
  Media: { bg: "var(--amber-soft)", fg: "#8A6402" },
  Bassa: { bg: "var(--slate-soft)", fg: "var(--ink-soft)" },
};
const TAG_PALETTE = ["#1F3A5F", "#0F6E5B", "#C98A02", "#5B3E9E", "#C1442F", "#2C4A6E", "#3E7C59"];
function tagColor(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return TAG_PALETTE[sum % TAG_PALETTE.length];
}
let sheetSort = { colId: null, dir: "asc" };
const PALETTE = [
  { bg: "var(--slate-soft)", fg: "var(--ink-soft)" },
  { bg: "var(--amber-soft)", fg: "#8A6402" },
  { bg: "#E7EEF6", fg: "var(--navy-soft)" },
  { bg: "#EDE7F6", fg: "#5B3E9E" },
  { bg: "var(--petrol-soft)", fg: "var(--petrol)" },
  { bg: "var(--brick-soft)", fg: "var(--brick)" },
];

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
const esc = (s) => (s || "").toString().replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

function anteprimaAvvisoHtml() {
  if (!window.__isPreview) return "";
  return `<div style="font-size:12px;color:var(--ink-soft);margin-bottom:12px;padding:8px 12px;background:var(--slate-soft);border-radius:7px;">Import/Export Excel, CV e backup sono disattivati in questa anteprima: richiedono l'app desktop installata (accesso reale al file system del PC).</div>`;
}

function fmtDateTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const tomorrow = new Date(); tomorrow.setDate(now.getDate() + 1);
  const sameDay = (a, b) => a.toDateString() === b.toDateString();
  const ora = d.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  if (sameDay(d, now)) return `Oggi, ${ora}`;
  if (sameDay(d, tomorrow)) return `Domani, ${ora}`;
  return d.toLocaleDateString("it-IT", { day: "2-digit", month: "short" }) + `, ${ora}`;
}
function isoToParts(iso) {
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return [`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`, `${pad(d.getHours())}:${pad(d.getMinutes())}`];
}
function resolveStage(stato) {
  return settings.stages.find((s) => s.id === stato) || settings.stages.find((s) => s.nome === stato) || settings.stages[0];
}
function lastActivityTime(c) {
  const dates = (c.storico || []).map((s) => new Date(s.data).getTime());
  dates.push(new Date(c.createdAt || 0).getTime());
  return Math.max(...dates, 0);
}
function isStale(c) {
  if (resolveStage(c.stato).isHired) return false;
  if (c.richiamo) return false;
  return (Date.now() - lastActivityTime(c)) > 14 * 24 * 60 * 60 * 1000;
}
function sortCandidati(list) {
  const arr = [...list];
  if (sortMode === "nome") arr.sort((a, b) => `${a.nome}${a.cognome}`.localeCompare(`${b.nome}${b.cognome}`));
  else if (sortMode === "valutazione") arr.sort((a, b) => (b.valutazione || 0) - (a.valutazione || 0));
  else if (sortMode === "priorita") { const rank = { Alta: 0, Media: 1, Bassa: 2, "": 3 }; arr.sort((a, b) => (rank[a.priorita || ""] ?? 3) - (rank[b.priorita || ""] ?? 3)); }
  else if (sortMode === "ultimoContatto") arr.sort((a, b) => lastActivityTime(b) - lastActivityTime(a));
  else arr.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  return arr;
}
function starsHtml(valutazione, interactive) {
  const v = valutazione || 0;
  let html = `<span class="stars" ${interactive ? 'id="rating-stars"' : ""}>`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= v ? "filled" : ""}" ${interactive ? `data-star="${i}"` : ""}>★</span>`;
  }
  html += `</span>`;
  return html;
}

function showToast(msg) {
  const area = document.getElementById("toast-area");
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  area.innerHTML = "";
  area.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

async function persist() {
  const res = await window.api.saveData(candidati);
  if (!res || !res.ok) showToast("Salvataggio non riuscito. Riprova.");
}
async function persistSettings() {
  const res = await window.api.saveSettings(settings);
  if (!res || !res.ok) showToast("Salvataggio impostazioni non riuscito.");
}

// =============================================================================
// AVVIO
// =============================================================================
(async function init() {
  candidati = (await window.api.loadData()) || [];
  settings = await window.api.loadSettings();
  sheets = (await window.api.loadSheets()) || [];
  if (sheets.length) activeSheetId = sheets[0].id;
  buildSidebar();
  render();
  setInterval(checkNotifications, 30000);
  checkNotifications();
  if (window.api.getAppVersion) {
    const v = await window.api.getAppVersion();
    const el = document.getElementById("app-version-label");
    if (el) el.textContent = `versione ${v}`;
  }
})();

function buildSidebar() {
  const items = [
    { tab: "dashboard", icon: ICONS.dashboard, label: "Cruscotto" },
    { tab: "candidati", icon: ICONS.users, label: "Candidati", badge: () => candidati.length },
    { tab: "richiami", icon: ICONS.clock, label: "Richiami", badge: () => candidati.filter((c) => c.richiamo).length },
    { tab: "assunzioni", icon: ICONS.checkCircle, label: "Assunzioni", badge: () => candidati.filter((c) => resolveStage(c.stato).isHired).length },
  ];
  const items2 = [
    { tab: "fogli", icon: ICONS.table, label: "Fogli" },
    { tab: "grafici", icon: ICONS.chart, label: "Grafici" },
    { tab: "template", icon: ICONS.message, label: "Template messaggi" },
    { tab: "pipeline", icon: ICONS.sliders, label: "Pipeline" },
    { tab: "recruiter", icon: ICONS.userCircle, label: "Dati recruiter" },
  ];
  const nav = document.getElementById("nav");
  const renderItem = (it) => `
    <button class="nav-item" data-tab="${it.tab}">${it.icon}<span>${it.label}</span>${it.badge ? `<span class="nav-badge" data-badge="${it.tab}">${it.badge()}</span>` : ""}</button>`;
  nav.innerHTML = items.map(renderItem).join("") + `<div class="nav-divider"></div>` + items2.map(renderItem).join("");
  nav.querySelectorAll(".nav-item").forEach((b) => b.onclick = () => { currentTab = b.dataset.tab; render(); });

  document.getElementById("btn-restart").innerHTML = `${ICONS.refresh}<span>Riavvia</span>`;
  document.getElementById("btn-exit").innerHTML = `${ICONS.power}<span>Esci</span>`;
  document.getElementById("btn-check-updates").innerHTML = `${ICONS.refresh}<span>Controlla aggiornamenti</span>`;
  document.getElementById("btn-check-updates").onclick = () => { window.api.checkUpdates(); showToast("Controllo aggiornamenti in corso…"); };
  document.getElementById("btn-restart").onclick = () => confirmAction("Riavviare Recruiter CRM?", "I dati sono già salvati automaticamente.", () => window.api.restartApp());
  document.getElementById("btn-exit").onclick = () => confirmAction("Chiudere Recruiter CRM?", "I dati sono già salvati automaticamente.", () => window.api.exitApp());

  document.getElementById("global-search-btn").innerHTML = `${ICONS.search}<span>Cerca ovunque…</span><span class="mono" style="margin-left:auto;opacity:.6;font-size:11px;">Ctrl+K</span>`;
  document.getElementById("global-search-btn").onclick = () => openGlobalSearch();
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openGlobalSearch();
    }
  });
}

function openGlobalSearch() {
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal" style="max-width:560px;padding-bottom:10px;">
        <div class="search-box" style="margin-bottom:12px;">
          ${ICONS.search}<input id="gs-input" placeholder="Cerca candidati, fogli, template…" autocomplete="off" />
          <button class="x" id="gs-close">${ICONS.x}</button>
        </div>
        <div id="gs-results" class="row-list" style="max-height:60vh;overflow-y:auto;"></div>
      </div>
    </div>`;
  const input = document.getElementById("gs-input");
  input.focus();
  document.getElementById("gs-close").onclick = () => area.innerHTML = "";
  document.querySelector(".overlay").onclick = (e) => { if (e.target.classList.contains("overlay")) area.innerHTML = ""; };
  input.oninput = () => renderGlobalSearchResults(input.value);
  renderGlobalSearchResults("");
}

function renderGlobalSearchResults(q) {
  const el = document.getElementById("gs-results");
  if (!el) return;
  const query = q.trim().toLowerCase();
  if (!query) { el.innerHTML = `<div style="font-size:12.5px;color:var(--ink-soft);padding:8px 4px;">Inizia a scrivere per cercare tra candidati, fogli e template.</div>`; return; }

  const candResults = candidati.filter((c) =>
    `${c.nome} ${c.cognome} ${c.ruolo} ${(c.tags || []).join(" ")} ${(c.skills || []).join(" ")}`.toLowerCase().includes(query)
  ).slice(0, 6);
  const sheetResults = sheets.filter((s) => s.nome.toLowerCase().includes(query)).slice(0, 4);
  const templateResults = settings.templates.filter((t) => t.nome.toLowerCase().includes(query)).slice(0, 4);

  if (candResults.length === 0 && sheetResults.length === 0 && templateResults.length === 0) {
    el.innerHTML = `<div style="font-size:12.5px;color:var(--ink-soft);padding:8px 4px;">Nessun risultato per "${esc(q)}".</div>`;
    return;
  }

  let html = "";
  if (candResults.length) {
    html += `<div class="section-heading" style="margin:4px 0;">Candidati</div>`;
    html += candResults.map((c) => `
      <div class="candidate-row gs-item" data-type="candidato" data-id="${c.id}" style="padding:9px 12px;cursor:pointer;">
        <div class="candidate-main">
          <span class="candidate-name">${esc(c.nome)} ${esc(c.cognome)}</span>
          ${c.ruolo ? `<span style="font-size:12.5px;color:var(--ink-soft);margin-left:8px;">${esc(c.ruolo)}</span>` : ""}
        </div>
      </div>`).join("");
  }
  if (sheetResults.length) {
    html += `<div class="section-heading" style="margin:8px 0 4px;">Fogli</div>`;
    html += sheetResults.map((s) => `
      <div class="candidate-row gs-item" data-type="foglio" data-id="${s.id}" style="padding:9px 12px;cursor:pointer;">
        <div class="candidate-main">${ICONS.table} <span class="candidate-name" style="margin-left:6px;">${esc(s.nome)}</span></div>
      </div>`).join("");
  }
  if (templateResults.length) {
    html += `<div class="section-heading" style="margin:8px 0 4px;">Template messaggi</div>`;
    html += templateResults.map((t) => `
      <div class="candidate-row gs-item" data-type="template" data-id="${t.id}" style="padding:9px 12px;cursor:pointer;">
        <div class="candidate-main">${ICONS.message} <span class="candidate-name" style="margin-left:6px;">${esc(t.nome)}</span></div>
      </div>`).join("");
  }
  el.innerHTML = html;

  el.querySelectorAll(".gs-item").forEach((item) => item.onclick = () => {
    document.getElementById("modal-area").innerHTML = "";
    if (item.dataset.type === "candidato") { currentTab = "candidati"; render(); openForm(item.dataset.id); }
    else if (item.dataset.type === "foglio") { currentTab = "fogli"; activeSheetId = item.dataset.id; sheetSort = { colId: null, dir: "asc" }; render(); }
    else if (item.dataset.type === "template") { currentTab = "template"; render(); openTemplateForm(item.dataset.id); }
  });
}

function confirmAction(titolo, sottotitolo, onConfirm) {
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal" style="max-width:380px;">
        <div style="font-weight:600;margin-bottom:6px;">${esc(titolo)}</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-bottom:16px;">${esc(sottotitolo)}</div>
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-action">Annulla</button>
          <button class="btn-save" id="confirm-action">Conferma</button>
        </div>
      </div>
    </div>`;
  document.getElementById("cancel-action").onclick = () => area.innerHTML = "";
  document.getElementById("confirm-action").onclick = onConfirm;
}

function promptModal(titolo, defaultValue, onConfirm) {
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal" style="max-width:380px;">
        <div style="font-weight:600;margin-bottom:10px;">${esc(titolo)}</div>
        <input id="prompt-input" value="${esc(defaultValue || "")}" style="width:100%;border:1px solid var(--hairline);border-radius:7px;padding:9px 10px;outline:none;box-sizing:border-box;" />
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-prompt">Annulla</button>
          <button class="btn-save" id="confirm-prompt">Conferma</button>
        </div>
      </div>
    </div>`;
  const input = document.getElementById("prompt-input");
  input.focus();
  input.select();
  const submit = () => { const v = input.value.trim(); area.innerHTML = ""; if (v) onConfirm(v); };
  document.getElementById("cancel-prompt").onclick = () => area.innerHTML = "";
  document.getElementById("confirm-prompt").onclick = submit;
  input.onkeydown = (e) => { if (e.key === "Enter") submit(); };
}

// =============================================================================
// NOTIFICHE
// =============================================================================
function checkNotifications() {
  const now = new Date();
  candidati.filter((c) => c.richiamo).forEach((c) => {
    const due = new Date(c.richiamo.datetime);
    if (due <= now && !notified.has(c.id)) {
      notified.add(c.id);
      try { new Notification("Richiamo candidato", { body: `${c.nome} ${c.cognome} — ${c.richiamo.nota || "da richiamare"}` }); } catch (e) {}
    }
  });
  renderBanner();
  refreshBadges();
}

function refreshBadges() {
  const map = {
    candidati: candidati.length,
    richiami: candidati.filter((c) => c.richiamo).length,
    assunzioni: candidati.filter((c) => resolveStage(c.stato).isHired).length,
  };
  Object.entries(map).forEach(([k, v]) => {
    const el = document.querySelector(`[data-badge="${k}"]`);
    if (el) el.textContent = v;
  });
}

// =============================================================================
// RENDER PRINCIPALE
// =============================================================================
const PAGE_META = {
  dashboard: ["Cruscotto", "Panoramica della tua pipeline di selezione"],
  candidati: ["Candidati", "Anagrafica completa dei profili contattati"],
  richiami: ["Richiami", "Le chiamate da ricordare, in ordine di scadenza"],
  assunzioni: ["Assunzioni", "Storico delle posizioni chiuse"],
  fogli: ["Fogli", "Fogli di lavoro personalizzati, come schede Excel"],
  grafici: ["Grafici", "Andamento della selezione a colpo d'occhio"],
  template: ["Template messaggi", "Modelli riutilizzabili per LinkedIn ed email"],
  pipeline: ["Pipeline", "Personalizza le fasi della tua selezione"],
  recruiter: ["Dati recruiter", "Usati per firmare automaticamente i messaggi"],
};

function render() {
  document.querySelectorAll(".nav-item[data-tab]").forEach((b) => b.classList.toggle("active", b.dataset.tab === currentTab));
  const [title, sub] = PAGE_META[currentTab];
  document.getElementById("page-title").textContent = title;
  document.getElementById("page-sub").textContent = sub;
  renderPageActions();
  renderBanner();
  refreshBadges();

  document.getElementById("recruiter-greeting").textContent = settings.recruiter.nome ? `Bentornato, ${settings.recruiter.nome}` : "Configura i tuoi dati →";
  const av = document.getElementById("recruiter-avatar");
  if (av) {
    const iniziali = ((settings.recruiter.nome || "")[0] || "") + ((settings.recruiter.cognome || "")[0] || "");
    av.textContent = iniziali || "–";
  }

  const main = document.getElementById("main-area");
  if (currentTab === "dashboard") main.innerHTML = viewDashboard();
  if (currentTab === "candidati") { main.innerHTML = viewCandidati(); bindCandidatiEvents(); if (candidatiView === "kanban") bindKanbanEvents(); }
  if (currentTab === "richiami") { main.innerHTML = viewRichiami(); }
  if (currentTab === "assunzioni") { main.innerHTML = viewAssunzioni(); }
  if (currentTab === "fogli") { main.innerHTML = viewFogli(); bindFogliEvents(); }
  if (currentTab === "grafici") { main.innerHTML = viewGrafici(); drawGrafici(); }
  if (currentTab === "template") { main.innerHTML = viewTemplate(); bindTemplateEvents(); }
  if (currentTab === "pipeline") { main.innerHTML = viewPipeline(); bindPipelineEvents(); }
  if (currentTab === "recruiter") { main.innerHTML = viewRecruiter(); bindRecruiterEvents(); }
  bindRowLevelEvents();
}

function renderPageActions() {
  const el = document.getElementById("page-actions");
  if (currentTab === "candidati") {
    el.innerHTML = `
      <button class="btn btn-outline" id="btn-import-excel">Importa Excel</button>
      <button class="btn btn-outline" id="btn-export-excel">Esporta Excel</button>
      <button class="btn btn-outline" id="btn-import-backup">Ripristina backup</button>
      <button class="btn btn-outline" id="btn-export-backup">Salva backup</button>
      <button class="btn btn-outline" id="btn-auto-backups">Backup automatici</button>
      <button class="btn btn-outline" id="btn-toggle-view">${candidatiView === "lista" ? "Vista Kanban" : "Vista Lista"}</button>
      <button class="btn btn-primary" id="btn-new">${ICONS.plus}Nuovo candidato</button>`;
    document.getElementById("btn-auto-backups").onclick = () => openAutoBackupsModal();
    document.getElementById("btn-toggle-view").onclick = () => { candidatiView = candidatiView === "lista" ? "kanban" : "lista"; render(); };
    document.getElementById("btn-new").onclick = () => openForm(null);
    document.getElementById("btn-export-backup").onclick = async () => { const r = await window.api.exportBackup(candidati); if (r.ok) showToast("Backup salvato: " + r.filePath); };
    document.getElementById("btn-import-backup").onclick = async () => {
      const r = await window.api.importBackup();
      if (r.ok) { candidati = r.candidati; await persist(); render(); showToast("Backup ripristinato."); }
      else if (r.error) showToast(r.error);
    };
    document.getElementById("btn-export-excel").onclick = async () => { const r = await window.api.exportExcel(candidati); if (r.ok) showToast("Excel esportato: " + r.filePath); };
    document.getElementById("btn-import-excel").onclick = async () => {
      const r = await window.api.importExcel();
      if (r.ok) {
        const fallback = settings.stages[0].id;
        const nuovi = r.candidati.map((c) => {
          const match = settings.stages.find((s) => s.nome.toLowerCase() === (c.statoNome || "").toLowerCase());
          return {
            id: uid(), skills: c.skills || [], richiamo: null, storico: c.storico || [], cvPath: null, cvName: null,
            createdAt: new Date().toISOString(), nome: c.nome, cognome: c.cognome, telefono: c.telefono, email: c.email,
            ruolo: c.ruolo, disponibilita: c.disponibilita, stato: match ? match.id : fallback,
            fonte: c.fonte || "", clienteAzienda: c.clienteAzienda || "", valutazione: c.valutazione || 0,
            consenso: false, consensoData: null,
            dataAssunzione: match && match.isHired ? new Date().toISOString() : null,
          };
        });
        candidati = [...nuovi, ...candidati];
        await persist(); render();
        showToast(`${nuovi.length} candidati importati dall'Excel.`);
      } else if (r.error) showToast(r.error);
    };
  } else if (currentTab === "fogli") {
    el.innerHTML = `
      ${activeSheetId ? `
      <button class="btn btn-outline" id="btn-paste-sheet">${ICONS.file}Incolla da Excel</button>
      <button class="btn btn-outline" id="btn-copy-sheet">${ICONS.copy}Copia foglio</button>
      <button class="btn btn-outline" id="btn-add-column">${ICONS.plus}Colonna</button>
      <button class="btn btn-outline" id="btn-add-row">${ICONS.plus}Riga</button>` : ""}
      <button class="btn btn-primary" id="btn-new-sheet">${ICONS.plus}Nuovo foglio</button>`;
    document.getElementById("btn-new-sheet").onclick = () => createSheet();
    const bc = document.getElementById("btn-add-column"); if (bc) bc.onclick = () => openColumnForm(null);
    const br = document.getElementById("btn-add-row"); if (br) br.onclick = () => addRow();
    const bcp = document.getElementById("btn-copy-sheet"); if (bcp) bcp.onclick = () => copySheetToClipboard();
    const bps = document.getElementById("btn-paste-sheet"); if (bps) bps.onclick = () => openPasteModal();
  } else if (currentTab === "template") {
    el.innerHTML = `<button class="btn btn-primary" id="btn-new-template">${ICONS.plus}Nuovo template</button>`;
    document.getElementById("btn-new-template").onclick = () => openTemplateForm(null);
  } else if (currentTab === "pipeline") {
    el.innerHTML = `<button class="btn btn-primary" id="btn-save-pipeline">${ICONS.check}Salva modifiche</button>`;
    document.getElementById("btn-save-pipeline").onclick = savePipeline;
  } else if (currentTab === "recruiter") {
    el.innerHTML = `<button class="btn btn-primary" id="btn-save-recruiter">${ICONS.check}Salva dati</button>`;
    document.getElementById("btn-save-recruiter").onclick = saveRecruiter;
  } else if (currentTab === "dashboard") {
    el.innerHTML = `<button class="btn btn-primary" id="btn-new-dash">${ICONS.plus}Nuovo candidato</button>`;
    document.getElementById("btn-new-dash").onclick = () => openForm(null);
  } else {
    el.innerHTML = "";
  }
}

function renderBanner() {
  const now = new Date();
  const richiami = candidati.filter((c) => c.richiamo);
  const scaduti = richiami.filter((c) => new Date(c.richiamo.datetime) <= now);
  const oggi = richiami.filter((c) => { const d = new Date(c.richiamo.datetime); return d > now && d.toDateString() === now.toDateString(); });
  const area = document.getElementById("banner-area");
  if (scaduti.length === 0 && oggi.length === 0) { area.innerHTML = ""; return; }
  const urgent = scaduti.length > 0;
  const list = [...scaduti, ...oggi].slice(0, 6);
  area.innerHTML = `
    <div class="banner" style="background:${urgent ? "var(--brick-soft)" : "var(--amber-soft)"}">
      <div class="title" style="color:${urgent ? "var(--brick)" : "#8A6402"}">
        ${ICONS.bell} ${urgent ? `${scaduti.length} richiam${scaduti.length > 1 ? "i" : "o"} in ritardo` : `${oggi.length} richiam${oggi.length > 1 ? "i" : "o"} previst${oggi.length > 1 ? "i" : "o"} oggi`}
      </div>
      <div class="chip-row">
        ${list.map((c) => `
          <div class="chip">
            <span><b>${esc(c.nome)} ${esc(c.cognome)}</b></span>
            <span class="mono" style="font-size:12px;color:var(--ink-soft)">${fmtDateTime(c.richiamo.datetime)}</span>
            <button data-done="${c.id}">${ICONS.check}</button>
          </div>`).join("")}
      </div>
    </div>`;
  area.querySelectorAll("[data-done]").forEach((b) => b.onclick = () => clearRichiamo(b.dataset.done));
}

// =============================================================================
// CRUSCOTTO
// =============================================================================
function viewDashboard() {
  const now = new Date();
  const richiami = candidati.filter((c) => c.richiamo);
  const scaduti = richiami.filter((c) => new Date(c.richiamo.datetime) <= now).length;
  const oggi = richiami.filter((c) => { const d = new Date(c.richiamo.datetime); return d > now && d.toDateString() === now.toDateString(); }).length;
  const assunti = candidati.filter((c) => resolveStage(c.stato).isHired).length;
  const stageCounts = settings.stages.map((s) => ({ stage: s, count: candidati.filter((c) => resolveStage(c.stato).id === s.id).length }));
  const maxCount = Math.max(1, ...stageCounts.map((s) => s.count));
  const conversione = candidati.length ? Math.round((assunti / candidati.length) * 100) : 0;
  const staleList = candidati.filter(isStale).sort((a, b) => lastActivityTime(a) - lastActivityTime(b));

  return `
    <div class="stat-row">
      <div class="card stat"><div class="label">Candidati totali</div><div class="value">${candidati.length}</div></div>
      <div class="card stat"><div class="label">Richiami in ritardo</div><div class="value" style="color:${scaduti ? "var(--brick)" : "var(--ink)"}">${scaduti}</div></div>
      <div class="card stat"><div class="label">Richiami oggi</div><div class="value" style="color:${oggi ? "var(--amber)" : "var(--ink)"}">${oggi}</div></div>
      <div class="card stat"><div class="label">Assunti</div><div class="value" style="color:var(--petrol)">${assunti}</div></div>
      <div class="card stat"><div class="label">Tasso di conversione</div><div class="value">${conversione}%</div></div>
    </div>
    ${staleList.length > 0 ? `
    <div class="card" style="padding:18px;margin-bottom:16px;border-color:var(--amber);">
      <div class="section-heading" style="color:#8A6402;">${ICONS.bell} Candidati da ricontattare (nessuna attività da oltre 14 giorni)</div>
      <div class="row-list">
        ${staleList.slice(0, 5).map((c) => `
          <div class="candidate-row" style="background:var(--amber-soft);padding:10px 14px;">
            <div class="candidate-main">
              <span class="candidate-name">${esc(c.nome)} ${esc(c.cognome)}</span>
              <span style="font-size:12px;color:var(--ink-soft);margin-left:8px;">${esc(c.ruolo || "")} · ultimo contatto ${new Date(lastActivityTime(c)).toLocaleDateString("it-IT")}</span>
            </div>
            <button class="icon-btn edit-btn" data-id="${c.id}">${ICONS.edit}</button>
          </div>`).join("")}
        ${staleList.length > 5 ? `<div style="font-size:12.5px;color:var(--ink-soft);text-align:center;">+ altri ${staleList.length - 5}</div>` : ""}
      </div>
    </div>` : ""}
    <div class="card" style="padding:18px;">
      <div class="section-heading">Pipeline — fase per fase</div>
      ${stageCounts.map((s, i) => `
        <div class="pipeline-row">
          <span class="num mono">${String(i).padStart(2, "0")}</span>
          <span class="name">${esc(s.stage.nome)}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(s.count / maxCount) * 100}%;background:${PALETTE[i % PALETTE.length].fg};min-width:${s.count ? "8px" : "0"}"></div></div>
          <span class="count mono">${s.count}</span>
        </div>`).join("")}
    </div>`;
}

// =============================================================================
// CANDIDATI
// =============================================================================
function filteredCandidati() {
  return candidati.filter((c) => {
    const matchQ = !query.trim() || `${c.nome} ${c.cognome} ${c.ruolo} ${(c.tags || []).join(" ")}`.toLowerCase().includes(query.toLowerCase());
    const matchS = filterStato === "Tutti" || resolveStage(c.stato).id === filterStato;
    const matchD = filterDispo === "Tutte" || c.disponibilita === filterDispo;
    return matchQ && matchS && matchD;
  });
}

function viewCandidati() {
  const list = sortCandidati(filteredCandidati());
  const filtersBar = `
    ${anteprimaAvvisoHtml()}
    <div class="filters">
      <div class="search-box">${ICONS.search}<input id="search-input" placeholder="Cerca per nome o ruolo…" value="${esc(query)}" /></div>
      <select id="filter-stato" class="filter">
        <option value="Tutti" ${filterStato === "Tutti" ? "selected" : ""}>Tutte le fasi</option>
        ${settings.stages.map((s) => `<option value="${s.id}" ${filterStato === s.id ? "selected" : ""}>${esc(s.nome)}</option>`).join("")}
      </select>
      <select id="filter-dispo" class="filter">
        <option ${filterDispo === "Tutte" ? "selected" : ""}>Tutte</option>
        ${DISPO.map((d) => `<option ${filterDispo === d ? "selected" : ""}>${d}</option>`).join("")}
      </select>
      ${candidatiView === "lista" ? `
      <select id="sort-mode" class="filter">
        <option value="recenti" ${sortMode === "recenti" ? "selected" : ""}>Più recenti</option>
        <option value="nome" ${sortMode === "nome" ? "selected" : ""}>Nome A-Z</option>
        <option value="valutazione" ${sortMode === "valutazione" ? "selected" : ""}>Valutazione</option>
        <option value="priorita" ${sortMode === "priorita" ? "selected" : ""}>Priorità</option>
        <option value="ultimoContatto" ${sortMode === "ultimoContatto" ? "selected" : ""}>Ultimo contatto</option>
      </select>` : ""}
    </div>`;
  if (candidatiView === "kanban") return filtersBar + viewCandidatiKanban(list);
  if (list.length === 0) return filtersBar + `<div class="empty">Nessun candidato trovato. Aggiungine uno con "Nuovo candidato".</div>`;
  return filtersBar + `<div class="row-list">${list.map(candidateRowHtml).join("")}</div>`;
}

function viewCandidatiKanban(list) {
  return `<div class="kanban-board">
    ${settings.stages.map((stage) => {
      const cards = list.filter((c) => resolveStage(c.stato).id === stage.id);
      return `
      <div class="kanban-col" data-stage="${stage.id}">
        <div class="kanban-col-head"><span>${esc(stage.nome)}</span><span class="mono">${cards.length}</span></div>
        ${cards.map((c) => `
          <div class="kanban-card" draggable="true" data-id="${c.id}">
            <div style="font-weight:600;font-size:13px;">${esc(c.nome)} ${esc(c.cognome)}</div>
            ${c.ruolo ? `<div style="font-size:12px;color:var(--ink-soft);margin-top:2px;">${esc(c.ruolo)}</div>` : ""}
            ${c.priorita ? `<span class="tag" style="background:${PRIORITY_COLOR[c.priorita].bg};color:${PRIORITY_COLOR[c.priorita].fg};margin-left:0;margin-top:4px;">${esc(c.priorita)}</span>` : ""}
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px;">
              ${starsHtml(c.valutazione)}
              ${c.fonte ? `<span class="skill-chip">${esc(c.fonte)}</span>` : ""}
            </div>
            ${(c.tags && c.tags.length) ? `<div style="margin-top:4px;">${c.tags.map((t) => `<span class="skill-chip" style="background:${tagColor(t)}20;color:${tagColor(t)};">${esc(t)}</span>`).join("")}</div>` : ""}
            ${c.richiamo ? `<div class="tag" style="background:var(--amber-soft);color:#8A6402;margin-left:0;margin-top:6px;">${ICONS.clock} ${fmtDateTime(c.richiamo.datetime)}</div>` : ""}
            <select class="filter kanban-move" data-id="${c.id}" style="width:100%;font-size:11.5px;padding:5px 6px;margin-top:8px;">
              ${settings.stages.map((s) => `<option value="${s.id}" ${s.id === stage.id ? "selected" : ""}>${esc(s.nome)}</option>`).join("")}
            </select>
          </div>`).join("")}
      </div>`;
    }).join("")}
  </div>
  <div style="font-size:12px;color:var(--ink-soft);margin-top:8px;">Trascina una card in un'altra colonna, oppure usa il menu a tendina in fondo alla card se preferisci non trascinare.</div>`;
}

function bindKanbanEvents() {
  document.querySelectorAll(".kanban-card").forEach((card) => {
    card.addEventListener("dragstart", (e) => {
      draggedId = card.dataset.id;
      card.classList.add("dragging");
      try { e.dataTransfer.setData("text/plain", card.dataset.id); e.dataTransfer.effectAllowed = "move"; } catch (err) {}
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
    card.onclick = (e) => { if (e.target.closest(".kanban-move")) return; openForm(card.dataset.id); };
  });
  document.querySelectorAll(".kanban-move").forEach((sel) => {
    sel.onclick = (e) => e.stopPropagation();
    sel.onchange = (e) => { e.stopPropagation(); setStato(sel.dataset.id, e.target.value); };
  });
  document.querySelectorAll(".kanban-col").forEach((col) => {
    col.addEventListener("dragover", (e) => { e.preventDefault(); try { e.dataTransfer.dropEffect = "move"; } catch (err) {} col.classList.add("drag-over"); });
    col.addEventListener("dragleave", () => col.classList.remove("drag-over"));
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");
      let id = draggedId;
      try { id = id || e.dataTransfer.getData("text/plain"); } catch (err) {}
      if (id) setStato(id, col.dataset.stage);
      draggedId = null;
    });
  });
}

function candidateRowHtml(c) {
  const stage = resolveStage(c.stato);
  const idx = settings.stages.findIndex((s) => s.id === stage.id);
  const sc = PALETTE[idx % PALETTE.length];
  return `
    <div class="candidate-row" data-id="${c.id}">
      <div class="candidate-main">
        <span class="candidate-name">${esc(c.nome)} ${esc(c.cognome)}</span>
        <span class="tag" style="background:${sc.bg};color:${sc.fg}">${esc(stage.nome)}</span>
        ${c.priorita ? `<span class="tag" style="background:${PRIORITY_COLOR[c.priorita].bg};color:${PRIORITY_COLOR[c.priorita].fg}">Priorità ${esc(c.priorita)}</span>` : ""}
        ${c.richiamo ? `<span class="tag" style="background:var(--amber-soft);color:#8A6402">${ICONS.clock} ${fmtDateTime(c.richiamo.datetime)}</span>` : ""}
        ${c.cvPath ? `<span class="tag" style="background:var(--slate-soft);color:var(--ink-soft)">${ICONS.file} CV</span>` : ""}
        ${!c.consenso ? `<span class="tag" style="background:var(--brick-soft);color:var(--brick)">Consenso privacy mancante</span>` : ""}
        <div class="candidate-meta">
          ${c.ruolo ? `<span>${esc(c.ruolo)}</span>` : ""}
          <span>${c.disponibilita}</span>
          ${c.telefono ? `<span class="mono">${ICONS.phone} ${esc(c.telefono)}</span>` : ""}
          ${c.fonte ? `<span>Fonte: ${esc(c.fonte)}</span>` : ""}
          ${c.clienteAzienda ? `<span>Cliente: ${esc(c.clienteAzienda)}</span>` : ""}
          ${starsHtml(c.valutazione)}
        </div>
        ${(c.tags && c.tags.length) ? `<div>${c.tags.map((t) => `<span class="skill-chip" style="background:${tagColor(t)}20;color:${tagColor(t)};">${esc(t)}</span>`).join("")}</div>` : ""}
        ${(c.skills && c.skills.length) ? `<div>${c.skills.map((s) => `<span class="skill-chip">${esc(s)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="row-actions">
        <select class="filter stato-select" data-id="${c.id}" style="font-size:12px;padding:6px 8px;">
          ${settings.stages.map((s) => `<option value="${s.id}" ${stage.id === s.id ? "selected" : ""}>${esc(s.nome)}</option>`).join("")}
        </select>
        <button class="icon-btn message-btn" data-id="${c.id}" title="Genera messaggio">${ICONS.message}</button>
        <button class="icon-btn edit-btn" data-id="${c.id}" title="Modifica">${ICONS.edit}</button>
        <button class="icon-btn danger delete-btn" data-id="${c.id}" title="Elimina">${ICONS.trash}</button>
      </div>
    </div>`;
}

function bindCandidatiEvents() {
  const s = document.getElementById("search-input");
  if (s) s.oninput = (e) => { query = e.target.value; render(); const el = document.getElementById("search-input"); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } };
  const fs_ = document.getElementById("filter-stato");
  if (fs_) fs_.onchange = (e) => { filterStato = e.target.value; render(); };
  const fd = document.getElementById("filter-dispo");
  if (fd) fd.onchange = (e) => { filterDispo = e.target.value; render(); };
  const sm = document.getElementById("sort-mode");
  if (sm) sm.onchange = (e) => { sortMode = e.target.value; render(); };
}

function bindRowLevelEvents() {
  document.querySelectorAll(".edit-btn").forEach((b) => b.onclick = () => openForm(b.dataset.id));
  document.querySelectorAll(".delete-btn").forEach((b) => b.onclick = () => confirmDelete(b.dataset.id));
  document.querySelectorAll(".stato-select").forEach((sel) => sel.onchange = (e) => setStato(sel.dataset.id, e.target.value));
  document.querySelectorAll(".message-btn").forEach((b) => b.onclick = () => openMessageModal(b.dataset.id));
  document.querySelectorAll(".done-btn").forEach((b) => b.onclick = () => clearRichiamo(b.dataset.id));
}

function setStato(id, stageId) {
  const stage = resolveStage(stageId);
  candidati = candidati.map((c) => c.id === id ? { ...c, stato: stageId, dataAssunzione: stage.isHired ? (c.dataAssunzione || new Date().toISOString()) : null } : c);
  persist(); render();
}

async function openAutoBackupsModal() {
  const list = (await window.api.listAutoBackups()) || [];
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal" style="max-width:480px;">
        <div class="modal-head">
          <span class="sg" style="font-size:17px;">Backup automatici</span>
          <button class="x" id="close-ab">${ICONS.x}</button>
        </div>
        <div style="font-size:12.5px;color:var(--ink-soft);margin-bottom:12px;">
          Ogni volta che salvi qualcosa, il CRM tiene una copia di sicurezza in automatico (le ultime 10). In caso di problemi, puoi ripristinarne una da qui.
        </div>
        ${list.length === 0 ? `<div class="empty">Nessun backup automatico ancora disponibile.</div>` : `
        <div class="row-list">
          ${list.map((b) => `
            <div class="candidate-row" style="padding:10px 14px;">
              <div class="candidate-main mono" style="font-size:12.5px;">${new Date(b.time).toLocaleString("it-IT")}</div>
              <button class="btn-secondary restore-ab" data-file="${b.file}">Ripristina</button>
            </div>`).join("")}
        </div>`}
        <div class="modal-footer"><button class="btn-secondary" id="close-ab2">Chiudi</button></div>
      </div>
    </div>`;
  document.getElementById("close-ab").onclick = () => area.innerHTML = "";
  document.getElementById("close-ab2").onclick = () => area.innerHTML = "";
  area.querySelectorAll(".restore-ab").forEach((b) => b.onclick = () => {
    confirmAction("Ripristinare questo backup?", "Sovrascriverà i dati attuali.", async () => {
      const r = await window.api.restoreAutoBackup(b.dataset.file);
      if (r.ok) { candidati = r.candidati; await persist(); document.getElementById("modal-area").innerHTML = ""; render(); showToast("Backup ripristinato."); }
      else showToast(r.error || "Ripristino non riuscito.");
    });
  });
}

function confirmDelete(id) {
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal" style="max-width:380px;">
        <div style="font-weight:600;margin-bottom:6px;">Eliminare il candidato?</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-bottom:16px;">L'operazione non può essere annullata.</div>
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-del">Annulla</button>
          <button class="btn-danger" id="confirm-del">Elimina</button>
        </div>
      </div>
    </div>`;
  document.getElementById("cancel-del").onclick = () => area.innerHTML = "";
  document.getElementById("confirm-del").onclick = () => {
    candidati = candidati.filter((c) => c.id !== id);
    persist(); area.innerHTML = ""; render();
  };
}

function clearRichiamo(id) {
  candidati = candidati.map((c) => c.id === id ? { ...c, richiamo: null } : c);
  persist(); render();
}

// =============================================================================
// RICHIAMI
// =============================================================================
function viewRichiami() {
  const now = new Date();
  const list = candidati.filter((c) => c.richiamo).sort((a, b) => new Date(a.richiamo.datetime) - new Date(b.richiamo.datetime));
  if (list.length === 0) return `<div class="empty">Nessun richiamo programmato. Aggiungine uno dalla scheda del candidato.</div>`;
  return `<div class="row-list">${list.map((c) => {
    const due = new Date(c.richiamo.datetime);
    const overdue = due <= now;
    const soon = !overdue && (due - now) < 1000 * 60 * 60 * 2;
    return `
      <div class="candidate-row" style="background:${overdue ? "var(--brick-soft)" : soon ? "var(--amber-soft)" : "var(--panel)"}">
        <div style="width:100px;flex-shrink:0;text-align:center;">
          <div class="mono" style="font-size:12px;color:${overdue ? "var(--brick)" : "var(--ink-soft)"}">${fmtDateTime(c.richiamo.datetime)}</div>
        </div>
        <div class="candidate-main">
          <span class="candidate-name">${esc(c.nome)} ${esc(c.cognome)}</span>
          ${c.ruolo ? `<div style="font-size:13px;color:var(--ink-soft);">${esc(c.ruolo)}</div>` : ""}
          ${c.richiamo.nota ? `<div style="font-size:13px;font-style:italic;margin-top:2px;">"${esc(c.richiamo.nota)}"</div>` : ""}
          ${c.telefono ? `<div class="mono" style="font-size:12px;color:var(--ink-soft);margin-top:2px;">${ICONS.phone} ${esc(c.telefono)}</div>` : ""}
        </div>
        <div class="row-actions">
          <button class="icon-btn edit-btn" data-id="${c.id}">${ICONS.edit}</button>
          <button class="icon-btn success done-btn" data-id="${c.id}">${ICONS.check} Chiamato</button>
        </div>
      </div>`;
  }).join("")}</div>`;
}

// =============================================================================
// ASSUNZIONI
// =============================================================================
function viewAssunzioni() {
  const list = candidati.filter((c) => resolveStage(c.stato).isHired).sort((a, b) => new Date(b.dataAssunzione) - new Date(a.dataAssunzione));
  if (list.length === 0) return `<div class="empty">Nessuna assunzione ancora registrata.</div>`;
  return `<div class="row-list">${list.map((c) => `
    <div class="candidate-row">
      <div style="width:36px;height:36px;border-radius:999px;background:var(--petrol-soft);display:flex;align-items:center;justify-content:center;color:var(--petrol);flex-shrink:0;">${ICONS.check}</div>
      <div class="candidate-main">
        <span class="candidate-name">${esc(c.nome)} ${esc(c.cognome)}</span>
        <div style="font-size:13px;color:var(--ink-soft);">${esc(c.ruolo) || "Ruolo non specificato"} · assunto il ${new Date(c.dataAssunzione).toLocaleDateString("it-IT")}</div>
      </div>
      <button class="icon-btn edit-btn" data-id="${c.id}">${ICONS.edit}</button>
    </div>`).join("")}</div>`;
}

// =============================================================================
// GRAFICI (canvas nativo, nessuna libreria esterna: funziona anche offline)
// =============================================================================
const CHART_COLORS = ["#1F3A5F", "#0F6E5B", "#C98A02", "#5B3E9E", "#C1442F", "#2C4A6E", "#3E7C59"];

function viewGrafici() {
  if (candidati.length === 0) return `<div class="empty">Aggiungi qualche candidato per vedere qui i grafici.</div>`;
  return `
    <div class="card" style="padding:18px;margin-bottom:16px;">
      <div class="section-heading">Candidati per fase pipeline</div>
      <canvas id="chart-fasi" height="220"></canvas>
    </div>
    <div class="card" style="padding:18px;margin-bottom:16px;">
      <div class="section-heading">Assunzioni per mese (ultimi 6 mesi)</div>
      <canvas id="chart-assunzioni" height="220"></canvas>
    </div>
    <div class="card" style="padding:18px;">
      <div class="section-heading">Candidati per fonte</div>
      <canvas id="chart-fonte" height="240"></canvas>
    </div>`;
}

function drawGrafici() {
  const cf = document.getElementById("chart-fasi");
  if (cf) {
    const data = settings.stages.map((s) => ({ label: s.nome, value: candidati.filter((c) => resolveStage(c.stato).id === s.id).length }));
    drawBarChart(cf, data);
  }
  const ca = document.getElementById("chart-assunzioni");
  if (ca) {
    const months = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({ key: `${d.getFullYear()}-${d.getMonth()}`, label: d.toLocaleDateString("it-IT", { month: "short" }) });
    }
    const counts = months.map((m) => ({
      label: m.label,
      value: candidati.filter((c) => {
        if (!c.dataAssunzione) return false;
        const d = new Date(c.dataAssunzione);
        return `${d.getFullYear()}-${d.getMonth()}` === m.key;
      }).length,
    }));
    drawBarChart(ca, counts, "#0F6E5B");
  }
  const cs = document.getElementById("chart-fonte");
  if (cs) {
    const fonti = {};
    candidati.forEach((c) => { const f = c.fonte || "Non specificata"; fonti[f] = (fonti[f] || 0) + 1; });
    const data = Object.entries(fonti).map(([label, value], i) => ({ label, value, color: CHART_COLORS[i % CHART_COLORS.length] }));
    drawDonutChart(cs, data);
  }
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = canvas.height * ratio || rect.height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return ctx;
}

function drawBarChart(canvas, data, color) {
  const w = canvas.getBoundingClientRect().width;
  const h = Number(canvas.getAttribute("height")) || 220;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.height = h;
  const ctx = setupCanvas(canvas);
  ctx.clearRect(0, 0, w, h);
  const max = Math.max(1, ...data.map((d) => d.value));
  const padBottom = 30, padTop = 14, padSide = 10;
  const barW = (w - padSide * 2) / data.length;
  ctx.font = "11px Inter, sans-serif";
  data.forEach((d, i) => {
    const barH = ((h - padBottom - padTop) * d.value) / max;
    const x = padSide + i * barW + barW * 0.18;
    const bw = barW * 0.64;
    const y = h - padBottom - barH;
    ctx.fillStyle = color || "#1F3A5F";
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(x, y, bw, barH, 4) : ctx.rect(x, y, bw, barH);
    ctx.fill();
    ctx.fillStyle = "#1C2B33";
    ctx.textAlign = "center";
    ctx.fillText(String(d.value), x + bw / 2, y - 5);
    ctx.fillStyle = "#5B6B72";
    ctx.fillText(d.label.length > 12 ? d.label.slice(0, 11) + "…" : d.label, x + bw / 2, h - 12);
  });
}

function drawDonutChart(canvas, data) {
  const w = canvas.getBoundingClientRect().width;
  const h = Number(canvas.getAttribute("height")) || 240;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.height = h;
  const ctx = setupCanvas(canvas);
  ctx.clearRect(0, 0, w, h);
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const cx = 90, cy = h / 2, rOuter = 70, rInner = 42;
  let start = -Math.PI / 2;
  data.forEach((d) => {
    const slice = (d.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, rOuter, start, start + slice);
    ctx.arc(cx, cy, rInner, start + slice, start, true);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    start += slice;
  });
  let ly = cy - (data.length * 20) / 2 + 10;
  ctx.font = "12px Inter, sans-serif";
  ctx.textAlign = "left";
  data.forEach((d) => {
    ctx.fillStyle = d.color;
    ctx.fillRect(cx + rOuter + 20, ly - 9, 10, 10);
    ctx.fillStyle = "#1C2B33";
    ctx.fillText(`${d.label} (${d.value})`, cx + rOuter + 36, ly);
    ly += 20;
  });
}


async function persistSheets() {
  const res = await window.api.saveSheets(sheets);
  if (!res || !res.ok) showToast("Salvataggio fogli non riuscito.");
}

function createSheet(basedOn) {
  if (basedOn) {
    promptModal("Nome del nuovo foglio:", `Copia di ${basedOn.nome}`, (nome) => {
      const sheet = { id: "sh-" + uid(), nome, columns: basedOn.columns.map((c) => ({ ...c })), rows: [] };
      sheets.push(sheet);
      activeSheetId = sheet.id; sheetSort = { colId: null, dir: "asc" };
      persistSheets();
      render();
    });
    return;
  }
  openNewSheetModal();
}

function openNewSheetModal() {
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal" style="max-width:420px;">
        <div class="modal-head">
          <span class="sg" style="font-size:17px;">Nuovo foglio</span>
          <button class="x" id="close-ns">${ICONS.x}</button>
        </div>
        <label class="field" style="margin-bottom:12px;"><span>Nome del foglio</span><input id="ns-nome" placeholder="es. Agosto" /></label>
        <label class="field"><span>Quante colonne vuoi creare?</span><input id="ns-colonne" type="number" min="1" max="20" value="5" /></label>
        <div style="font-size:12.5px;color:var(--ink-soft);margin-top:8px;">Crea la griglia con colonne generiche che poi rinomini e configuri (tipo di dato, elenco di convalida). Potrai sempre aggiungerne altre dopo.</div>
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-ns">Annulla</button>
          <button class="btn-save" id="create-ns">Crea griglia</button>
        </div>
      </div>
    </div>`;
  document.getElementById("close-ns").onclick = () => area.innerHTML = "";
  document.getElementById("cancel-ns").onclick = () => area.innerHTML = "";
  document.getElementById("create-ns").onclick = () => {
    const nome = document.getElementById("ns-nome").value.trim();
    const n = Math.max(1, Math.min(20, Number(document.getElementById("ns-colonne").value) || 5));
    if (!nome) { showToast("Dai un nome al foglio."); return; }
    const columns = [];
    for (let i = 1; i <= n; i++) columns.push({ id: "c-" + uid(), nome: `Colonna ${i}`, tipo: "testo", allineamento: "sinistra", larghezza: "normale", wrap: false });
    const sheet = { id: "sh-" + uid(), nome, columns, rows: [] };
    sheets.push(sheet);
    activeSheetId = sheet.id; sheetSort = { colId: null, dir: "asc" };
    persistSheets();
    area.innerHTML = "";
    render();
  };
}

function activeSheet() { return sheets.find((s) => s.id === activeSheetId); }

function sortSheetByColumn(colId) {
  const sheet = activeSheet();
  const col = sheet.columns.find((c) => c.id === colId);
  if (!col) return;
  sheetSort.dir = sheetSort.colId === colId && sheetSort.dir === "asc" ? "desc" : "asc";
  sheetSort.colId = colId;
  sheet.rows.sort((a, b) => {
    let va = a.values[colId]; let vb = b.values[colId];
    let cmp;
    if (col.tipo === "numero") cmp = (parseFloat(va) || 0) - (parseFloat(vb) || 0);
    else if (col.tipo === "data") cmp = (va ? new Date(va).getTime() : 0) - (vb ? new Date(vb).getTime() : 0);
    else cmp = String(va || "").localeCompare(String(vb || ""));
    return sheetSort.dir === "asc" ? cmp : -cmp;
  });
  persistSheets();
  render();
}

function colWidthPx(c) {
  return c.larghezzaPx || { stretta: 90, normale: 160, larga: 280 }[c.larghezza] || 160;
}

function viewFogli() {
  if (sheets.length === 0) {
    return `<div class="empty">Nessun foglio ancora creato. Crea il primo con "Nuovo foglio" (es. "Agosto"), definisci le colonne che ti servono e inizia ad aggiungere righe.</div>`;
  }
  const sheet = activeSheet();
  return `
    <div class="sheet-tabs" id="sheet-tabs">
      ${sheets.map((s) => `<button class="sheet-tab ${s.id === activeSheetId ? "active" : ""}" data-id="${s.id}">${esc(s.nome)}</button>`).join("")}
    </div>
    ${sheet ? `
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <button class="btn-secondary" id="rename-sheet">Rinomina foglio</button>
      <button class="btn-secondary" id="duplicate-sheet">Duplica foglio</button>
      <button class="btn-secondary" id="delete-sheet" style="color:var(--brick);">Elimina foglio</button>
    </div>
    <div class="card" style="overflow-x:auto;padding:0;max-height:70vh;overflow-y:auto;" id="sheet-table-wrap">
      <table class="sheet-table">
        <colgroup>
          <col style="width:30px">
          ${sheet.columns.map((c) => `<col data-col="${c.id}" style="width:${colWidthPx(c)}px">`).join("")}
          <col style="width:40px">
        </colgroup>
        <thead><tr>
          <th></th>
          ${sheet.columns.map((c) => `
            <th data-col="${c.id}" style="position:relative;">
              <div style="display:flex;align-items:center;gap:6px;">
                <span class="col-sort-label" data-col="${c.id}" style="cursor:pointer;flex:1;">${esc(c.nome)}${sheetSort.colId === c.id ? (sheetSort.dir === "asc" ? " ▲" : " ▼") : ""}</span>
                <button class="col-edit" data-col="${c.id}" title="Modifica colonna">${ICONS.edit}</button>
                <button class="col-del" data-col="${c.id}" title="Elimina colonna">${ICONS.x}</button>
              </div>
              <div class="col-resize-handle" data-col="${c.id}" title="Trascina per allargare/stringere"></div>
            </th>`).join("")}
          <th style="width:40px;"></th>
        </tr></thead>
        <tbody id="sheet-body">
          ${sheet.rows.map((row) => sheetRowHtml(sheet, row)).join("")}
        </tbody>
      </table>
      ${sheet.rows.length === 0 ? `<div class="empty" style="border:none;">Nessuna riga ancora. Usa "Riga" in alto per iniziare.</div>` : ""}
    </div>
    <div style="font-size:12px;color:var(--ink-soft);margin-top:8px;">Trascina il bordo destro di un'intestazione per allargare la colonna, o il bordo inferiore del numero di riga per alzarla — come in Excel. Puoi anche incollare qui righe copiate da Excel (clicca una cella e premi Ctrl+V), oppure usare "Incolla da Excel" qui sopra.</div>` : ""}
  `;
}

function sheetRowHtml(sheet, row) {
  const h = row.altezzaPx;
  const cellStyle = h ? `style="height:${h}px;"` : "";
  return `<tr data-row="${row.id}">
    <td class="row-handle" data-row="${row.id}" ${cellStyle}><div class="row-resize-handle" data-row="${row.id}" title="Trascina per alzare la riga"></div></td>
    ${sheet.columns.map((c) => `<td ${cellStyle}>${cellInputHtml(c, row.values[c.id])}</td>`).join("")}
    <td ${cellStyle}><button class="icon-btn danger row-del" data-row="${row.id}" title="Elimina riga">${ICONS.trash}</button></td>
  </tr>`;
}


function cellInputHtml(col, value) {
  const v = value === undefined || value === null ? "" : value;
  const alignStyle = `text-align:${col.allineamento === "centro" ? "center" : col.allineamento === "destra" ? "right" : "left"};`;
  if (col.tipo === "data") return `<input type="date" class="cell-input" data-col="${col.id}" value="${esc(v)}" style="${alignStyle}" />`;
  if (col.tipo === "numero") return `<input type="number" class="cell-input" data-col="${col.id}" value="${esc(v)}" style="${alignStyle}" />`;
  if (col.tipo === "scelta") {
    const bg = (col.coloriOpzioni || {})[v];
    const bgStyle = bg ? `background-color:${bg}33;` : "";
    return `<select class="cell-input" data-col="${col.id}" style="${alignStyle}${bgStyle}"><option value="">—</option>${(col.opzioni || []).map((o) => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
  }
  if (col.wrap) return `<textarea class="cell-input cell-wrap" data-col="${col.id}" rows="1" style="${alignStyle}white-space:pre-wrap;">${esc(v)}</textarea>`;
  return `<input type="text" class="cell-input" data-col="${col.id}" value="${esc(v)}" style="${alignStyle}" />`;
}

function autoGrowTextarea(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

function bindFogliEvents() {
  const tabs = document.getElementById("sheet-tabs");
  if (tabs) tabs.querySelectorAll(".sheet-tab").forEach((b) => b.onclick = () => { activeSheetId = b.dataset.id; sheetSort = { colId: null, dir: "asc" }; render(); });

  document.querySelectorAll(".col-sort-label").forEach((label) => label.onclick = () => sortSheetByColumn(label.dataset.col));

  const rn = document.getElementById("rename-sheet");
  if (rn) rn.onclick = () => {
    const sheet = activeSheet();
    promptModal("Nuovo nome del foglio:", sheet.nome, (nome) => { sheet.nome = nome; persistSheets(); render(); });
  };
  const dup = document.getElementById("duplicate-sheet");
  if (dup) dup.onclick = () => createSheet(activeSheet());
  const del = document.getElementById("delete-sheet");
  if (del) del.onclick = () => {
    confirmAction(`Eliminare il foglio "${activeSheet().nome}"?`, "Tutte le sue righe andranno perse.", () => {
      sheets = sheets.filter((s) => s.id !== activeSheetId);
      activeSheetId = sheets.length ? sheets[0].id : null;
      persistSheets();
      document.getElementById("modal-area").innerHTML = "";
      render();
    });
  };

  document.querySelectorAll(".col-edit").forEach((b) => b.onclick = () => openColumnForm(b.dataset.col));
  document.querySelectorAll(".col-del").forEach((b) => b.onclick = () => {
    confirmAction("Eliminare questa colonna?", "Tutti i suoi valori andranno persi.", () => {
      const sheet = activeSheet();
      sheet.columns = sheet.columns.filter((c) => c.id !== b.dataset.col);
      sheet.rows.forEach((r) => delete r.values[b.dataset.col]);
      persistSheets();
      document.getElementById("modal-area").innerHTML = "";
      render();
    });
  });
  document.querySelectorAll(".row-del").forEach((b) => b.onclick = () => {
    const sheet = activeSheet();
    sheet.rows = sheet.rows.filter((r) => r.id !== b.dataset.row);
    persistSheets(); render();
  });
  document.querySelectorAll(".cell-input").forEach((inp) => {
    inp.onchange = (e) => {
      const sheet = activeSheet();
      const rowId = e.target.closest("tr").dataset.row;
      const row = sheet.rows.find((r) => r.id === rowId);
      row.values[e.target.dataset.col] = e.target.value;
      persistSheets();
      if (e.target.tagName === "SELECT") {
        const col = sheet.columns.find((c) => c.id === e.target.dataset.col);
        const bg = col && col.coloriOpzioni && col.coloriOpzioni[e.target.value];
        e.target.style.backgroundColor = bg ? bg + "33" : "";
      }
    };
  });
  document.querySelectorAll(".cell-wrap").forEach((ta) => {
    autoGrowTextarea(ta);
    ta.oninput = () => autoGrowTextarea(ta);
  });

  document.querySelectorAll(".col-resize-handle").forEach((handle) => {
    handle.onmousedown = (e) => {
      e.preventDefault();
      const colId = handle.dataset.col;
      const sheet = activeSheet();
      const col = sheet.columns.find((c) => c.id === colId);
      const colEl = document.querySelector(`col[data-col="${colId}"]`);
      const startX = e.clientX;
      const startWidth = colWidthPx(col);
      const onMove = (ev) => {
        const newWidth = Math.max(50, Math.min(600, startWidth + (ev.clientX - startX)));
        if (colEl) colEl.style.width = newWidth + "px";
      };
      const onUp = (ev) => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        const newWidth = Math.max(50, Math.min(600, startWidth + (ev.clientX - startX)));
        col.larghezzaPx = newWidth;
        persistSheets();
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };
  });

  document.querySelectorAll(".row-resize-handle").forEach((handle) => {
    handle.onmousedown = (e) => {
      e.preventDefault();
      const rowId = handle.dataset.row;
      const sheet = activeSheet();
      const row = sheet.rows.find((r) => r.id === rowId);
      const tr = document.querySelector(`tr[data-row="${rowId}"]`);
      const startY = e.clientY;
      const startHeight = row.altezzaPx || tr.getBoundingClientRect().height;
      const onMove = (ev) => {
        const newHeight = Math.max(28, Math.min(400, startHeight + (ev.clientY - startY)));
        tr.querySelectorAll("td").forEach((td) => td.style.height = newHeight + "px");
      };
      const onUp = (ev) => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        const newHeight = Math.max(28, Math.min(400, startHeight + (ev.clientY - startY)));
        row.altezzaPx = newHeight;
        persistSheets();
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    };
  });

  const wrap = document.getElementById("sheet-table-wrap");
  if (wrap) wrap.onpaste = (e) => handleSheetPaste(e);
}

// Analizza testo copiato da Excel rispettando le celle tra virgolette che
// contengono testo su più righe (Alt+Invio) o caratteri di tabulazione al
// loro interno — una semplice split("\n") le spezzerebbe erroneamente in
// righe separate della griglia.
function parseClipboardGrid(text) {
  const clean = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    if (inQuotes) {
      if (ch === '"') {
        if (clean[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else {
        field += ch;
      }
    } else if (ch === '"' && field === "") {
      inQuotes = true;
    } else if (ch === "\t") {
      row.push(field); field = "";
    } else if (ch === "\n") {
      row.push(field); rows.push(row); row = []; field = "";
    } else {
      field += ch;
    }
  }
  if (field !== "" || row.length > 0) { row.push(field); rows.push(row); }
  return rows.filter((r, idx) => !(idx === rows.length - 1 && r.length === 1 && r[0] === ""));
}

function handleSheetPaste(e) {
  const target = e.target;
  if (!target.classList || !target.classList.contains("cell-input")) return;
  const text = (e.clipboardData || window.clipboardData).getData("text/plain");
  if (!text || !text.includes("\t") && !text.includes("\n")) return; // singola cella: lascia il comportamento normale
  e.preventDefault();
  const sheet = activeSheet();
  const startRowId = target.closest("tr").dataset.row;
  const startColId = target.dataset.col;
  const startRowIdx = sheet.rows.findIndex((r) => r.id === startRowId);
  const startColIdx = sheet.columns.findIndex((c) => c.id === startColId);
  const grid = parseClipboardGrid(text);

  let clipped = false;
  grid.forEach((cells, rOffset) => {
    let row = sheet.rows[startRowIdx + rOffset];
    if (!row) { row = { id: "r-" + uid(), values: {} }; sheet.rows.push(row); }
    cells.forEach((val, cOffset) => {
      const col = sheet.columns[startColIdx + cOffset];
      if (!col) { clipped = true; return; }
      row.values[col.id] = val;
    });
  });
  persistSheets();
  render();
  if (clipped) showToast("Incollato. Alcune colonne in più non avevano posto e sono state ignorate.");
  else showToast("Dati incollati da Excel.");
}

function openPasteModal() {
  const sheet = activeSheet();
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal">
        <div class="modal-head">
          <span class="sg" style="font-size:17px;">Incolla da Excel</span>
          <button class="x" id="close-pm">${ICONS.x}</button>
        </div>
        <div style="font-size:12.5px;color:var(--ink-soft);margin-bottom:8px;">
          In Excel seleziona le celle, copia (Ctrl+C), poi incolla qui sotto (Ctrl+V). Le righe verranno aggiunte in fondo al foglio "${esc(sheet.nome)}", nell'ordine delle colonne: ${sheet.columns.map((c) => esc(c.nome)).join(", ")}.
        </div>
        <textarea id="pm-text" rows="8" placeholder="Incolla qui (Ctrl+V)…" style="width:100%;box-sizing:border-box;border:1px solid var(--hairline);border-radius:7px;padding:10px;font-family:monospace;font-size:12.5px;"></textarea>
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-pm">Annulla</button>
          <button class="btn-save" id="confirm-pm">Aggiungi righe</button>
        </div>
      </div>
    </div>`;
  document.getElementById("close-pm").onclick = () => area.innerHTML = "";
  document.getElementById("cancel-pm").onclick = () => area.innerHTML = "";
  document.getElementById("pm-text").focus();
  document.getElementById("confirm-pm").onclick = () => {
    const text = document.getElementById("pm-text").value;
    if (!text.trim()) { showToast("Incolla prima qualcosa dal foglio Excel."); area.innerHTML = ""; return; }
    const rows2d = parseClipboardGrid(text);
    let clipped = false;
    let added = 0;
    let maxCellsSeen = 0;
    rows2d.forEach((cells) => {
      maxCellsSeen = Math.max(maxCellsSeen, cells.length);
      const row = { id: "r-" + uid(), values: {} };
      cells.forEach((val, i) => {
        const col = sheet.columns[i];
        if (!col) { clipped = true; return; }
        row.values[col.id] = val;
      });
      sheet.rows.push(row);
      added++;
    });
    persistSheets();
    area.innerHTML = "";
    render();
    if (clipped) {
      showToast(`${added} righe aggiunte (alcune colonne in più sono state ignorate).`);
    } else if (maxCellsSeen < sheet.columns.length) {
      showToast(`${added} righe aggiunte, ma il testo incollato aveva solo ${maxCellsSeen} colonne su ${sheet.columns.length} attese: controlla che in Excel tutte le celle di quella riga (anche vuote) siano incluse nella selezione copiata.`);
    } else {
      showToast(`${added} righe aggiunte dal foglio Excel.`);
    }
  };
}

function copySheetToClipboard() {
  const sheet = activeSheet();
  if (!sheet) return;
  const tsvEscape = (v) => {
    const s = String(v || "");
    return /[\t\n"]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const header = sheet.columns.map((c) => tsvEscape(c.nome)).join("\t");
  const rows = sheet.rows.map((r) => sheet.columns.map((c) => tsvEscape(r.values[c.id])).join("\t"));
  const text = [header, ...rows].join("\n");
  navigator.clipboard.writeText(text)
    .then(() => showToast("Foglio copiato: incollalo direttamente in Excel."))
    .catch(() => showToast("Copia non riuscita."));
}

function addRow() {
  const sheet = activeSheet();
  if (!sheet) return;
  sheet.rows.push({ id: "r-" + uid(), values: {} });
  persistSheets();
  render();
}

function openColumnForm(colId) {
  const sheet = activeSheet();
  const col = colId ? sheet.columns.find((c) => c.id === colId) : { id: null, nome: "", tipo: "testo", opzioni: [], allineamento: "sinistra", larghezza: "normale", wrap: false };
  columnDraft = { allineamento: "sinistra", larghezza: "normale", wrap: false, ...col, opzioni: [...(col.opzioni || [])] };
  const area = document.getElementById("modal-area");
  const draw = () => {
    if (columnDraft.tipo === "scelta") {
      columnDraft.coloriOpzioni = columnDraft.coloriOpzioni || {};
      (columnDraft.opzioni || []).forEach((o, i) => {
        if (!columnDraft.coloriOpzioni[o]) columnDraft.coloriOpzioni[o] = TAG_PALETTE[i % TAG_PALETTE.length];
      });
    }
    area.innerHTML = `
      <div class="overlay">
        <div class="modal" style="max-width:440px;">
          <div class="modal-head">
            <span class="sg" style="font-size:17px;">${colId ? "Modifica colonna" : "Nuova colonna"}</span>
            <button class="x" id="close-cf">${ICONS.x}</button>
          </div>
          <label class="field" style="margin-bottom:10px;"><span>Nome colonna</span><input id="cf-nome" value="${esc(columnDraft.nome)}" /></label>
          <label class="field"><span>Tipo di dato</span>
            <select id="cf-tipo">
              <option value="testo" ${columnDraft.tipo === "testo" ? "selected" : ""}>Testo</option>
              <option value="numero" ${columnDraft.tipo === "numero" ? "selected" : ""}>Numero</option>
              <option value="data" ${columnDraft.tipo === "data" ? "selected" : ""}>Data</option>
              <option value="scelta" ${columnDraft.tipo === "scelta" ? "selected" : ""}>Scelta da elenco (convalida dati)</option>
            </select>
          </label>
          ${columnDraft.tipo === "scelta" ? `
          <label class="field" style="margin-top:10px;"><span>Elenco di convalida — valori separati da ; (come "Dati &gt; Convalida dati" di Excel)</span>
            <input id="cf-opzioni" placeholder="es. iprogrammatori.it; LinkedIn; candidatura libera; collega" value="${esc((columnDraft.opzioni || []).join("; "))}" />
          </label>
          ${(columnDraft.opzioni || []).length > 0 ? `
          <div class="section-title" style="margin-top:12px;margin-bottom:6px;">Colore per valore (formattazione condizionale)</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${columnDraft.opzioni.map((o, i) => `
              <div style="display:flex;align-items:center;gap:8px;">
                <input type="color" class="cf-color" data-opt="${esc(o)}" value="${(columnDraft.coloriOpzioni || {})[o] || TAG_PALETTE[i % TAG_PALETTE.length]}" style="width:34px;height:28px;padding:0;border:1px solid var(--hairline);border-radius:5px;" />
                <span style="font-size:13px;">${esc(o)}</span>
              </div>`).join("")}
          </div>` : ""}` : ""}
          <div class="section-title" style="margin-top:14px;margin-bottom:2px;">Formattazione (come in Excel)</div>
          <div class="form-grid">
            <label class="field"><span>Allineamento testo</span>
              <select id="cf-align">
                <option value="sinistra" ${columnDraft.allineamento === "sinistra" ? "selected" : ""}>Sinistra</option>
                <option value="centro" ${columnDraft.allineamento === "centro" ? "selected" : ""}>Centrato</option>
                <option value="destra" ${columnDraft.allineamento === "destra" ? "selected" : ""}>Destra</option>
              </select>
            </label>
            <label class="field"><span>Larghezza colonna</span>
              <select id="cf-width">
                <option value="stretta" ${columnDraft.larghezza === "stretta" ? "selected" : ""}>Stretta</option>
                <option value="normale" ${columnDraft.larghezza === "normale" ? "selected" : ""}>Normale</option>
                <option value="larga" ${columnDraft.larghezza === "larga" ? "selected" : ""}>Larga</option>
              </select>
            </label>
          </div>
          ${columnDraft.tipo === "testo" ? `
          <label class="field" style="flex-direction:row;align-items:center;gap:8px;margin-top:10px;">
            <input type="checkbox" id="cf-wrap" ${columnDraft.wrap ? "checked" : ""} style="width:auto;" />
            <span>Testo a capo automatico (la cella si allarga in verticale)</span>
          </label>` : ""}
          <div class="modal-footer">
            <button class="btn-secondary" id="cancel-cf">Annulla</button>
            <button class="btn-save" id="save-cf">Salva colonna</button>
          </div>
        </div>
      </div>`;
    document.getElementById("close-cf").onclick = () => area.innerHTML = "";
    document.getElementById("cancel-cf").onclick = () => area.innerHTML = "";
    document.getElementById("cf-nome").oninput = (e) => columnDraft.nome = e.target.value;
    document.getElementById("cf-tipo").onchange = (e) => { columnDraft.tipo = e.target.value; draw(); };
    document.getElementById("cf-align").onchange = (e) => columnDraft.allineamento = e.target.value;
    document.getElementById("cf-width").onchange = (e) => columnDraft.larghezza = e.target.value;
    const wrapEl = document.getElementById("cf-wrap");
    if (wrapEl) wrapEl.onchange = (e) => columnDraft.wrap = e.target.checked;
    const op = document.getElementById("cf-opzioni");
    if (op) {
      op.oninput = (e) => columnDraft.opzioni = e.target.value.split(";").map((s) => s.trim()).filter(Boolean);
      op.onblur = () => draw();
    }
    document.querySelectorAll(".cf-color").forEach((inp) => {
      inp.oninput = (e) => {
        columnDraft.coloriOpzioni = columnDraft.coloriOpzioni || {};
        columnDraft.coloriOpzioni[e.target.dataset.opt] = e.target.value;
      };
    });
    document.getElementById("save-cf").onclick = () => {
      if (!columnDraft.nome.trim()) { showToast("Dai un nome alla colonna."); return; }
      const sheet = activeSheet();
      if (columnDraft.id) {
        sheet.columns = sheet.columns.map((c) => c.id === columnDraft.id ? columnDraft : c);
      } else {
        sheet.columns.push({ ...columnDraft, id: "c-" + uid() });
      }
      persistSheets();
      area.innerHTML = "";
      render();
    };
  };
  draw();
}


function viewPipeline() {
  pipelineDraft = settings.stages.map((s) => ({ ...s }));
  fontiDraft = [...(settings.fonti || FONTI_DEFAULT)];
  return `
    <div class="card" style="padding:18px;margin-bottom:16px;">
      <div class="section-heading">Fasi della pipeline</div>
      <div style="font-size:13px;color:var(--ink-soft);margin-bottom:14px;">
        Aggiungi, rinomina, riordina o elimina le fasi. Spunta il pallino <b>"Fase di assunzione conclusa"</b> su UNA sola fase (di solito l'ultima, es. "Assunto"): i candidati che arrivano lì finiranno automaticamente nella sezione Assunzioni e conteranno nel tasso di conversione del cruscotto.
      </div>
      <div id="stage-list" style="display:flex;flex-direction:column;gap:8px;"></div>
      <button class="btn btn-outline" id="add-stage" style="margin-top:12px;">${ICONS.plus}Aggiungi fase</button>
    </div>
    <div class="card" style="padding:18px;">
      <div class="section-heading">Fonti candidati</div>
      <div style="font-size:13px;color:var(--ink-soft);margin-bottom:12px;">
        Le voci disponibili nel campo "Fonte" della scheda candidato. Aggiungine o togline quante ne vuoi.
      </div>
      <div class="skills-editor" id="fonti-editor"></div>
      <input id="new-fonte" placeholder="Aggiungi fonte e premi Invio" style="margin-top:8px;border:1px solid var(--hairline);border-radius:7px;padding:8px 10px;outline:none;width:100%;box-sizing:border-box;" />
    </div>`;
}

function renderFontiEditor() {
  const el = document.getElementById("fonti-editor");
  if (!el) return;
  el.innerHTML = fontiDraft.map((f, i) => `<span class="skill-tag">${esc(f)}<button data-i="${i}">${ICONS.x}</button></span>`).join("") || `<span style="font-size:12px;color:var(--ink-soft);">Nessuna fonte ancora.</span>`;
  el.querySelectorAll("button[data-i]").forEach((b) => b.onclick = () => { fontiDraft.splice(Number(b.dataset.i), 1); renderFontiEditor(); });
}

function renderStageList() {
  const el = document.getElementById("stage-list");
  if (!el) return;
  el.innerHTML = pipelineDraft.map((s, i) => `
    <div class="stage-row">
      <span class="mono" style="width:20px;color:var(--ink-soft);font-size:12px;">${String(i).padStart(2, "0")}</span>
      <input type="text" data-i="${i}" class="stage-name" value="${esc(s.nome)}" />
      ${s.isHired ? `<span class="tag" style="background:var(--petrol-soft);color:var(--petrol);margin-left:0;">✓ Assunzione</span>` : ""}
      <label class="hired-radio"><input type="radio" name="hired-stage" data-i="${i}" ${s.isHired ? "checked" : ""} /> Fase di assunzione conclusa</label>
      <button class="icon-btn move-up" data-i="${i}" ${i === 0 ? "disabled style='opacity:.35'" : ""}>${ICONS.up}</button>
      <button class="icon-btn move-down" data-i="${i}" ${i === pipelineDraft.length - 1 ? "disabled style='opacity:.35'" : ""}>${ICONS.down}</button>
      <button class="icon-btn danger remove-stage" data-i="${i}" ${pipelineDraft.length <= 1 ? "disabled style='opacity:.35'" : ""}>${ICONS.trash}</button>
    </div>`).join("");

  el.querySelectorAll(".stage-name").forEach((inp) => inp.oninput = (e) => pipelineDraft[Number(e.target.dataset.i)].nome = e.target.value);
  el.querySelectorAll("input[name=hired-stage]").forEach((r) => r.onchange = (e) => {
    pipelineDraft.forEach((s, i) => s.isHired = i === Number(e.target.dataset.i));
    renderStageList();
  });
  el.querySelectorAll(".move-up").forEach((b) => b.onclick = () => { const i = Number(b.dataset.i); [pipelineDraft[i - 1], pipelineDraft[i]] = [pipelineDraft[i], pipelineDraft[i - 1]]; renderStageList(); });
  el.querySelectorAll(".move-down").forEach((b) => b.onclick = () => { const i = Number(b.dataset.i); [pipelineDraft[i + 1], pipelineDraft[i]] = [pipelineDraft[i], pipelineDraft[i + 1]]; renderStageList(); });
  el.querySelectorAll(".remove-stage").forEach((b) => b.onclick = () => {
    const i = Number(b.dataset.i);
    const removed = pipelineDraft[i];
    const inUse = candidati.filter((c) => c.stato === removed.id).length;
    const doRemove = () => { pipelineDraft.splice(i, 1); document.getElementById("modal-area").innerHTML = ""; renderStageList(); };
    if (inUse > 0) {
      confirmAction(`Eliminare la fase "${removed.nome}"?`, `${inUse} candidat${inUse > 1 ? "i" : "o"} qui dentro verranno spostati sulla prima fase quando salvi.`, doRemove);
    } else {
      pipelineDraft.splice(i, 1);
      renderStageList();
    }
  });
}

function bindPipelineEvents() {
  renderStageList();
  document.getElementById("add-stage").onclick = () => {
    pipelineDraft.push({ id: "st-" + uid(), nome: "Nuova fase", isHired: false });
    renderStageList();
  };
  renderFontiEditor();
  document.getElementById("new-fonte").onkeydown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      fontiDraft.push(e.target.value.trim());
      e.target.value = "";
      renderFontiEditor();
    }
  };
}

function savePipeline() {
  if (pipelineDraft.some((s) => !s.nome.trim())) { showToast("Ogni fase deve avere un nome."); return; }
  if (!pipelineDraft.some((s) => s.isHired)) pipelineDraft[pipelineDraft.length - 1].isHired = true;
  const oldIds = settings.stages.map((s) => s.id);
  const newIds = pipelineDraft.map((s) => s.id);
  const removedIds = oldIds.filter((id) => !newIds.includes(id));
  const fallback = pipelineDraft[0].id;
  if (removedIds.length) {
    candidati = candidati.map((c) => removedIds.includes(c.stato) ? { ...c, stato: fallback, dataAssunzione: pipelineDraft[0].isHired ? new Date().toISOString() : null } : c);
    persist();
  }
  settings.stages = pipelineDraft;
  settings.fonti = fontiDraft;
  persistSettings();
  showToast("Pipeline e fonti aggiornate.");
  render();
}

// =============================================================================
// DATI RECRUITER
// =============================================================================
function viewRecruiter() {
  recruiterDraft = { ...settings.recruiter };
  const f = recruiterDraft;
  return `
    <div class="card" style="padding:18px;max-width:560px;">
      <div class="section-heading">I tuoi dati</div>
      <div style="font-size:13px;color:var(--ink-soft);margin-bottom:16px;">
        Questi dati vengono usati per compilare automaticamente firma e contatti nei template messaggi.
      </div>
      <div class="form-grid">
        <label class="field"><span>Nome</span><input id="rf-nome" value="${esc(f.nome)}" /></label>
        <label class="field"><span>Cognome</span><input id="rf-cognome" value="${esc(f.cognome)}" /></label>
        <label class="field"><span>Email</span><input id="rf-email" value="${esc(f.email)}" /></label>
        <label class="field"><span>Telefono</span><input id="rf-telefono" value="${esc(f.telefono)}" /></label>
        <label class="field full"><span>Azienda</span><input id="rf-azienda" value="${esc(f.azienda)}" /></label>
        <label class="field full"><span>Sedi</span><input id="rf-sedi" placeholder="es. Milano, Roma" value="${esc(f.sedi)}" /></label>
      </div>
    </div>`;
}

function bindRecruiterEvents() {
  ["nome", "cognome", "email", "telefono", "azienda", "sedi"].forEach((k) => {
    document.getElementById("rf-" + k).oninput = (e) => recruiterDraft[k] = e.target.value;
  });
}

function saveRecruiter() {
  settings.recruiter = recruiterDraft;
  persistSettings();
  document.getElementById("recruiter-greeting").textContent = recruiterDraft.nome ? `Bentornato, ${recruiterDraft.nome}` : "Configura i tuoi dati →";
  showToast("Dati recruiter salvati.");
}

// =============================================================================
// TEMPLATE MESSAGGI
// =============================================================================
function viewTemplate() {
  if (settings.templates.length === 0) return `<div class="empty">Nessun template ancora creato.</div>`;
  return `<div class="row-list">${settings.templates.map((t) => `
    <div class="template-list-item">
      <div style="flex:1;min-width:0;">
        <div class="candidate-name">${esc(t.nome)}</div>
        <div style="font-size:12.5px;color:var(--ink-soft);margin-top:4px;white-space:pre-wrap;max-height:60px;overflow:hidden;">${esc(t.corpo).slice(0, 220)}${t.corpo.length > 220 ? "…" : ""}</div>
      </div>
      <div class="row-actions">
        <button class="icon-btn edit-template-btn" data-id="${t.id}">${ICONS.edit}</button>
        <button class="icon-btn danger delete-template-btn" data-id="${t.id}">${ICONS.trash}</button>
      </div>
    </div>`).join("")}</div>`;
}

function bindTemplateEvents() {
  document.querySelectorAll(".edit-template-btn").forEach((b) => b.onclick = () => openTemplateForm(b.dataset.id));
  document.querySelectorAll(".delete-template-btn").forEach((b) => b.onclick = () => {
    confirmAction("Eliminare questo template?", "L'operazione non può essere annullata.", () => {
      settings.templates = settings.templates.filter((t) => t.id !== b.dataset.id);
      persistSettings();
      document.getElementById("modal-area").innerHTML = "";
      render();
    });
  });
}

const PLACEHOLDERS = ["nome", "cognome", "ruolo", "disponibilita", "recruiter_nome", "recruiter_cognome", "recruiter_email", "recruiter_telefono", "recruiter_azienda", "recruiter_sedi", "colloquio_data", "colloquio_ora", "colloquio_link", "colloquio_note"];
const COLLOQUIO_FIELDS = ["colloquio_data", "colloquio_ora", "colloquio_link", "colloquio_note"];

function openTemplateForm(id) {
  const t = id ? settings.templates.find((x) => x.id === id) : { id: null, nome: "", corpo: "" };
  templateDraft = { ...t };
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal">
        <div class="modal-head">
          <span class="sg" style="font-size:17px;">${id ? "Modifica template" : "Nuovo template"}</span>
          <button class="x" id="close-tf">${ICONS.x}</button>
        </div>
        <label class="field" style="margin-bottom:10px;"><span>Nome template</span><input id="tf-nome" value="${esc(templateDraft.nome)}" /></label>
        <label class="field"><span>Testo del messaggio</span><textarea id="tf-corpo" rows="8">${esc(templateDraft.corpo)}</textarea></label>
        <div style="margin-top:10px;font-size:12px;color:var(--ink-soft);">Clicca per inserire un campo (quelli "colloquio_" fanno comparire dei campi da compilare al momento di generare il messaggio, es. link Teams):</div>
        <div id="placeholder-chips" style="margin-top:6px;">
          ${PLACEHOLDERS.map((p) => `<span class="placeholder-chip" data-p="${p}" style="cursor:pointer;">{{${p}}}</span>`).join("")}
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-tf">Annulla</button>
          <button class="btn-save" id="save-tf">Salva template</button>
        </div>
      </div>
    </div>`;
  document.getElementById("close-tf").onclick = () => area.innerHTML = "";
  document.getElementById("cancel-tf").onclick = () => area.innerHTML = "";
  document.getElementById("tf-nome").oninput = (e) => templateDraft.nome = e.target.value;
  const corpoEl = document.getElementById("tf-corpo");
  corpoEl.oninput = (e) => templateDraft.corpo = e.target.value;
  document.querySelectorAll("#placeholder-chips [data-p]").forEach((chip) => chip.onclick = () => {
    const pos = corpoEl.selectionStart || corpoEl.value.length;
    const insert = `{{${chip.dataset.p}}}`;
    corpoEl.value = corpoEl.value.slice(0, pos) + insert + corpoEl.value.slice(pos);
    templateDraft.corpo = corpoEl.value;
    corpoEl.focus();
  });
  document.getElementById("save-tf").onclick = () => {
    if (!templateDraft.nome.trim() || !templateDraft.corpo.trim()) { showToast("Compila nome e testo del template."); return; }
    if (templateDraft.id) {
      settings.templates = settings.templates.map((t) => t.id === templateDraft.id ? templateDraft : t);
    } else {
      settings.templates.push({ ...templateDraft, id: "tpl-" + uid() });
    }
    persistSettings();
    area.innerHTML = "";
    render();
  };
}

function fillTemplate(corpo, candidato, extra) {
  const r = settings.recruiter;
  const map = {
    nome: candidato.nome, cognome: candidato.cognome, ruolo: candidato.ruolo || "", disponibilita: candidato.disponibilita,
    recruiter_nome: r.nome, recruiter_cognome: r.cognome, recruiter_email: r.email,
    recruiter_telefono: r.telefono, recruiter_azienda: r.azienda, recruiter_sedi: r.sedi,
    ...(extra || {}),
  };
  return corpo.replace(/{{\s*(\w+)\s*}}/g, (m, k) => (map[k] !== undefined && map[k] !== "" ? map[k] : ""));
}

// converte testo semplice in HTML per il copia/incolla, rendendo cliccabile
// il link inserito (così se lo incolli in Outlook/Gmail resta un vero link)
function textToClipboardHtml(testo, linkUrl) {
  let html = esc(testo).replace(/\n/g, "<br>");
  if (linkUrl && linkUrl.trim()) {
    const safeLink = esc(linkUrl.trim());
    html = html.split(esc(linkUrl.trim())).join(`<a href="${safeLink}">${safeLink}</a>`);
  }
  return `<div>${html}</div>`;
}

async function copyRichText(testo, linkUrl) {
  try {
    const html = textToClipboardHtml(testo, linkUrl);
    const item = new ClipboardItem({
      "text/plain": new Blob([testo], { type: "text/plain" }),
      "text/html": new Blob([html], { type: "text/html" }),
    });
    await navigator.clipboard.write([item]);
    return true;
  } catch (e) {
    try { await navigator.clipboard.writeText(testo); return true; } catch (e2) { return false; }
  }
}

function openMessageModal(candidateId) {
  const c = candidati.find((x) => x.id === candidateId);
  if (!c) return;
  if (settings.templates.length === 0) { showToast("Crea prima un template nella sezione Template messaggi."); return; }
  let selectedId = settings.templates[0].id;
  let colloquio = { colloquio_data: "", colloquio_ora: "", colloquio_link: "", colloquio_note: "" };
  const area = document.getElementById("modal-area");
  const draw = () => {
    const tpl = settings.templates.find((t) => t.id === selectedId);
    const usesColloquio = COLLOQUIO_FIELDS.some((f) => tpl.corpo.includes(`{{${f}}}`));
    const testo = fillTemplate(tpl.corpo, c, colloquio);
    area.innerHTML = `
      <div class="overlay">
        <div class="modal">
          <div class="modal-head">
            <span class="sg" style="font-size:17px;">Messaggio per ${esc(c.nome)} ${esc(c.cognome)}</span>
            <button class="x" id="close-mm">${ICONS.x}</button>
          </div>
          <label class="field" style="margin-bottom:12px;"><span>Template</span>
            <select id="mm-select">${settings.templates.map((t) => `<option value="${t.id}" ${t.id === selectedId ? "selected" : ""}>${esc(t.nome)}</option>`).join("")}</select>
          </label>
          ${usesColloquio ? `
          <div class="section-box" style="margin-bottom:12px;">
            <div class="section-title">${ICONS.clock} Dati del colloquio</div>
            <div class="form-grid">
              <label class="field"><span>Data</span><input type="date" id="mm-data" value="${colloquio.colloquio_data}" /></label>
              <label class="field"><span>Ora</span><input type="time" id="mm-ora" value="${colloquio.colloquio_ora}" /></label>
            </div>
            <label class="field"><span>Link riunione (Teams, Zoom, Meet…)</span><input id="mm-link" placeholder="https://teams.microsoft.com/..." value="${esc(colloquio.colloquio_link)}" /></label>
            <label class="field"><span>Note aggiuntive (facoltative)</span><input id="mm-note" placeholder="es. porti con sé un documento d'identità" value="${esc(colloquio.colloquio_note)}" /></label>
          </div>` : ""}
          <div class="template-preview-box" id="mm-preview">${esc(testo)}</div>
          <div class="modal-footer">
            <button class="btn-secondary" id="close-mm2">Chiudi</button>
            ${c.email ? `<button class="btn-secondary" id="open-mail-mm">${ICONS.file} Apri in Email</button>` : ""}
            <button class="btn-save" id="copy-mm">${ICONS.copy} Copia (link cliccabile)</button>
          </div>
        </div>
      </div>`;
    document.getElementById("close-mm").onclick = () => area.innerHTML = "";
    document.getElementById("close-mm2").onclick = () => area.innerHTML = "";
    document.getElementById("mm-select").onchange = (e) => { selectedId = e.target.value; draw(); };
    if (usesColloquio) {
      document.getElementById("mm-data").oninput = (e) => { colloquio.colloquio_data = e.target.value ? new Date(e.target.value).toLocaleDateString("it-IT") : ""; refreshPreview(); };
      document.getElementById("mm-ora").oninput = (e) => { colloquio.colloquio_ora = e.target.value; refreshPreview(); };
      document.getElementById("mm-link").oninput = (e) => { colloquio.colloquio_link = e.target.value; refreshPreview(); };
      document.getElementById("mm-note").oninput = (e) => { colloquio.colloquio_note = e.target.value; refreshPreview(); };
    }
    function refreshPreview() {
      document.getElementById("mm-preview").textContent = fillTemplate(tpl.corpo, c, colloquio);
    }
    const mailBtn = document.getElementById("open-mail-mm");
    if (mailBtn) mailBtn.onclick = () => {
      const subject = encodeURIComponent(`${tpl.nome} — ${c.nome} ${c.cognome}`);
      const body = encodeURIComponent(fillTemplate(tpl.corpo, c, colloquio));
      window.open(`mailto:${encodeURIComponent(c.email)}?subject=${subject}&body=${body}`, "_blank");
    };
    document.getElementById("copy-mm").onclick = async () => {
      const testoFinale = fillTemplate(tpl.corpo, c, colloquio);
      const ok = await copyRichText(testoFinale, colloquio.colloquio_link);
      showToast(ok ? "Messaggio copiato — il link resta cliccabile se incollato in Outlook/Gmail." : "Copia non riuscita: seleziona e copia manualmente.");
    };
  };
  draw();
}

// =============================================================================
// FORM CANDIDATO (con storico attività)
// =============================================================================
function openForm(id) {
  const c = id ? candidati.find((x) => x.id === id) : null;
  const [rD, rO] = c && c.richiamo ? isoToParts(c.richiamo.datetime) : ["", ""];
  editingForm = {
    id: c ? c.id : null,
    nome: c ? c.nome : "", cognome: c ? c.cognome : "", telefono: c ? c.telefono : "",
    email: c ? c.email : "", ruolo: c ? c.ruolo : "", disponibilita: c ? c.disponibilita : "Ibrido",
    stato: c ? c.stato : settings.stages[0].id,
    storico: c ? [...(c.storico || [])] : [],
    richiamoData: rD, richiamoOra: rO, richiamoNota: c && c.richiamo ? c.richiamo.nota || "" : "",
    skills: c ? [...(c.skills || [])] : [], cvPath: c ? c.cvPath : null, cvName: c ? c.cvName : null,
    fonte: c ? c.fonte || "" : "", clienteAzienda: c ? c.clienteAzienda || "" : "",
    valutazione: c ? c.valutazione || 0 : 0,
    consenso: c ? !!c.consenso : false, consensoData: c ? c.consensoData || null : null,
    priorita: c ? c.priorita || "" : "", tags: c ? [...(c.tags || [])] : [],
  };
  renderForm();
}

function renderForm() {
  const f = editingForm;
  const area = document.getElementById("modal-area");
  area.innerHTML = `
    <div class="overlay">
      <div class="modal">
        <div class="modal-head">
          <span class="sg" style="font-size:17px;">${f.id ? "Modifica candidato" : "Nuovo candidato"}</span>
          <button class="x" id="close-form">${ICONS.x}</button>
        </div>
        <div class="form-grid">
          <label class="field"><span>Nome</span><input id="f-nome" value="${esc(f.nome)}" /></label>
          <label class="field"><span>Cognome</span><input id="f-cognome" value="${esc(f.cognome)}" /></label>
          <label class="field"><span>Telefono</span><input id="f-telefono" value="${esc(f.telefono)}" /></label>
          <label class="field"><span>Email</span><input id="f-email" value="${esc(f.email)}" /></label>
          <label class="field full"><span>Ruolo / posizione</span><input id="f-ruolo" value="${esc(f.ruolo)}" /></label>
          <label class="field"><span>Disponibilità</span>
            <select id="f-dispo">${DISPO.map((d) => `<option ${f.disponibilita === d ? "selected" : ""}>${d}</option>`).join("")}</select>
          </label>
          <label class="field"><span>Fase pipeline</span>
            <select id="f-stato">${settings.stages.map((s) => `<option value="${s.id}" ${f.stato === s.id ? "selected" : ""}>${esc(s.nome)}</option>`).join("")}</select>
          </label>
          <label class="field"><span>Fonte</span>
            <select id="f-fonte"><option value="">—</option>${(settings.fonti || FONTI_DEFAULT).map((s) => `<option ${f.fonte === s ? "selected" : ""}>${s}</option>`).join("")}</select>
          </label>
          <label class="field"><span>Azienda cliente (se agenzia)</span><input id="f-cliente" value="${esc(f.clienteAzienda)}" /></label>
          <label class="field"><span>Priorità</span>
            <select id="f-priorita"><option value="">—</option>${PRIORITA.map((p) => `<option ${f.priorita === p ? "selected" : ""}>${p}</option>`).join("")}</select>
          </label>
          <label class="field"><span>Valutazione</span>${starsHtml(f.valutazione, true)}</label>
          <label class="field" style="flex-direction:row;align-items:center;gap:8px;">
            <input type="checkbox" id="f-consenso" ${f.consenso ? "checked" : ""} style="width:auto;" />
            <span>Consenso privacy (GDPR) raccolto${f.consensoData ? ` — il ${new Date(f.consensoData).toLocaleDateString("it-IT")}` : ""}</span>
          </label>

          <div class="full section-box">
            <div class="section-title">Etichette</div>
            <div class="skills-editor" id="tags-editor"></div>
            <input id="new-tag" placeholder="Aggiungi etichetta e premi Invio" style="border:1px solid var(--hairline);border-radius:7px;padding:8px 10px;outline:none;" />
          </div>

          <div class="full section-box">
            <div class="section-title">${ICONS.file} Curriculum</div>
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
              <button class="btn-secondary" id="upload-cv" type="button">Carica CV (PDF/DOCX)</button>
              ${f.cvName ? `<span style="font-size:13px;">${esc(f.cvName)}</span><button class="btn-secondary" id="open-cv" type="button">Apri</button>` : `<span style="font-size:13px;color:var(--ink-soft);">Nessun CV caricato</span>`}
            </div>
            <div class="section-title" style="margin-top:6px;">Skills rilevate / manuali</div>
            <div class="skills-editor" id="skills-editor"></div>
            <input id="new-skill" placeholder="Aggiungi skill e premi Invio" style="border:1px solid var(--hairline);border-radius:7px;padding:8px 10px;outline:none;" />
          </div>

          <div class="full section-box">
            <div class="section-title">${ICONS.clock} Richiamo programmato</div>
            <div class="form-grid">
              <label class="field"><span>Data</span><input type="date" id="f-r-data" value="${f.richiamoData}" /></label>
              <label class="field"><span>Ora</span><input type="time" id="f-r-ora" value="${f.richiamoOra}" /></label>
            </div>
            <label class="field"><span>Nota richiamo (facoltativa)</span><input id="f-r-nota" placeholder="es. richiamare per confermare disponibilità" value="${esc(f.richiamoNota)}" /></label>
          </div>

          <div class="full section-box">
            <div class="section-title">Storico attività</div>
            <div class="timeline" id="timeline"></div>
            <div style="display:flex;gap:6px;">
              <input id="new-note" placeholder="Aggiungi nota (es. richiamato, non risponde…) e premi Invio" style="flex:1;border:1px solid var(--hairline);border-radius:7px;padding:8px 10px;outline:none;" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" id="cancel-form">Annulla</button>
          <button class="btn-save" id="save-form">Salva</button>
        </div>
      </div>
    </div>`;

  renderSkillsEditor();
  renderTagsEditor();
  renderTimeline();

  document.getElementById("close-form").onclick = () => area.innerHTML = "";
  document.getElementById("cancel-form").onclick = () => area.innerHTML = "";
  document.getElementById("save-form").onclick = saveForm;

  ["nome", "cognome", "telefono", "email", "ruolo"].forEach((k) => {
    document.getElementById("f-" + k).oninput = (e) => editingForm[k] = e.target.value;
  });
  document.getElementById("f-dispo").onchange = (e) => editingForm.disponibilita = e.target.value;
  document.getElementById("f-stato").onchange = (e) => editingForm.stato = e.target.value;
  document.getElementById("f-fonte").onchange = (e) => editingForm.fonte = e.target.value;
  document.getElementById("f-cliente").oninput = (e) => editingForm.clienteAzienda = e.target.value;
  document.getElementById("f-priorita").onchange = (e) => editingForm.priorita = e.target.value;
  document.getElementById("f-consenso").onchange = (e) => {
    editingForm.consenso = e.target.checked;
    editingForm.consensoData = e.target.checked ? (editingForm.consensoData || new Date().toISOString()) : null;
  };
  document.querySelectorAll("#rating-stars .star").forEach((s) => s.onclick = () => {
    editingForm.valutazione = Number(s.dataset.star) === editingForm.valutazione ? 0 : Number(s.dataset.star);
    renderForm();
  });
  document.getElementById("f-r-data").oninput = (e) => editingForm.richiamoData = e.target.value;
  document.getElementById("f-r-ora").oninput = (e) => editingForm.richiamoOra = e.target.value;
  document.getElementById("f-r-nota").oninput = (e) => editingForm.richiamoNota = e.target.value;

  document.getElementById("new-skill").onkeydown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      editingForm.skills.push(e.target.value.trim());
      e.target.value = "";
      renderSkillsEditor();
    }
  };
  document.getElementById("new-tag").onkeydown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      editingForm.tags.push(e.target.value.trim());
      e.target.value = "";
      renderTagsEditor();
    }
  };
  document.getElementById("new-note").onkeydown = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      editingForm.storico.unshift({ data: new Date().toISOString(), testo: e.target.value.trim() });
      e.target.value = "";
      renderTimeline();
    }
  };

  document.getElementById("upload-cv").onclick = async () => {
    const idForCv = editingForm.id || uid();
    editingForm.id = editingForm.id || idForCv;
    const r = await window.api.uploadCv(idForCv);
    if (r.ok) {
      editingForm.cvPath = r.cvPath;
      editingForm.cvName = r.cvName;
      const nuove = r.skills.filter((s) => !editingForm.skills.includes(s));
      editingForm.skills.push(...nuove);
      showToast(`CV caricato. ${nuove.length ? nuove.length + " skill rilevate." : "Nessuna skill riconosciuta nel testo."}`);
      renderForm();
    } else if (r.error) showToast(r.error);
  };
  const openBtn = document.getElementById("open-cv");
  if (openBtn) openBtn.onclick = () => window.api.openCv(editingForm.cvPath);
}

function renderSkillsEditor() {
  const el = document.getElementById("skills-editor");
  if (!el) return;
  el.innerHTML = editingForm.skills.map((s, i) => `<span class="skill-tag">${esc(s)}<button data-i="${i}">${ICONS.x}</button></span>`).join("") || `<span style="font-size:12px;color:var(--ink-soft);">Nessuna skill ancora.</span>`;
  el.querySelectorAll("button[data-i]").forEach((b) => b.onclick = () => { editingForm.skills.splice(Number(b.dataset.i), 1); renderSkillsEditor(); });
}

function renderTagsEditor() {
  const el = document.getElementById("tags-editor");
  if (!el) return;
  el.innerHTML = editingForm.tags.map((t, i) => `<span class="skill-tag" style="background:${tagColor(t)}20;border-color:${tagColor(t)};color:${tagColor(t)};">${esc(t)}<button data-i="${i}">${ICONS.x}</button></span>`).join("") || `<span style="font-size:12px;color:var(--ink-soft);">Nessuna etichetta ancora.</span>`;
  el.querySelectorAll("button[data-i]").forEach((b) => b.onclick = () => { editingForm.tags.splice(Number(b.dataset.i), 1); renderTagsEditor(); });
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  if (!el) return;
  if (editingForm.storico.length === 0) { el.innerHTML = `<span style="font-size:12px;color:var(--ink-soft);">Nessuna nota ancora. Ogni chiamata o aggiornamento resterà qui con data e ora.</span>`; return; }
  el.innerHTML = editingForm.storico.map((n, i) => `
    <div class="timeline-item" data-i="${i}">
      <span class="timeline-text">${esc(n.testo)}</span>
      <span class="date mono">${new Date(n.data).toLocaleDateString("it-IT")} <button class="timeline-edit" data-i="${i}" title="Modifica">${ICONS.edit}</button><button class="timeline-del" data-i="${i}" title="Elimina">${ICONS.x}</button></span>
    </div>`).join("");
  el.querySelectorAll(".timeline-del").forEach((b) => b.onclick = () => { editingForm.storico.splice(Number(b.dataset.i), 1); renderTimeline(); });
  el.querySelectorAll(".timeline-edit").forEach((b) => b.onclick = () => {
    const i = Number(b.dataset.i);
    const item = el.querySelector(`.timeline-item[data-i="${i}"] .timeline-text`);
    const current = editingForm.storico[i].testo;
    item.outerHTML = `<input type="text" class="timeline-edit-input" data-i="${i}" value="${esc(current)}" style="flex:1;border:1px solid var(--navy-soft);border-radius:5px;padding:3px 6px;font-size:12.5px;" />`;
    const input = el.querySelector(`.timeline-edit-input[data-i="${i}"]`);
    input.focus();
    input.select();
    const save = () => { editingForm.storico[i].testo = input.value.trim() || current; renderTimeline(); };
    input.onblur = save;
    input.onkeydown = (e) => { if (e.key === "Enter") save(); if (e.key === "Escape") renderTimeline(); };
  });
}

function saveForm() {
  const f = editingForm;
  if (!f.nome.trim() || !f.cognome.trim()) { showToast("Inserisci almeno nome e cognome."); return; }

  const isNew = !(f.id && candidati.some((c) => c.id === f.id));
  if (isNew) {
    const dup = candidati.find((c) =>
      (f.telefono.trim() && c.telefono && c.telefono.trim() === f.telefono.trim()) ||
      (f.email.trim() && c.email && c.email.trim().toLowerCase() === f.email.trim().toLowerCase())
    );
    if (dup) {
      confirmAction(`Esiste già ${dup.nome} ${dup.cognome} con lo stesso telefono o email.`, "Vuoi salvare comunque questo nuovo candidato?", () => {
        document.getElementById("modal-area").innerHTML = "";
        doSaveForm();
      });
      return;
    }
  }
  doSaveForm();
}

function doSaveForm() {
  const f = editingForm;
  const isNew = !(f.id && candidati.some((c) => c.id === f.id));
  let richiamo = null;
  if (f.richiamoData && f.richiamoOra) {
    richiamo = { datetime: new Date(`${f.richiamoData}T${f.richiamoOra}`).toISOString(), nota: f.richiamoNota.trim() };
  }
  const stage = resolveStage(f.stato);
  const common = {
    nome: f.nome.trim(), cognome: f.cognome.trim(), telefono: f.telefono.trim(), email: f.email.trim(),
    ruolo: f.ruolo.trim(), disponibilita: f.disponibilita, stato: f.stato, storico: f.storico, richiamo,
    skills: f.skills, cvPath: f.cvPath, cvName: f.cvName,
    fonte: f.fonte, clienteAzienda: f.clienteAzienda.trim(), valutazione: f.valutazione,
    consenso: f.consenso, consensoData: f.consensoData,
    priorita: f.priorita, tags: f.tags,
  };
  if (!isNew) {
    candidati = candidati.map((c) => c.id === f.id ? { ...c, ...common, dataAssunzione: stage.isHired ? (c.dataAssunzione || new Date().toISOString()) : null } : c);
  } else {
    candidati = [{
      id: f.id || uid(), ...common,
      dataAssunzione: stage.isHired ? new Date().toISOString() : null,
      createdAt: new Date().toISOString(),
    }, ...candidati];
  }
  persist();
  document.getElementById("modal-area").innerHTML = "";
  render();
}
