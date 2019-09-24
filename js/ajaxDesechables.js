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


function Eliminar(id){
	if(confirm("Esta segur@, de querer eliminar este Desechable?")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarDesechable.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Desechable Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("id="+id);
	}else{
		window.alert("Error al eliminar Desechable comuniquese con Soporte!");
	}
}

function Modifica(){
	aumenta = document.frmDesechable.aumenta.value;
	idD  	= document.frmDesechable.idD.value;

	ajax = objetoAjax();
		ajax.open("POST", "clases/actualizarDesechable.php",true);
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('Aumento Actualizado.');
				window.location.reload();
				//Limpiar();			
			}
		}

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("aumenta="+aumenta+"&idD="+idD);

}