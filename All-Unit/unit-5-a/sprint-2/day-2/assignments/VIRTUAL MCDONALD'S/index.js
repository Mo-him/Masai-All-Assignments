
function placeOrder() {
    var veg_thali = document.getElementById("veg_thali").checked
    var nonveg_thali = document.getElementById("nonveg_thali").checked
    var burger = document.getElementById("burger").checked
    var frenchfries = document.getElementById("frenchfries").checked
    var water = document.getElementById("water").checked
    var coke = document.getElementById("coke").checked
    if (veg_thali == true) {
      let tag = document.createElement("img")
      tag.src = "./image/veg.jpg"
      document.getElementById("container").append(tag)
    }
    if (nonveg_thali == true) {
      let tag = document.createElement("img")
      tag.src = "./image/nonveg.png"
      document.getElementById("container").append(tag)
    }
    if (burger == true) {
      let tag = document.createElement("img")
      tag.src = "./image/burger.jpg"
      document.getElementById("container").append(tag)
    }
    if (frenchfries == true) {
      let tag = document.createElement("img")
      tag.src = "./image/french fries.jpg"
      document.getElementById("container").append(tag)
    }
    if (water == true) {
      let tag = document.createElement("img")
      tag.src = "./image/water bottle.jpg"
      document.getElementById("container").append(tag)
    }
    if (coke == true) {
      let tag = document.createElement("img")
      tag.src = "./image/diet koke.jpg"
      document.getElementById("container").append(tag)
    }
    
    var p = document.querySelector("h1")
    p.innerText = "Your Order Food is Here"
    document.querySelector("body").append(p)
  
  
  }
  
  var count = 5
  function fun() {
    var z  = setInterval(()=>{
      if(count==0){
        clearInterval(z)
        p.innerText = "Your Order Food is Here"
      }
      var p = document.querySelector("h1")
      p.innerText = "Your Order Is Accepted, Please Wait For "+ count +" Sec. Your Food Is Being show"
      document.querySelector("body").append(p)
      count--
    },1000)
    
    
    var script = document.createElement("script")
    script.src = ("./myscript.js")
    document.querySelector("body").append(script)
    
    
  
  }
  function y(count){
   
    
    }
  
  
  
  document.getElementById("order").addEventListener("click", fun)