
const list_DIV = document.getElementById('character-list');

fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
        if (!response.ok) throw new Error('Error en la solicitud');
        return response.json();
    })
    .then((data) => {
        console.log(data.results);
        data.results.map((character) => {
            list_DIV.insertAdjacentHTML("beforeend",
                `<li class="character">
                    <img src=${character.image}>
                    <h3><b>Name:</b> ${character.name}</h3>
                    <p><b>Species:</b> ${character.species}</p>
                </li>`)

        })
    })
    .catch((error) => {
        console.error("Error: No se pudo procesar la solicitud")
    });
