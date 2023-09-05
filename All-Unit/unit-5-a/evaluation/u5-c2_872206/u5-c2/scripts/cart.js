var check = document.getElementById("cart_total");


var work = parseInt(localStorage.getItem("amount"));
var e = 800-work;


localStorage.setItem("carttotaal", e);
check.innerText = e;
getdata()



async function getdata(){
    var res = await fetch(`https://grocery-masai-api.herokuapp.com/items`);
    var res2 = await res.json();

    
    var z = JSON.parse(localStorage.getItem("cart_items"))
    console.log(z);



    var card = document.getElementById("cart");
    card.innerHTML=``;


    z.map(function(elem,index){
        card.innerHTML += `



        <div><img src="${res2.data[elem].image}"><br>
        <p>${res2.data[elem].name}</p>
        <p>${res2.data[elem].price}</p>
        <button class="remove" onclick="removefn(${index}, ${res2.data.price})">Remove</button></div>`
    })
}

function removefn(index, price){
    var z = JSON.parse(localStorage.getItem("cart_items"))
    z.splice(index,1)



    localStorage.setItem("cart_items",JSON.stringify(z));
    var check = document.getElementById("cart_total");
    var work = parseInt(localStorage.getItem("amount"));
    var e = work-price;



    if(e==null){
        e=0;
    }
    check.innerText = e;
    getdata();
}