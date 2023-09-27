function generar(){
     
    const objconec = {
        url:"https://api.qrserver.com/v1/create-qr-code/?data=",
        tamaño:"&size=[500]x[500]"
    }

    const texto = document.getElementById("texto")
    
    if (texto.value != "") {
        document.getElementById("foto").src = objconec.url+texto.value
        document.getElementById("foto").style = "visibility:visible;"
    }
    else{
        alert("texto no puede ser vacio")
    }
}

function limpiar(){
        document.getElementById("texto").value = ""
        document.getElementById("foto").src = ""
        document.getElementById("foto").style = "visibility:hidden;"



}