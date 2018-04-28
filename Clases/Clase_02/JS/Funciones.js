//alert("Hola");

function saludar(){
    alert("hola desde funcion");
}

function Limpiar(){
    document.getElementById("txtOperando1").value = "";
    document.getElementById("txtOperando2").value = "";
    document.getElementById("txtResultado").value = "";
}

function Sumar(guardar){
    var operando1 = parseInt(document.getElementById("txtOperando1").value);
    var operando2 = parseInt(document.getElementById("txtOperando2").value);
    if(isNaN(operando1) || isNaN(operando2)){
        alert("Debe ingresar 2 números");
    }
    else{
        var resultado = operando1 + operando2;
        document.getElementById("txtResultado").value = resultado;
        if(guardar){
            var cuerpo = document.getElementById("tablaResultados");
            var html = cuerpo.innerHTML;
            html = html + "<tr><td>"+operando1+"</td><td>"+operando2+"</td><td>"+resultado+"</td></tr>";
            cuerpo.innerHTML = html;
        }        
    }       
}