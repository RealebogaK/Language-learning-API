import React from 'react';
import './App.css';
import FlashcardDeck from './components/FlashcardDeck';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <h1>Language Learning Flashcards</h1>
      <Auth />
      <FlashcardDeck />
    </div>
  );
}

export default App;
