function mostrar()
{
     var precio , porcentaje ;

    precio = prompt("ingrese precio: ");

    precio = parseInt(precio);

    porcentaje = prompt("ingrese descuento: " , "%")

    porcentaje = parseInt(porcentaje);

    descuento = porcentaje/100 ;

    DineroDescuento = precio * descuento ;

    PrecioDescuento = precio - Ddescuento ;

    IVA = precio * 0.21 ;

    alert ("el precio del descuento sera: " + DineroDescuento + " y el precio con el descuento sera :" + PrecioDescuento + " y el IVA sera: " + IVA);

    Preciofinal = PrecioDescuento + IVA ;

    document.getElementById('elPrecioFinal').value = Preciofinal ;

}
