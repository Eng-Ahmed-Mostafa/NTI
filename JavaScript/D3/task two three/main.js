let categories = [ 
{category: "Fruits", products: ["Apple", "Banana", "Apple"]}, 
{category: "Vegetables", products: ["Carrot", "Apple"]}, 
{category: "Dairy", products: ["Milk", "Cheese"]} 
]; 

var arr = [];
categories.forEach(function(e) {
    arr = arr.concat(e.products);
});

var obj = {};
arr.forEach(function (e) {
    obj[e] = 0;
});
arr.forEach(function (e) {
    obj[e]++;
});

console.log(obj)