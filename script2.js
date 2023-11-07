// window.onload = () => {
//   updateElapsedTime();
// };
function saveName() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  if (name) {
    localStorage.setItem("userName", name);
    document.getElementById("displayName").textContent = name;
  }
}
function removeName() {
  localStorage.removeItem("userName");
  document.getElementById("displayName").textContent = "";

  //   const nameInput = document.getElementById("name");
  //   if (nameInput) {
  //     nameInput.remove();
  //     const removeButtom = document.getElementById("removeButtom");
  //     removeButtom.remove();
  //   }
}
function createRemoveButton() {
  const registratioForm = document.getElementById("formRegist");

  if (!document.getElementById("removeButtom")) {
    const removeButtom = document.createElement("button");
    removeButtom.textContent = "Rimuovi Nome";
    removeButtom.setAttribute("id", "removeButtom");
    removeButtom.addEventListener("click", removeName);
    registratioForm.appendChild(removeButtom);
  }
}
function updateElapsedTime() {
  const timeElapsed = document.getElementById("timeElapsed");
  let seconds = parseInt(sessionStorage.getItem("elapsedSeconds") || 0, 10);

  setInterval(function () {
    seconds++;
    sessionStorage.setItem("elapsedSeconds", seconds);
    timeElapsed.textContent = seconds;
  }, 1000);
}

function createRegistrationForm() {
  const registratioForm = document.getElementById("formRegist");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Nome:";
  registratioForm.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.placeholder = "Inserisci il tuo nome";
  registratioForm.appendChild(nameInput);

  const saveButtom = document.createElement("button");
  saveButtom.textContent = "Salva Nome";
  saveButtom.addEventListener("click", saveName);
  registratioForm.appendChild(saveButtom);

  const removeButtom = document.createElement("button");
  removeButtom.textContent = "Rimuovi Nome";
  removeButtom.addEventListener("click", removeName);
  registratioForm.appendChild(removeButtom);
}
function removeName() {
  localStorage.removeItem("userName");
  document.getElementById("displayName").textContent = "";
  const nameInput = document.getElementById("name");
  nameInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    document.getElementById("displayName").textContent = savedName;
    createRemoveButton();
  }
  createRegistrationForm();
  updateElapsedTime();
});
