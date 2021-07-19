// Ex4 Part 2 : Fonction avec paramètres TestUnit
let number = 5;

function calcul(nb) {
    calcul = nb*10
    alert(calcul)
}

// Tests + pronostics résultats

// calcul(2);
// 20

// calcul(3);
// 30

// calcul(4.5);
// 45

// calcul('5');
// 50 (Le string peut être interprété en integer par JS )

// calcul(true);
// 10

// calcul(false);
// 0

// calcul('Bonjour');
// error (en fait NaN)

// calcul('12 billes');
// error (en fait NaN)

// calcul(1+1);
// 20

// calcul(12^2);
// 1440 (en fait 140 car "^" est un opérateur binaire équivalent à "ou exclusif")