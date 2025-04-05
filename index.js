// Iteration 1: Names and Input
//
console.log("¡Estoy listo!");

//opcion 1
let hacker1 = "mario";
console.log(`el nombre del conductor es ${hacker1}`);

let hacker2 = "maria";
console.log(`el nombre del navegante es ${hacker2}`);

//opcion 2
let stringconcat = "el nombre del conductor es " + hacker1;
console.log(stringconcat);

let stringconcat2 = "el nombre del navegante es " + hacker2;
console.log(stringconcat2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "el conductor tiene el nombre mas largo, tiene " +
      hacker1.length +
      " caracteres."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "parece que el navegante tiene el nombre más largo, tiene " +
      hacker2.length +
      " caracteres."
  );
} else {
  console.log(
    "¡vaya, ambos tienen nombres igual de largos, " +
      hacker1.length +
      " caracteres."
  );
}

// Iteration 3: Loops

let resultado = "";
for (let i = 0; i < hacker1.length; i++) {
  resultado += hacker1[i].toUpperCase() + " ";
}

console.log(resultado);

let resultado2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  resultado2 += hacker2[i].toLowerCase();
}

console.log(resultado2);

let abc = "";
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    abc = `El nombre del conductor va primero`;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    abc = `Yo, el navegador va primero definitivamente`;
    break;
  }
}

if (abc === "") {
  abc = "¿Qué? ¿Los dos tienen el mismo nombre?";
}

console.log(abc);

// BONUS 1

let paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget convallis velit. Morbi faucibus ultricies nibh non laoreet.\
Duis non neque et lorem viverra ultricies ut mollis erat. Etiam neque ante, maximus eu sollicitudin at, convallis ut ex. Vestibulum ante ipsum primis\
";

let counter = 0;
let words = false;

for (let i = 0; i < paragraphs.length; i++) {
  if (
    paragraphs[i] === " " ||
    paragraphs[i] === "\t" ||
    paragraphs[i] === "\n"
  ) {
    words = false;
    continue;
  }

  if (!words) {
    counter++;
    words = true;
  }
}

console.log(counter);

let paragraphs2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget convallis velit. Morbi faucibus ultricies nibh non laoreet.\
Duis non neque et lorem viverra ultricies ut mollis erat. Etiam neque ante, maximus eu sollicitudin at, convallis ut ex. Vestibulum ante ipsum primis\
in faucibus orci luctus et ultrices posuere cubilia curae; Integer arcu ipsum, vulputate vel neque et, ultricies finibus leo. Ut pretium nibh\
libero, quis accumsan nisl faucibus nisl nisl et.";

let searchedWord = "et";
let counter2 = 0;
let randomWord = "";
let words2 = false;

for (let i = 0; i < paragraphs2.length; i++) {
  let character = paragraphs2[i];

  if (
    character === " " ||
    character === "\t" ||
    character === "\n" ||
    character === "." ||
    character === "," ||
    character === "!" ||
    character === "?"
  ) {
    if (words2) {
      if (randomWord === searchedWord) {
        counter2++;
      }
    }
    words2 = false;
    randomWord = "";
    continue;
  }

  if (!words2) {
    words2 = true;
  }

  randomWord += character;
}

if (randomWord === searchedWord) {
  counter2++;
}

console.log(counter2);

// BONUS 2

let phrase = "Anita lava la tina"; 
let izquierda = 0;
let derecha = phrase.length - 1;

let esPalindromo = true;

while (izquierda < derecha) {
    let charIzq = phrase[izquierda].toLowerCase();
    let charDer = phrase[derecha].toLowerCase();

   
    if (charIzq === ' ' || charIzq === ',' || charIzq === '.' || charIzq === '!' || charIzq === '?') {
        izquierda++;
        continue;
    }
    if (charDer === ' ' || charDer === ',' || charDer === '.' || charDer === '!' || charDer === '?') {
        derecha--;
        continue;
    }

    
    if (charIzq !== charDer) {
        esPalindromo = false;
        break;
    }

    izquierda++;
    derecha--;
}

console.log(esPalindromo ? "Es un palíndromo" : "No es un palíndromo");
