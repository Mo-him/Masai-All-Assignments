

function handleClick() {
    var val = document.getElementById("inp").value;
    var phonePay = document.getElementById("phonePay");
    phonePay.innerHTML = '<img id = "respimg" src=https://c.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif alt="succes"></img>';

    var myPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(val === "1234"){
                resolve("Transection Succesfull");
            }
            else{
                reject("Please enter correct pin");
            }
        }, 2500)
    })

    myPromise.then(function(res){
        var phonePay = document.getElementById("phonePay");
        phonePay.innerHTML = '<img id = "respimg" src= https://www.vogue.in/wp-content/themes/vogue/images/check-circle.gif alt="succes"></img>';
    })
    myPromise.catch(function(err){
        var phonePay = document.getElementById("phonePay");
        phonePay.innerHTML = '<img id = "respimg" src= https://i0.wp.com/balututorials.com/wp-content/uploads/2020/07/Error.gif?resize=150%2C150&ssl=1 alt="succes"></img>';
    })
}