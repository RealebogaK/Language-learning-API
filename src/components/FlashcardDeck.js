import React, { useEffect, useState } from 'react';
import { fetchFlashcards } from '../services/api';
import Flashcard from './Flashcard';

const FlashcardDeck = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const getFlashcards = async () => {
      const data = await fetchFlashcards();
      setFlashcards(data);
    };
    getFlashcards();
  }, []);

  return (
    <div className="deck">
      {flashcards.map((card) => (
        <Flashcard key={card.id} term={card.term} translation={card.translation} />
      ))}
    </div>
  );
};

export default FlashcardDeck;
