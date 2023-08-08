// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene que tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un alerta al usuario, diciéndole que el producto ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su combra.

class Objetos{
    constructor (nombre, precio, cantidad, categoria, id){
        this.nombreProducto = nombre;
        this.precioProducto = precio;
        this.cantidad = cantidad;
        this.categoriaProducto = categoria;
        this.idProducto = id;
    }
}



const productoTeclado = new Objetos ("Teclado Philips" , 10000 , 5 , "Gaming" , 6870 )

const productoMouse = new Objetos ("Mouse Philips" , 5000 , 8 , "Gaming" , 4443 )

const productoMonitor = new Objetos ("Monitor Gigabyte" , 64000, 3 , "Gaming" , 8206 )

const productoNotebook = new Objetos ("Notebook HP (Gamer)" , 285000, 2 , "Gaming" , 2408 )

const productoAuris = new Objetos ("Auriculares (Gamer)" , 21000, 6 , "Gaming" , 2412 )

const productos = []

productos.push(
    productoTeclado,
    productoMouse,
    productoMonitor,
    productoNotebook,
    productoAuris,
)


const productosOrdenados = productos.slice().sort(( a, b ) => {
    if ( a.nombreProducto < b.nombreProducto ) {
        return -1;
    } else if ( a.nombreProducto > b.nombreProducto ) {
        return 1;
    } else {
        return 0;
    }
})


const envio = 4320


let nombreUsuario = prompt("Buenass, ponga su nombre y apellido")
let preguntaUsuario = prompt(`Hola ${nombreUsuario}. ¿Que desea llevar, tenemos: teclado, mouse, monitor, notebook, auriculares`)


const productoEncontrado = productos.find( (producto) => producto.nombreProducto === preguntaUsuario
)

console.log(productoEncontrado)










/*
if (preguntaUsuario === "teclado"){
    alert(`Gracias por su compra, lo que compro es un ${productoTeclado.nombreProducto} que cuesta $${productoTeclado.precioProducto}, y tiene envio gratis`)
}else if (preguntaUsuario === "mouse"){
    alert(`Gracias por su compra, lo que compro es un ${productoMouse.nombreProducto} que cuesta $${productoMouse.precioProducto}, y tiene envio gratis`)
}else if (preguntaUsuario === "monitor"){
    alert(`Gracias por su compra, lo que compro es un ${productoMonitor.nombreProducto} que cuesta $${productoMonitor.precioProducto}, y el envio cuesta $${envio}, el precio final es de $${productoMonitor.precioProducto+envio}`)
}else if (preguntaUsuario === "notebook"){
    alert(`Gracias por su compra, lo que compro es un ${productoNotebook.nombreProducto} que cuesta $${productoNotebook.precioProducto}, y el envio cuesta $${envio}, el precio final es de $${productoNotebook.precioProducto+envio}`)
}else if (preguntaUsuario === "auriculares"){
    alert(`Gracias por su compra, lo que compro es un ${productoAuris.nombreProducto} que cuesta $${productoAuris.precioProducto}, y tiene envio gratis`)
}else{
    alert("El tipo de producto que ingreso no es valido")
}
*/
