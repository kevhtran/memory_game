let cardsFlipped = 0;
const gameContainer = document.querySelector('#game');
const movesCount = document.querySelector('span');
// const count = 0;

// movesCount.textContent = count;

const getData = () => [
  { imgSrc: "./imgs/articuno.jpg", name: "articuno"},
  { imgSrc: "./imgs/hooh.jpg", name: "hooh"},
  { imgSrc: "./imgs/lugia.jpg", name: "lugia"},
  { imgSrc: "./imgs/moltres.jpg", name: "moltres"},
  { imgSrc: "./imgs/zapdos.jpg", name: "zapdos"},
  { imgSrc: "./imgs/articuno.jpg", name: "articuno"},
  { imgSrc: "./imgs/hooh.jpg", name: "hooh"},
  { imgSrc: "./imgs/lugia.jpg", name: "lugia"},
  { imgSrc: "./imgs/moltres.jpg", name: "moltres"},
  { imgSrc: "./imgs/zapdos.jpg", name: "zapdos"},
];

//randomize
const randomize = function(){
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData
};

const cardGenerator = function (){
  const cardData = randomize();
  cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    face.src = item.imgSrc;
    card.setAttribute('name', item.name)
    gameContainer.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener("click", handleCardClick)
  });
};

function handleCardClick(e){
  const currentCard = e.target;
  currentCard.classList.toggle('flipCard');
  currentCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped')
  const allCards = document.querySelectorAll(".card")

  if (flippedCards.length === 2){
  if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
    for (let i=0; i < flippedCards.length; i++){
      cardsFlipped += 1;
      flippedCards[i].classList.remove('flipped');
      flippedCards[i].style.pointerEvents ='none';
      console.log(cardsFlipped)
    }
  }
    else {
      for (let i=0; i < flippedCards.length; i++){
        flippedCards[i].classList.remove('flipped');
        setTimeout(() => {flippedCards[i].classList.remove('flipCard')}, 1000);
      }
      };
    }
  if (cardsFlipped === allCards.length)
  setTimeout(() => {alert("YOU'VE WON!")}, 1000);
  } 

cardGenerator()