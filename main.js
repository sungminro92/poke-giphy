document.onload = function() {
    keyPress();
};
loadPokemon();

// const searchPokemon = document.getElementById('getPokemon');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchBox');
const pokemonContainer = document.getElementById('pokemonContainer');
const pokemonImage = document.getElementsByClassName('pokemonImage');


searchButton.addEventListener("click", searchGiphy);
searchInput.addEventListener("keyup", keyPress);

let selectedPokemon = "";

// generate random number
function randomNumber() {
	let randomNumber = Math.floor(Math.random() * 151);
	return randomNumber;
}

// const pokemon = {
//
// }

// load all pokemons
function loadPokemon() {
    // loadPokemonImages();
    const pokemonAPI = "https://pokeapi.co/api/v2";
    const pokemons = "/pokemon/";

    this.randomNumber = randomNumber();
    // console.log(this.randomNumber);
    fetch(pokemonAPI + pokemons)
    .then( data => {
    	return data.json();
	}).then( json => {
        // console.log(json);
        for (let i=0; i<150; i++) {
            console.log(json.results[i].name);
            let pokemonName = json.results[i].name;
            fetch(json.results[i].url)
                .then( newData => {
                    return newData.json();
                }).then( newJson => {
                // console.log(newJson.sprites.front_default);
                let pokemonImageURL = newJson.sprites.front_default;
                let pokemonImg = document.createElement('img');
                pokemonImg.setAttribute('src', pokemonImageURL);
                pokemonImg.setAttribute('id', pokemonName);
                pokemonImg.setAttribute('class', 'pokemonImage');
                pokemonImg.setAttribute('onClick', 'searchPokeGiphy(this.id)');
                pokemonContainer.appendChild(pokemonImg);
            }).catch(function(err) {
            	return err;
			});
        }
        // console.log(json.results);
		})

	// fetch(pokemonAPI + pokemons + this.randomNumber + "/")
	// .then(response => {
	// 	console.log(response)
	// 	return response.json()
	// })
	// .then(json => {
	// 	// console.log(json.name);
    //     selectedPokemon = json.name;
    //     searchInput.value = selectedPokemon;
    //     searchGiphy();
	// })
}

// function loadPokemonImages() {
// 	const pokemonImageAPI = "http://pokeapi.co/api/v2/pokemon/" + 1;
// 	fetch(pokemonImageAPI)
// 	.then((resp) => resp.json())loadPokemonImages
// 		.then( function(data) {
// 			console.log(data);
// 		})
// }
function searchPokeGiphy(clicked_id) {
	console.log(clicked_id);
    selectedPokemon = clicked_id;
    searchInput.value = selectedPokemon;
    searchGiphy();
}

function searchGiphy() {
	// console.log(searchInpuwt.value);
	const url = "http://api.giphy.com/v1/gifs/search?q=" + searchInput.value  + "&api_key=1YOfE5g6JayGlLiiyR3EoIWra4MSNMTm&limit=30";
	fetch(url)
	.then((resp) => resp.json())
	.then(function(data) {
		input = "";
	    const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = "";
	    for (let i in data.data) {
	    	const imageUrl = data.data[i].images.original.url;
	    	const imgElement = document.createElement('img');
	    	imgElement.setAttribute('src', imageUrl);
            imgElement.setAttribute('class', 'giphyImage');
            resultContainer.appendChild(imgElement);
	    	console.log(input);
	    }
	  }).catch(err => null);
	}

function keyPress(event) {
	if (event.keyCode == 13) {
		searchButton.click();
	}
}

function createToolTip() {
	document.createElement
}
