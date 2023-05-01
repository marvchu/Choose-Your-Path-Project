
let Label = document.querySelector('.Label');
let Text = document.querySelector('.Name');
let ConfirmButton = document.querySelector('.confirm');
let Title = document.querySelector('.title');
let StoryOpening = document.querySelector('.story-opening');
let DoIt = document.querySelector('.option-one');
let AbsolutelyNot = document.querySelector('.option-two');
let Small = document.querySelector('.option-three');
let Large = document.querySelector('.option-four');
let OptionOne = document.querySelector('.option-one-screen');
let OptionTwo = document.querySelector('.option-two-screen');
let OptionOneEnd = document.querySelector('.option-one-end');
let OptionTwoEnd = document.querySelector('.option-two-end');
let OptionThreeEnd = document.querySelector('.option-three-end');
let OptionFourEnd = document.querySelector('.option-four-end');
let Approach = document.querySelector('.option-five');
let Walk = document.querySelector('.option-six');
let Gnome = document.querySelector('.gnome');

Gnome.onmouseover = function() {
  document.body.innerHTML = "You've been gnomed";
}


ConfirmButton.onclick = function() {
  ConfirmButton.style.display = "none";
  Text.style.display = "none";
  Label.style.display = "none";
  Title.style.display = "none";
  StoryOpening.style.display = "block";
};

DoIt.onclick = function() {
  StoryOpening.style.display = "none";
  OptionOne.style.display = "block";
};

AbsolutelyNot.onclick = function() {
  StoryOpening.style.display = "none";
  OptionTwo.style.display = "block";
};

Small.onclick = function() {
  OptionOne.style.display = "none";
  OptionOneEnd.style.display = "block";
};

Large.onclick = function() {
  OptionOne.style.display = "none";
  OptionTwoEnd.style.display = "block";
};

Approach.onclick = function() {
  OptionTwo.style.display = "none";
  OptionThreeEnd.style.display = "block";
};

Walk.onclick = function() {
  OptionTwo.style.display = "none";
  OptionFourEnd.style.display = "block";
};





