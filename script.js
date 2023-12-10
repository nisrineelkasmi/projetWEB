document.addEventListener('DOMContentLoaded', function () {
    var quizForm = document.getElementById('quiz-form');
    var alertMessage = document.getElementById('alert');
  
    quizForm.addEventListener('submit', function (event) {
      event.preventDefault();
      checkAnswers();
    });
  
    function checkAnswers() {
      var questions = document.querySelectorAll('.question-item');
      var allCorrect = true;
  
      questions.forEach(function (question) {
        var answers = question.querySelectorAll('.answer');
        var isQuestionCorrect = false;
  
        answers.forEach(function (answer) {
          if (answer.checked && answer.value === 'true') {
            isQuestionCorrect = true;
          }
  
          answer.parentElement.classList.remove('correct', 'incorrect');
        });
  
        if (isQuestionCorrect) {
          question.classList.add('correct');
        } else {
          question.classList.add('incorrect');
          allCorrect = false;
        }
      });
  
      if (allCorrect) {
        alertMessage.style.display = 'block';
      } else {
        alertMessage.style.display = 'none';
      }
    }
  });
  