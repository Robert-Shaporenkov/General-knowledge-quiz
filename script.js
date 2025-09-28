const QUESTIONS_ANSWERS = [
    {
    question: "What is the capital of Slovenia?",
    options: ["Bratislava", "Belgrade", "Ljubljana", "Podgorica"],
    answer: "Ljubljana"
    },

    {
    question: "Which ancient civilization built Machu Picchu in Peru?",
    options: ["Incas", "Aztecs", "Mayans", "Peruvians"],
    answer: "Incas"
    },

    {
    question: "What is the chemical symbol for the element with the atomic number 79?",
    options: ["Au", "Hg", "K", "Rh"],
    answer: "Au"
    },

    {
    question: "Which country has won the most FIFA World Cup titles in men's football?",
    options: ["France", "Brazil", "Argentina", "Germany"],
    answer: "Brazil"
    },
    
    {
    question: "Which of these wasn't written by Jane Austen?",
    options: ["Pride and Prejudice", "Jane Eyre", "Sense and Sensibility", "Northanger Abbey"],
    answer: "Jane Eyre"
    },

    {
    question: "What is the name of the fictional African country where Black Panther is set?",
    options: ["Zamunda", "Latveria", "Gemosha", "Wakanda"],
    answer: "Wakanda"
    },

    {
    question: "Which artist released the hit album Thriller?",
    options: ["Michael Jackson", "The Weeknd", "Britney Spears", "Meghan Trainor"],
    answer: "Michael Jackson"
    },

    {
    question: "What company developed the first commercially successful graphical web browser, Mosaic, in the early 1990s?",
    options: ["Microsoft", "CERN", "Apple", "Netscape"],
    answer: "Netscape"
    },

    {
    question: "Which famous artist is known for cutting off part of his own ear?",
    options: ["Claude Monet", "Vincent van Gogh", "Salvador Dalí", "Pablo Picasso"],
    answer: "Vincent van Gogh"
    },

    {
    question: "Which planet in our solar system has the most moons?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    answer: "Saturn"
    }
];

let currIndex = -1;
let score = 0;
let check_res;

function checkAnswer(event) {
    const USER_CHOICE = event.target.textContent;
    const CURR_OBJECT = QUESTIONS_ANSWERS[currIndex];
    if (USER_CHOICE === CURR_OBJECT.answer) {
        score++;
        return true;
    } else {
        return false;
    }
}

function nextQuestion(event) {
    if (currIndex === -1) {
        toggleStartBtn();
        toggleNoClick();
    } else {
        check_res = checkAnswer(event);
    }
    currIndex++; 
    if (currIndex === 10) {
        document.getElementById("question").textContent = `Well done! You've finished the quiz. You got ${score} out of 10.`;
        toggleNoClick();
        toggleResetBtn();
    } else {
        if (currIndex === 0) {
            switchQuestion();
        } else {
            if (check_res === true) {
                document.getElementById("question").textContent = `You are correct. You are on ${score} out of ${currIndex}.`;
            } else {
                document.getElementById("question").textContent = `You are incorrect. You are on ${score} out of ${currIndex}. The correct answer was ${QUESTIONS_ANSWERS[currIndex - 1].answer}.`;
            }
            toggleNoClick();
            setTimeout(() => {
                    switchQuestion();
                    toggleNoClick();
            }, 1500);
        }
    }
}

function switchQuestion() {
    const NEXT_OBJECT = QUESTIONS_ANSWERS[currIndex];
    document.getElementById("question").textContent = `Question ${currIndex + 1}: ${NEXT_OBJECT.question}`;
    document.getElementById("answer1").textContent = NEXT_OBJECT.options[0];
    document.getElementById("answer2").textContent = NEXT_OBJECT.options[1];
    document.getElementById("answer3").textContent = NEXT_OBJECT.options[2];
    document.getElementById("answer4").textContent = NEXT_OBJECT.options[3];
}

function toggleNoClick() {
    document.getElementById("answer1").classList.toggle("no-click");
    document.getElementById("answer2").classList.toggle("no-click");
    document.getElementById("answer3").classList.toggle("no-click");
    document.getElementById("answer4").classList.toggle("no-click");
}

function toggleStartBtn() {
    const btn = document.getElementById("start");
    if (btn.style.display === "none") {
        btn.style.display = "inline-block";
        document.getElementById("question").style.marginRight = "30px";
    } else {
        btn.style.display = "none";
        document.getElementById("question").style.marginRight = "0";
    }
}

function toggleResetBtn() {
    const reset_btn = document.getElementById("reset");
    if (reset_btn.style.display === "none") {
        reset_btn.style.display = "inline-block";
        document.getElementById("question").style.marginRight = "30px";
    } else {
        reset_btn.style.display = "none";
        document.getElementById("question").style.marginRight = "0";
    }
}

function resetGame() {
    toggleResetBtn();
    toggleStartBtn();
    document.getElementById("answer1").classList.add("no-click");
    document.getElementById("answer2").classList.add("no-click");
    document.getElementById("answer3").classList.add("no-click");
    document.getElementById("answer4").classList.add("no-click");
    score = 0;
    currIndex = -1;
    document.getElementById("question").textContent = "Welcome to the general knowledge quiz!";
}


