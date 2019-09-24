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

function Registrar(){
	
	ticket 		= document.frmCompras.ticket.value;
	idItem 		= document.frmCompras.idItem.value;
	idProveedor = document.frmCompras.idProveedor.value;
	cantidad 	= document.frmCompras.cantidad.value;
	precio 		= document.frmCompras.precio.value;
	hora 		= document.frmCompras.hora.value;
	fecha 		= document.frmCompras.fecha.value;

	ajax = objetoAjax();
	ajax.open("POST", "clases/registrarCompras.php",true);
	
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Producto, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("ticket="+ticket+"&idItem="+idItem+"&idProveedor="+idProveedor+"&cantidad="+cantidad+"&precio="+precio+"&fecha="+fecha+"&hora="+hora);
	
}

function Edicion(idCompras){
	
	idItem 		= document.frmECom.idItem.value;
	idProveedor = document.frmECom.idProveedor.value;
	cantidad 	= document.frmECom.cantidad.value;
	precio 		= document.frmECom.precio.value;

	ajax = objetoAjax();
	ajax.open("POST", "clases/actualizarCompras.php",true);
	
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Producto, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("&idItem="+idItem+"&idProveedor="+idProveedor+"&cantidad="+cantidad+"&precio="+precio+"&idCompras="+idCompras);
	
}

function Eliminar(idCompras){
	if(confirm("Estás seguro de eliminar este producto")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarCompras.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Compra de Item Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idCompras="+idCompras);
	}else{
		window.alert("Error al eliminar Producto comuniquese con Soporte!");
	}
}

