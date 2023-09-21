function updateTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
  
    if (hours < 10) {
      hours = "0" + hours;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (day < 10) {
      day = "0" + day;
    }
  
    if (month < 10) {
      month = "0" + month;
    }
  
    // Get the day of the week
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekday = days[today.getDay()];
  
    var time = hours + ":" + minutes + ":" + seconds;
    var date = weekday + ", " + day + "/" + month + "/" + year;
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
    setTimeout(updateTime, 1000);
}