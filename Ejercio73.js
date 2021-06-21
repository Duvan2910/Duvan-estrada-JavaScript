var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour

function printTime(){

  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}

serInterval(printTime, 1000);
