//word bank
var fish = [
    "trout",
    "carp",
    "bass",
    "pickeral",
    "muskellunge",
    "walleye",
    "perch",
    "catfish",
    "pike",
    "salmon"
];


//global variables (all instantiated in start())
var word;
var guessed;
var chances;
var name;

function start () {
    chances = 0;
    guessed = "";
    word = fish[Math.floor((Math.random() * 10))];

    document.getElementById("hangman").src = "img/0.png";

    for (var i = 0; i < word.length; i++) {
        guessed += "-";
    }
    document.getElementById("display").innerHTML = guessed;
    name = document.getElementById("name").value;
    document.getElementById("info").innerHTML = "Good luck, " + name + "! Guess a letter.";
}

function guess () {
    //used to keep track if a guessed letter was found in the word
    var correct = 0;

    //for loop to go through the word and compare characters (stops working if chances == 6 which means the player lost)
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i).toLowerCase() === document.getElementById("guessedChar").value.charAt(0).toLowerCase() && chances != 6) {
            correct++;
            document.getElementById("display").innerHTML = replaceAt(document.getElementById("display").innerHTML, i, word.charAt(i));
        }
    }
    //if the letter guessed wasnt found in word and the game hasn't been lost then this function tells the player the letter wasnt found and increments the chances variable. Otherwise the word was found and displays CORRECT.
    if (correct === 0 && chances != 6) {
        chances++;
        document.getElementById("hangman").src = "img/" + chances +  ".png";
        document.getElementById("info").innerHTML = name + ", " + document.getElementById("guessedChar").value.charAt(0).toLowerCase() + " is not in the word.";
    } else {
        document.getElementById("info").innerHTML = "CORRECT! Good job, " + name;
    }
    //displays the lost game message
    if (chances === 6) {
        document.getElementById("info").innerHTML = "You lost! The word was " + word + ". Play again!";
    }
    //displays the won game message
    if (winCondition() === 1) {
        document.getElementById("info").innerHTML = "You won! The word was " + word + ". Play again!";
        chances = 0;
    }
}

//used for easily replacing letters that have been guessed (grabbed from stack exchange)
function replaceAt (str, index, chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

//checks if guessed contains "-", if not then the game is won and returns 1
function winCondition () {
    var test = 0;
    for (var i = 0; i < guessed.length; i++) {
        if (document.getElementById("display").innerHTML.charAt(i) === "-") {
            test++;
        }
    }
    if (test === 0) {
        return 1;
    }
    else {
        return 0;
    }
}
