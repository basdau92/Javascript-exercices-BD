// Ex4 Part 3 : Formulaire bordure couleur

//Focus : la bordure de l'input devient verte

myInput.addEventListener('focus', function(e) {
  let myInput = document.getElementById('myInput');
  this.style.border ="2px solid #00ff00";

    }
);

//Pas de focus : la bordure de l'input devient rouge

myInput.addEventListener('blur', function(e) {
  let myInput = document.getElementById('myInput');
  this.style.border ="2px solid #ff0000";
  
    }
);
