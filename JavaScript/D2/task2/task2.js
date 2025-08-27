var arr = [10 , -23 , 30,23, -34 ,34,45,23,12,-54];
var sumP = 0;
var sumN = 0;

for(var item of arr ) {
    if(item > 0) {
        sumN += item;
        continue;
    }
    sumP += item;

}


console.log('total postive only :' + sumP);
console.log('total negative only :' + sumN);
var number = 50;
for (var index = 0; index < 10; index++) {
   if(index == 9) {
        arr[index] = number;
        break;
   }
    arr[index] = arr[index + 1];
}

console.log(arr);
