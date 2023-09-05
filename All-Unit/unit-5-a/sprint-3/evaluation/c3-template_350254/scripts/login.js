function loginfn() {
    let a = JSON.parse(localStorage.getItem("users"));
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    let d = localStorage.getItem("signedin") || localStorage.setItem("signedin", false) ;
    a.map((elem,index)=>{
        if(elem.email == b && elem.password == c){
            d = true;
            localStorage.setItem("signedin", d);
            window.alert("Login successful!");
        }
        else if(elem.email == b && elem.password != c){
            window.alert("Wrong credentials");
        }
        else {
            window.alert("User doesn't exist, Sign Up");
        }
    })
}