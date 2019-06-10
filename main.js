// Variables

let loginModal = document.querySelector("#loginModal");
let purposeModal = document.querySelector("#purposeModal");
let logout = document.querySelector(".logout");
let closeBtn = document.querySelector(".close");
let loginBtn = document.querySelector(".loginBtn");
let userName = document.querySelector(".inputName");
let purposeContent = document.querySelector(".purposeModalContent");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let saveBtn = document.querySelector(".saveBtn");
let response = document.querySelector(".responses");
let userArr = [];
let userKey;

// Functions
function logModal() {
  clearInput();
  loginModal.style.display = "block";
}

function loginUser() {
  clearInput();
  if (userArr.indexOf(userName.value) != -1) {
    userKey = userArr.indexOf(userName.value);

    loginModal.style.display = "none";
  } else {
    userArr.push(userName.value);
    userKey = userArr.indexOf(userName.value);
    loginModal.style.display = "none";
  }
  if (response.children.length) {
    for (let i = 0; i < response.children.length; i++) {
      let temp = parseInt(response.children[i].lastChild.textContent);
      if (temp != userKey) {
        response.children[i].children[6].classList.remove("visib");
        response.children[i].children[6].classList.add("hide");
      }
    }
  }
}

function findPurpose() {
  purposeContent.innerHTML = "";
  if (
    input1.value == null ||
    input1.value == "" ||
    input2.value == null ||
    input2.value == "" ||
    input3.value == null ||
    input3.value == "" ||
    input4.value == null ||
    input4.value == ""
  ) {
    alert("Please answer all the question");
    event.preventDefault();
  } else {
    let h2 = document.createElement("h2");
    let h31 = document.createElement("h3");
    let h32 = document.createElement("h3");
    let h33 = document.createElement("h3");
    let h34 = document.createElement("h3");
    let h35 = document.createElement("h3");
    let div = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    h2.setAttribute("class", "userName");
    h31.setAttribute("class", "userInput");
    h32.setAttribute("class", "userInput");
    h33.setAttribute("class", "userInput");
    h34.setAttribute("class", "userInput");
    h35.setAttribute("class", "userInput");
    button1.setAttribute("class", `modalEditBtn`);
    button2.setAttribute("class", `modalSaveBtn`);
    h2.textContent = userArr[userKey];
    if (input1.value === input2.value) {
      h31.textContent = `Passion: ${input1.value}`;
    } else {
      h31.textContent = "Passion: Nothing";
    }
    if (input1.value === input4.value) {
      h32.textContent = `Mission: ${input1.value}`;
    } else {
      h32.textContent = "Mission: Nothing";
    }
    if (input3.value === input4.value) {
      h33.textContent = `Vocation: ${input3.value}`;
    } else {
      h33.textContent = "Vocation: Nothing";
    }
    if (input3.value === input2.value) {
      h34.textContent = `Profession: ${input2.value}`;
    } else {
      h34.textContent = "Profession: Nothing";
    }
    if (((input1.value === input4.value) == input2.value) == input3.value) {
      h35.textContent = `Purpose: ${input1.value}`;
    } else {
      h35.textContent = "Purpose: Nothing";
    }
    button1.textContent = "Edit";
    button2.textContent = "Save";
    purposeContent.appendChild(h2);
    purposeContent.appendChild(h31);
    purposeContent.appendChild(h32);
    purposeContent.appendChild(h33);
    purposeContent.appendChild(h34);
    purposeContent.appendChild(h35);
    purposeContent.appendChild(button1);
    purposeContent.appendChild(button2);
    button1.addEventListener("click", edit);
    button2.addEventListener("click", save);
    event.preventDefault();
    purposeModal.style.display = "block";
  }
}

function save() {
  purposeModal.style.display = "none";
  let h2 = document.createElement("h2");
  let h31 = document.createElement("h3");
  let h32 = document.createElement("h3");
  let h33 = document.createElement("h3");
  let h34 = document.createElement("h3");
  let h35 = document.createElement("h3");
  let div = document.createElement("div");
  let p = document.createElement("p");

  let button1 = document.createElement("button");
  h2.setAttribute("class", `userName${userKey}  userName`);
  h31.setAttribute("class", "userInput");
  h32.setAttribute("class", "userInput");
  h33.setAttribute("class", "userInput");
  h34.setAttribute("class", "userInput");
  h35.setAttribute("class", "userInput");
  p.setAttribute("class", "hide");
  button1.setAttribute("class", `savedEditBtn visib`);
  div.setAttribute("class", `user user${userKey}`);

  h2.textContent = userArr[userKey];
  if (input1.value === input2.value) {
    h31.textContent = `Passion: ${input1.value}`;
  } else {
    h31.textContent = "Passion: Nothing";
  }
  if (input1.value === input4.value) {
    h32.textContent = `Mission: ${input1.value}`;
  } else {
    h32.textContent = "Mission: Nothing";
  }
  if (input3.value === input4.value) {
    h33.textContent = `Vocation: ${input3.value}`;
  } else {
    h33.textContent = "Vocation: Nothing";
  }
  if (input3.value === input2.value) {
    h34.textContent = `Profession: ${input2.value}`;
  } else {
    h34.textContent = "Profession: Nothing";
  }
  if (
    input1.value == input4.value &&
    input1.value == input2.value &&
    input1.value == input3.value
  ) {
    h35.textContent = `Purpose: ${input1.value}`;
  } else {
    h35.textContent = "Purpose: Nothing";
  }
  p.textContent = userKey;
  button1.textContent = "Edit";
  div.appendChild(h2);
  div.appendChild(h31);
  div.appendChild(h32);
  div.appendChild(h33);
  div.appendChild(h34);
  div.appendChild(h35);
  div.appendChild(button1);
  div.appendChild(p);
  response.appendChild(div);
  clearInput();
  button1.addEventListener("click", edit);
}

function clearInput() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
}

// function editBtnAuth() {
//   console.log(userKey);
//   let children = document.querySelector(`user${userKey}`).children[6];
//   console.log(children);
// }
// // Event Listners

loginBtn.addEventListener("click", loginUser);

logModal();

document.querySelector(".findBtn").addEventListener("click", findPurpose);

logout.addEventListener("click", logModal);

function edit(event) {
  let parent = event.target.parentNode;
  let childrens = parent.children;
  // let parentClass = event.target.parentNode.classList[1].replace("user", "");
  // console.log(parentClass);

  // inputName.value = childrens[0].textContent;
  input1.value = childrens[1].textContent;
  input2.value = childrens[2].textContent;
  input3.value = childrens[3].textContent;
  input4.value = childrens[4].textContent;
  input1.focus();
}
