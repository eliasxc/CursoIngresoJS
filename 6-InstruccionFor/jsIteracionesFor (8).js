function mostrar()
{

var numero ;

var contadorprimo = 0 ;

numero = parseInt(prompt("Ingrese numero")) ;

for( var i =  0 ; i < numero ; i ++ ) {

	if ((numero % i) == 0 ) {

		contadorprimo ++ ;
	}
}

if (contadorprimo <= 2) {

	alert("Es un numero primo") ;
}
else {

	alert("No es un numero primo");
}
	


}//FIN DE LA FUNCIÓN