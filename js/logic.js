'use strict';
console.log('tamano original de la lista ', lista_pokemon.length)
//primera forma
let pokemon_planta = lista_pokemon.filter(pokemon => pokemon.Type1 == 'Grass' || pokemon.Type2 == 'Grass'); 


//segunda forma
//let pokemon_planta = lista_pokemon.filter(pokemon => {
    //if (pokemon.Type1 == 'Grass' || pokemon.Type2 == 'Grass'){
        //return //pokemon;
    //}
// });
console.log('tamano de lista de pkmn tipo planta ', pokemon_planta.length);

//Filtre la lista de pokemons para que muestre en consola únicamente aquellos pokemon que sean de tipo Fairy y cuyo HP sea mayor a 75

//let pokemon_fairy = lista_pokemon.filter(pokemon => pokemon.Type1 == 'Fairy' || pokemon.Type2 == 'Fairy' && pokemon.HP > 75); 
//console.log(' Los pokemons fairy con mas de 75 de hp es: ', pokemon_fairy);


//solucion profe
let pokemon_fairy = lista_pokemon.filter(pokemon => {
    if ((pokemon.Type1 == 'Fairy' || pokemon.Type2 == 'Fairy')  && pokemon.HP > 75) {
    return pokemon;
    }

});
console.log(pokemon_fairy);


//Mostrar aquellos pokmn cuyo promedio de estadísticas sea mayor a 100
//let promedio 

//solucion profe

let lista_pkmn_con_promedio = lista_pokemon.map( pokemon =>{
     pokemon.promedio = (pokemon.HP + pokemon.SpAtk + pokemon.SpDef + pokemon.Speed + pokemon.Attack + pokemon.Defense) / 6;
     return pokemon;
})
let pkmn_mayor_100 = lista_pkmn_con_promedio.filter(pokemon =>{
    
    if (pokemon.promedio > 100) {
        return pokemon;
    }
});
console.log(pkmn_mayor_100);

let nuevo_pkmn = {
    "Num": 722,
        "Name": "Kuromi",
        "Type1": "Dark",
        "Type2": "Ghost",
        "HP": 120,
        "Attack": 80,
        "Defense": 100,
        "SpAtk": 128,
        "SpDef": 90,
        "Speed": 100,
        "Generation": 6,
        "Legendary": "FALSE"
}

const cargar_tipos 