import Tag from ".src/tag"

let tag = [11, 21, 31, 41, 51];

let splArr = tag.join(', ');

function writeFirstLetter () {
for (let i = 0; i < tag.length; i++) {
    tag.charAt(i)
}
return tag.charAt(i)
}

const alph = []

alph.push(writeFirstLetter())



console.log (letter(splArr));



let names = 'Вася, Петя, Маша';

let arr = names.split(', ');

for (let name of arr) {
  console.log( `Сообщение получат: ${name}.` );}