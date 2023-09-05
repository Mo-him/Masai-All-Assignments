// Write code related to Done page here

var dashboard = JSON.parse(localStorage.getItem("done-list")) || [];

    window.addEventListener("load", displayData);
    
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
  
  
          row.append(td1, td2, td3, td4, td5);
          document.querySelector("tbody").append(row);
        });

      }