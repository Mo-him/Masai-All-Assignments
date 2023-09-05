var k = 0;
var h =document.getElementById("query");
h.addEventListener("keypress", async function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        var sr = document.getElementById("query").value;
        localStorage.setItem("sq", sr);
        var res = await fetch (`https://masai-api.herokuapp.com/hotels/search?city=${sr}`);
        var res2 = await res.json();
        var k =res2;
        console.log(res2);
        var card = document.getElementById("hotels_list");
        res2.hotels.map((elem,index)=>{
            card.innerHTML +=`<div id="hotel">
                <img src="${elem.Images.one}" height = "200px"><br>
                <p>${elem.Title}</p><br>
                <p>${elem.Price}</p><br>
                <p>${elem.Rating}</p><br>
                <p>AC${elem.Ac}</p>
                <button class="book" onclick="booknowfn(${index})">Book Now</button>
            </div>`
        })
    }
})
async function searchfn() {
    var sr = document.getElementById("query").value;
    localStorage.setItem("sq", sr);
    var res = await fetch (`https://masai-api.herokuapp.com/hotels/search?city=${sr}`);
    var res2 = await res.json();
    var k =res2;
    console.log(res2);
    var card = document.getElementById("hotels_list");
    res2.hotels.map((elem,index)=>{
        card.innerHTML +=`<div id="hotel">
            <img src="${elem.Images.one}" height = "200px"><br>
            <p>${elem.Title}</p><br>
            <p>${elem.Price}</p><br>
            <p>${elem.Rating}</p><br>
            <p>AC${elem.Ac}</p>
            <button class="book" onclick="booknowfn(${index})">Book Now</button>
        </div>`
    })
    
}

function booknowfn(index){
    let a = localStorage.getItem("signedin");
    let c = localStorage.getItem("checkout");
    localStorage.setItem("checkout", null );
    if(a == "true"){
        localStorage.setItem("checkout", index);
        window.open("checkout.html")
    }
}