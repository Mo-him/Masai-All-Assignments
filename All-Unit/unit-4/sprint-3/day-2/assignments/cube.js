var arr = [1, 2, 3, 4, 5, 6];

var sum = 0;

for (var i=0; i<arr.length; i++){
    if (arr[i] % 3 == 0){
        sum += arr[i]*arr[i]*arr[i];
    }
}
console.log(sum);