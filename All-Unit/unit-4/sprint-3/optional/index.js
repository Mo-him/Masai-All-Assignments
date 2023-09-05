// fill in javascript code here

document.querySelector("form").addEventListener("submit", myForm);
function myForm() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var docID = document.getElementById("docID").value;
    var dept = document.querySelector("#dept").value;
    var exp = document.getElementById("exp").value;
    var email = document.getElementById("email").value;
    var mbl = document.getElementById("mbl").value;
    console.log(name, docID,dept, exp, email, mbl );
    
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = name;

    var td2 = document.createElement("td");
    td2.innerText = docID;

    var td3 = document.createElement("td");
    td3.innerText = dept;

    var td4 = document.createElement("td");
    td4.innerText = exp;

    var td5 = document.createElement("td");
    td5.innerText = email;

    var td6 = document.createElement("td");
    td6.innerText = mbl;

    var td7 = document.createElement("td");
    td7.innerText = "trainee";
    if(exp > 5){
        td7.innerText = "senior";
    }
    else if(exp >= 2 && exp <= 5){
        td7.innerText = "junior";
    }
    else if(exp <= 1){
        td7.innerText = "trainee";
    }

    var td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.style.color = "black";
    td8.style.backgroundColor = "red";
    td8.addEventListener("click", deleteTask);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr);

    function deleteTask(){
        console.log(event.target);
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
    }

}



