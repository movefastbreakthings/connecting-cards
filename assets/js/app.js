// ****************************
// Game logic
// ****************************

console.log('Draw a card!');

var cards = document.querySelectorAll('.cards');
var card = document.querySelectorAll('.card');
var count = document.querySelectorAll('.count');
// console.log('cards', cards);
// console.log('card', card);

var allTexts = [
  "2 things I am doing to clean up the past:",
  "3 reasons I am beautiful: ",
  "3 things I admire in other people:",
  "3 words that describe your anger: ",
  "A word that best describes me:",
  "How do you feel about where you come from?",
  "I am afraid of ... ",
  "I am most looking forward to... ",
  "I am proud of... ",
  "I feel loved when... ",
  "I feel loving when...",
  "I know a lot about..",
  "I need more of this: ",
  "I need more time for... ",
  "I need to let go of...",
  "I need to shake up... ",
  "I really wish ........ would call me.",
  "I wish I were more... ",
  "I'm never... ",
  "If only I could...",
  "It would be a miracle if....",
  "Less........ would be good. ",
  "More........ would be good. ",
  "My family described in one word:",
  "My favourite feeling... ",
  "My greatest strength is... ",
  "My least favourite feeling...",
  "The most encouraging thing someone could say to you rigth now would be:",
  "The most recent compliment I received...",
  "The talents I would like to develop further...",
  "This charges me up... ",
  "This drains me... ",
  "This makes me relax, chill out and switch off:",
  "This scares me... ",
  "What are the 3 things you would do on your ideal day?",
  "What are the opposite feelings of how you want to feel?",
  "What can you do to feel more connected to the person you love the most?",
  "What do you need to create space for? ",
  "What do you wish you had courage for?",
  "What I Love about being in Love...",
  "What I still want to learn... ",
  "What makes you feel real?",
  "What people thank you for the most?",
  "What would going wild look like for you?",
  "Who is really inspiring you right now?",
  "Who is the most helpful in you carrer right now?",
  "You can be sure I will always be: "
];


var gameTexts = allTexts.slice(0);

for(var z = 0; z < cards.length; z++) {
    var elem = cards[z];
    elem.onclick = function() {
        console.log(gameTexts.length);
        gameTexts = shuffle(gameTexts);
        if(gameTexts.length > 0) {
          cards[0].classList.remove('end');
          cards[0].classList.remove('start');
          var text = gameTexts.pop()
          console.log(text);
          card[0].innerHTML = text;
          count[0].innerHTML = gameTexts.length;
        } else {
          card[0].innerHTML = 'No more cards, play again?';
          gameTexts = allTexts.slice(0);
          cards[0].classList.add('end');
        }
        return false;
    };
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


// ****************************
// Button fullscreen
// ****************************

var fullscreenButton = document.querySelectorAll('.btn-fullscreen')[0];

fullscreenButton.addEventListener('click', function (event) {
  // console.log('click fullscreen');
	// Ignore clicks that weren't on the toggle button
	if (!event.target.hasAttribute('data-toggle-fullscreen')) {
    // console.log('not fullscreen');
    return;
  }

	// If there's an element in fullscreen, exit
	// Otherwise, enter it
  console.log(document.fullscreenEnabled,document.fullscreenElement);
	if (document.fullscreenElement) {
    // console.log('exit fullscreen');
		document.exitFullscreen();
	} else {
    // console.log('request fullscreen');
		document.documentElement.requestFullscreen();
	}
}, false);

// ****************************
// Button Instructions
// ****************************

var instructionsButton = document.querySelectorAll('.btn-instructions')[0];
var instructions = document.querySelectorAll('.instructions')[0];
// console.log(instructionsButton);

instructionsButton.onclick = function() {
  instructions.classList.toggle('active');
  // console.log('toggle instrucitons');
  // if(instructions.contains('active')) {
  // } else {
  //   instructions.classList.add('active');
  // }
};
