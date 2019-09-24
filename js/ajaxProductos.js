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

function Registrar(idI,accion){
	
	producto 	= document.frmProductos.producto.value;
	tamaño 		= document.frmProductos.tamaño.value;
	precio 		= document.frmProductos.precio.value;
	categoria 	= document.frmProductos.categoria.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarProductos.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarProductos.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Producto, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("producto="+producto+"&idI="+idI+"&tamaño="+tamaño+"&precio="+precio+"&categoria="+categoria);
	
}

function RSR(){
	
	idItem 	= document.frmPSR.idItem.value;
	tamaño 	= document.frmPSR.tamaño.value;
	precio 	= document.frmPSR.precio.value;

	ajax = objetoAjax();
	ajax.open("POST", "clases/registrarPSR.php",true);
	
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Producto, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idItem="+idItem+"&tamaño="+tamaño+"&precio="+precio);
	
}

function Eliminar(idI){
	if(confirm("Estás seguro de eliminar este producto")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarProductos.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Producto Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idI="+idI);
	}else{
		window.alert("Error al eliminar Producto comuniquese con Soporte!");
	}
}
function DES(){
		
	idProducto	= document.frmDes.idProducto.value;
	iditem  	= document.frmDes.idItem.value;
	
		ajax = objetoAjax();
		ajax.open("POST", "clases/registrarDesechables.php",true);
		
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('Desechable Asignado');
				window.location.reload();
				//Limpiar();			
			}
		}
		

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("&idProducto="+idProducto+"&iditem="+iditem);
			
}