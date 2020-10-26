'use strict';

const estadisticas_cards = document.querySelector('#estadisticas');

const imprimir_estadisticas = (campeones_estadistica) => {
    estadisticas.innnerHTML = '';
    campeones_estadistica.forEach(obj_campeon =>{
        let bestHp = campeones.reduce((previo, actual)=>{
            if (actual["stats"].hp > previo["stats"].hp) {
                return actual;
            }else {
                return previo;

            }
        })
    });
    let cardStats = document.createElement('div');
    cardStats.classList.add('cardStats');
    let CampeonDeHP = Document.createElement('div');
    CampeonDeHP.innerText = bestHp;

}
cardStats.appendChild(CampeonDeHP);
cardStats.appendChild(estadisticas_cards);