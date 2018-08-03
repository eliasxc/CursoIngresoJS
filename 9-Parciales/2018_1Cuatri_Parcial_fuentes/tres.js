function mostrar()
{

var precio ; 

var porcentajeDescuento ;

var descuento ; 

var precioConDescuento ;

precio = parseInt(prompt("ingrese el precio :")) ;

porcentajeDescuento = parseInt(prompt("ingrese el descento :")) ;

descuento = porcentajeDescuento / 100 ;

precioConDescuento = precio -(precio * descuento) ;

document.getElementById('elPrecioFinal').value = precioConDescuento ;

}
