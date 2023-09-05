// Write code related to Home page here
document.querySelector("form").addEventListener("submit", getData);

var arrData = JSON.parse(localStorage.getItem("arraylist")) || [];

function getData() {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var cat = document.getElementById("desc").value;
  var month = document.getElementById("month").value;
  var week = document.getElementById("week").value;
  var meetType = document.getElementById("meetType").value;


  function Object(n, c, m, w, mt) {
    this.name = n;
    this.cat = c;
    this.month = m;
    this.week = w;
    this.meetType = mt;
  }

  let objData = new Object(name, cat, month, week, meetType);

  arrData.push(objData);
  localStorage.setItem("meets", JSON.stringify(arrData));
}
