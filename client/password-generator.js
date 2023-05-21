var generator= require('generator-paassword');
var paassword= generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true ,

});
console.log(paassword);