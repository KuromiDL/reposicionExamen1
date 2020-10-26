'use strict';

const boton_guardar = document.querySelector('#btn-guardar');
const input_precio = document.querySelector('#txt-precio');
const input_codigo = document.querySelector('#txt-codigo');
let campos_requeridos;



const limpiar = () => {
    campos_requeridos = document.querySelectorAll(':required')
    campos_requeridos.forEach(input => {
        input.value = '';
    });
};
const validar = () => {

    let error = false;
    let exp_precio = /^[0-9]+.?[0-9]*$/;
    let exp_codigo = /^[a-zA-Z]{3}[0-9]{2}$/;
    campos_requeridos = document.querySelectorAll(':required')

    campos_requeridos.forEach(input => {
        if (input.value == '' || input.value.length == 0) {
            input.classList.add('error');
            error = true;
        } else {
            input.classList.remove('error');
        }
    });

    if (exp_codigo.test(input_codigo.value)) {
        input_codigo.classList.remove('error');
    } else {
        input_codigo.classList.add('error');
        error = true;
    }

    if (exp_precio.test(input_precio.value)) {
        input_precio.classList.remove('error');
    } else {
        input_precio.classList.add('error');
        error = true;
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede guardar el producto',
            'text': 'Por favor revise los campos resaltados'
        });
    } else {
        let producto = {
            'codigo': input_codigo.value,
            'nombre': document.querySelector('#txt-producto').value,
            'precio': Number(input_precio.value),
            'caducidad': document.querySelector('#txt-caducidad').value,
        };

        registrar_producto(producto)


        Swal.fire({
            'icon': 'success',
            'title': 'Producto guardado con éxito',
            'text': 'Presione \'ok\' para continuar'
        }).then(() => {
            limpiar();
            //window.location.href = 'lista.html';
        });
    }
};

boton_guardar.addEventListener('click', validar);