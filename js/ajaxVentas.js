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

function Registrar(idF,accion){

	familia = document.frmFamilia.familia.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarFamilias.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarFamilias.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos de la Familia, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("familia="+familia+"&idF="+idF);
	
}

function Eliminar(idF){
	if(confirm("Si elimina esta Familia se eliminaran sus integrantes, esta segur@?")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarFamilias.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Familia Eliminada.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idF="+idF);
	}else{
		window.alert("Error al eliminar Cliente comuniquese con Soporte!");
	}
}

