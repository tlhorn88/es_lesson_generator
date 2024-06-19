import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { setConceptSequence, reorderConceptSequence } from './conceptSequenceSlice';

function App() {
  const dispatch = useDispatch();
  const conceptSequence = useSelector((state) => state.conceptSequence.sequence);

  useEffect(() => {
    console.log("Concept Sequence:", conceptSequence); // Log concept sequence
  }, [conceptSequence]);

  const handleDragEnd = (result) => {
    console.log('Drag End Result:', result); // Log drag result
    if (!result.destination) return;
    const newOrder = Array.from(conceptSequence);
    const [movedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, movedItem);
    console.log("New Order:", newOrder); // Log new order
    dispatch(reorderConceptSequence(newOrder));
  };

  return (
    <div className="App">
      <h1>Concept Sequence</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="conceptSequence">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {conceptSequence.map((concept, index) => (
                <Draggable key={concept.id} draggableId={String(concept.id)} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ 
                        ...provided.draggableProps.style, 
                        userSelect: "none", 
                        margin: "10px", 
                        border: "1px solid black"
                      }}
                    >
                      {concept.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <p>meoowwww</p>
    </div>
  );
}

export default App;
