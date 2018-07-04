/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Ndividendo;

	var Ndivisor;

	var resto;

	Ndividendo = document.getElementById("numeroDividendo").value;

	Ndividendo = parseInt(Ndividendo);

	Ndivisor = document.getElementById("numeroDivisor").value;

	Ndivisor = parseInt(Ndivisor);

	resto = (Ndividendo % Ndivisor);

	alert ("el resutado es: "+ resto);


}
