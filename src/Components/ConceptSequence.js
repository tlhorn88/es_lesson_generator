import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ConceptItem from './ConceptItem';

const ConceptSequence = ({ conceptSequence, filteredSongs, focusSongs, allFocusSongs }) => (
  <Droppable droppableId="conceptSequence">
    {(provided) => (
      <ul {...provided.droppableProps} ref={provided.innerRef}>
        {conceptSequence.map((concept, index) => (
          <Draggable key={concept.id} draggableId={String(concept.id)} index={index}>
            {(provided) => (
              <ConceptItem
                provided={provided}
                concept={concept}
                focusSong={focusSongs[concept.id]}
                allFocusSongs={allFocusSongs[concept.id] || []}
                practiceSongs={filteredSongs[concept.id]}
              />
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </ul>
    )}
  </Droppable>
);

export default ConceptSequence;
