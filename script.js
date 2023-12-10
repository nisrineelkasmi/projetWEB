document.addEventListener('DOMContentLoaded', function () {
  const quizForm = document.getElementById('quiz-form');
  const alertDiv = document.getElementById('alert');

  quizForm.addEventListener('submit', function (event) {
    event.preventDefault();
    checkQuizAnswers();
  });

  function checkQuizAnswers() {
    const questions = document.querySelectorAll('.question-item');
    const correctAnswers = ['true', 'true', 'true'];

    let totalCorrect = 0;
    let allQuestionsAnswered = true;

    questions.forEach(question => {
      const selectedAnswer = question.querySelector('input:checked');

      if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const isCorrect = userAnswer === correctAnswers[totalCorrect];

        applyAnswerStyles(question, isCorrect);

        if (isCorrect) {
          totalCorrect++;
        }
      } else {
        allQuestionsAnswered = false;
      }
    });

    displayResultAlert(allQuestionsAnswered, totalCorrect, questions.length);
  }

  function applyAnswerStyles(question, isCorrect) {
    question.style.color = isCorrect ? 'green' : 'red';
  }

  function displayResultAlert(allQuestionsAnswered, totalCorrect, totalQuestions) {
    alertDiv.style.display = allQuestionsAnswered && totalCorrect === totalQuestions ? 'block' : 'none';
    alertDiv.textContent = allQuestionsAnswered && totalCorrect === totalQuestions ? 'Congratulations! You got them all right!' : '';
  }
});
  
