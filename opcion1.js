/**
Desarrolle el siguiente algoritmo:
Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan en galones. Realice un algoritmo, y represéntelo en JS, que ayude al productor
a saber cuánto recibirá por la entrega de su producción de un día (1 galón = 3.785 litros).

Si se analiza el problema se puede establecer que los datos que se necesitan para resolver el problema son los que se muestran en la tabla

**/

// prec_galon = 3.99;

function ventaLeche(){

    var litros = +prompt("Ingrese la producción del día: ");
    console.log("El productor obtuvo "+litros+" Litros de leche")
    var prec_galon = +prompt("Ingrese el precio por galón: ");
    console.log("El precio por galón es de S/."+prec_galon+" Nuevos Soles.")

    var tot_galon;
    var galon = 3.785;
    var ganancia;

        tot_galon = litros / galon;
        ganancia = tot_galon*prec_galon;

    console.log("El productor recibe S/."+ganancia.toFixed(3)+" Nuevos Soles por la venta de su leche.")
}
ventaLeche();
