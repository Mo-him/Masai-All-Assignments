var arr = [1, 2, 3, 4];

var ans = arr
.filter(function(element){
    return element %2!=0;
})
.reduce(function(acc, element){
    return acc + element;
});
console.log(ans);