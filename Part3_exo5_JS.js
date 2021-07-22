// Ex5 Part 3 : Triangle rectangle

// Je crée un addEventListener avec la propriété 'click' comprenant une fonction ayant comme argument
// l'évènement "e";

document.addEventListener('click', function(e) {

    // e.preventDefault() permet de stopper l'évènement au clic du "submit"
    e.preventDefault(); 

    // j'initialise quatre variables locales : 
    // deux stockant le ciblage des id de mes inputs et récupèrant les valeurs saisies dans mes inputs avec 'value';
    // une stockant le ciblage des id de mon bouton de la span dans mon paragraphe pour l'affichage du résultat;

    let coteOpp = document.getElementById('coteOpp').value;
    let coteAdja = document.getElementById('coteAdja').value;
    let paraAffiche = document.getElementById('paraAffiche');

    // Dans une quatrième variable, je stocke et applique une formule liée au théorème de Pythagore.
    // Pour cela j'utilise la fonction Math.pow() qui permet d'obtenir valeurᵉ (ici exposant "2" soit le carré) et je la place dans
    // la fonction Math.sqrt() qui me donnera la racine carrée du résultat de mon opération, donc la longueur de mon hypothénuse;  
    
    let calcHypo = Math.sqrt(Math.pow(coteOpp, 2) + Math.pow(coteAdja, 2));  
    
    // Enfin, j'affiche le résultat dans la span du paragraphe de mon HTML.
    
    paraAffiche.innerHTML= calcHypo;

    }
)


  