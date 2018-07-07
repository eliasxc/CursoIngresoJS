/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;

    var numeroDos;

    var resultado;

    numeroUno = document.getElementById("numeroUno").value;

    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById("numeroDos").value;

    numeroDos = parseInt(numeroDos);

    resultado = (numeroUno + numeroDos);

    alert ("el resultado es : " + resultado);

    /*  tomo dos variables numericas y las sumo mediante otra 
       variable nueva llamada resultado, mediante + , utilizo 
       parseint para que tome el valor numerico del valor que 
       ingrese, sino lo tomara como texto y lo concatenaray no 
       lo sumara   
    */

}

