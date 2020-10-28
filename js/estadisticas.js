'use strict';

const estadisticas_cards = document.querySelector('#estadisticas');
//const cardStats = document.createElement('div');



let campeonMenosHp = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["stats"].hp < campeonAnterior["stats"].hp) {
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});
let tanqueDeMp = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["tags"][0] == 'Tank' && campeonSiguiente["stats"].mp > campeonAnterior["stats"].mp || campeonSiguiente["tags"][1] == 'Tank' && campeonSiguiente["stats"].mp > campeonAnterior["stats"].mp ) {
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});
let campeonDeHp = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["stats"].hp > campeonAnterior["stats"].hp) {
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});
let campeonDearmor = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["stats"].armor > campeonAnterior["stats"].armor) {
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});
let tanqueDeArmor = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["tags"][0] == 'Tank' && campeonSiguiente["stats"].armor > campeonAnterior["stats"].armor || campeonSiguiente["tags"][1] == 'Tank' && campeonSiguiente["stats"].armor > campeonAnterior["stats"].mp ) {
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});
//attackdamage
let magoAtaque = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["tags"][0] == 'Mage' && campeonSiguiente["stats"].armor > campeonAnterior["stats"].attackdamage || campeonSiguiente["tags"][1] == 'Mage' && campeonSiguiente["stats"].attackdamage > campeonAnterior["stats"].attackdamage ) {
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});
let campeonDanoEsp = campeones.reduce((campeonAnterior, campeonSiguiente) => {
    if (campeonSiguiente["stats"].attackdamageperlevel == 3.1416){
        return campeonSiguiente;
    } else {
        return campeonAnterior;
    }
});

const imprimir_estadisticas = (campeones_estadistica) => {
    estadisticas_cards.innnerHTML = '';

    

        let cardStats = document.createElement('div');
        cardStats.classList.add('cardStats');
        let tanqueDelArmor = document.createElement('p');
        let tanqueDelArmorPicDiv = document.createElement('div');
        tanqueDelArmorPicDiv.classList.add('picContainer');
        let tanqueDelArmorPic = document.createElement('img');
        tanqueDelArmorPic.src = tanqueDeArmor.icon;
        tanqueDelArmorPic.classList.add('foto');
        
        tanqueDelArmor.innerHTML = ` El campeon tanque peor Armadura es: + ${tanqueDeArmor.id + tanqueDeArmor.title  +  tanqueDeArmor["stats"].hp + tanqueDeArmor["stats"].mp +tanqueDeArmor["stats"].hpperlevel + tanqueDeArmor["stats"].movespeed + tanqueDeArmor["stats"].spellblock + tanqueDeArmor["stats"].armor + tanqueDeArmor["stats"].hpregen + tanqueDeArmor["stats"].mpregen + tanqueDeArmor.description}`;
        console.log(tanqueDelArmor);
        tanqueDelArmor.classList.add('statsDash');
        
        let magoDelAtaque = document.createElement('p');
        let magoDelAtaquePicDiv = document.createElement('div');
        magoDelAtaquePicDiv.classList.add('picContainer');
        let magoDelAtaquePic = document.createElement('img');
        magoDelAtaquePic.src = magoAtaque.icon;
        magoDelAtaquePic.classList.add('foto');
        
        magoDelAtaque.innerHTML = ` El campeon tanque peor Armadura es: + ${magoAtaque.id + magoAtaque.title  +  magoAtaque["stats"].hp + magoAtaque["stats"].mp +magoAtaque["stats"].hpperlevel + magoAtaque["stats"].movespeed + magoAtaque["stats"].spellblock + magoAtaque["stats"].armor + magoAtaque["stats"].hpregen + magoAtaque["stats"].mpregen + magoAtaque.description}`;
        console.log(magoAtaque);
        magoDelAtaque.classList.add('statsDash');


        let tanqueDelMp = document.createElement('p');
        let tanqueDelMpPicDiv = document.createElement('div');
        tanqueDelMpPicDiv.classList.add('picContainer');
        let tanqueDelMpPic = document.createElement('img');
        tanqueDelMpPic.src = tanqueDeMp.icon;
        tanqueDelMpPic.classList.add('foto');
        
        tanqueDelMp.innerHTML = ` El campeon tanque con mas MP es: + ${tanqueDeMp.id + tanqueDeMp.title +  tanqueDeMp["stats"].hp + tanqueDeMp["stats"].mp +tanqueDeMp["stats"].hpperlevel + tanqueDeMp["stats"].movespeed + tanqueDeMp["stats"].spellblock + tanqueDeMp["stats"].armor + tanqueDeMp["stats"].hpregen + tanqueDeMp["stats"].mpregen}`;
        console.log(tanqueDelMp);
        tanqueDelMp.classList.add('statsDash');


       
            let campeonDelHp = document.createElement('p');
            let campeonDelHpPicDiv = document.createElement('div');
            campeonDelHpPicDiv.classList.add('picContainer');
            let campeonDelHpPic = document.createElement('img');
            campeonDelHpPic.src = campeonDeHp.icon;
            campeonDelHpPic.classList.add('foto');
            

            campeonDelHp.innerHTML = ` El Campeon de mas HP es: +${campeonDeHp.id + campeonDeHp.title +  campeonDeHp["stats"].hp + campeonDeHp["stats"].mp +campeonDeHp["stats"].hpperlevel + campeonDeHp["stats"].movespeed + campeonDeHp["stats"].spellblock + campeonDeHp["stats"].armor + campeonDeHp["stats"].hpregen + campeonDeHp["stats"].mpregen + campeonDeHp.tags[0] + campeonDeHp.tags[1]  + campeonDeHp.description}`;
            console.log(campeonDeHp);
            campeonDelHp.classList.add('statsDash');
 



            let campeonDelMenosHp = document.createElement('p');
            let campeonDelMenosHpPicDiv = document.createElement('div');
            campeonDelMenosHpPicDiv.classList.add('picContainer');
            let campeonDelMenosHpPic = document.createElement('img');
            campeonDelMenosHpPic.src = campeonMenosHp.icon;
            campeonDelMenosHpPic.classList.add('foto');

            campeonDelMenosHp.innerHTML = ` El Campeon de menos HP es: ${  campeonMenosHp.id + campeonMenosHp.title  +  campeonMenosHp["stats"].hp + campeonMenosHp["stats"].mp + campeonMenosHp["stats"].hpperlevel + campeonMenosHp["stats"].movespeed + campeonMenosHp["stats"].spellblock + campeonMenosHp["stats"].armor + campeonMenosHp["stats"].hpregen + campeonMenosHp["stats"].mpregen + campeonMenosHp.tags[0] + campeonMenosHp.tags[1] + campeonMenosHp.description}`;
            console.log(campeonMenosHp);
            campeonDelMenosHp.classList.add('statsDash');


        
            console.log(campeonDearmor);
            let campeonDelarmor = document.createElement('p');
            let campeonDelarmorPicDiv = document.createElement('div');
            campeonDelarmorPicDiv.classList.add('picContainer');
            let campeonDelarmorPic = document.createElement('img');
            campeonDelarmorPic.src = campeonDearmor.icon;
            campeonDelarmorPic.classList.add('foto');
          
            campeonDelarmor.innerHTML = ` El Campeon de mas Armor es: ${ campeonDearmor.id + campeonDearmor.title  +  campeonDearmor["stats"].hp + campeonDearmor["stats"].mp +campeonDearmor["stats"].hpperlevel + campeonDearmor["stats"].movespeed + campeonDearmor["stats"].spellblock + campeonDearmor["stats"].armor + campeonDearmor["stats"].hpregen + campeonDearmor["stats"].mpregen + campeonDearmor.tags[0] + campeonDearmor.tags[1] + campeonDearmor.description}`;
            campeonDelarmor.classList.add('statsDash');
            console.log(campeonDearmor);
            let danoMisterioso = document.createElement('h4');
            let danoMisteriosoPicDiv = document.createElement('div');
            danoMisteriosoPicDiv.classList.add('picContainer');
            let danoMisteriosoPic = document.createElement('img');
            danoMisteriosoPic.src = campeonDanoEsp.icon;
            danoMisteriosoPic.classList.add('foto');
          
            danoMisterioso.innerHTML = ` El Campeon misteriosos del daño de 3.1416 es:  ${ campeonDanoEsp.id + campeonDanoEsp.title  +  campeonDanoEsp["stats"].hp + campeonDanoEsp["stats"].mp +campeonDanoEsp["stats"].hpperlevel + campeonDanoEsp["stats"].movespeed + campeonDanoEsp["stats"].spellblock + campeonDanoEsp["stats"].armor + campeonDanoEsp["stats"].hpregen + campeonDanoEsp["stats"].mpregen + campeonDanoEsp.tags[0] + campeonDanoEsp.tags[1] + campeonDanoEsp.description}`;

           
    
            cardStats.appendChild(campeonDelMenosHp);
            cardStats.appendChild(campeonDelMenosHpPic);
            cardStats.appendChild(campeonDelMenosHpPicDiv);
            cardStats.appendChild(campeonDelHp);
            cardStats.appendChild(campeonDelHpPic);
            cardStats.appendChild(campeonDelHpPicDiv);
            cardStats.appendChild(campeonDelarmor);
            cardStats.appendChild(campeonDelarmorPic);
            cardStats.appendChild(campeonDelarmorPicDiv);
            cardStats.appendChild(tanqueDelMp);
            cardStats.appendChild(tanqueDelMpPic);
            cardStats.appendChild(tanqueDelMpPicDiv);
            cardStats.appendChild(tanqueDelArmor);
            cardStats.appendChild(tanqueDelArmorPic);
            cardStats.appendChild(tanqueDelArmorPicDiv);
            cardStats.appendChild(magoDelAtaque);
            cardStats.appendChild(magoDelAtaquePic);
            cardStats.appendChild(magoDelAtaquePicDiv);
            cardStats.appendChild(danoMisterioso);
            cardStats.appendChild(danoMisteriosoPic);
            cardStats.appendChild(danoMisteriosoPicDiv);



            estadisticas_cards.appendChild(cardStats);







       
   
}
imprimir_estadisticas();