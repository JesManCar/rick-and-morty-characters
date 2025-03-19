const list_DIV = document.getElementById('character-list');
let actualPage = 1;

function fetchCharacter(page){
    clearList ();
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
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
}

function clearList (){
    list_DIV.innerHTML="";
}

const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");


fetchCharacter(actualPage);

prevButton.addEventListener("click", () => {
    if(actualPage>1) actualPage--;
    fetchCharacter(actualPage)
})
nextButton.addEventListener("click", () => {
    if(actualPage<42) actualPage++;
    fetchCharacter(actualPage)
})

