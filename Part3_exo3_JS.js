// Ex3 Part 3 : Formulaire + boîte de dialogue



//Ouverture boîte de dialogue et affichage valeur input en appuyant sur une touche

inputVal.addEventListener('keyup', function(e) {
  let inputVal = document.getElementById('inputVal');
  let valAlert = inputVal.value;
  
  alert('Vous avez saisi: '+ valAlert)

    }
);



