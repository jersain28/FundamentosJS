// Strings
const firtsName='Jersain';
const lastName='Marin';
const fullName= firtsName +" "+ lastName;

console.log("I'm " + firtsName);
console.log('I\'m ' + firtsName);

console.log(fullName);

//Strings Multilinea
const menu=`
elige:
1 - Opcion 1
2 - Opcion 2
3 - Opcion 3
`;

console.log(menu);

// Strings Templates
// placeholder ${ }

const city= 'Huamantla';
const phone='2471218341';
const rol='Student';

const presentation=`
Holaa
Soy ${ fullName }, ${ rol }, en la UTT
Vivo en ${ city }
Te puedes comunicar conmigo al num ${ phone }
`;

console.log(presentation);
