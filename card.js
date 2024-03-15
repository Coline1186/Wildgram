const textInput = document.querySelector('.input-txt');
const form = document.querySelector('#form');
const todolist = document.querySelector('.list');

form.onsubmit = (event) => {
    event.preventDefault();

    const newTodo = document.createElement("li");
    newTodo.innerHTML = textInput.value;
    todolist.appendChild(newTodo);
    textInput.value = "";
}

const likeButton = document.querySelector(".card-container #card-icons i.fa-heart")

likeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('fa-solid');

    // selection balise texte like
    const likeCount = document.querySelector('.like-txt')

    // faire une condition si toggle vers fa solid ajour ++1
    // créer nouveau texte puis le place au bon endroit 

    // si retour faire -1 like
})


