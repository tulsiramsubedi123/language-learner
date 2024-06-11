
const vocabularyData = [
    { word: "apple", translation: "pomme", pronunciation: "Pronunciation: æpl", audio: "https://example.com/apple.mp3" },
    { word: "dog", translation: "chien", pronunciation: "Pronunciation: dɔɡ", audio: "https://example.com/dog.mp3" },
    { word: "cat", translation: "chat", pronunciation: "Pronunciation: kæt", audio: "https://example.com/cat.mp3" },
    { word: "house", translation: "maison", pronunciation: "Pronunciation: haʊs", audio: "https://example.com/house.mp3" },
    { word: "car", translation: "voiture", pronunciation: "Pronunciation: kɑr", audio: "https://example.com/car.mp3" },
    { word: "banana", translation: "banane", pronunciation: "Pronunciation: bəˈnænə", audio: "https://example.com/banana.mp3" },
    { word: "book", translation: "livre", pronunciation: "Pronunciation: bʊk", audio: "https://example.com/book.mp3" },
    { word: "computer", translation: "ordinateur", pronunciation: "Pronunciation: kəmˈpjuːtər", audio: "https://example.com/computer.mp3" },
    { word: "friend", translation: "ami", pronunciation: "Pronunciation: frend", audio: "https://example.com/friend.mp3" },
    { word: "water", translation: "eau", pronunciation: "Pronunciation: ˈwɔːtər", audio: "https://example.com/water.mp3" },
    
];


const quizData = [
    { question: "What is the French translation of 'apple'?", answers: ["pomme", "orange", "banane", "raisin"], correct: "pomme" },
    { question: "What is the French translation of 'dog'?", answers: ["chat", "chien", "cheval", "poisson"], correct: "chien" },
    { question: "What is the French translation of 'cat'?", answers: ["chien", "chat", "oiseau", "souris"], correct: "chat" },
    { question: "What is the French translation of 'house'?", answers: ["maison", "appartement", "immeuble", "château"], correct: "maison" },
    { question: "What is the French translation of 'car'?", answers: ["vélo", "voiture", "bus", "moto"], correct: "voiture" },
    { question: "What is the French translation of 'banana'?", answers: ["pomme", "orange", "banane", "raisin"], correct: "banane" },
    { question: "What is the French translation of 'book'?", answers: ["livre", "journal", "magazine", "presse"], correct: "livre" },
    { question: "What is the French translation of 'computer'?", answers: ["ordinateur", "téléphone", "tablet", "écran"], correct: "ordinateur" },
    { question: "What is the French translation of 'friend'?", answers: ["ami", "copain", "camarade", "voisin"], correct: "ami" },
    { question: "What is the French translation of 'water'?", answers: ["eau", "jus", "soda", "thé"], correct: "eau" },

];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadNextQuestion();
});

function loadNextQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        alert("Quiz completed!");
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = "";

    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.className = 'answer-button';
        button.onclick = () => checkAnswer(answer);
        answersContainer.appendChild(button);
    });

    currentQuestionIndex++;
}

function checkAnswer(selectedAnswer) {
    const questionData = quizData[currentQuestionIndex - 1];
    const resultMessage = selectedAnswer === questionData.correct ? "Correct!" : `Incorrect! The correct answer is ${questionData.correct}.`;
    displayResult(resultMessage);
}

function displayResult(message) {
    const resultDiv = document.createElement('div');
    resultDiv.innerText = message;
    resultDiv.className = 'result';
    document.body.appendChild(resultDiv);

    setTimeout(() => {
        resultDiv.remove();
        loadNextQuestion();
    }, 1000);
}

function fetchPronunciation() {
    if (currentQuestionIndex - 1 < vocabularyData.length) {
        const currentWord = vocabularyData[currentQuestionIndex - 1];
        document.getElementById('word').innerText = currentWord.word;
        document.getElementById('translation').innerText = `Translation: ${currentWord.translation}`;
        document.getElementById('pronounce').innerText = currentWord.pronunciation;
        document.getElementById('audio').src = currentWord.audio;
    }
}


