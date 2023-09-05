document.querySelector("form").addEventListener("submit", ev);
function ev(){
    event.preventDefault();
    var productName = document.getElementById("name").value;
    var category = document.getElementById("category").value;
    var brand = document.getElementById("brand").value;
    var price = document.getElementById("price").value;
    var deliver = document.getElementById("deliveredBy").value;
    var total = document.getElementById("total-price").value;
    console.log(productName, category, brand, price, deliver, total);

    var tr = document.createElement("tr");
    
    

    var td1 = document.createElement("td");
    td1.innerText = productName;

    var td2 = document.createElement("td");
    td2.innerText = category;

    var td3 = document.createElement("td");
    td3.innerText = brand;

    var td4 = document.createElement("td");
    td4.innerText = price;

    var td5 = document.createElement("td");
    td5.innerText = deliver;


    var td6 = document.createElement("td");
    td6.innerText = "Delete";
    td6.addEventListener("click", deleteC);

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);



    function deleteC(){
        console.log(event.target);
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
    }

    var ttl = document.createElement("span");
    ttl.addEventListener("change", topc);

    function topc(){
        console.log(event.target);
        console.log(event.target.parentNode);
        event.target.parentNode.price();
    }


    

}