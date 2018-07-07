/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre ;

	nombre = document.getElementById("elNombre").value;

	var edad;

	edad = document.getElementById("laEdad").value;

	alert("Su nombre es " + nombre + " y tiene " + edad + " años.");

  /* pido los datos de su "nombre y edad " tomando una variable 
  distinta para cada dato y pedimos mediante document.getelementbyid y los
   muestro concatenados mediante alert */
}

