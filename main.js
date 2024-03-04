// DOM elements 
const elPokemonsList = document.querySelector(".js-pokemons-list");
const elPokemonTemplate = document.querySelector(".js-pokemons-template").content;



const pokemonsDocumentFragment = document.createDocumentFragment();

for( const poke of pokemons ) {
    
    const pokemonsTemplateNodes = elPokemonTemplate.cloneNode(true);
    pokemonsTemplateNodes.querySelector(".poke-number").textContent = poke.num;
    pokemonsTemplateNodes.querySelector(".poke-img").src = poke.img;
    pokemonsTemplateNodes.querySelector(".poke-name").textContent = poke.name
    pokemonsTemplateNodes.querySelector(".poke-weight").textContent = `Weight: ${ poke.weight}`;
    pokemonsTemplateNodes.querySelector(".poke-candy-count").textContent = `Candy count: ${ poke.candy_count}`;
    pokemonsTemplateNodes.querySelector(".poke-egg").textContent = `Egg size:  ${ poke.egg}`;
    pokemonsTemplateNodes.querySelector(".poke-weakness").textContent = `Weak: ${poke.weaknesses.join(", ")}`;
    
    pokemonsDocumentFragment.appendChild(pokemonsTemplateNodes);

}

elPokemonsList.appendChild(pokemonsDocumentFragment);














