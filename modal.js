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
const patternEmail = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
const patternDate = new RegExp(birthdate.pattern);


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

prenom.addEventListener("input", () => {
  validerPrenom(prenom.value);
})

nom.addEventListener("input", () => {
  validerNom(nom.value)
})

email.addEventListener('input', function () {
  validerEmail(email.value)
})

dateNaissance.addEventListener('change', function() {
  const date = dateNaissance.value
  if (!validerDateNaissance(date)) {
    errorMessage[3].style.display = 'block';
    console.log(dateNaissance.value);
    console.log('err');
  } else {
    errorMessage[3].style.display = 'none';
    console.log('ok');
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

function validerEmail(email) {
  if (!patternEmail.test(email)) {
    errorMessage[2].style.display = 'block';
    return;
  } else {
    errorMessage[2].style.display = 'none';
    return;
  }
}

function validerDateNaissance(date) {
  const regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  
  if (!regex.test(date)) {
    return false
  }
  
  const [annee, mois, jour] = date.split('-').map(Number); // Découper en [année, mois, jour]
  const dateObj = new Date(annee, mois - 1, jour);

  const estValide =
    dateObj.getFullYear() === annee &&
    dateObj.getMonth() === mois - 1 &&
    dateObj.getDate() === jour;

  if (!estValide) {
    console.log("La date est logiquement incorrecte.");
  }

  return estValide
}

