// App.js
import React from 'react';
import './App.css';
import Quiz from './Quiz';

const quizData = [
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'],
    correctAnswer: 'Tokyo'
  },
  {
    question: 'In which year did World War II end?',
    options: ['1945', '1939', '1941', '1943'],
    correctAnswer: '1945'
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'George Orwell'],
    correctAnswer: 'Harper Lee'
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean'
  },
  {
    question: 'What is the chemical symbol for the element with atomic number 79?',
    options: ['Au', 'Ag', 'Cu', 'Fe'],
    correctAnswer: 'Au'
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale'
  },
  {
    question: 'What is the highest mountain peak in Africa?',
    options: ['Mount Kilimanjaro', 'Mount Kenya', 'Mount Elgon', 'Mount Cameroon'],
    correctAnswer: 'Mount Kilimanjaro'
  },
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Quiz App</h1>
      </header>
      <main className="app-main">
        <Quiz quizData={quizData} />
      </main>
      <footer className="app-footer">
        <p>© 2024 React Quiz App</p>
      </footer>
    </div>
  );
}

export default App;
