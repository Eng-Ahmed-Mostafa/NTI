var arr = [
    {name: "ahmed",city: "SHA"},
    {name: "ali",city: "SHA"},
    {name: "mona",city: "GZA"},
];







function sortObject(array , attribute) {

    let obj = new Object();

    array.forEach(function (e) {
        if (!obj.hasOwnProperty(e[attribute])) {
            obj[e[attribute]] = [e];
        } else {
            obj[e[attribute]].push(e);
        }
    });

console.log(obj);

}

sortObject(arr,"city");

