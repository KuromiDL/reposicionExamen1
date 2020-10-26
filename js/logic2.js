'use strict';

const boton_guardar = document.querySelector('#btn_guardar');

console.log('Tamaño original de la lista ', lista_pokemon.length);



// Primera forma
let pokemon_planta = lista_pokemon.filter(pokemon => pokemon.Type1 == 'Grass' || pokemon.Type2 == 'Grass');

// Segunda forma
// let pokemon_planta = lista_pokemon.filter(pokemon => {
//     if (pokemon.Type1 == 'Grass' || pokemon.Type2 == 'Grass') {
//         return pokemon;
//     }
// });

console.log('Tamaño de lista de pkmn tipo planta ', pokemon_planta.length);

//Filtre la lista de pokemons para que muestre en consola únicamente aquellos pokemon que sean de tipo Fairy y cuyo HP sea mayor a 75

let pkmn_hada_hp = lista_pokemon.filter(pokemon => {
    if ((pokemon.Type1 == 'Fairy' || pokemon.Type2 == 'Fairy') && pokemon.HP > 75) {
        return pokemon;
    }

});
console.log(pkmn_hada_hp);

// Mostrar aquellos pkmn cuyo promedio de estadísticas sea mayor a 100

let lista_pkmn_con_promedio = lista_pokemon.map(pokemon => {
    pokemon.promedio = (pokemon.HP + pokemon.SpAtk + pokemon.SpDef + pokemon.Speed + pokemon.Attack + pokemon.Defense) / 6;

    return pokemon;
})

let pkmn_mayor_100 = lista_pkmn_con_promedio.filter(pokemon => {


    if (pokemon.promedio > 100) {
        return pokemon;
    }

});

console.log(pkmn_mayor_100);
const cargar_tipos = () => {
    let tipos = [{ "name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": [] },
        { "name": "Fire", "immunes": [], "weaknesses": ["Fire", "Water", "Rock", "Dragon"], "strengths": ["Grass", "Ice", "Bug", "Steel"] },
        { "name": "Water", "immunes": [], "weaknesses": ["Water", "Grass", "Dragon"], "strengths": ["Fire", "Ground", "Rock"] },
        { "name": "Electric", "immunes": ["Ground"], "weaknesses": ["Electric", "Grass", "Dragon"], "strengths": ["Water", "Flying"] },
        { "name": "Grass", "immunes": [], "weaknesses": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], "strengths": ["Water", "Ground", "Rock"] },
        { "name": "Ice", "immunes": [], "weaknesses": ["Fire", "Water", "Ice", "Steel"], "strengths": ["Grass", "Ground", "Flying", "Dragon"] },
        { "name": "Fighting", "immunes": ["Ghost"], "weaknesses": ["Poison", "Flying", "Psychic", "Bug", "Fairy"], "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"] },
        { "name": "Poison", "immunes": ["Steel"], "weaknesses": ["Poison", "Ground", "Rock", "Ghost"], "strengths": ["Grass", "Fairy"] },
        { "name": "Ground", "immunes": ["Flying"], "weaknesses": ["Grass", "Bug"], "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"] },
        { "name": "Flying", "immunes": [], "weaknesses": ["Electric", "Rock", "Steel"], "strengths": ["Grass", "Fighting", "Bug"] },
        { "name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Psychic", "Steel"], "strengths": ["Fighting", "Poison"] },
        { "name": "Bug", "immunes": [], "weaknesses": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], "strengths": ["Grass", "Psychic", "Dark"] },
        { "name": "Rock", "immunes": [], "weaknesses": ["Fighting", "Ground", "Steel"], "strengths": ["Fire", "Ice", "Flying", "Bug"] },
        { "name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Dark"], "strengths": ["Psychic", "Ghost"] },
        { "name": "Dragon", "immunes": ["Fairy"], "weaknesses": ["Steel"], "strengths": ["Dragon"] },
        { "name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Dark", "Fairy"], "strengths": ["Psychic", "Ghost"] },
        { "name": "Steel", "immunes": [], "weaknesses": ["Fire", "Water", "Electric", "Steel"], "strengths": ["Ice", "Rock", "Fairy"] },
        { "name": "Fairy", "immunes": [], "weaknesses": ["Fire", "Poison", "Steel"], "strengths": ["Fighting", "Dragon", "Dark"] }
    ];

    let slt_tipos1 = document.querySelector('#slt_type1');
    let slt_tipos2 = document.querySelector('#slt_type2');

    tipos.forEach(tipo => {
        slt_tipos1.options.add(new Option(tipo.name));
        slt_tipos2.options.add(new Option(tipo.name));
    });


};

const registrar_pokemon = () => {
    let num = document.querySelector('#txt_num').value;
    let name = document.querySelector('#txt_name').value;
    let type1 = document.querySelector('#slt_type1').value;
    let type2 = document.querySelector('#slt_type2').value;
    let hp = document.querySelector('#txt_hp').value;
    let attack = document.querySelector('#txt_attack').value;
    let defense = document.querySelector('#txt_defense').value;
    let sp_atk = document.querySelector('#txt_spattack').value;
    let sp_def = document.querySelector('#txt_spdefense').value;
    let speed = document.querySelector('#txt_speed').value;
    let generation = document.querySelector('#txt_generation').value;
    let legendary = document.querySelector('#txt_legendary').value;

    let nuevo_pkmn = {
        "Num": num,
        "Name": name,
        "Type1": type1,
        "Type2": type2,
        "HP": hp,
        "Attack": attack,
        "Defense": defense,
        "SpAtk": sp_atk,
        "SpDef": sp_def,
        "Speed": speed,
        "Generation": generation,
        "Legendary": legendary
    };

    lista_pokemon.push(nuevo_pkmn);
    console.log(lista_pokemon);
};
cargar_tipos();
boton_guardar.addEventListener('click', registrar_pokemon)