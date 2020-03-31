// answer One question
function convertDate() {
  let persianDate = moment(document.getElementById("date").value)
    .locale("fa")
    .format("YYYY/M/D"); // 1367/11/4
  document.getElementById("persianDate").innerHTML =
    "Persian Date :" + persianDate;
}

// answer two question
dt1 = new Date("2019/5/28 12:02:02");
dt2 = new Date("2020/7/29 13:03:03");
function diffTime(dt1, dt2) {
  let seconds = (dt2.getTime() - dt1.getTime()) / 1000;
  let min = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hours = Math.floor(min / 60);
  min = min % 60;
  let day = Math.floor(hours / 24);
  hours = hours % 24;
  let month = Math.floor(day / 30);
  day = day % 30;
  let year = Math.floor(month / 12);
  month = month % 12;
// print on tag p
  document.getElementById("textDate").innerHTML =
    "years:" +
    year +
    " month:" +
    month +
    " days:" +
    day +
    " hours:" +
    hours +
    " minutes:" +
    min +
    " seconds:" +
    seconds;
}
diffTime(dt1, dt2);
// click button and change display tag p and show text
function showText() {
  var x = document.getElementById("textDate");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

