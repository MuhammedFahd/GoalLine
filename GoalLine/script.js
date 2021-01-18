var quiztime = 30 * 10;
var total_seconds = quiztime;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

  if (total_seconds <= 0) {
    score();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
  }
}
timer = setTimeout(CheckTime, 1000);

// Main function which handles quiz answer logic
function submitQuiz() {
  // stop timer
  clearInterval(timer);
  console.log('submitted');

// get each answer score
  function answerScore (qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
         if (radiosNo[i].checked) {
        var answerValue = Number(radiosNo[i].value);
      }
    }
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }
  
  // calc score with answerScore function
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10'));
  console.log("CalcScore: " + calcScore); // it works!
  var CorrectMarks = calcScore * 2;
  console.log("CorrectMarks: " + CorrectMarks);
  var WrongAns = calcScore - 10;
  console.log(WrongAns);
  var FinalMarks = CorrectMarks + WrongAns;
  console.log("Final Marks:" + FinalMarks);
  
  // function to return correct answer string
  function correctAnswer (correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
    return ("You got question " + qNumber + " wrong, the correct answer is" + ": &nbsp;<strong>" +
      (document.getElementById(correctStringNo).innerHTML) + "</strong>");
  }
  
  // find out which answers are wrong answers
  if (answerScore('q1') === 0) {
    document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
  }
  if (answerScore('q2') === 0) {
    document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
  }
  if (answerScore('q3') === 0) {
    document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
  }
  if (answerScore('q4') === 0) {
    document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
  }
  if (answerScore('q5') === 0) {
    document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
  }
  if (answerScore('q6') === 0) {
    document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
  }
  if (answerScore('q7') === 0) {
    document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
  }
  if (answerScore('q8') === 0) {
    document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
  }
  if (answerScore('q9') === 0) {
    document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
  }
  if (answerScore('q10') === 0) {
    document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
  }
  
  // calculate score
  var questionCountArray = document.getElementsByClassName('question');

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }
  
  // show score
  var elapsed_seconds = c_minutes * 60 + c_seconds
  var showScore = "Your Score: " + FinalMarks +
  "<br />" +
  "You took " + (quiztime - elapsed_seconds) + " seconds";

  // perfect score
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp;<strong>Perfect Score!</strong>";
    document.body.style.background = "#00FF00"; // show green on perfect score
  };
  document.getElementById('userScore').innerHTML = showScore;
  if (calcScore != questionCounter){
    document.body.style.background = "#FF0000"; // show red on anything but perfect score
  }
}