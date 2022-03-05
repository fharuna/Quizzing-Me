var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var ChoiceA = document.getElementById("ChoiceA");
    var ChoiceB = document.getElementById("ChoiceB");
    var ChoiceC = document.getElementById("ChoiceC");
    var ChoiceD = document.getElementById("ChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    // Set score = 0 at the start of the game 
    var score = 0;
    // question index
    let i = 0;

// QUESTIONS ARRAY:

var questionsArray = [
{
    question: "Commonly used data types DO NOT include:",
    imageSrc: "",
    answerChoice: ["A) strings", "B) alerts", "C) booleans", "D) numbers"],
    correctAnswer: 1
}, 
{
    question: "The condition in an if / else statement is enclosed within ____",
    imageSrc: "",
    answerChoice: ["A) quotes ", "B) curly brackets", "C) parentheses", "D) square brackets"],
    correctAnswer: 2
},
{
    question: "How do you create an array in javascript?",
    imageSrc: "",
    answerChoice: ["A) var A[]=", "B) var{}=", "C)var A=[]", "D) var A={}"],
    correctAnswer: 2
}, 
{
    question: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
    imageSrc: "",
    answerChoice: ["A) getElementById(‘idname’)", "B) getElementsByClass(‘classname’)", "C) getElementsByTagName(‘tagname’", "D) querySelectorAll()"],
    correctAnswer: 3
},
{
    question: "What is the HTML tag under which you can write in the Javascript code?",
    answerChoice: ["A) <script>", "B) <javascript>", "C) <js>", "D) <scripts>"],
    correctAnswer: 0
}];

//  Timer 

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//function to change the timer variable

function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        // clearInterval(countdownTimerInterval);
        //alert user and stop quiz
        }
        document.getElementById("timer").innerHTML = time;
    }


startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        ChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        ChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        ChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        ChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };



ChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        // check answer
        if (0 === correctAnswer) { 
            // display message to user for 1  second stating if the answer is correct or incorrect
            document.getElementById("AnswerResponse").innerHTML = "Correct";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            // when user answers a question correctly, increase the score
            score++;    
            // display updated score progress
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            // when user answers a question inccorrectly, subtract from the time
            document.getElementById("AnswerResponse").innerHTML = "Incorrect!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

ChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

ChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

ChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 10;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

        //end quiz
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

        //submit score and initals

            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }

    
        
        function view_high_scores(){
        
    
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        // refresh the site to the home container page
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        
        // clear the highscore
        function clear_hs(){
            high_scores = [];
            function clear_up(){
          }
        
    
        time=75;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }