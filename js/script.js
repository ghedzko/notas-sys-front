const BASE_URL =
    "http://www.omdbapi.com/?i=tt3896198&apikey=abe47891&s=start&y=2020"

// Simple response handling
fetch(BASE_URL)
    .then((response) => {
        return response.json()
    })
    .then((resposeJson) => {
        for (let index = 0; index < resposeJson.Search.length; index++) {
            const { Title, Year, Poster } = resposeJson.Search[index]

            addFilm({
                title: Title,
                description: Year,
                image: Poster,
            })
        }
    })

// obtenemos el elemento div con clase root.
const root = document.querySelector(".root")

const addFilm = ({ title, description, image }) => {
    // obetenemos el template
    const template = document.querySelector("#pelicula")

    // obtenemos el title
    const titleEl = template.content.querySelector(".title")
    // setteamos el title
    titleEl.innerHTML = title

    // obtenemos la description
    const descriptionEl = template.content.querySelector(".description")
    // setteamos la description
    descriptionEl.innerHTML = description

    // obtenemos la imagen
    const imageEl = template.content.querySelector(".image")
    // setteamos la imagen
    imageEl.src = image

    // setteamos tamaño
    imageEl.width = 200
    imageEl.height = 200

    // clonamos el template.
    const clone = document.importNode(template.content, true)

    // appendeamos el clon al root.
    root.appendChild(clone)
}
