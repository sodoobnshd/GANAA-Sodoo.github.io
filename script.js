const quizData = [
    {
        question: "Эрдэнэ аль нутгийн цагаач вэ?",
        a: "Түшээт хан",
        b: "Сайн ноён хан",
        c: "Засагт хан",
        d: "Нийслэл хүрээ",
        correct: "c",
    },
    {
        question: "Долгор тайхар чулуунаас юу гуйдаг вэ?",
        a: "Мөсөн чихэр",
        b: "Орон гэр",
        c: "Унаа морь",
        d: "Аз жаргал",
        correct: "d",
    },
    {
        question: "Эрдэнийн чөдрийн ганц морийг хэн хулгайлсан бэ?",
        a: "Дүү нь",
        b: "Галсан",
        c: "Хонгор",
        d: "Бадарч тахар",
        correct: "a",
    },
    {
        question: "Баян Павловын зарц Петр Монголд дахин ирэхдээ ямар хүн болсон байдаг вэ?",
        a: "Улаан армийн комиссар",
        b: "Цагаантны цэрэг",
        c: "Тариачин",
        d: "Павловын туслах хэвээрээ",
        e: "Аль нь ч биш",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Та ${score}/${quizData.length} асуултанд зөв хариулсан байна.</h2>

           <button onclick="location.reload()">Дахин оролдох</button>
           `
       }
    }
})