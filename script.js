// global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakeCount = 0;
var wrong = false;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakeCount = 0;
  clueHoldTime = 1000;
  pattern = [1];
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  generatePattern();
  playClueSequence();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392.0,
  6: 440.0
}


function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function displayPic(imageID) {
    document.getElementById(imageID).style.visibility = 'visible';
}

function hidePic(imageID) {
    document.getElementById(imageID).style.visibility = 'hidden';
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generatePattern() {
  for (let i = 0; i <= 8; i++){
  var temp = getRandomInt(1,7);
  pattern += (temp);
  }
      console.log("pattern is " + pattern);
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime -= 100;
  console.log("clueHoldTime is " + clueHoldTime);
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay +" ms")
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.")
}

function winGame() {
  stopGame()
  alert("Game Over. You won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //check each guess at a time
  if (btn == pattern[guessCounter]) {
    
    // correct guess
    if (guessCounter == progress){
      
      // the end of turn, user wins
      if (progress == pattern.length - 1) {
        winGame();
      }
      else {
        progress++;
        playClueSequence();
      }
    }
    else {
      // not the end of user's turn, check next guess
      guessCounter++;
    }
  }
  else {
    // wrong guess
    mistakeCount++;
  console.log("MISTAKE")
  
    //too many mistakes -> game over
    if (mistakeCount > 2){
      loseGame();
    }
    else {
      clueHoldTime +=100;
      playClueSequence();
    }
  }
}