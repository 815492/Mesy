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

function MostrandoY(idProducto){

	divResultado = document.getElementById('resultado');

	ajax = objetoAjax();
	ajax.open("POST", "clases/mostrarProductosY.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){

			divResultado.innerHTML = ajax.responseText
			//window.location.reload();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idProducto="+idProducto);

}
function Mostrando(idCategoria,idM){

	divResultado = document.getElementById('resultado');

	ajax = objetoAjax();
	ajax.open("POST", "clases/mostrarProductos.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){

			divResultado.innerHTML = ajax.responseText
			//window.location.reload();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idCategoria="+idCategoria+"&idM="+idM);

}
function Mostrando1(idCategoria,idM){

	divResultado = document.getElementById('resultado');

	ajax = objetoAjax();
	ajax.open("POST", "clases/mostrarProductosLlevar.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){

			divResultado.innerHTML = ajax.responseText
			//window.location.reload();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idCategoria="+idCategoria+"&idM="+idM);

}
function Mostrando2(idCategoria,idC){

	divResultado = document.getElementById('resultado');

	ajax = objetoAjax();
	ajax.open("POST", "clases/mostrarProductosDomicilio.php",true);

	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){

			divResultado.innerHTML = ajax.responseText
			//window.location.reload();
		}
	}


	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("idCategoria="+idCategoria+"&idC="+idC);

}