'use strict';

const estadisticas_cards = document.querySelector('#estadisticas');

const imprimir_estadisticas = (campeones_estadistica) => {
    estadisticas_cards.innnerHTML = '';
    campeones.forEach(obj_campeon => {
        let cardStats = document.createElement('div');
       cardStats.classList.add('cardStats');
        
       
       let campeonDeHp = campeones.reduce((campeonAnterior, campeonSiguiente) => {
        if (campeonSiguiente["stats"].hp > campeonAnterior["stats"].hp) {
           return campeonSiguiente;
       } else {
           return campeonAnterior;
       }
       });
       console.log(campeonDeHp);
       let elCampeonDeHp = document.createElement('p');
       let campeonDelHp = campeonDeHp;
      
       
        elCampeonDeHp.innerText = ` El Campeon de mas HP es: ${campeonDelHp.id + campeonDelHp.title + campeonDelHp.description +  campeonDelHp["stats"].hp + campeonDelHp["stats"].mp +campeonDelHp["stats"].hpperlevel + campeonDelHp["stats"].movespeed + campeonDelHp["stats"].spellblock + campeonDelHp["stats"].armor + campeonDelHp["stats"].hpregen + campeonDelHp["stats"].mpregen + campeonDelHp.tags[0] + campeonDelHp.tags[1]}`;
        console.log(elCampeonDeHp);
        elCampeonDeHp.classList.add('elCampeonDeHp');

        let campeonMenosHp = campeones.reduce((campeonAnterior, campeonSiguiente) => {
            if (campeonSiguiente["stats"].hp < campeonAnterior["stats"].hp) {
               return campeonSiguiente;
           } else {
               return campeonAnterior;
           }
           });
           console.log(campeonMenosHp);
           let elCampeonMenosHp = document.createElement('p');
           let campeonDelMenosHp = campeonMenosHp;
          
           
           elCampeonMenosHp.innerText = ` El Campeon de menos HP es: ${campeonDelMenosHp.id + campeonDelMenosHp.title + campeonDelMenosHp.description +  campeonDelMenosHp["stats"].hp + campeonDelMenosHp["stats"].mp + campeonDelMenosHp["stats"].hpperlevel + campeonDelMenosHp["stats"].movespeed + campeonDelMenosHp["stats"].spellblock + campeonDelMenosHp["stats"].armor + campeonDelMenosHp["stats"].hpregen + campeonDelMenosHp["stats"].mpregen + campeonDelMenosHp.tags[0] + campeonDelMenosHp.tags[1]}`;
            console.log(elCampeonMenosHp);
            elCampeonMenosHp.classList.add('elCampeonMenosHp');
    

        let campeonDearmor = campeones.reduce((campeonAnterior, campeonSiguiente) => {
            if (campeonSiguiente["stats"].armor > campeonAnterior["stats"].armor) {
               return campeonSiguiente;
           } else {
               return campeonAnterior;
           }
           });
           console.log(campeonDearmor);
           let elCampeonDeArmor= document.createElement('p');
           let campeonDelArmor = campeonDearmor;
          
           
           elCampeonDeArmor.innerText = ` El Campeon de mas Armor es: ${campeonDelArmor.id + campeonDelArmor.title + campeonDelArmor.description +  campeonDelArmor["stats"].hp + campeonDelArmor["stats"].mp +campeonDelArmor["stats"].hpperlevel + campeonDelArmor["stats"].movespeed + campeonDelArmor["stats"].spellblock + campeonDelArmor["stats"].armor + campeonDelArmor["stats"].hpregen + campeonDelArmor["stats"].mpregen + campeonDelArmor.tags[0] + campeonDelArmor.tags[1]}`;
            console.log(elCampeonDeArmor);
            elCampeonDeArmor.classList.add('elCampeonDeArmor');
            
        
       

        
       
        cardStats.appendChild(elCampeonDeHp);
        cardStats.appendChild(elCampeonMenosHp);
        cardStats.appendChild(elCampeonDeArmor);
        estadisticas_cards.appendChild(cardStats);
    });
}
imprimir_estadisticas();
