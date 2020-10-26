'use strict';

const estadisticas_cards = document.querySelector('#estadisticas');

const imprimir_estadisticas = (campeones_estadistica) => {
    estadisticas_cards.innnerHTML = '';
    
    campeones.forEach(obj_campeon =>{
        let cardStats = document.createElement('div');
        cardStats.classList.add('cardStats');
        let bestHp = campeones.reduce(function(previo, actual) {
            if (actual (obj_campeon)["stats"].hp > previo["stats"].hp){
                return actual;
            }else {
                return previo;

            }
          
        })
        let CampeonDeHP = document.createElement('div');
        CampeonDeHP.innerText = (bestHp);
       
        cardStats.appendChild(CampeonDeHP);
        estadisticas_cards.appendChild(cardStats);
    });
    
   

}
imprimir_estadisticas();
