// answer One question
function convertDatePersian() {
  let persianDate = moment(document.getElementById("date").value)
    .locale("fa")
    .format("YYYY/M/D");
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

// answer three question
array = [
  {
    start: new Date("2019/5/28 12:02:02") , 
    end : new Date("2020/7/29 13:03:03")
  }
];
alert(array)

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
let date = new Date();
document.getElementById("dateTehran").innerHTML ="Date Tehran : "+ date;

function changeTime() {
  date.setMinutes(date.getMinutes() + 30);
document.getElementById("newTime").innerHTML = "New Time : " + date;
}
