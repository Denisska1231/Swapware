import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


// สร้างปฏิทิน
const calendar = new Calendar(document.getElementById('calendar'), {
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  initialView: 'dayGridMonth',
  events: [],
  dateClick: function(info) {
    // ส่งข้อมูลวันที่ที่คลิกไปยัง Main Process
    ipcRenderer.send('day-click', info.date);
  }
});

calendar.render();
