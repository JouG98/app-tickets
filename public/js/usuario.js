function abrir() {

    var variable1 = document.getElementById('user').value;
    var variable2 = document.getElementById('pass').value;

    if (variable1 == "admin" && variable2 == "admin") {
        document.getElementById("vent").style.display = "block";
    } else {
        alert('Credenciales incorrectas')
    }

    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";

}

function cerrar() {
    document.getElementById('vent').style.display = "none";
}

function usuario() {

}