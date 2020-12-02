let elements = document.getElementsByTagName('p');

for(let i = 0; i < 11; i++) {
    elements = document.getElementsByTagName('p').innerHTML = aleatoire().toString();
    console.log(elements);
}

function aleatoire() {
    let random = Math.random() * 100;
    random = Math.ceil(random);
    return random;
}

