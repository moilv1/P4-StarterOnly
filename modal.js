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
const errorInput = document.querySelectorAll("input");
console.log(errorInput);

const input = document.querySelectorAll("input");


// Value input
const prenom = document.querySelector("input[name='prenom']");
const nom = document.querySelector("input[name='nom']");
const email = document.querySelector("input[name='email']");
const dateNaissance = document.querySelector("input[name='birthdate']");
const tournois = document.querySelector("input[name='tournois']");
const boutonCoche = document.querySelector('input[name="location"]:checked');
const boutonCocheCU = document.querySelector('input[id="checkbox1"]:checked');

// REGEX
const patternEmail = new RegExp(email.pattern);
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

prenom.addEventListener("blur", () => {
  validerPrenom(prenom.value);
})

nom.addEventListener("blur", () => {
  validerNom(nom.value)
})

email.addEventListener('change', function () {
  const emailToConfirm = email.value
  if (!validerEmail(emailToConfirm)) {
    errorMessage[2].style.display = 'block';
  } else {
    errorMessage[2].style.display = 'none';
  }
   
})

dateNaissance.addEventListener('change', function() {
  const date = dateNaissance.value
  if (!validerDateNaissance(date)) {
    errorMessage[3].style.display = 'block';
  } else {
    errorMessage[3].style.display = 'none';
  }
})

tournois.addEventListener('input', function() {
  validerTournois(tournois.value)
})


document.addEventListener('click', () => {
  // Vérifie si un bouton radio est sélectionné
  validerLocation(boutonCoche)
  validerCU(boutonCocheCU)

});







/*function validerFormulaire(event) {

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
  formulaire.style.display = "none";
  landingModal.style.display = "flex";
}*/






//-------------------------------------//

function validerPrenom(prenom) {
  console.log(prenom);
  
  if (!isNaN(prenom) || prenom.length < 2) {
    errorMessage[0].style.display = 'block';
    return;
  }
  errorMessage[0].style.display= 'none';
  return;
}
function validerNom(name) {
  if (!isNaN(name) || name.length < 2) {
    errorMessage[1].style.display = 'block';
    return;
  }
  errorMessage[1].style.display = 'none';
  return;
}

function validerEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(email);
  return regex.test(email)
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
function validerTournois(int) {
  if (isNaN(int) || int < 0) {
    errorMessage[4].style.display = 'block';
    return;
  }
  errorMessage[4].style.display = 'none';
  return;
}

function validerLocation(location) {
  if (location) {
    errorMessage[5].style.display = 'none';
    return;
  }
  errorMessage[5].style.display = 'block';
}
function validerCU(radioCU) {
  if (radioCU) {
    errorMessage[6].style.display = 'none';
    return;
  }
  errorMessage[6].style.display = 'block';
}