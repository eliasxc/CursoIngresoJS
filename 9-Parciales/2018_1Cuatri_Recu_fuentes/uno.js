
function mostrar()
{
  var ancho , largo ;

  ancho = prompt("ingrese amcho: ");

  ancho = parseInt(ancho);

  largo = prompt("ingreselargo: ");

  largo = parseInt(largo);

  perimetro = 2 * largo + 2 * ancho ;

  alert("el perimetro sera: " + perimetro );

}
