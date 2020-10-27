'use strict';

const estadisticas_cards = document.querySelector('#estadisticas');

const imprimir_estadisticas = (campeones_estadistica) => {
    estadisticas_cards.innnerHTML = '';
    
    campeones.forEach(obj_campeon =>{
        let cardStats = document.createElement('div');
       cardStats.classList.add('cardStats');
       let CampeonDeHP = obj_campeon.reduce((campeonAnterior, CampeonSiguiente) =>{
       if (CampeonSiguiente["stats"].mp < campeonAnterior["stats"].mp) {
           return CampeonSiguiente;
       } else {
           return campeonAnterior;
       }
       });
       console.log(CampeonDeHP);
       //if (obj_campeon["stats"].mp )

        /*document.getElementsByClassName("cardStats").innnerHTML = campeones.reduce(myFunc);
        function myFunc(bestHp, (obj_campeon)["stats"].hp); {
            if ( bestHp < obj_campeon)["stats"].hp) 
            return bestHp;
        }*/
          
        /*let CampeonDeHP = document.createElement('div');
        CampeonDeHP.innerText = (bestHp);
       
        cardStats.appendChild(CampeonDeHP);
        estadisticas_cards.appendChild(cardStats);*/
    });
}
imprimir_estadisticas();
