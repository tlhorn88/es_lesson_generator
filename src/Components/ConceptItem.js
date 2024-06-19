import React, { useState, useEffect } from 'react';
import FocusSong from './FocusSong';
import PracticeSongs from './PracticeSongs';

const ConceptItem = ({ provided, concept, focusSong, allFocusSongs, practiceSongs }) => {
  const [currentFocusSong, setCurrentFocusSong] = useState(focusSong);

  useEffect(() => {
    setCurrentFocusSong(focusSong);
  }, [focusSong]);

  const handleSongChange = (newSong) => {
    setCurrentFocusSong(newSong);
  };

  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`concept-block ${concept.function}`}
      style={{ 
        ...provided.draggableProps.style, 
        userSelect: "none", 
        margin: "10px", 
        border: "1px solid black"
      }}
    >
      {concept.name}
      <h3>Focus Song</h3>
      <FocusSong song={currentFocusSong} allSongs={allFocusSongs} onSongChange={handleSongChange} />
      <h3>Practice Songs</h3>
      <PracticeSongs songs={practiceSongs} />
    </li>
  );
};

export default ConceptItem;
