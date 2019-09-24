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

function Registrar(idItem,accion){

	nombre 		= document.frmItems.nombre.value;
	unidad 		= document.frmItems.unidad.value;
	categoria 	= document.frmItems.categoria.value;
	producto 	= document.frmItems.producto.value;
	tamaño 		= document.frmItems.tamaño.value;
	precio 		= document.frmItems.precio.value;
	minimo 		= document.frmItems.minimo.value;
	//imagen 		= document.frmItems.imagen.value;
	codigo 		= document.frmItems.codigo.value;

	ajax = objetoAjax();

	if(accion == 'N'){
		ajax.open("POST", "clases/registrarItem.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarItem.php",true);
	}

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Item, fueron guardados correctamente.');
			window.location.reload();
			//Limpiar();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+nombre+"&idItem="+idItem+"&unidad="+unidad+"&categoria="+categoria+"&producto="+producto+"&tamaño="+tamaño+"&precio="+precio+"&minimo="+minimo+"&codigo="+codigo);

}

function Eliminar(idItem){
	if(confirm("Estás seguro de eliminar este producto")){

		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarItem.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Producto Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idItem="+idItem);
	}else{
		window.alert("Error al eliminar Producto comuniquese con Soporte!");
	}
}

