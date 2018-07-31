function mostrar()
{
//Genero el número RANDOM entre 1 y 10 

var notaRandom ;

notaRandom = parseInt(Math.floor(Math.random()*(10)+1)) ;

if (notaRandom >= 9 ) {

	alert("EXELENTE") ;
}
else if (notaRandom >= 4) {
	alert("APROBO") ;
}
else {
	alert("Vamos, la proxima se puede !!") ;
}


}//FIN DE LA FUNCIÓN