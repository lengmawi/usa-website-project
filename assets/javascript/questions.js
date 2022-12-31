// questions
var questions = document.querySelectorAll(".question-title");
questions.forEach(function (question) {
    const questionBtn = question.querySelector(".question-btn");
    questionBtn.addEventListener("click", function () {
        question.classList.toggle("show-text");
    });
});