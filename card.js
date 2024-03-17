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
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Yann et 3 autres personnes",
    description: "Live laugh love #live",
    id: 1,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-2.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Sarah et 5 autres personnes",
    description: "Sunset vibes 🌅 #sunset",
    id: 2,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-3-remplacement.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Maxime et 2 autres personnes",
    description: "Exploring the city streets #citylife",
    id: 3,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-4.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Emma et 7 autres personnes",
    description: "Cozy evenings with a good book 📚 #reading",
    id: 4,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-5.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Lucas et 4 autres personnes",
    description: "Nature's beauty at its best 🌿 #nature",
    id: 5,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-6.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Marie et 3 autres personnes",
    description: "Morning coffee delights ☕️ #coffee",
    id: 6,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-7.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Hugo et 6 autres personnes",
    description: "Adventures await 🌎 #adventure",
    id: 7,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-8.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Chloé et 2 autres personnes",
    description: "Chasing sunsets 🌇 #sunset",
    id: 8,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-9.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Thomas et 4 autres personnes",
    description: "In love with this view 😍 #view",
    id: 9,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-10.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Léa et 3 autres personnes",
    description: "Weekend vibes 🎉 #weekend",
    id: 10,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-11-remplacement.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Nathan et 1 autre personne",
    description: "Exploring new horizons 🌄 #explore",
    id: 11,
  },
  {
    img: "/assets-projet-wild-gram/photos-profile-coline/img-12.jpg",
    heartIcon: "fa-regular fa-heart",
    commentIcon: "fa-regular fa-comment",
    sendIcon: "fa-regular fa-paper-plane",
    likeTxt: "Aimé par Laura et 8 autres personnes",
    description: "Music and good vibes 🎶 #music",
    id: 12,
  },
];

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
    likeTxt.innerHTML = object.likeTxt;
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
      event.target.classList.toggle("fa-solid");
    });
  }

  const allForms = document.querySelectorAll(".form");
 

//   for (const input of allInputs) {
//     input.onsubmit = function (event) {
//       //   console.log("[EVENT]", event);
//       //   console.log("[THIS]", this);
//       event.preventDefault();
//       //   console.log(input);
//       const newTodo = document.createElement("li");

//       const inputValue = this.elements["input"].value;
//       // newTodo.innerHTML = event.target.value;
//       this.nextElementSibling.appendChild(newTodo);
//       newTodo.innerText = inputValue;
//       inputValue = "";
//       //   textInput.value = "";

//       console.log(newTodo);
//     };
//   }
//   for (const input of allInputs) {
//     input.onsubmit = function (event) {
//       //   console.log("[EVENT]", event);
//       //   console.log("[THIS]", this);
//       event.preventDefault();
//       //   console.log(input);
//       const newTodo = document.createElement("li");

//       const inputValue = this.elements["input"].value;
//       // newTodo.innerHTML = event.target.value;
//       this.nextElementSibling.appendChild(newTodo);
//       newTodo.innerText = inputValue;
//       inputValue = "";
//       //   textInput.value = "";

//       console.log(newTodo);
//     };
//   }

  for (const form of allForms) {
    form.onsubmit = function (event) {
      event.preventDefault();


      const todolist = form.nextElementSibling;
      const textInput = form.firstElementChild.value;
      const newTodo = document.createElement("li");

      newTodo.innerText = textInput;
      todolist.appendChild(newTodo);
      textInput.value = "";

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
                value="">
                <input class="input-send" type="submit" value="Envoyer" id="">
            </form>
            <ul class="list">
                <li>
            
                </li>
            </ul>
        </section>
    </div> -->*/
