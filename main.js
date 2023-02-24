let nAvion = document.getElementById("numeroAviones");
let ePrevias = document.getElementById("entPrevias");

let conteo = 0;

function bAumentar() {
    conteo += 1;
    nAvion.textContent = conteo;
}

function bDisminuir() {
    conteo -= 1;
    nAvion.textContent = conteo;
}

function bSave() {
   let bGuardar = nAvion.textContent;
   ePrevias.textContent += bGuardar + " - ";
   conteo = 0;
   nAvion.textContent = 0;

    
}



