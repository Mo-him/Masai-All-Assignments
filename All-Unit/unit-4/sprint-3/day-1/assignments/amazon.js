var amazon = [{name: "speakers" , price: 5400, rating: 4},{name: "headphones", price: 3000, rating:3}, {name:"playstation", price: 20000, rating:5}]
 for(var i=0; i<amazon.length; i++){
    console.log(amazon[i].name, amazon[i].rating);
 }
 var sum = 0;
 for(var i=0; i<amazon.length; i++){
   sum = sum + amazon[i].rating;
}
console.log(sum/3);