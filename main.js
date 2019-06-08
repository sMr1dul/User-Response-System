let inputName = document.querySelector(".inputName");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let saveBtn = document.querySelector(".saveBtn");
let response = document.querySelector(".responses");
let edit;
let btnCount = 0;
let lastBtnCount = 0;
let edited = false;

function editResponse(event) {
  lastBtnCount = btnCount;
  edited = true;
  let parent = event.target.parentNode;
  let childrens = parent.children;
  btnCount = parseInt(event.target.parentNode.classList[1].replace("user", ""));
  inputName.value = childrens[0].textContent;
  input1.value = childrens[1].textContent;
  input2.value = childrens[2].textContent;
  input3.value = childrens[3].textContent;
  input4.value = childrens[4].textContent;
  response.removeChild(parent);
  input1.focus();
}

saveBtn.addEventListener("click", saveResponse);

function saveResponse(event) {
  if (
    inputName.value == "" ||
    inputName.value == null ||
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
    let div = document.createElement("div");
    let button = document.createElement("button");
    h2.setAttribute("class", "userName");
    h31.setAttribute("class", "userInput");
    h32.setAttribute("class", "userInput");
    h33.setAttribute("class", "userInput");
    h34.setAttribute("class", "userInput");
    button.setAttribute("class", `editBtn editBtn${btnCount}`);
    h2.textContent = inputName.value;
    h31.textContent = input1.value;
    h32.textContent = input2.value;
    h33.textContent = input3.value;
    h34.textContent = input4.value;
    button.textContent = "Edit";
    div.setAttribute("class", `user user${btnCount}`);
    div.appendChild(h2);
    div.appendChild(h31);
    div.appendChild(h32);
    div.appendChild(h33);
    div.appendChild(h34);
    div.appendChild(button);
    response.appendChild(div);
    edit = document.querySelector(`.editBtn${btnCount}`);
    edit.addEventListener("click", editResponse);
    if (edited) {
      btnCount = lastBtnCount;
      edited = false;
    }
    isResponse = true;
    btnCount++;
    inputName.value = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    response.focus();
    event.preventDefault();
  }
}
