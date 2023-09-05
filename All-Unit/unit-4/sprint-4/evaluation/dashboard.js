// Write code related to dashboard page here

var dashboard = JSON.parse(localStorage.getItem("task-list")) || [];

    window.addEventListener("load", function(elem){
      displayData(dashboard);
    });
    displayData();

    function handleRoleFilter(){
      var select = document.getElementById("filter").value;
      console.log(select);
      var filerList = appliedJob.filter(function(elem){
        if (select==="low" || select === ""){
          return 1;
        }
        else{
          return elem.role == selected;
        }
        
      });
      displayData(filerList);
      console.log(filerList);
    }
   
    function displayData(jobs){
      document.querySelector("tbody").innerText="";
      dashboard.map(function(elem){
        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.name;

        var td2 = document.createElement("td");
        td2.innerText = elem.description;

        var td3 = document.createElement("td");
        td3.innerText = elem.start;

        var td4 = document.createElement("td");
        td4.innerText = elem.end;

        var td5 = document.createElement("td");
        td5.innerText = elem.priority;

        var td6 = document.createElement("td");
        td6.innerText = "Add";

        td6.addEventListener("click", function(){
          addProgress(elem);
        });

        row.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(row);
      });
    }
    var progress = JSON.parse(localStorage.getItem("priority-list")) || []
    function addProgress(add){
      console.log(add);
      progress.push(add);
      localStorage.setItem("priority-list", JSON.stringify(progress));
    }