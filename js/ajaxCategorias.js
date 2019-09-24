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

function Registrar(idD,accion){

	categoria = document.frmCategoria.categoria.value;
	descripcion = document.frmCategoria.descripcion.value;
	atencion = document.frmCategoria.atencion.value;
	

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarCategorias.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarCategorias.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos de Categoria Guardados con Exito.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("categoria="+categoria+"&descripcion="+descripcion+"&idC="+idC+"&atencion="+atencion);
	
}

function Eliminar(idC){
	if(confirm("Esta Seguro de Eliminar esta Categoria?")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarCategorias.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Categoria Eliminada.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idC="+idC);
	}else{
		window.alert("Error al eliminar Categoria comuniquese con Soporte!");
	}
}

