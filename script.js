// answer One question
function convertDatePersian() {
  let persianDate = moment(document.getElementById("date").value)
    .locale("fa")
    .format("YYYY/M/D");
  document.getElementById("persianDate").innerHTML =
    "Persian Date :" + persianDate;
}

// answer two question
let dt1 = new Date("2019/5/28 12:02:02");
document.getElementById("oneDate").innerHTML ="One Date : " +dt1;
let dt2 = new Date("2020/7/29 13:03:03");
document.getElementById("twoDate").innerHTML = "Two Date : " + dt1;
function diffTime() {
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
  document.getElementById("textDate").innerHTML = "Diff between two dates = " + 
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

// answer three question
let array = [
  {
    start: new Date("2020/7/29 13:03:00"),
    end: new Date("2020/7/29 13:03:01")
  },
  {
    start: new Date("2020/7/29 13:03:00"),
    end: new Date("2020/7/29 13:03:02")
  }
];
document.getElementById("demo").innerHTML ="Array List = " + JSON.stringify(array, null, 4);

function differenceTime() {
  let second = 0;
  for (let i = 0; i < array.length; i++) {
    let start = array[i].start;
    let end = array[i].end;
    let time = (end.getTime() - start.getTime()) / 1000;
    second += time;
  }
  let min = Math.floor(second / 60);
  second = second % 60;
  let hours = Math.floor(min / 60);
  min = min % 60;
  let day = Math.floor(hours / 24);
  hours = hours % 24;
  let month = Math.floor(day / 30);
  day = day % 30;
  let year = Math.floor(month / 12);
  month = month % 12;
  // print on tag p
  document.getElementById("demo2").innerHTML =
    "Time difference = " +
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
    second;
}

// answer four question
let asiaTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Tehran"
});
asiaTime = new Date(asiaTime);
document.getElementById("dateAsia").innerHTML =
  "Asia time: " + asiaTime.toLocaleString();
function convertDate() {
  let usaTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  usaTime = new Date(usaTime);
  document.getElementById("dateUSA").innerHTML =
    "USA time: " + usaTime.toLocaleString();
}

// answer five question
document
  .getElementById("convertToJalali")
  .addEventListener("click", function() {
    let output = "";
    try {
      let input = document.getElementById("gregorianInput").value;
      let m = moment(input);
      if (m.isValid()) {
        m.locale("fa");
        output = m.format("ddd") + " " + m.format("YYYY/MMMM/DD");
      } else {
        output = "it is not valid date";
      }
    } catch (e) {
      output = "input is not a date";
    }
    document.getElementById("jalaliOutput").innerText = output;
  });

// answer six question
function subsetString(string) {
  let subset = [];
  for (let i = 0; i < string.length; i++) {
    for (let n = i + 1; n < string.length + 1; n++) {
      subset.push(string.slice(i, n));
    }
  }
  document.getElementById("textSubset").innerHTML = "Text = " + subset;
}

// answer seven question
document.getElementById("btnListArray").addEventListener("click", function() {
  const character = {
    country: "Iran",
    capital: "Tehran",
    population: "18M"
  };
  document.getElementById("textListArray").innerHTML = Object.entries(
    character
  );
});

// answer eight question
let library = [
  {
    title: "The Road Ahead",
    author: "bill Gates",
    libraryID: 1254
  },
  {
    title: "Wallter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
  },
  {
    title: "The Final Book of The hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  }
];

function sortArray() {
  library.sort(function(a, b) {
    return a.libraryID - b.libraryID;
  });
  let myJSON = JSON.stringify(library);
  document.getElementById("arraySort").innerHTML = myJSON;
}
// show array not sort
document.getElementById("arrayList").innerHTML = JSON.stringify(library);

// If we don't want to use JSON.stringify we can use this function to display lists
function displayCars() {
  document.getElementById("demo").innerHTML =
    library[0].title +
    " " +
    library[0].author +
    " " +
    library[0].libraryID +
    "<br>" +
    library[1].title +
    " " +
    library[1].author +
    " " +
    library[1].libraryID +
    "<br>" +
    library[2].title +
    " " +
    library[2].author +
    " " +
    library[2].libraryID +
    "<br>";
}

// answer nine question
function RangeNumber() {
  let number = document.getElementById("numberRange").value;
  let newNumber = number / 20;
  document.getElementById("newNumber").innerHTML = "Number = " + newNumber;
}

// answer ten question
let date = new Date();
document.getElementById("dateTehran").innerHTML = "Date Tehran : " + date;

function changeTime() {
  date.setMinutes(date.getMinutes() + 30);
  document.getElementById("newTime").innerHTML = "New Time : " + date;
}
