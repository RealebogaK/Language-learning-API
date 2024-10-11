import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ term, translation }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card front">{term}</div>
      <div className="card back">{translation}</div>
    </div>
  );
};

export default Flashcard;
