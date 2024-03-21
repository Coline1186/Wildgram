const cardFeed = [
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 7.jpg",
        userName: "Antoine Delalande",
        img: "assets-projet-wild-gram/publi-antoine.jpeg",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 5,     // supression du like-txt puis ajout de likes avec le nombre de likes existants par carte à ajouter au like txt
        description: "Live laugh love #live",
        id: 1,
    },
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 8.jpeg",
        userName: "Brian Boudrioux",
        video: "assets-projet-wild-gram/RPReplay_Final1710693436.mov",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 3,
        description: "Live laugh love #live",
        id: 2,
    },
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 10.jpeg",
        userName: "Emmanuelle Curiant",
        img: "assets-projet-wild-gram/publi-manue.jpeg",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 7,
        description: "Live laugh love #live",
        id: 3,
    },
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 6.jpg",
        userName: "Alexandre Renard",
        img: "assets-projet-wild-gram/publication-alex.jpeg",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 2,
        description: "What is a programmer ?",
        id: 4,
    },
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 9.jpg",
        userName: "Ludovic Scelles",
        video: "assets-projet-wild-gram/publication-ludo.mov",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 9,
        description: "Weirdness of programming",
        id: 5,
    },
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 11.jpg",
        userName: "Mickaël Lambert",
        img: "assets-projet-wild-gram/publi-mikael.jpeg",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 15,
        description: "Tidus à la plage",
        id: 6,
    },
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 12.jpg",
        userName: "Vincent Cantonnet",
        video: "assets-projet-wild-gram/publi-vincent.mov",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likes: 3,
        description: "If you are a teacher tired, you are note alone",
        id: 7,
    },
];
const names = ['Raphael', 'Léa', 'Yazid', 'Alexandre', 'Vincent', 'Erwan', 'Mika', 'Yann', 'Paul', 'Mathilde', 'Lucie', 'Mewen', 'Aude', 'Emmanuelle', 'Tidus', 'Michaël']


const feedCopy = () => {

    for (const object of cardFeed) {
    const cardList = document.querySelector(".card-list");

    
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardList.appendChild(cardContainer);


    const cardHead = document.createElement("span");
    cardHead.classList.add("card-head");
    cardContainer.appendChild(cardHead);

    const avatarImg = document.createElement("img");
    avatarImg.classList.add("avatar-img");
    avatarImg.src = object.avatar;
    cardHead.appendChild(avatarImg);

    const userName = document.createElement("p");
    userName.classList.add("userName");
    userName.innerHTML = object.userName;
    cardHead.appendChild(userName);
        
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    cardContainer.appendChild(imgContainer);
    
    if (object.video) {
        const cardVideo = document.createElement("video");
        cardVideo.classList.add("card-img")
        cardVideo.src = object.video;
        cardVideo.controls = "controls" ;
        imgContainer.appendChild(cardVideo);
    }
    else {
        const cardImage = document.createElement("img");
        cardImage.classList.add("card-img")
        cardImage.src = object.img;
        imgContainer.appendChild(cardImage);
    }

    const cardSection = document.createElement("section");
    cardSection.classList.add("card-section");
    cardContainer.appendChild(cardSection);

    const cardIcons = document.createElement("div");
    cardIcons.id = "card-icons";
    cardSection.appendChild(cardIcons);

    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular");
    heartIcon.classList.add("fa-heart");
    heartIcon.classList.add("fa-2xl");
    heartIcon.setAttribute("data-nb-likes", object.likes),
    // on crée un nouvel attribut dans notre balise heart qui permet de récuprer le nombre de likes (depuis le tableau d'objet) existant sur chaque carte et qui a pour nom 'data-nb-likes'
    cardIcons.appendChild(heartIcon);

    const commentIcon = document.createElement("i");
    commentIcon.classList.add("fa-regular");
    commentIcon.classList.add("fa-comment");
    commentIcon.classList.add("fa-2xl");
    cardIcons.appendChild(commentIcon);

    const sendIcon = document.createElement("i");
    sendIcon.classList.add("fa-regular");
    sendIcon.classList.add("fa-paper-plane");
    sendIcon.classList.add("fa-2xl");
    cardIcons.appendChild(sendIcon);

    const text = document.createElement("div");
    text.classList.add("txt");
    cardSection.appendChild(text);

    const likeTxt = document.createElement("p");
    likeTxt.classList.add("like-txt");
    const name = names[Math.floor(Math.random() * names.length)];
    // afin d'utiliser le tableau de prénoms on génére aléatoirement un nombre que renvoie un index différent pour chaque carte 
    likeTxt.innerHTML = `Aimé par ${name} et <span class="nb-likes">${object.likes}</span> autre(s) personne(s)`;
    // Après avoir récupéré le nombre de likes existants puis généré des prénoms différents par carte on utilise innerHtml pour remplacer le contenue de l'élément. On utilse la méthode des backtik afin de réécrire notre liketxt (supprimé de notre objet)  avec le bon nom et nombre de likes selon chaque carte. On place bien le nombre de likes dans une nouvelle balise span à l'intérieur du <p> afin d'avoir accès au nombre et pouvoir ajouter ou enlever 1
    text.appendChild(likeTxt);


    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = object.description;
    text.appendChild(description);

    const form = document.createElement("form");
    form.classList.add("form");
    cardSection.appendChild(form);

    const inputText = document.createElement("input");
    inputText.classList.add("input-txt");
    inputText.type = "text";
    inputText.placeholder = "Ecris ton commentaire";
    inputText.value = "";
    form.appendChild(inputText);

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
    handleFeedEvent();
};

const handleFeedEvent = () => {
    const allHearts = document.querySelectorAll(".fa-heart");
  
    for (const heart of allHearts) {
      heart.addEventListener("click", (event) => {
        heart.classList.toggle("fa-solid");
        
        let nbLikes = heart.getAttribute("data-nb-likes");
        // création d'une nouvelle variable qui va via le getAttribute nous renvoyer les likes par carte qui étaient dans notre setAtribute et l'associé à notre a chaque icon de coeur (si on console.log on retrouve en click le nombre de likes existants)
        
        if (heart.classList.contains('fa-solid'))
          nbLikes++;
        else
          nbLikes--;
        // Par la suite on faite un conditionnel pour ajouter +1 ou -1 lorsqu'on click sur le coeur par contre on peut bien ajouter mais pb pour soustraire car prend la valeur initiale et non la valeur avec le like en plus 
  
        heart.setAttribute('data-nb-likes', nbLikes);
        // on garde le nombre avec le like en plus avant soustraire en attribuant à heart le nombre de likes(moins bien compris cette partie)
  
        const heartSection = heart.parentNode.parentNode;
  
        const txtToEdit = heartSection.querySelector('.txt .like-txt .nb-likes');
        txtToEdit.innerText = nbLikes;
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

feedCopy();
