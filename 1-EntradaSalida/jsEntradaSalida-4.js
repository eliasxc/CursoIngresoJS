/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt("ingrese dato");

	document.getElementById("elNombre").value = nombre;

/* tome una variable y pedimos informacion mediante el prompt 
y se muertra por el document.getelementbyid*/

}

