var card = document.getElementById("hotel_details");
var d= localStorage.getItem("checkout");
var e=localStorage.getItem("sq")
searchfn();
async function searchfn() {
    var res = await fetch (`https://masai-api.herokuapp.com/hotels/search?city=${e}`);
    var res2 = await res.json();
    res2.hotels.map((elem,index)=>{
        if(index == d){
            card.innerHTML +=`<div id="hotel">
            <img src="${elem.Images.one}" height = "200px"><br>
            <p>${elem.Title}</p><br>
            <p>${elem.Price}</p><br>
            <p>${elem.Rating}</p><br>
            <p>AC${elem.Ac}</p>
            <button class="book" onclick="booknowfn(${index})">Book Now</button>
          </div>`
          console.log(index);
        }
    })
    
}

var a =document.getElementById("userinfo");
a.innerHTML = `<input id="user_name" type="text" placeholder="Enter Name" value=""><br>
<input id="user_number" type="text" placeholder="ENter Number"><br>
<label for="check_in">CheckIn</label>
<input type="date" id="check_in" placeholder="CheckIn Date"><br>
<label for="check_out" CheckOut</label>
<input type="date" id="check_out" placeholder="CheckOut Date"><br>
<button onclick="checkoutfn()" id="book">Book<button>`;
function checkoutfn(){
    var b = document.getElementById("user_name").value;
    setTimeout( function ( ) { alert( `${b} Your booking is successful!`); }, 5000 );
}
