function objetoAjax(){
	var xmlhttp=false;
	try{
		xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
	}catch(e){
		try{
			xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
		}catch(E){
			xmlhttp=false;
		}
	}
	if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function Registrar(idC,accion){
	
	nombre 			= document.frmClientes.nombre.value;
	direccion 		= document.frmClientes.direccion.value;
	telefono 		= document.frmClientes.telefono.value;
	email 	        = document.frmClientes.email.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarClientes.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarClientes.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Cliente, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+nombre+"&idC="+idC+"&direccion="+direccion+"&telefono="+telefono+"&email="+email);
	
}

function Eliminar(idC){
	if(confirm("Estás seguro de eliminar este cliente")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarClientes.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Cliente Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idC="+idC);
	}else{
		window.alert("Error al eliminar Cliente comuniquese con Soporte!");
	}
}

