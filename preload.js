const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadData: () => ipcRenderer.invoke("data:load"),
  saveData: (candidati) => ipcRenderer.invoke("data:save", candidati),
  exportBackup: (candidati) => ipcRenderer.invoke("data:export-backup", candidati),
  importBackup: () => ipcRenderer.invoke("data:import-backup"),
  loadSettings: () => ipcRenderer.invoke("settings:load"),
  saveSettings: (settings) => ipcRenderer.invoke("settings:save", settings),
  exportExcel: (candidati) => ipcRenderer.invoke("excel:export", candidati),
  importExcel: () => ipcRenderer.invoke("excel:import"),
  uploadCv: (candidateId) => ipcRenderer.invoke("cv:upload", candidateId),
  openCv: (cvPath) => ipcRenderer.invoke("cv:open", cvPath),
  restartApp: () => ipcRenderer.invoke("app:restart"),
  exitApp: () => ipcRenderer.invoke("app:exit"),
  checkUpdates: () => ipcRenderer.invoke("app:check-updates"),
  getAppVersion: () => ipcRenderer.invoke("app:get-version"),
  loadSheets: () => ipcRenderer.invoke("sheets:load"),
  saveSheets: (sheets) => ipcRenderer.invoke("sheets:save", sheets),
  listAutoBackups: () => ipcRenderer.invoke("backup:list"),
  restoreAutoBackup: (file) => ipcRenderer.invoke("backup:restoreAuto", file),
});
