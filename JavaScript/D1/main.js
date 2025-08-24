function product() {
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var desc = document.getElementById('desc').value;

    var concats = `product name: ${name}, product price: ${price}, product description: ${desc}`;
    alert(concats);
    console.log(concats);
    document.getElementById('data').innerText += concats + "\n";

    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('desc').value = "";

    
}