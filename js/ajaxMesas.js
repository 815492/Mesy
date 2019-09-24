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

function Registrar(idM,accion){

	cantidad = document.frmMesas.cantidad.value;
	descripcion = document.frmMesas.descripcion.value;
	ubicacion = document.frmMesas.ubicacion.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarMesas.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarMesas.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos de la Mesa, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("cantidad="+cantidad+"&descripcion="+descripcion+"&ubicacion="+ubicacion+"&idM="+idM);
	
}

function Eliminar(idM){
	if(confirm("Esta segur@, de querer eliminar esta Mesa?")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarMesas.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Mesa Eliminada.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idM="+idM);
	}else{
		window.alert("Error al eliminar Mesa comuniquese con Soporte!");
	}
}

