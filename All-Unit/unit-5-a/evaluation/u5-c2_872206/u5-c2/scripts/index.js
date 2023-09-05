var amount = localStorage.setItem("amount", 800);


getdata();
var wallet = document.getElementById("wallet");

wallet.innerText = parseInt(localStorage.getItem("amount"));


async function getdata(){
    var res = await fetch(`https://grocery-masai-api.herokuapp.com/items`);
    var res2 = await res.json();

    
    console.log(res2);
    var card = document.getElementById("groceries");


    res2.data.map(function(elem,index){
        card.innerHTML +=`<div class="item" width = "100%"><img src="${elem.image}" height = "200px"><br>
        <p>${elem.name}</p><br>
        <p>${elem.price}</p><br>
        <button class="addtocart" onclick="addtocart(${index},${elem.price})">Add To Cart</button></div>`
    })
}

var cartarr = JSON.parse(localStorage.getItem("cart_items")) || [];



function addtocart(index, price){
    cartarr.push(index);
    console.log(cartarr);


    localStorage.setItem("cart_items", JSON.stringify(cartarr));
    var money = parseInt(localStorage.getItem("amount"));



    if(money < price){
        alert("Insufficient Balance");
    }


    money = money - price;
    localStorage.setItem("amount", money);


    var wallet = document.getElementById("wallet");
    wallet.innerText = parseInt(localStorage.getItem("amount"));
}