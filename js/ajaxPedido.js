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

	idProducto	= document.frmCantidad.idProducto.value;
	idM			= document.frmCantidad.idM.value;
	kind		= document.frmCantidad.kind.value;
	cantidad	= document.frmCantidad.cantidad.value;

	ajax = objetoAjax();
	ajax.open("POST", "clases/registrarPedido.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			//alert('Producto Seleccionado, fue guardado correctamente.');
			window.location.reload();
			//$("#detalle").load(" #detalle");
			//Limpiar();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idProducto="+idProducto+"&idM="+idM+"&kind="+kind+"&cantidad="+cantidad);

}

function Add(idD,idI,idM,kind){

	ajax = objetoAjax();
	ajax.open("POST", "clases/registrarAdd.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			//alert('Producto Seleccionado, fue guardado correctamente.');
			window.location.reload();
			//$("#detalle").load(" #detalle");
			//Limpiar();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idD="+idD+"&idI="+idI+"&idM="+idM+"&kind="+kind);

}

function Remove(){

    idD         = document.frmRemove.idD.value;
    idI         = document.frmRemove.idP.value;
    idM         = document.frmRemove.idM.value;
    kind        = document.frmRemove.kind.value;
    eliminaPass = document.frmRemove.eliminaPass.value;

    if(eliminaPass == "Bichos1"){

    	ajax = objetoAjax();
    	ajax.open("POST", "clases/registrarRemove.php",true);
    
    	ajax.onreadystatechange=function() {
    		if(ajax.readyState==4){
    			//alert('Producto Seleccionado, fue guardado correctamente.');
    			window.location.reload();
    			//$("#detalle").load(" #detalle");
    			//Limpiar();
    		}
    	}
    
    
    	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    	ajax.send("idD="+idD+"&idI="+idI+"&idM="+idM+"&kind="+kind);
    
    }else{
        alert("Contraseña Incorrecta");
        window.location.reload();
    }

}

function Cobrando(){

	cuenta  	= parseFloat(document.frmCuenta.cuenta.value);
	pago 		= parseFloat(document.frmCuenta.pago.value);
	idM  		= document.frmCuenta.idM.value;
	idP 		= document.frmCuenta.idP.value;
	forma 		= document.frmCuenta.forma.value;
	tipo 		= document.frmCuenta.tipo.value;
	kind 		= document.frmCuenta.kind.value;

	switch(forma){
		case "contado":
					    if(cuenta > pago) {
					   		alert('No es posible cobrar la cuenta, el pago es menor al monto total');
					   	}else{
					   		cambio  = pago - cuenta;
					   		leyenda='Cuenta Cobrada!!' + 'Cambio: $' + cambio;
					   		redireccion="clases/registrarCuenta.php";
					   		window.open("http://192.168.1.100/impresion/cajon.php?idP="+idP+"&idM="+idM+"&cuenta="+cuenta+"&kind="+kind+"&pago="+pago+"&cambio="+cambio);
					   		//alert("entre aki");
					   	}

					   	break;
		case "parcial":
						if(cuenta > pago){
							resta  = cuenta - pago;
							cambio=0;
							leyenda="No se a cubierto la cuenta.Restan $"+resta;
						}else{
							cambio  = pago - cuenta;
							leyenda='Cuenta Cobrada!!' + 'Cambio: $' + cambio;
						}
						redireccion="clases/registrarAbono.php";

						break;
	}

	ajax = objetoAjax();
	ajax.open("POST", redireccion ,true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			//alert(leyenda);
			window.location.reload();
			//Limpiar();
		}
	}

	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("cuenta="+cuenta+"&idM="+idM+"&cambio="+cambio+"&idP="+idP+"&pago="+pago+"&forma="+forma+"&tipo="+tipo+"&kind="+kind);

}

function Mesa(){

	idM  	= document.frmMesa.idM.value;
	idP 	= document.frmMesa.idP.value;
	mesa 	= document.frmMesa.mesa.value;


		ajax = objetoAjax();
		ajax.open("POST", "clases/cambiarComanda.php",true);


		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Cambio de Mesa Exitoso!!!');
				window.location.href="ticketLocal.php?idM="+mesa;
				//Limpiar();
			}
		}


		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("&idM="+idM+"&idP="+idP+"&mesa="+mesa);

}

function Comanda(idM,idP,kind){


		ajax = objetoAjax();
		//ajax.open("POST", "clases/imprimirComanda.php",true);
		ajax.open("POST", "http://localhost/agile/pruebas.php",true);

		ajax.onreadystatechange=function() {
			if(ajax.readyState==4){
				alert('Comanda Impresa');
				window.location.reload();
				//Limpiar();
			}
		}


		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("&idM="+idM+"&idP="+idP+"&kind="+kind);

}

function impCuenta(){
		
		idM 		= document.frmDes.idM.value;
		idP 		= document.frmDes.idP.value;
		cuenta 	= document.frmDes.cuenta.value;
		descuento 	= document.frmDes.descuento.value;
		kind 		= document.frmDes.kind.value;

		ajax = objetoAjax();
		ajax.open("POST", "clases/imprimirCuenta.php",true);
		
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('Cuenta Impresa');
				window.location.reload();
				//Limpiar();			
			}
		}
		

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("&idM="+idM+"&idP="+idP+"&cuenta="+cuenta+"&kind="+kind+"&descuento="+descuento);
			
}

function Observacion(){
	
	obs  	= document.frmObs.obs.value;
	idM  	= document.frmObs.idM.value;
	idD 	= document.frmObs.idD.value;
		
		ajax = objetoAjax();
		ajax.open("POST", "clases/registrarObsProducto.php",true);
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('La observaci贸n fue registrada.');
				window.location.reload();
				//Limpiar();			
			}
		}

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("obs="+obs+"&idM="+idM+"&idD="+idD);
			
}
function Opcional(){
	
	nombre  		= document.frmOps.nombre.value;
	itemOpcional  	= document.frmOps.itemOpcional.value;
	idPedido 		= document.frmOps.idPedido.value;
	idProducto 		= document.frmOps.idProducto.value;
	idM 			= document.frmOps.idM.value;
	kind 			= document.frmOps.kind.value;
		
		ajax = objetoAjax();
		ajax.open("POST", "clases/registrarOpsProducto.php",true);
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('La observaci贸n fue registrada.');
				window.location.reload();
				//Limpiar();			
			}
		}

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("nombre="+nombre+"&itemOpcional="+itemOpcional+"&idPedido="+idPedido+"&idM="+idM+"&idProducto="+idProducto+"&kind="+kind);
			
}

function elimnaDet(){
    idD  		= document.frmPermiso.idD.value;
    idM  		= document.frmPermiso.idM.value;
    idP  		= document.frmPermiso.idP.value;
    idI  		= document.frmPermiso.idI.value;
    eliminaPass = document.frmPermiso.eliminaPass.value;
    
    if(eliminaPass == "Bichos1"){
    
    	if(confirm("Esta segur@, de querer eliminar este Producto?")){
    						
    		ajax = objetoAjax();
    		ajax.open("POST", "clases/eliminarPedido.php",true);
    		ajax.onreadystatechange=function() {
    			if(ajax.readyState==4){
    				alert('Producto Eliminado.');
    				window.location.reload();
    			}
    		}
    		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    		ajax.send("idD="+idD+"&idM="+idM+"&idP="+idP+"&idProducto="+idI);
    	}else{
    		window.alert("Error al eliminar Evento comuniquese con Soporte!");
    	}
    	
    }else{
        alert("Contraseña Incorrecta");
        window.location.reload();
    }
}

function Ingredientes(){
	
	idP  			= document.frmIng.idP.value;
	idM  			= document.frmIng.idM.value;
	idD 			= document.frmIng.idD.value;
	
	cual = 'g[]';
    f= document.frmIng;
 	todos = new Array();
	 for (var i = 0, total = f[cual].length; i < total; i++)
	   if (f[cual][i].checked) todos[todos.length] = f[cual][i].value;
	   var elejidos = todos;
	
		
		ajax = objetoAjax();
		ajax.open("POST", "clases/registrarIngredientes.php",true);
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('La observaci贸n fue registrada.');
				window.location.reload();
				//Limpiar();			
			}
		}

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("elejidos="+elejidos+"&idM="+idM+"&idD="+idD+"&idP="+idP);
			
}
function Descuentos(){
	
	idPedido	= document.frmDescuento.idPedido.value;
	idM  		= document.frmDescuento.idM.value;
	cuenta 		= document.frmDescuento.total.value;
	kind 		= document.frmDescuento.kind.value;
	descuento 	= document.frmDescuento.descuento.value;
		
		ajax = objetoAjax();
		ajax.open("POST", "clases/registrarDescuentos.php",true);
		
		ajax.onreadystatechange=function() { 
			if(ajax.readyState==4){
				alert('Descuento Agregado.');
				window.location.reload();
				//Limpiar();			
			}
		}

		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send("descuento="+descuento+"&idM="+idM+"&cuenta="+cuenta+"&idPedido="+idPedido+"&kind="+kind);
}
function agregarCodigo(){

	codigo	= document.frmCodigo.codigo.value;
	idM		= document.frmCodigo.idM.value;
	kind	= document.frmCodigo.kind.value;

	ajax = objetoAjax();
	ajax.open("POST", "clases/registrarPedidoCodigo.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			//alert('Producto Seleccionado, fue guardado correctamente.');
			window.location.reload();
			//$("#detalle").load(" #detalle");
			//Limpiar();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("codigo="+codigo+"&idM="+idM+"&kind="+kind);

}