const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#firstNameOutput");
const lastNameOutput = document.querySelector("#lastNameOutput");
const emailOutput = document.querySelector("#emailOutput");
const telefonOutput = document.querySelector("#telefonOutput");
const bilenOutput = document.querySelector("#bilenOutput");
const hjælpemiddelOutput = document.querySelector("#hjælpemiddelOutput");
const termsOutput = document.querySelector("#termsOutput");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const telefon = formData.get("telefon");
  const bilen = formData.get("bilen");
  const hjælpemiddel = formData.get("hjælpemiddel");
  const terms = formData.get("accept_terms");

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  telefonOutput.textContent = telefon;
  bilenOutput.textContent = bilen;
  hjælpemiddelOutput.textContent = hjælpemiddel;
  termsOutput.textContent = terms;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
