// เรียกใช้ Calendar แทน fullcalendar
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { Calendar } = require('@fullcalendar/core');
const dayGridPlugin = require('@fullcalendar/daygrid');
const timeGridPlugin = require('@fullcalendar/timegrid');
const interactionPlugin = require('@fullcalendar/interaction');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

// รับข้อมูลวันที่ที่คลิกจาก Renderer Process
ipcMain.on('day-click', (event, date) => {
  console.log('Clicked on date:', date.toISOString());
  // ทำสิ่งที่ต้องการกับวันที่ที่คลิก
});
