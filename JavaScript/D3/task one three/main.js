var arr = [
    {name: "ahmed",age: 18,grade: "A",isGraduated: false},
    {name: "ahmed",age: 18,grade: "A",isGraduated: false},
    {name: "ahmed",age: 18,grade: "A",isGraduated: true},
    {name: "ahmed",age: 18,grade: "A",isGraduated: true}

];


var avg = 0;
var countG = 0;

for(var i = 0 ; i < arr.length; i++) {
    avg += arr[i].age;
    if(arr[i].isGraduated) {
        countG++;
    }

    console.log(Object.keys(arr[i]));
    console.log(Object.values(arr[i]));

}

console.log("avg" + (avg / arr.length));
console.log(countG);
console.log(arr.length - countG);


var newUser = {name: "ali",age: 44,grade: "B",isGraduated: true};

newUser.email = "email@example.com";

arr.push(newUser);
console.log(arr);

for(var i = 0 ; i < arr.length; i++) {
    delete arr[i].isGraduated;

}

