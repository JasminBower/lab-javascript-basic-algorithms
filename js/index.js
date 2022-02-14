// Iteration 1: Names and Input
const hacker1 = 'Ben';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Jerry';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);

} else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

let allCapsDriver = ''


for(let i = 0; i < hacker1.length; i++){
  allCapsDriver+= hacker1[i].toUpperCase() + ' '
};

console.log(allCapsDriver);

let reverseNavigatorName = '';

for(let i = hacker2.length - 1 ; i >= 0; i--){
  reverseNavigatorName+= hacker2[i]

};

console.log(reverseNavigatorName);


if(hacker1 === hacker2){
    console.log('What?! You both have the same name?')
} else if(hacker1 < hacker2){
 console.log('The drivers name goes first');
} else {
  console.log('Yo, the navigator goes first definitely.')
};

//Bonus Time!

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et nisl ut dui laoreet ornare at vehicula ipsum. Donec id dolor justo. Ut ac malesuada justo. Proin tempor consectetur leo malesuada aliquet. Morbi id vulputate augue, auctor ultrices orci. Praesent nibh metus, auctor quis lectus a, convallis aliquam sem. Praesent vehicula sapien dui, eu blandit eros rhoncus nec. Duis sed diam nec nulla ultricies scelerisque a at velit.

Aenean mattis dictum iaculis. Sed vestibulum, velit bibendum tempor lacinia, tortor nulla mollis elit, vel varius massa orci elementum dui. Nunc sapien urna, auctor ut lacus nec, accumsan sollicitudin neque. Vivamus sed eros vel nibh tincidunt sollicitudin non sed ex. Aliquam eget blandit velit, sit amet pharetra nulla. In dictum, erat sit amet volutpat ultrices, ligula nisi fermentum justo, vitae porttitor augue enim et diam. Morbi mollis augue non nisi vehicula, non rutrum ex pretium. Proin tempor ultrices turpis, nec fermentum nibh dignissim volutpat. Sed dictum, dui vel ullamcorper mattis, tortor metus ornare odio, eget vestibulum sapien velit non ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in dignissim ligula, eu finibus eros. Maecenas commodo nibh dolor. Aliquam sollicitudin magna mi, ut facilisis mi feugiat sit amet.

Duis nec nibh felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec varius at eros cursus dignissim. Aenean volutpat a orci id aliquam. Proin aliquam viverra odio, vitae ornare diam. In vestibulum velit et purus bibendum iaculis. Cras non eros ut eros finibus laoreet. Donec finibus malesuada pharetra. Morbi vitae elit mauris. Vivamus rutrum quam neque. Vestibulum vel hendrerit dui. Ut euismod odio eget tellus accumsan, sed congue eros rhoncus. Aliquam quis rhoncus ante. Nullam vitae nibh vel tellus fermentum mattis in eu tortor. Sed scelerisque nisi id leo scelerisque, sit amet dignissim ligula cursus`;



const wordsInText = text.split(' ');


console.log(wordsInText.length, ' << number of words in paragraphs');
// I'm sorry if this is cheating 

let etCount = 0;

for(let i = 0; i < wordsInText.length; i++){
    if(wordsInText[i] === 'et' || wordsInText[i] === 'Et') etCount++
};

console.log(etCount)


//Bonus 2!!

let phraseToCheck = 'Amor, Roma';

let onlyLetters = phraseToCheck.replace(/[^a-zA-Z]+/g, '');

onlyLetters = onlyLetters.toLowerCase();

let reversedPhrase = '';


for(let i = onlyLetters.length - 1; i >= 0; i--){
    reversedPhrase+= onlyLetters[i];
};

if(reversedPhrase === onlyLetters){
    console.log(`it's a palindrome!!!!!`)
} else console.log('sorry no palindrome');










