/*simulacion de una tienda con carrito de compras sumando articulos, pudiendo volver a ver el monto acumulado y 
pago en cuotas validando que sea entre 1 y 12 pagos 
y validando que no pueda pagar si su carrito esta vacio
 */

function calcCuotas(cant,carro) {
    carro=carro/cant
    return carro
}

let opcion=0
let carrito=0


alert("Bienvenido a - Primer pre entrega JS")
let nombre=prompt("Ingrese su nombre: ")

do{
    opcion=parseInt(prompt(`Hola ${nombre} Ingrese la opcion del articulo:
    1- Collar $1000
    2- Medias $2000
    3- Pulsera $1500
    4- Anillo $500
    --------------------------
    5- Ver carrito
    6- Pagar 
    0- Salir`))

    switch(opcion){
        case 1:
            carrito=carrito+1000
            alert(`
            +1 Collar
            +$1000 
            Su carrito tiene un total de $ ${carrito}`)
            break
        case 2:
            carrito=carrito+2000
            alert(`
            +1 Medias
            +$2000 
            Su carrito tiene un total de $ ${carrito}`)
            break
        case 3:            
            carrito=carrito+1500
            alert(`
            +1 Pulsera
            +$1500
            Su carrito tiene un total de $ ${carrito}`)
            break
        case 4:           
            carrito=carrito+500
            alert(`
            +1 Anillo
            +$500
            Su carrito tiene un total de $ ${carrito}`)
            break
        case 5:
            alert(`El total de su carrito es: ${carrito}`)
            break
        case 6:
            if (carrito>0){
                let opCuotas=parseInt(prompt(`Ingrese la cantidad de cuotas, entre 1 y 12 pagos `))
                while(opCuotas<=0 || opCuotas>12){
                    opCuotas=prompt(`
                    Error!!!
                    Ingrese un numero entre 1 y 12:`)
                }
                let cuotas=calcCuotas(opCuotas,carrito)
                alert(`El total de la compra es $ ${carrito} en ${opCuotas} pagos de $ ${cuotas}
                Proximamente le enviaremos su factura
                Gracias por su compra. `)
                opcion=0
            }else{
                alert(`Primero debe agregar productos a su carrito`)
            }
            break
        case 0:
            if (carrito==0){
                alert("Gracias por visitarnos")
            }else
            {
                alert(`El total de su compra es: ${carrito}`)
            }
            break
        default:
            alert("Opcion invalida")
    }
            
}while(opcion!=0)       