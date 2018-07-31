function mostrar()
{

	var contador=0;

	var positivo=0;

	var negativo=1;
	
	var respuesta='si';

	var numero ;

while(respuesta != "no" )
	{
		numero = parseInt(prompt("Ingrese un numero:"));

        if (numero > 0)
        {
        	positivo = positivo + numero ; 
        }
        else if(numero < 0)
        {
        	negativo = negativo * numero ;	
        }
		respuesta = prompt( " ¿ Desea continuar ?    (si/no)") ;
	}


document.getElementById('suma').value=positivo;

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN