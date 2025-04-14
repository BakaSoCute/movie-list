const inputNode = document.getElementById("addFilm_input");
const buttonNode = document.getElementById("addFilm_button");
const movieNode = document.getElementById("movie-list");
const STORAGE_LIST_FILM = "storage_list_film";

let my_ul = (elem = null);
const addFilm = ()=>{
    const value = inputNode.value;
    if (value.trim() === "") {
        alert("Введите название фильма");
        return;
    }
   addFilmToList(value);
    

    const elemString = JSON.parse(localStorage.getItem("elemString")) || [];
    elemString.push(value);
    localStorage.setItem("elemString", JSON.stringify(elemString));
    inputNode.value = "";
}

const addFilmToList = (film) => {
    const elem = document.createElement("li");
    elem.innerHTML = `
        <img id="movie-list_li_img" class="movie-list_li_img" src="Rectangle 814.png" alt="">
        ${film}
        <img id="movie-list_li_icon" class="movie-list_li_icon" src="crest.png" alt="">
        `;
    elem.className = "movie-list_li";
    movieNode.appendChild(elem);
}
const loadFilms = () => {
    const elemString = JSON.parse(localStorage.getItem("elemString")) || [];
    elemString.forEach(film => {
        addFilmToList(film);
    });
}
loadFilms();
buttonNode.addEventListener("click", addFilm);