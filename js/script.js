'user strict';
const secc_cards = document.querySelector('#sct-cards');

const imprimir_cards = () =>{
    personas.forEach(obj_persona =>{
        let card = document.createElement('div');
        card.classList.add('card');
       let titulo_nombre = document.createElement('h2');
       titulo_nombre.innerHTML = `${obj_persona.name} ${obj_persona.last_name}`;
       let contenedor_img = document.createElement('div');
       contenedor_img.classList.add('img-container');
       let img_foto = document.createElement('img');
       img_foto.src = obj_persona.photo;


       card.appendChild(titulo_nombre);
       contenedor_img.appendChild(img_foto);
       secc_cards.appendChild(card);
       secc_cards.appendChild(contenedor_img);

    });

};
imprimir_cards();