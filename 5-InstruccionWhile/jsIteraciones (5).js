function mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo = sexo.toLowerCase() ;

while(!(sexo == "f" || sexo == "m" /* || sexo == M || sexo == F */))
	{
		sexo = prompt("reingrese f ó m .");

		sexo = sexo.toLowerCase() ;
	}

document.getElementById('Sexo').value=sexo;

//   variable.toLowerCase     cambia las mayusculas por minusculas 
//   variable.toLowerUp lo contrario

}//FIN DE LA FUNCIÓN