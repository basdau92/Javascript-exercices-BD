// Ex5 Part 2 : Fonction String et paragraphe
// let string = "Reprehenderit commodo amet dolore tempor velit reprehenderit qui ut.";

// function nombreCarac() {
//     document.getElementById("paragraphe");
//     document.write("Longueur de la variable string: " + string.length)
// }

// nombreCarac();

//Créer un programme qui permet de compter le nombre de caractères de votre choix

let str1 = "Reprehenderit commodo amet dolore tempor velit reprehenderit qui ut.";
function strCompt(cara) {
  let result = cara.length;
  document.getElementById("paragraphe").innerHTML = result;
  return result;
}
console.log(strCompt(str1));