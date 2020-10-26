'use strict';

const registrar_producto = (obj_producto) => {

    let lista_productos = obtener_productos();

    lista_productos.push(obj_producto);
    localStorage.setItem('coleccion_productos', JSON.stringify(lista_productos));
};

const obtener_productos = () => {
    let lista_productos;

    if (localStorage.getItem('coleccion_productos')) {
        lista_productos = JSON.parse(localStorage.getItem('coleccion_productos'));
    } else {
        lista_productos = [];
    }

    return lista_productos;

};
const buscar_producto = (codigo) => {
    let lista_productos = obtener_productos();
    let producto;
    lista_productos.forEach((obj_producto) => {
        if (obj_producto.codigo == codigo){
            producto = obj_producto;
        }
        return obj_producto;
    })


return producto;
};
const actualizar_producto = (codigo) => {
    let lista_productos = obtener_productos();
    let index = 0;

    lista_productos.forEach((obj_producto) => {
        if (obj_producto.codigo == producto.codigo){
           obj_producto = producto;
           console.log(obj_producto)
        }
    });
    console.log(lista_productos);
};