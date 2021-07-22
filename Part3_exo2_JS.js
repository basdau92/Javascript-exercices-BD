// Ex2 Part 3 : Image substituée à une autre quand on la survole

//Nouvelle image lorsque la souris survole l'élément  
imgChange.addEventListener('mouseover', function(e) {
  let imgChange = document.getElementById('madsBiere');
  this.setAttribute('src', '/ImagesJS/calvin_candie_erf.JPG');
    }
);

//Image de départ lorsque la souris quitte l'élément
imgChange.addEventListener('mouseout', function(e) {
  let imgChange = document.getElementById('madsBiere');
  this.setAttribute('src', '/ImagesJS/madsbiererire.png');
    }
);

//ATTENTION : ne jamais nommer les fonctions qui s'auto-exécutent au sein des méthodes addEventListener !!
