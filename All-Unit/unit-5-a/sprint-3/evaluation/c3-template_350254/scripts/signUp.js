var z = JSON.parse(localStorage.getItem("users")) || [];
function signUpfn(){
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c=document.getElementById("password").value;
    let d = {
        name : a,
        email :b,
        password :c
    }
    z.push(d);
    localStorage.setItem("users",JSON.stringify(z));
    window.alert("SignUp Successful");
}