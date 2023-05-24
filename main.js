
function validarFormulario() {
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroB = parseInt(document.getElementById("numeroB").value);
    if (numeroB > numeroA) {
    alert("Sua resposta esta correta")
    return true;
    } else {
    alert("O número B deve ser maior que o número A!");
    return false;
    }
}