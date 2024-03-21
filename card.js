// function handleEvents() {
//     const textInput = document.querySelector('.input-txt');
//     const form = document.querySelector('#form');
//     const todolist = document.querySelector('.list');

//     form.onsubmit = (event) => {
//         event.preventDefault();

//         const newTodo = document.createElement("li");
//         newTodo.innerHTML = textInput.value;
//         todolist.appendChild(newTodo);
//         textInput.value = "";
//     }

//     const likeButton = document.querySelector(".card-container #card-icons i.fa-heart")

//     likeButton.addEventListener('click', (event) => {
//         event.target.classList.toggle('fa-solid');

//     })
// }

const cardsData = [
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-1.jpg",
    heartIcon: "fa-regular fa-heart fa-flip",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 3,
    // supression du like-txt puis ajout de likes avec le nombre de likes existants par carte à ajouter au like txt
    description: "Live laugh love #live",
    id: 1,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-2.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 5,
    description: "Sunset vibes 🌅 #sunset",
    id: 2,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-3-remplacement.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 2,
    description: "Exploring the city streets #citylife",
    id: 3,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-4.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 7,
    description: "Cozy evenings with a good book 📚 #reading",
    id: 4,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-5.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 4,
    description: "Nature's beauty at its best 🌿 #nature",
    id: 5,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-6.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 3,
    description: "Morning coffee delights ☕️ #coffee",
    id: 6,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-7.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 6,
    description: "Adventures await 🌎 #adventure",
    id: 7,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-8.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 2,
    description: "Chasing sunsets 🌇 #sunset",
    id: 8,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-9.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 4,
    description: "In love with this view 😍 #view",
    id: 9,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-10.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 3,
    description: "Weekend vibes 🎉 #weekend",
    id: 10,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-11-remplacement.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 1,
    description: "Exploring new horizons 🌄 #explore",
    id: 11,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-12.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likes: 8,
    description: "Music and good vibes 🎶 #music",
    id: 12,
  },
];

const names = [
  "Raphael",
  "Léa",
  "Yazid",
  "Alexandre",
  "Vincent",
  "Erwan",
  "Mika",
  "Yann",
  "Paul",
  "Mathilde",
  "Lucie",
  "Mewen",
  "Aude",
  "Emmanuelle",
  "Tidus",
  "Michaël",
];
// création d'un nouveau tableau avec diffrents prénoms que l'on va ajouter dans notre like-txt

// const cardsSection = document.querySelector('.card-list');

// for (const object of cardsData) {

//     cardsSection.innerHTML += ` <div class="card-container" id =${object.id} >
//     <div class="img-container">
//         <img src=${object.img} class="card-img">
//     </div>
//     <section class="card-section">
//         <div id="card-icons">
//             <i class="${object.heartIcon}"></i>
//             <i class="${object.commentIcon}"></i>
//             <i class="${object.sendIcon}"></i>
//         </div>
//         <div class="txt">
//             <p class="like-txt">${object.likeTxt}</p>
//             <p class="description">${object.description}</p>
//         </div>
//         <form id="form" action="">
//             <input class="input-txt" type="text"
//             placeholder="Ecris ton commentaire"
//             value="">
//             <input class="input-send" type="submit" value="Envoyer" id="">
//         </form>
//         <ul class="list">
//             <li>

//             </li>
//         </ul>
//     </section>
// </div>
// `

// }

const cardMultipliyer = () => {
  for (const object of cardsData) {
    const cardList = document.querySelector(".card-list");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardList.appendChild(cardContainer);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    cardContainer.appendChild(imgContainer);

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src = object.img;
    imgContainer.appendChild(cardImg);

    const cardSection = document.createElement("section");
    cardSection.classList.add("card-section");
    cardContainer.appendChild(cardSection);

    const cardIcons = document.createElement("div");
    cardIcons.id = "card-icons";
    cardSection.appendChild(cardIcons);

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular");
    heartIcon.classList.add("fa-heart");
    heartIcon.setAttribute("data-nb-likes", object.likes),
      // on crée un nouvel attribut dans notre balise heart qui permet de récuprer le nombre de likes (depuis le tableau d'objet) existant sur chaque carte et qui a pour nom 'data-nb-likes'
      cardIcons.appendChild(heartIcon);

    const commentIcon = document.createElement("i");
    commentIcon.classList.add("fa-regular");
    commentIcon.classList.add("fa-comment");
    cardIcons.appendChild(commentIcon);

    const sendIcon = document.createElement("i");
    sendIcon.classList.add("fa-regular");
    sendIcon.classList.add("fa-paper-plane");
    cardIcons.appendChild(sendIcon);

    const postTxt = document.createElement("div");
    postTxt.classList.add("txt");
    cardSection.appendChild(postTxt);

    const likeTxt = document.createElement("p");
    likeTxt.classList.add("like-txt");
    const name = names[Math.floor(Math.random() * names.length)];
    // afin d'utiliser le tableau de prénoms on génére aléatoirement un nombre que renvoie un index différent pour chaque carte
    likeTxt.innerHTML = `Aimé par ${name} et <span class="nb-likes">${object.likes}</span> autre(s) personne(s)`;
    // Après avoir récupéré le nombre de likes existants puis généré des prénoms différents par carte on utilise innerHtml pour remplacer le contenue de l'élément. On utilse la méthode des backtik afin de réécrire notre liketxt (supprimé de notre objet)  avec le bon nom et nombre de likes selon chaque carte. On place bien le nombre de likes dans une nouvelle balise span à l'intérieur du <p> afin d'avoir accès au nombre et pouvoir ajouter ou enlever 1
    postTxt.appendChild(likeTxt);

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = object.description;
    postTxt.appendChild(description);

    const form = document.createElement("form");
    form.classList.add("form");
    cardSection.appendChild(form);

    const inputTxt = document.createElement("input");
    inputTxt.classList.add("input-txt");
    inputTxt.name = "input";
    inputTxt.placeholder = "Ecris ton commentaire";
    inputTxt.type = "text";
    inputTxt.value = "";
    form.appendChild(inputTxt);

    const inputSend = document.createElement("input");
    inputSend.classList.add("input-send");
    inputSend.type = "submit";
    inputSend.value = "Envoyer";
    form.appendChild(inputSend);

    const commentList = document.createElement("ul");
    commentList.classList.add("list");
    cardSection.appendChild(commentList);

    const commentTxt = document.createElement("li");
    commentList.appendChild(commentTxt);
  }

  handleCardEvent();
};

const handleCardEvent = () => {
  const allHearts = document.querySelectorAll(".fa-heart");

  for (const heart of allHearts) {
    heart.addEventListener("click", (event) => {
      heart.classList.toggle("fa-solid");

      let nbLikes = heart.getAttribute("data-nb-likes");
      // création d'une nouvelle variable qui va via le getAttribute nous renvoyer les likes par carte qui étaient dans notre setAtribute et l'associé à notre a chaque icon de coeur (si on console.log on retrouve en click le nombre de likes existants)

      if (heart.classList.contains("fa-solid")) nbLikes++;
      else nbLikes--;
      // Par la suite on faite un conditionnel pour ajouter +1 ou -1 lorsqu'on click sur le coeur par contre on peut bien ajouter mais pb pour soustraire car prend la valeur initiale et non la valeur avec le like en plus

      heart.setAttribute("data-nb-likes", nbLikes);
      // on garde le nombre avec le like en plus avant soustraire en attribuant à heart le nombre de likes(moins bien compris cette partie)

      const heartSection = heart.parentNode.parentNode;
      // on crée une nouvelles variable qui nous permet d'accèder via le parentNode à ma section ou je trouve le text contenant mes likes mais dans le parent

      const txtToEdit = heartSection.querySelector(".txt .like-txt .nb-likes");
      // dès qu'on à accès à notre section on cherche donc à selectioner notre textd de like mais plus précis le span créer avant ou on à sauvgardé le nombre de likes par carte
      txtToEdit.innerText = nbLikes;
      // En fin on utilise le innerText pour modifier le nombre qui s'affiche sur le like-txt lorque l'on click sur le coeur.
    });
  }

  const allForms = document.querySelectorAll(".form");

  for (const form of allForms) {
    form.onsubmit = function (event) {
      event.preventDefault();

      const todolist = form.nextElementSibling;
      const textInput = form.firstElementChild.value;
      const newTodo = document.createElement("li");

      newTodo.innerText = textInput;
      todolist.appendChild(newTodo);
      form.firstElementChild.value = "";
    };
  }
};

cardMultipliyer();

/*<!-- <div class="card-container">
        <div class="img-container">
            <img src="assets-projet-wild-gram/photos-profile-coline/img-1.jpg" class="card-img">
        </div>
        <section class="card-section">
            <div id="card-icons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <div class="txt">
                <p class="like-txt">Aimé par Yann et 3 autres personnes</p>
                <p class="description">Live laugh love #live</p>
            </div>
            <form class="form" action="">
                <input name="input" class="input-txt" type="text"
                placeholder="Ecris ton commentaire"
                value="" id= 'text'>
                <input class="input-send" type="submit" value="Envoyer" id="">
            </form>
            <ul class="list">
                <li>
            
                </li>
            </ul>
        </section>
    </div> -->*/
