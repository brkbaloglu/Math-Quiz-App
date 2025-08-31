const questions = [{
    question: "f ve g fonksiyonları için, (f+g)(x) = -3x-1 ve (f+g)(A)={-4, -1, 2} olduğuna göre f fonksiyonunun tanım kümesi aşağıdakilerden hangisi olabilir?",
    answers: [
        { text: "{-1, 0, 2}", correct: "false" },
        { text: "{-2, 0, 1}", correct: "false" },
        { text: "{-2, 0, 2}", correct: "false" },
        { text: "{-2, 0, 1, 2}", correct: "false" },
        { text: "{-2, -1, 0, 1, 2}", correct: "true" },
    ]
},{
    question: "Uygun şartlarda tanımlı f ve g fonksiyonları için f(4x-3+g(x))=5x+4, f(7)=19 olduğuna göre g(3) kaçtır?",
    answers: [
        { text: "-2", correct: "true" },
        { text: "-3", correct: "false" },
        { text: "-4", correct: "false" },
        { text: "-5", correct: "false" },
        { text: "-6", correct: "false" },
    ]
},{
    question: "Ölçüsü -6860 derece olan açının esas ölçüsü kaç derecedir?",
    answers: [
        { text: "340", correct: "true" },
        { text: "320", correct: "false" },
        { text: "300", correct: "false" },
        { text: "280", correct: "false" },
        { text: "270", correct: "false" },
    ]
},{
    question: "Pozitif bölen sayısı 303 olan en küçük doğal sayının son basamağındaki rakam kaçtır?",
    answers: [
        { text: "9", correct: "false" },
        { text: "8", correct: "false" },
        { text: "7", correct: "false" },
        { text: "4", correct: "true" },
        { text: "1", correct: "false" },
    ]
},{
    question: "Birbirinden farklı üç pozitif tam sayının çarpımı 66000 olduğuna göre, en büyük sayı en az kaç olabilir?",
    answers: [
        { text: "12", correct: "false" },
        { text: "16", correct: "false" },
        { text: "25", correct: "false" },
        { text: "50", correct: "true" },
        { text: "75", correct: "false" },
    ]
},{
    question: "10kg ağırlığında taze bir karpuzun %99'u sudur. Karpuz birkaç gün bekletilirse %98'i su oluyor. Son durumda karpuz kaç kg'dır?",
    answers: [
        { text: "9", correct: "false" },
        { text: "8", correct: "false" },
        { text: "7", correct: "false" },
        { text: "6", correct: "false" },
        { text: "5", correct: "true" },
    ]
},{
    question: "Bir işe aynı güce sahip üç işçi birlikte başlıyorlar ve işin yarısı bittiğinde işçilerden biri ayrılıyor. Kalan işçiler işi tamamladığında, başlangıçtan itibaren geçen sürenin 15 saat olduğu görülüyor. Buna göre, işçilerden biri tek başına bu işi kaç saatte yapabilir?",
    answers: [
        { text: "12", correct: "false" },
        { text: "15", correct: "false" },
        { text: "24", correct: "false" },
        { text: "36", correct: "true" },
        { text: "48", correct: "false" },
    ]
},{
    question: "Bir araç 600 km olan bir yolu 60 km/h hızla gitmek üzere yola çıkıyor. Bir süre sonra yolda bir kazaya rastladığı için 1 saat beklemek zorunda kalıyor. Kalan yolu 70 km/h hızla giderek yolculuğunu vaktinde tamamlıyor. Buna göre, kaza yolun kaçıncı kilometresinde olmuştur?",
    answers: [
        { text: "60", correct: "false" },
        { text: "90", correct: "false" },
        { text: "120", correct: "false" },
        { text: "180", correct: "true" },
        { text: "240", correct: "false" },
    ]
},{
    question: "Pozitif bir sayıya 61 ilave edildiğinde sayının karekökü 1 artmaktadır. Buna göre, sayının rakamları toplamı kaçtır?",
    answers: [
        { text: "9", correct: "true" },
        { text: "8", correct: "false" },
        { text: "7", correct: "false" },
        { text: "6", correct: "false" },
        { text: "5", correct: "false" },
    ]
},{
    question: "Üç basamaklı sayıların kaç tanesinde yalnız bir tane 7 rakamı bulunur?",
    answers: [
        { text: "150", correct: "false" },
        { text: "200", correct: "false" },
        { text: "225", correct: "true" },
        { text: "240", correct: "false" },
        { text: "325", correct: "false" },
    ]
}]



const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + "." + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text 
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"

}

function showScore() {
    resetState()
    questionElement.innerHTML = `
        Doğru Sayısı: ${score}
        Yanlış Sayısı: ${questions.length - score} 
    `
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }else{
        showScore()
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex<questions.length) {
        handleNextButton()
    }else{
        startQuiz()
    }
})
startQuiz()