function mostrar()
{

var inicio = 1 ; 

var contadorPares = 0 ; 

numero = parseInt(prompt("ingrese numero :")) ;

console.log(inicio) ;

inicio ++ ;

for(var numero ; inicio < numero ; inicio += 2 ) {

	if (inicio  % 2 == 0 ) {

		contadorPares ++		
	}
console.log(inicio) ;

}

console.log("cantidad de pares : " + contadorPares) ;


}//FIN DE LA FUNCIÓN