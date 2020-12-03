let elements = document.getElementsByTagName('p');

function aleatoire2() {
    let random = Math.random() * 100;
    random = Math.ceil(random);
    return random;
}

for( let i = 0; i < elements.length; i++) {
    elements.item(i).innerHTML = aleatoire2() ;
    console.log(elements);
}


