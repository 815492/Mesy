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

function Registrar(accion){
	
	nick 		= document.frmUsers.nick.value;
	pass 		= document.frmUsers.pass.value;
	nombre 		= document.frmUsers.nombre.value;
	apellido 	= document.frmUsers.apellido.value;
	nivel 		= document.frmUsers.nivel.value;
	id 			= document.frmUsers.id.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarUsuario.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarUsuario.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Item, fueron guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nick="+nick+"&id="+id+"&pass="+pass+"&nombre="+nombre+"&apellido="+apellido+"&nivel="+nivel);
	
}

function Eliminar(id){
	if(confirm("Estás seguro de eliminar este producto")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarUsuario.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Usuario Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("id="+id);
	}else{
		window.alert("Error al eliminar Usuario comuniquese con Soporte!");
	}
}

