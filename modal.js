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
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // -> format email
const dateRegex = /^\d{4}[-/]\d{2}[-/]\d{2}$/; // format aaaa/mm/jj
const nomPrenomRegex = /^[a-zA-ZÀ-ÿ '-]+$/; // -> lettres, accents, espaces, apostrophes


// launch modal event

btnSignup.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formulaire.style.display = "block";
  window.location.href = "#body";
}

/* Dev  */

/*
const closeBtn = document.querySelector(".close");
const formulaire = document.querySelector(".formulaire");
const landingModal = document.querySelector(".landingModal"); 
*/

// Close modal
function closeModal () {
  modalbg.style.display = "none";
  formulaire.style.display="none";
  landingModal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

function validerFormulaire() {

  // boucle pour reset display de errorMessage
  for (let index = 0; index < errorMessage.length; index++) {
    errorMessage[index].style.display= "none";
  }

  // Validation du prénom
  if (!nomPrenomRegex.test(prenom.value)) {
    errorMessage[0].style.display = "flex";
    return;
  }
  
  // Validation du nom
  if (!nomPrenomRegex.test(nom.value)) {
    errorMessage[1].style.display = "flex";
    return;
  }

  // Validation de l'email
  if (!emailRegex.test(email.value)) {
    errorMessage[2].style.display = "flex";
    return;
  }
  // Validation de la date de naissance
  if (!dateRegex.test(dateNaissance.value)) {
    errorMessage[3].style.display = "flex";
    return;
  }

  // Validation du nombre de tournois
  if (isNaN(tournois.value) || tournois.value < 0) {
    errorMessage[4].style.display = "flex";
    return;
  }

  if (checkBoxCU.checked == false) {
    errorMessage[5].style.display = "flex";
    return;
  }

  formulaire.style.display = "none";
  landingModal.style.display = "flex";
}


