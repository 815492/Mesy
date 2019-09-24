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
	
	cantidad 	= document.frmReceta.cantidad.value;
	nombre 		= document.frmReceta.nombre.value;
	unidad 		= document.frmReceta.unidad.value;
	categoria 	= document.frmReceta.categoria.value;
	idItem 		= document.frmReceta.iditem.value;
	idProducto 	= document.frmReceta.idProducto.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarRecetas.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarRecetas.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos de la cantidad, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("cantidad="+cantidad+"&idItem="+idItem+"&nombre="+nombre+"&unidad="+unidad+"&categoria="+categoria+"&idProducto="+idProducto);
	
}

function RegOpc(accion){
	
	idItemOriginal 		= document.frmOpcItem.idItemOriginal.value;
	cantidadOpcional 	= document.frmOpcItem.cantidadOpcional.value;
	nombreOpcional 		= document.frmOpcItem.nombreOpcional.value;
	unidadOpcional 		= document.frmOpcItem.unidadOpcional.value;
	categoriaOpcional 	= document.frmOpcItem.categoriaOpcional.value;
	aumenta 			= document.frmOpcItem.aumenta.value;
	iditemOpcional		= document.frmOpcItem.iditemOpcional.value;
	idProducto			= document.frmOpcItem.idProducto.value;

	ajax = objetoAjax();
	
	if(accion == 'N'){	
		ajax.open("POST", "clases/registrarReItOp.php",true);
	}else if(accion == 'E'){
		ajax.open("POST", "clases/actualizarReItOp.php",true);
	}
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Item Opcional, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idItemOriginal="+idItemOriginal+"&cantidadOpcional="+cantidadOpcional+"&nombreOpcional="+nombreOpcional+"&unidadOpcional="+unidadOpcional+"&categoriaOpcional="+categoriaOpcional+"&idProducto="+idProducto+"&aumenta="+aumenta+"&iditemOpcional="+iditemOpcional);
	
}

function Eliminar(idI){
	if(confirm("Estás seguro de eliminar este producto")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarRecetas.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Ingrediente Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idI="+idI);
	}else{
		window.alert("Error al eliminar Ingrediente comuniquese con Soporte!");
	}
}
function eliminaOP(idreitop){
	if(confirm("Estás seguro de eliminar este Ingrediente Opcional???")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarOpcional.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Ingrediente Opcional Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idreitop="+idreitop);
	}else{
		window.alert("Error al eliminar Ingrediente comuniquese con Soporte!");
	}
}
function eliminaING(idreceta){
	if(confirm("Estás seguro de eliminar este Ingrediente???")){
						
		ajax = objetoAjax();
		ajax.open("POST", "clases/eliminarIngrediente.php",true);
		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Ingrediente Opcional Eliminado.');
				window.location.reload();
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("idreceta="+idreceta);
	}else{
		window.alert("Error al eliminar Ingrediente comuniquese con Soporte!");
	}
}
function Actop(){
	
	idreitop	= document.frmOpcItem.idreitop.value;
	cantidad 	= document.frmOpcItem.cantidad.value;
	aumento 	= document.frmOpcItem.aumento.value;

	ajax = objetoAjax();	
	ajax.open("POST", "clases/actualizarReItOp.php",true);
	
	
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			alert('Datos del Item Opcional, fuerom guardados correctamente.');
			window.location.reload();
			//Limpiar();			
		}
	}
	

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idreitop="+idreitop+"&cantidad="+cantidad+"&aumento="+aumento);
	
}