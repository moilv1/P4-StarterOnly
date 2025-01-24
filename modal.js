function editNav() {
  var x = document.getElementById("myTopnav");
  var background = document.querySelector(".main-navbar")
  if (x.className === "topnav") {
    x.className += " responsive";
    background.style.backgroundColor = "lightgray";
  } else {
    x.className = "topnav";
    background.style.backgroundColor = "";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const btnSignup = document.querySelector(".btn-signup");
const closeBtn = document.querySelector(".close");
const formulaire = document.querySelector(".formulaire");
const landingModal = document.querySelector(".landingModal");
const errorMessage = document.querySelectorAll(".errorMessage");
const input = document.querySelectorAll("input");


// Value input
const prenom = document.querySelector("input[name='prenom']");
const nom = document.querySelector("input[name='nom']");
const email = document.querySelector("input[name='email']");
const dateNaissance = document.querySelector("input[name='birthdate']");
const tournois = document.querySelector("input[name='tournois']");
const checkBoxCU = document.getElementById('checkbox1');

// REGEX
const dateRegex = /^\d{4}[-/]\d{2}[-/]\d{2}$/; // format aaaa/mm/jj
const pattern = new RegExp(email.pattern)


// launch modal event
btnSignup.addEventListener("click", launchModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formulaire.style.display = "block";
  window.location.href = "#body";
}

// Close modal
function closeModal () {
  modalbg.style.display = "none";
  formulaire.style.display="none";
  landingModal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);


//-----------------------------------------//

prenom.addEventListener("blur", () => {
  validerPrenom(prenom.value);
})

nom.addEventListener("blur", () => {
  validerNom(nom.value)
})

email.addEventListener('input', function () {

  if (!pattern.test(email.value)) {
    errorMessage[2].style.display = 'block';
    return;
  } else {
    errorMessage[2].style.display = 'none';
    return;
  }
})



//-------------------------------------//

function validerPrenom(name) {
  if (name.length < 2) {
    errorMessage[0].style.display= 'block';
    return;
  }
  errorMessage[0].style.display= 'none';
  return;
}
function validerNom(name) {
  if (name.length < 2) {
    errorMessage[1].style.display= 'block';
    return;
  }
  errorMessage[1].style.display= 'none';
  return;
  
}

