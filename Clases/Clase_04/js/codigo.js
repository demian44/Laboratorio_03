var httpReq = new XMLHttpRequest(); //Nuevo objeto de HttpRequest
var callBack = function(){       
    document.getElementById("imgInfo").className = "imgInfo imgInfoProcesando";   
    document.getElementById("imgInfo").src = "./img/spinner.gif"; 
    document.getElementById("info").innerHTML = "Procesando...";       
    console.log("llego info del servidor " + httpReq.readyState); //Códigos de estado
    if (httpReq.readyState === 4){ //Acá hay respuesta del servidor!!
        codigosDeEstado(httpReq.status);         
        if(httpReq.status == 200){ //Codigo de que todo está bien.
            console.log(httpReq.responseText);
        }
        else
        {
            console.log("Ocurrió un error en el servidor. Código: " + httpReq.status);
        }
    }      
}

function enviar(metodo){
    document.getElementById("info").innerHTML = "";
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;

    if(metodo === "GET"){
        ajax(metodo,"http://localhost:3000/loginUsuario/","?usr="+usuario+"&pass="+pass,true);
    }
    else{
        ajax(metodo,"http://localhost:3000/loginUsuario/","usr="+usuario+"&pass="+pass,true);
    }              
}

function codigosDeEstado(statusCode){
    var info = document.getElementById("info");
    document.getElementById("imgInfo").className = "imgInfo";   
    if(statusCode == 200){
        if(httpReq.responseText === "true"){
            document.getElementById("imgInfo").src = "./img/0042_089_check_well_ready_okey-256.png"; 
            info.innerHTML = "Login successful";
        }else{
            document.getElementById("imgInfo").src = "./img/184_stop_error_danger-256.png"; 
            info.innerHTML = "Datos erroneos";
        }                
    }
    else{
        document.getElementById("imgInfo").src = "./img/182_warning_notice_error-256.png"; 
        document.getElementById("info").innerHTML = "Error código: "+statusCode;
    }
}

function ajax(metodo,url,parametros,tipo){            
    
    httpReq.onreadystatechange = callBack;
    if(metodo === "GET"){
        
        httpReq.open("GET", "http://localhost:3000/loginUsuario/"+parametros, true); //abre la conexión con el servidor
        httpReq.send();
    }
    else{
        httpReq.open("POST", url, tipo); //abre la conexión con el servidor
        httpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        httpReq.send(parametros);
    }
}  