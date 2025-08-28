let sentence = "JavaScript is fun"; 

let splet = sentence.split(' ');

console.log("Total words: " + splet.length);
splet.forEach(function(e) {
    console.log(`${e} => ${e.length}`)
})