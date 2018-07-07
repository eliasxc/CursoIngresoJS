/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno , numeroDos ;

	numeroUno = document.getElementById("numeroUno").value ;

	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("numeroDos").value ; 

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos ;

	alert ("la suma sera : " + resultado );

}

function restar()
{
	var numeroUno , numeroDos ;

	numeroUno = document.getElementById("numeroUno").value ;

	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("numeroDos").value ; 

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos ;

	alert ("la suma sera : " + resultado );
}

function multiplicar()
{ 
	var numeroUno , numeroDos ;

	numeroUno = document.getElementById("numeroUno").value ;

	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("numeroDos").value ; 

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos ;

	alert ("la suma sera : " + resultado );
}

function dividir()
{
	var numeroUno , numeroDos ;

	numeroUno = document.getElementById("numeroUno").value ;

	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById("numeroDos").value ; 

	numeroDos = parseInt(numeroDos);

	resultado = numeroUno / numeroDos ;

	alert ("la suma sera : " + resultado );
}

