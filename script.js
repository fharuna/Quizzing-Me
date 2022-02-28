var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#reset");
var backButton = document.querySelector("#Back");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});

var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";
  questionsDiv.appendChild(createSubmit);

createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

if (initials === null) {
    console.log("No value entered!");
  } else {
    var highScore = {
      initials: initials,
      score: timeRemaining,
    };
    console.log(highScore);
    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(highScore);
    var newScore = JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    window.location.replace("highScores.html");
  }
});