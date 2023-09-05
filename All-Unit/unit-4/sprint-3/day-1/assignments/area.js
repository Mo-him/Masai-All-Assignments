var l = [ 1, 2, 3, 4, 5];
var b = [ 6, 7, 8, 9, 10];

for (var i=0; i<l.length; i++){
    console.log("Perimeter of Rectangle-" + (i+1) +" "+ 2*(l[i]+b[i]));    
}

// Area of Rectangle
for (var i=0; i<l.length; i++){
    console.log("Area of Rectangle-"+ (i+1) +" "+ l[i]*b[i]);
}