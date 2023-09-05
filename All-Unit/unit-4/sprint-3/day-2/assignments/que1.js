var arr = [1, 2];
var sum = [];
/*for(var i=0; i<num.length; i++){
   sum = num[i]+num[i];
    console.log(sum);
}*/
arr.forEach(function(element){
    sum.push(element + element);
});
console.log(sum);