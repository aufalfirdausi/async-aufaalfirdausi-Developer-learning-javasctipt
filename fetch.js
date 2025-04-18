async function fetchData () {
    
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("request couldnt fetch!")
        }
        const data = await response.json();
        console.log(data)
    }

    catch{
        console.error(error);
        
    }

}

