import React from 'react';
import { useSelector } from 'react-redux';
import './ConceptSequence.css';

const ConceptSequence = () => {
  const conceptSequence = useSelector((state) => state.conceptSequence.sequence);

  return (
    <div className="concept-sequence">
      <h1>Concept Sequence</h1>
      <ul>
        {conceptSequence.map((concept) => (
          <li key={concept.id} className={`concept-block ${concept.function}`}>
            {concept.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConceptSequence;
