const questions =
    [
        {
            question: " India is a federal union comprising twenty-eight states and how many union territories?",
            answers: [
                { text: "6", correct: false },
                { text: "9", correct: false },
                { text: "8", correct: true },
                { text: "7", correct: false },
            ]
        },
        {
            question: " Which of the following is the capital of Arunachal Pradesh?",
            answers: [
                { text: "Itanagar", correct: true },
                { text: "Kohima", correct: false },
                { text: "Imphal", correct: false },
                { text: "Panaji", correct: false },
            ]
        },
        {
            question: " Which river is the longest in the world?",
            answers: [
                { text: "Amazon", correct: false },
                { text: "Mississippi", correct: false },
                { text: "Yangtze", correct: false },
                { text: "Nile", correct: true },
            ]
        },
        {
            question: "  What gas is used to extinguish fires?",
            answers: [
                { text: "Nitrogen", correct: false },
                { text: "oxygen", correct: false },
                { text: "Hydrogen", correct: false },
                { text: "Carbon Dioxide", correct: true },
            ]
        },
        {
            question: " For which of these disciplines Nobel Prize is awarded?",
            answers: [
                { text: "Medicine", correct: false },
                { text: "Physiology", correct: false },
                { text: "Physics,Chemistry", correct: false },
                { text: "all of the above", correct: true },
            ]
        },
        {
            question: " Which is the largest island?",

            answers: [
                { text: "New Guinea", correct: false },
                { text: " Hawaii", correct: false },
                { text: "Greenland", correct: true },
                { text: " Andaman Nicobar", correct: false },
            ]
        },
        {
            question: "Where did Tata Consultancy Services (TCS) unveil its Global Artificial Intelligence (AI) Centre of Excellence?",

            answers: [
                { text: "Franch", correct: true },
                { text: " India", correct: false },
                { text: "Germany", correct: false },
                { text: " Japan", correct: false },
            ]
        },
        {
            question: "  In what year did the discovery of Antarctica occur?",

            answers: [
                { text: "1789", correct: false },
                { text: " 1820", correct: true },
                { text: "1778", correct: false },
                { text: " 1600 ", correct: false },
            ]
        },
        {
            question: " In which country did the Chernobyl nuclear disaster take place?",

            answers: [
                { text: "Russia", correct: false },
                { text: " Belarus", correct: false },
                { text: "Ukraine", correct: true },
                { text: "Lithuania", correct: false },
            ]
        },
        {
            question: " Who became the first Indian male wrestler to qualify for the 2024 Paris Olympics?",

            answers: [
                { text: "Deepak Punia", correct: false },
                { text: " Ravi Kumar Dahiya", correct: false },
                { text: "Aman Sehrawat", correct: true },
                { text: " Bajrang Punia", correct: false },
            ]
        }

    ]

const question_element = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1;
    question_element.innerHTML = questionNo + "." + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
       
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild)
        {
            answerButton.removeChild(answerButton.firstChild);
        }
}
function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button=> {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function showScore(){
    resetState();
    question_element.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Thankyou";
    nextButton.style.display="block";
}
nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        if (window.confirm("Do you really want to leave?")) {
           close();
          }
          
       
    }
})
startQuiz() ;
