'use strict';

const seccion_productos = document.querySelector('#sct-productos');

const mostrar_productos = () => {

    let lista_productos = obtener_productos();
    seccion_productos.innerHTML = '';


    lista_productos.forEach(obj_producto => {
        let card = document.createElement('div');
        card.classList.add('card');

        let nombre = document.createElement('h2');
        nombre.innerText = obj_producto.nombre;

        let precio = document.createElement('p');
        precio.innerText = `Precio: ${obj_producto.precio}`;

        let caducidad = document.createElement('p');
        caducidad.innerText = `Fecha de expiración: ${obj_producto.caducidad}`;

        let boton_editar = document.createElement('button');
        boton_editar.type = 'button';
        boton_editar.innerText = 'Editar';
        boton_editar.id = obj_producto.codigo;

        boton_editar.addEventListener('click', () =>{
            localStorage.setItem('prod_selecionado', obj_producto.codigo);
            window.location.href = 'editar-producto.html';
   


        });



        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(caducidad);
        card.appendChild(boton_editar);

        seccion_productos.appendChild(card);
    });

};


mostrar_productos();