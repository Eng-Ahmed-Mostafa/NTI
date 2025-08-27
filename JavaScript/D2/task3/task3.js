var student = {
    name : "Ahmed",
    age: 34,
    grade : "B",
    isGraduated : false,
}

console.log(student.name);

student.grade = "A";

var obj = new Object.keys(student);
console.log(obj);
var obj2 = new Object.values(student);
console.log(obj2);

student.email = "ahmed@emaple.com";

delete student.isGraduated;