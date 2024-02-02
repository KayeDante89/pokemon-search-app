async function fetchData() {

   try {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if (!response.ok) {
     alert(`Sorry, the pokemon "${pokemonName}" doesn't exist.`)
     throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    console.log(data);

    const pokemonCard = document.getElementById('pokemon-card');
    pokemonCard.classList.add('pokemon-card-style');
    

    // taking name from data and capitalizing first letter
    const pokemonDataName = data.name
    const firstLetter = pokemonDataName.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = pokemonDataName.slice(1);
    const capitalizedName = firstLetterCap + remainingLetters
    
    const headerTitle = document.getElementById('pokemon-title');
    headerTitle.innerText = `${capitalizedName}`;

    const pokemonSprite = data.sprites.front_default;

    const imgElement = document.getElementById('pokemon-sprite');
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    const pokemonTypeElement = document.getElementById('pokemon-type');
    const pokemonTypes = data.types.map(index => ` ${index.type.name}`);
   
    const typeList = 'Type: ' + pokemonTypes.join(', ');
    pokemonTypeElement.innerText = typeList;

    const pokemonIdElement = document.getElementById('pokemon-id');
    pokemonIdElement.innerText = `#${data.id}`

   } catch (error) {
    console.log(error)
   }
}

function clearSearch() {
   const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
   pokemonName.value = "";
   window.location.reload();

}