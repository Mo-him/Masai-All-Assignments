// Add the coffee to local storage with key "coffee"
/*async function Data(){
    try{
        var res = await  fetch("https://masai-api.herokuapp.com/coffee/menu")
        var list = await res.json();
        var arr = await list.menu.data;

        console.log(list.menu.data);

        localStorage.setItem("coffee", JSON.stringify(arr));
    }

    catch (error){
        console.log(error)
    }
}
Data();*/

async function getData(){
    var res = await  fetch("https://masai-api.herokuapp.com/coffee/menu")
    var list = await res.json();
    console.log(list.menu.data);
    displayData(list.menu.data)
}
getData();




function displayData(data){
    data.map(function(ele){
        var div = document.getElementById("menu")
        var main = document.createElement("div");
        var imgdiv = document.createElement("div");
        var image = document.createElement("img");
        image.src= ele.image;

        image.style.width = "85%";
        image.style.height = "300px"

        imgdiv.append(image)

        var titlediv =document.createElement("div");
        titlediv.innerText = ele.title;
        titlediv.style.innerText = "center"

        var price = document.createElement("div");
        price.innerText = ele.price;

        var button = document.createElement("button");
        button.setAttribute("id", "add_to_bucket");
        button.addEventListener("click", function(){
            addl(ele);
        });
        button.innerText = "Add to Bucket"
        main.append(imgdiv, titlediv, price, button)
        div.append(main);
    })
}


var arr = [];

function addl(data){
    arr.push(data);
    localStorage.setItem("coffee", JSON.stringify(arr));

    var total = document.getElementById("coffee_count");
    total.innerText = arr.length;
}

