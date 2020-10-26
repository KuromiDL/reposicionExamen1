'use strict';
const input_precio = document.querySelector('#txt-precio');
const input_codigp = document.querySelector('#txt-codigo');
const input_nombre 

let codigo_seleccionado = localStorage.getItem ('prod_seleccionado');
let producto = buscar_producto (codigo_seleccionado);

console.log(producto);

if(producto){
    mostrar_datos();


}
    Swal.fire({
        icon: 'warning',
        title: 'seleccione un producto',
        text: 'para editar un producto debe haberlo seleccionado previamente'

    }).then(() => {
        window.location.href = 'mostrar-productos.html';

    });;
};

    boton_guardar.addEventListener('click', () => {
        let producto = {
            'codigo': input_codigo.value,
            'nombre': input_nombre.value,
            'precio': Number (input_precio.value),
            'caducidad': input_fecha.value,

    };
    actualizar_producto(producto);
});