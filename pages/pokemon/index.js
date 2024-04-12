function changePageTitle(title) {
  document.title = title;
}

function generateInfoSection(src, pokemonName) {
  const h2 = document.createElement('h2');
  h2.id = "info-pokemon-label";
  h2.textContent = `Informações sobre ${pokemonName}`;

  const section = document.querySelector('#info-pokemon');

  const img = document.querySelector('img');
  img.src = src;
  img.alt = `Imagem do Pokémon ${pokemonName}`;

  section.appendChild(h2);
}

async function getPokemonData(name) {
  try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const jsonData = await data.json();

      const spritesArray = Object.values(jsonData.sprites);
      const imageLinks = spritesArray.filter(item => typeof item === 'string');

      generateInfoSection(imageLinks[0], name);

      let currentIndex = 0;
      const img = document.querySelector('img');
      img.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % imageLinks.length;
          img.src = imageLinks[currentIndex];
      });
  } catch (error) {
      console.error(error);
  }
}

function getSearchParams() {
  if (!location.search) {
      return;
  }

  const urlSearchParams = new URLSearchParams(location.search);
  const pokemonName = urlSearchParams.get('name');

  changePageTitle(`Página do ${pokemonName}`);
  getPokemonData(pokemonName);
}

document.addEventListener('DOMContentLoaded', function () {
  getSearchParams();
});
