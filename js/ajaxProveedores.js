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

function Registrar(idProveedor,accion){
	
	nombre 		= document.frmProveedor.nombre.value;
	direccion 	= document.frmProveedor.direccion.value;
	telefono 	= document.frmProveedor.telefono.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarProveedores.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarProveedores.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Producto, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+nombre+"&idProveedor="+idProveedor+"&direccion="+direccion+"&telefono="+telefono)
}

function Eliminar(idProveedor){
	if(confirm("Estás seguro de eliminar este Proveedor")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarProveedores.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Proveedor Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idProveedor="+idProveedor);
	}else{
		window.alert("Error al eliminar Proveedor comuniquese con Soporte!");
	}
}

