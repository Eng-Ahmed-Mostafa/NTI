var users = [ 
{name: "Ali", age: 22}, 
{name: "Sara", age: 28}, 
{name: "Mona", age: 35}, 
{name: "Ahmed", age: 45} 
]; 



    let obj = new Object();
    var attribute;

    users.forEach(function (e) {
        if(e.age < 25) {
            attribute = "Youth";
        }
        else if (e.age < 40) {
            attribute = "Middle";
        }
        else {
            attribute = "Old"
        }
        if (!obj.hasOwnProperty(attribute)) {
            obj[attribute] = [e];
        } else {
            obj[attribute].push(e);
        }
    });

console.log(obj);
