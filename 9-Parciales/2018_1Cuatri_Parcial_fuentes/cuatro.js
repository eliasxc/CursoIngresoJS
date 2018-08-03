function mostrar()
{

var numero1 ;

var numero2 ;

var resultado ;

numero1 = parseInt(prompt("ingrese un numero")) ;

numero2 = parseInt(prompt("ingrese un numero")) ;

if (numero1 == numero2) {

	alert(numero1 + "" + numero2) ;
}
else if (numero1 > numero2) {

	resultado = numero1 - numero2 ;

	alert(resultado) ;
}
else if (numero1 < numero2) {

	resultado = numero1 + numero2 ;

	alert(resultado) ;
}
if ((numero1 + numero2) > 10 ) {

	alert("la suma es " + (numero1 + numero2) + " y supero el 10") ;
}

}
