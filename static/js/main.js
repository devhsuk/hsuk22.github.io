
function init() {
  let mainDiv = document.getElementById("main");
  let dt = new Date();

  var time = document.createElement("p");
  time.appendChild(document.createTextNode("connected on " + dt.toLocaleString()));

  mainDiv.appendChild(document.createTextNode("Welcome to my website! (1.0.0)"));
  mainDiv.appendChild(document.createElement("br"));
  mainDiv.appendChild(time);
  mainDiv.appendChild(document.createTextNode("for list of commands enter \"help\""));
  mainDiv.appendChild(document.createElement("br"));
  mainDiv.appendChild(document.createElement("br"));

  createPrompt();
}

function createPrompt() {
  let mainDiv = document.getElementById("main");
  let prompt = document.createElement("label");
  let input = document.createElement("input");

  input.setAttribute("id", "prompt");
  input.setAttribute("onkeyup", "if(window.event.keyCode==13){enter()}");

  prompt.setAttribute("id", "prompt");
  prompt.appendChild(document.createTextNode("hsuk:~$ "));
  prompt.appendChild(input);

  mainDiv.appendChild(prompt);
}

function enter() {
  let mainDiv = document.getElementById("main");
  //let text = document.getElementById("prompt").value;
  let text = mainDiv.lastChild.lastChild.value;
  mainDiv.lastChild.lastChild.readOnly = true;

  console.log(text);
  switch (text) {
    case "help":
      help();
      break;
    default:
  }

  mainDiv.appendChild(document.createElement("br"));
  createPrompt();

  let newPrompt = mainDiv.lastChild.lastChild;
  newPrompt.focus();
  newPrompt.scrollIntoView();
}

function help() {
  let mainDiv = document.getElementById("main");
  let commands = "startx, ls, open"
  // [
  //   "startx: enter gui mode",
  //   "ls: list page menues",
  //   "cd: open page"
  // ]
  mainDiv.appendChild(document.createTextNode("List of commands"));
  mainDiv.appendChild(document.createElement("br"));

  let span = document.createElement("span");
  span.setAttribute("id", "indent");
  span.textContent = commands;
  mainDiv.appendChild(span);
  mainDiv.appendChild(document.createElement("br"));
  // commands.forEach((c) => {
  //   let span = document.createElement("span");
  //   span.setAttribute("id", "cmd_list");
  //   span.textContent = c;
  //   mainDiv.appendChild(span);
  //   mainDiv.appendChild(document.createElement("br"));
  // });
}

function startx() {
  window.open("./view/home.html");
}

function ls() {
}

function open() {
}

window.onload = init;
