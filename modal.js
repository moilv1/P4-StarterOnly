// Hamburger Menu
const toggleBtn = document.getElementById("nav-toggle");
  const nav = document.getElementById("myTopnav");
  const background = document.querySelector(".main-navbar");

toggleBtn.addEventListener("click", function () {
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
});


// DOM Elements
const modalbg = document.querySelector(".bground");
const btnSignups = document.querySelectorAll(".btn-signup");
const closeBtn = document.querySelector(".close");
const formulaire = document.querySelector(".formulaire");
const landingModal = document.querySelector(".landingModal");
const errorMessage = document.querySelectorAll(".errorMessage");
const inputs = document.querySelectorAll("input.text-control");
const sendForm = document.getElementById("sendForm");
const closeLandingModal = document.getElementById("closeLandingModal");



// Value input
const prenom = document.querySelector("input[name='prenom']");
const nom = document.querySelector("input[name='nom']");
const email = document.querySelector("input[name='email']");
const dateNaissance = document.querySelector("input[name='birthdate']");
const tournois = document.querySelector("input[name='tournois']");
const checkBoxCU = document.getElementById('checkbox1');
const ratios = document.querySelectorAll("input[name='location']");
const hamburgerMenu = document.getElementById("hamburgerMenu");



// REGEX
const dateRegex = /^\d{4}[-/]\d{2}[-/]\d{2}$/; // format aaaa/mm/jj
const patternEmail = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;


// launch modal event
btnSignups.forEach((btn => {
  btn.addEventListener('click', launchModal);
}));


// launch modal form

function launchModal() {
  modalbg.style.display = "block";
  formulaire.style.display = "block";
  window.location.href = "#body";
}

// Close modal
function closeModal () {
  errorMessage.forEach(mess => {
    mess.style.display = 'none';
  });
  inputs.forEach(input => {
    input.classList.remove('invalid')
  })
  modalbg.style.display = "none";
  formulaire.style.display="none";
  landingModal.style.display = "none";
}

function closeForm() {
  modalbg.style.display = "block";
  formulaire.style.display="none";
  landingModal.style.display = "block";
}

// Event
//-----------------------------------------//
closeLandingModal.addEventListener("click", closeModal)
closeBtn.addEventListener("click", closeModal)

sendForm.addEventListener("click", () => {
  submitForm();
})

prenom.addEventListener("input", () => {
  validerPrenom(prenom.value);
})

nom.addEventListener("input", () => {
  validerNom(nom.value)
})

email.addEventListener('input', () => {
  validerEmail(email.value)
})

dateNaissance.addEventListener('change', () => {
  validerDateNaissance(dateNaissance.value)
})

tournois.addEventListener('input', () => {
  validerNbreTournois(tournois.value);
})




// Function
//-------------------------------------//

function validerPrenom(name) {
  if (name.length < 2) {
    errorMessage[0].style.display= 'block';
    prenom.classList.add('invalid')
    return false;
  }
  errorMessage[0].style.display= 'none';
  prenom.classList.remove('invalid')
  return true;
}

function validerNom(name) {
  if (name.length < 2) {
    errorMessage[1].style.display= 'block';
    nom.classList.add('invalid');
    return false;
  }
  errorMessage[1].style.display= 'none';
  nom.classList.remove('invalid');
  return true;
}

function validerEmail(emailValue) {
  if (!patternEmail.test(emailValue)) {
    errorMessage[2].style.display = 'block';
    email.classList.add('invalid');
    return false;
  } else {
    errorMessage[2].style.display = 'none';
    email.classList.remove('invalid');
    return true;
  }
}

function validerDateNaissance(date) {
  const regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  
  if (!regex.test(date)) {
    dateNaissance.classList.add('invalid');
    errorMessage[3].style.display = 'block';
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

  dateNaissance.classList.remove('invalid');
  errorMessage[3].style.display = 'none';
  return estValide
}

function validerNbreTournois(nbre) {
  const nombreValide = /^[0-9]{1,3}$/.test(nbre) && parseInt(nbre) >= 0 && parseInt(nbre) <= 100;

  if (!nombreValide) {
    tournois.classList.add('invalid');
    errorMessage[4].style.display = 'block';
    return false;
  }
  tournois.classList.remove('invalid');
  errorMessage[4].style.display = 'none';
  return true;
}

function validerLocation(radios) {
  let isSelected = false;

  radios.forEach((elt) => {
    if (elt.checked) {
      errorMessage[5].style.display = 'none';
      isSelected = true;
    }
  });

  if (!isSelected) {
    errorMessage[5].style.display = 'block';
  }

  return isSelected;
}

function checkAcceptance(checkBox) {
  if (!checkBox.checked) {
    errorMessage[6].style.display = 'block';
    return false
  }
  errorMessage[6].style.display = 'none';
  return true
}

function resetFormFields() {
  prenom.value = "";
  nom.value = "";
  email.value = "";
  dateNaissance.value = "";
  tournois.value = "";

  // Réinitialiser les boutons radio
  ratios.forEach(radio => {
    radio.checked = false;
  });

  // Réinitialiser la case à cocher
  checkBoxCU.checked = false;

  // Masquer tous les messages d'erreur
  errorMessage.forEach(msg => {
    msg.style.display = 'none';
  });
}

function submitForm() {

  const isPrenomValid = validerPrenom(prenom.value);
  const isNomValid = validerNom(nom.value);
  const isEmailValid = validerEmail(email.value);
  const isDateValid = validerDateNaissance(dateNaissance.value);
  const isNbreTournoisValid = validerNbreTournois(tournois.value);
  const isLocationValid = validerLocation(ratios);
  const isAccepted = checkAcceptance(checkBoxCU);


  if (isPrenomValid && isNomValid && isEmailValid && isDateValid && isNbreTournoisValid && isLocationValid && isAccepted) {
    formulaire.reset()
    closeForm();
  }

}