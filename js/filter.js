'use strict';
const secc_cards = document.querySelector('#sct-cards');
const input_filtro = document.querySelector('#txt-filtro');
const selector_tags = document.querySelector('#campeones_tags');
const imprimir_campeones = (lista_campeones) => {
    secc_cards.innerHTML = '';
    let filtro = input_filtro.value.toLowerCase();
    campeones.forEach(obj_campeon => {
        if (obj_campeon.id.toLowerCase().includes(filtro)) {
            let card = document.createElement('div');
            card.classList.add('card');
            let nombre_campeon = document.createElement('h2');
            nombre_campeon.innerText = `${obj_campeon.id}`;
            let contendedor_img = document.createElement('div');
            contendedor_img.classList.add('img-container');
            let campeones_foto = document.createElement('img');
            campeones_foto.src = obj_campeon.icon;
            let titulo_campeon = document.createElement('h3');
            titulo_campeon.innerText = `${obj_campeon.title}`;
            let campeon_descripccion = document.createElement('p');
            campeon_descripccion.innerText = `${obj_campeon.description}`;
            let campeon_hp = document.createElement('p');
            campeon_hp.innerText = `HP: ${obj_campeon["stats"].hp}`;
            let campeon_mp = document.createElement('p');
            campeon_mp.innerText = ` MP: ${obj_campeon["stats"].mp}`;
            let campeon_hpPornivel = document.createElement('p');
            campeon_hpPornivel.innerText = `hpperlevel: ${obj_campeon["stats"].hpperlevel}`;
            let campeon_velocidad = document.createElement('p');
            campeon_velocidad.innerText = `movespeed: ${obj_campeon["stats"].movespeed}`;
            let campeon_bloqueoSpells = document.createElement('p');
            campeon_bloqueoSpells.innerText = `spellblock: ${obj_campeon["stats"].spellblock}`;
            let campeon_armadura = document.createElement('p');
            campeon_armadura.innerText = `armor: ${obj_campeon["stats"].armor}`;
            let campeon_renHp = document.createElement('p');
            campeon_renHp.innerText = `hpregen: ${obj_campeon["stats"].hpregen}`;
            let campeon_renMp = document.createElement('p');
            campeon_renMp.innerText = `mpregen: ${obj_campeon["stats"].mpregen}`;
            let background = document.createElement('div');
            background.classList.add('background');
            let tipo_campeon = document.createElement('p');
            tipo_campeon.innerText = `Type 1: ${obj_campeon.tags[0]}`;
            //tipo_campeon.id = 'tipo1';
            let tipo_campeon2 = document.createElement('p');
            tipo_campeon2.innerText = `Type 2: ${obj_campeon.tags[1]}`;
            //tipo_campeon2.id = 'tipo2';

            switch (obj_campeon.tags[0]) {
                case 'Tank':
                    (obj_campeon.tags[0]) === 'Tank';
                    background.id = 'azulito';
                    break
                case 'Mage':
                     (obj_campeon.tags[0]) === 'Mage';
                    background.id = 'moradito';
                    break;
                case 'Assassin':
    
                    (obj_campeon.tags[0]) === 'Assassin';
                    background.id = 'naranjita';
                    break;
                    default:
                        background.id = 'white';

            }
            switch (obj_campeon.tags[1]) {
                case 'Tank':
                    (obj_campeon.tags[1]) === 'Tank';
                    background.id = 'azulito';
                    break
                case 'Mage':
                    (obj_campeon.tags[1]) === 'Mage';
                    background.id = 'moradito';
                    break;
                case 'Assassin':
                    (obj_campeon.tags[1]) === 'Assassin';
                    background.id = 'naranjita';
                    default:
                    background.id = 'white';

            }

            card.appendChild(nombre_campeon);
            card.appendChild(titulo_campeon);
            card.appendChild(campeones_foto);
            card.appendChild(campeon_hp);
            card.appendChild(campeon_mp);
            card.appendChild(campeon_hpPornivel);
            card.appendChild(campeon_velocidad);
            card.appendChild(campeon_bloqueoSpells);
            card.appendChild(campeon_armadura);
            card.appendChild(campeon_renHp);
            card.appendChild(campeon_renMp);
            card.appendChild(background);
            card.appendChild(tipo_campeon);
            card.appendChild(tipo_campeon2);
            card.appendChild(campeon_descripccion);
            secc_cards.appendChild(card);

        }
    })
}
var options = [];

input_filtro.addEventListener('keyup', imprimir_campeones);
imprimir_campeones();

function filterItems(){
    var opt, sel = form.campeones_tags;
    for (var i = sel.options.lenght -1; i>=0; i--){
        opt = sel.options[i];
        //if (opt.text.toLowerCase()index)

    }


}