//while loop
let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
let text = '';

while (i < colors.length) {
    text += colors[i];
    console.log(colors[i]);
    i++;
}
//For loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//New style: array methods
colors.forEach(element => console.log(element));


//1. while loop heeft 8 lijnen, for loop heeft 3 lijnen plus 3 lijnen boven.
//2. forEach method heeft 1 lijn. Plus 1 boven.
//3. forEacht method is korter en makkelijker te lezen. Heeft minder toegevoegde elementen als i en text.
//4. Om loop door properties van object te maken, kan object.keys gebruiken.
const object1 = {
    a: 'Mazda',
    b: 'BMW',
    c: 'Chevrolet',
    d: 'Ford',
    e: 'Mercedes'
};

console.log(Object.keys(object1));
Object.keys(object1).
    forEach(element => console.log(object1[element]))
