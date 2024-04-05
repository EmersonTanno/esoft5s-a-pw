document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const evolucao = urlParams.get('evolucao');

    if(evolucao){
        fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data =>{

            const pokemonName = document.createElement('h1');
            pokemonName.textContent = `Página do ${evolucao}`;
            document.getElementById('pokemon-info').appendChild(pokemonName);

            const shiny = Math.floor(Math.random()*8192);
            
            const img = document.createElement(`img`);
            if(shiny == 1){
                img.src = data.sprites.front_shiny; 
            }else{
                img.src = data.sprites.front_default;
            }
            img.alt = `${evolucao} sprite`;
            img.setAttribute('aria-label', `${evolucao} sprite`);
            document.getElementById('pokemon-info').appendChild(img);
        })
        .catch(error=> console.error('Erro ao buscar pokemon', error));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const evolucao = urlParams.get('evolucao');

    if(evolucao){
        document.title = `Página do ${evolucao}`
    }
})