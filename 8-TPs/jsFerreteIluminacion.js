/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad , marca , precioLampara, precioDescuento ,precioBruto ,descuento , precioFinal;

 	descuento = 1

 	precioLampara = 35 ;

 	precioBruto = precioLampara * cantidad ;

 	cantidad = document.getElementById('Cantidad').value ;

 	cantidad = parseInt(cantidad);

 	marca = document.getElementById('Marca').value;

 
 	switch (canidad)
 	{
 		case 1 :
        case 2 :
        	break ;

        case 3 :
        

        	switch (marca) 
        	{
               case "ArgentinaLuz" :

               	descuento = 0.85 ;

               		break;

               case "FelipeLamparas" :
               		
               	descuento = 0.90 ;

               		break;

               default 

               	descuento = 0.95 ;
            }   	
        	
            
    }// switch (cantidad)

   	
   	precioFinal = precioBruto * descuento;	

   	document.getElementById("precioDescuento").value = precioFinal ;

}
