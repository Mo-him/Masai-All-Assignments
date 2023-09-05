var product = ["Rice", "Dal", "Salt"];
var quantity = [2, 3, 1];
var price = [60, 50, 20];

var sum = 0;

for (var i=0; i<product.length; i++){    
    sum += quantity[i]*price[i];   
}
console.log(sum);