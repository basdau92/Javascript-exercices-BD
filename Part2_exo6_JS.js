// Ex6 Part 2 : Bienvenue à Bora Bora

let titreCap = "Bienvenue à Bora Bora";
let paraMinus = "MINIM TEMPOR NOSTRUD VOLUPTATE ALIQUIP VOLUPTATE LABORUM TEMPOR EX EX.";
let paraCoul = "Sit elit ad enim do reprehenderit aliqua.";
let paraMasque = "Ut anim do laboris dolor duis deserunt aute proident quis consequat aliquip culpa cupidatat.";

function styleText() {
    document.getElementById("titre")
    document.getElementById("p1")
    document.getElementById("p2")
    document.getElementById("p3")

    document.write(titreCap.toUpperCase()+"<br>")
    document.write(paraMinus.toLowerCase()+"<br>")
    document.write(paraCoul.fontcolor("red")+"<br>")
    document.write(paraMasque.hide())
}

styleText();