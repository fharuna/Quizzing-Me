var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#reset");
var backButton = document.querySelector("#Back");


if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;

    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;
}

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});
var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";
  questionsDiv.appendChild(createLabel);
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";
  questionsDiv.appendChild(createInput);

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
