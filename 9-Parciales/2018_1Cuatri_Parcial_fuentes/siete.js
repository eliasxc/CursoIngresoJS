function mostrar()
{

var contadorAprobados = 0 ;

var contador = 0 ;

var alumnos = 0 ; 

var nota ;

var notaTotal = 0 ;

var notaMenor ;

var sexoMenor ;

var sexo ;

while (contador < 5) {

alumno = prompt("ingrese el nombre del alumno:") ;

sexo = prompt("Ingrese el sexo del almno:  (f / m) ") ;

sexo = sexo.toLowerCase() ;
	
	while(sexo != "f" && sexo != "m") {

		sexo = prompt("Error, ingrese el sexo (f/m)") ;

		sexo = sexo.toLowerCase() ;
	}

nota = parseInt(prompt("Ingrese la nota:")) ;

	if (contador == 0 ) {

		notaMenor = nota ;
	}
	if (nota < notaMenor  && contador != 0) {

		notaMenor = nota ;

		sexoMenor = sexo ;
	}
	if (sexo == "m" && nota >= 6 ) {

		contadorAprobados ++
	}

notaTotal = nota + notaTotal ;

contador ++ ;

}

promedio = notaTotal / 5 ;

alert(" El promedio total sera :" + promedio ) ;
alert(" La nota mas baja fue " + notaMenor + " del sexo : " + sexoMenor) ;
alert(" La cantidad de hombres qe su nota fue mayor a 6 fue :" + contadorAprobados) ;

}
