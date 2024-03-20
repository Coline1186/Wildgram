const cardFeed = [
    {
        avatar: "assets-projet-wild-gram/avatar-utilisateurs/avatar 7.jpg",
        userName: "Antoine Delalande",
        img: "assets-projet-wild-gram/publi-antoine.jpeg",
        heartIcon: "fa-regular fa-heart",
        commentIcon: "fa-regular fa-comment",
        sendIcon: "fa-regular fa-paper-plane",
        likeTxt: "Aimé par Yann et 3 autres personnes",
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
        likeTxt: "Aimé par Yann et 3 autres personnes",
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
        likeTxt: "Aimé par Yann et 3 autres personnes",
        description: "Live laugh love #live",
        id: 3,
    }
];

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
    cardIcons.appendChild(heartIcon);

    const commentIcon = document.createElement("i");
    commentIcon.classList.add("fa-regular");
    commentIcon.classList.add("fa-comment");
    cardIcons.appendChild(commentIcon);

    const sendIcon = document.createElement("i");
    sendIcon.classList.add("fa-regular");
    sendIcon.classList.add("fa-paper-plane");
    cardIcons.appendChild(sendIcon);

    const text = document.createElement("div");
    text.classList.add("txt");
    cardSection.appendChild(text);

    const likeTxt = document.createElement("p");
    likeTxt.classList.add("like-txt");
    likeTxt.innerHTML = object.likeTxt
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
        event.target.classList.toggle("fa-solid");
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
            textInput.value = "";

        };
      }
    };

feedCopy();