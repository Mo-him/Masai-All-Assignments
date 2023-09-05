// Write code related to Home page here 

document.querySelector("form").addEventListener("submit", myForm);
    var taskArr = JSON.parse(localStorage.getItem("task-list")) || [];
    function myForm(){
      event.preventDefault();
      var taskObj = {
        name: document.querySelector("#name").value,
        description: document.getElementById("desc").value,
        start: document.getElementById("start").value,
        end: document.getElementById("end").value,
        priority: document.querySelector("#priority").value
      };
      taskArr.push(taskObj);
      localStorage.setItem("task-list", JSON.stringify(taskArr));

      document.querySelector("#name").value = "";
      document.getElementById("desc").value = "";
      document.querySelector("#priority").value = "";

    }