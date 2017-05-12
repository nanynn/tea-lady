function mostrarData(){
	var name = document.getElementById('nombre').value; 
	var lastName = document.getElementById('apellido').value; 
	var email = document.getElementById('correo').value; 
	var adress = document.getElementById('direccion').value; 
	var phono = document.getElementById('fono').value; 
	var selec = document.getElementById('eleccion').value; 
	var contenedor = document.getElementById('mostrar');

	contenedor.innerHTML += name + "<br>" + lastName + "<br>" + email + "<br>" + adress + "<br>" + phono + "<br>" + selec + "<br>";
	
}



/*function Datos(nombre, apellido, correo, direccion, fono){
	this.nombre = nombre;
	this.apellido = apellido;
	this.correo = correo;
	this.direccion = direccion;
	this.fono = telefono;
}

var informacion = [];
var selecDos = document.getElementById('eleccion').value;

function agregarPersona(){
	var persona = new Datos(nombre, apellido, correo, direccion, fono);
	informacion.push(persona);
	imprimir(nombre, apellido, correo, direccion, fono, selecDos)
}

function imprimir(nombre, apellido, correo, direccion, fono, selecDos){
	var print = document.getElementsByTagName('input')[0].value;
	print.innerHTML = nombre + apellido + correo + direccion + fono + selecDos;
}

function mostrarData(imprimir){
	informacion.forEach(function(element){
		var contenido=document.getElementById('mostrarDatos');
		contenido.innerHTML += element.nombre  + element.apellido + element.correo + element.direccion + element.fono+ selecDos;
	})
}
*/