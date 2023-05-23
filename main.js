
function validarFormulario() {
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroB = parseInt(document.getElementById("numeroB").value);
    if (numeroB > numeroA) {
    return true;
    } else {
    alert("O número B deve ser maior que o número A!");
    return false;
    }
}