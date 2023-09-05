// Write code for the Progress page here 

var dashboard = JSON.parse(localStorage.getItem("priority-list")) || [];

    window.addEventListener("load", displayData);
    
    function displayData(jobs){
        document.querySelector("tbody").innerText="";
        dashboard.map(function(elem, index){
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
            addProgress(elem, index);
          });
  
          row.append(td1, td2, td3, td4, td5, td6);
          document.querySelector("tbody").append(row);
        });

      }
      function addProgress(index){
        console.log(index, "index");
        console.log(progress);
        progress.splice(index, 1);
        console.log(progress);
        displayData(progress);
        localStorage.setItem("done-list", JSON.stringify(progress));
    }
      
      var progress = JSON.parse(localStorage.getItem("done-list")) || []
      function addProgress(add){
        console.log(add);
        progress.push(add);
        localStorage.setItem("done-list", JSON.stringify(progress));
      }