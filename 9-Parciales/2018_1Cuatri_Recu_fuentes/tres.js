function mostrar()
{
    var precio , porcentaje , descuento ;

    precio = prompt("ingrese precio : ");

    precio = parseInt(precio);

    porcentaje = prompt("ingrese porcentaje del descuento : ");

    porcentaje = parseInt(porcentaje);

    porcentaje = porcentaje / 100 ;

    precioFinal = precio - precio * porcentaje

    document.getElementById("elPrecioFinal").value = precioFinal;
}
