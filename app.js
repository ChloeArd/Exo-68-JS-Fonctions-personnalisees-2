let elements = document.getElementsByTagName('p');
let aleatoire;

function aleatoire2() {
    let random = Math.random() * 100;
    random = Math.ceil(random);
    return random;
}

for( let i = 0; i < 11; i++) {
    aleatoire = aleatoire2();
    elements.innerHTML = aleatoire;
    console.log(elements);
}

