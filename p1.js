let random1 = document.getElementsByTagName('p');

function aleatoire2() {
    let random = Math.random() * 100;
    random = Math.ceil(random);
    return random;
}

for( let i = 0; i < 11; i++) {
    random1.innerHTML = aleatoire2();
}