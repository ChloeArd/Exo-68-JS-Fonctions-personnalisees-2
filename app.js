let random1 = document.getElementsByTagName('p');
let aleatoire;

function aleatoire2() {
    let random = Math.random() * 100;
    random = Math.ceil(random);
    return random;
}

for( let i = 0; i < 1; i++) {
    aleatoire = aleatoire2();
    random1.innerHTML = aleatoire;
}
