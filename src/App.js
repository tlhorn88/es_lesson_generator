import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { setConceptSequence, reorderConceptSequence } from './conceptSequenceSlice';
import { db, ref, get, child } from './firebaseConfig';
import ConceptSequence from './Components/ConceptSequence';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const conceptSequence = useSelector((state) => state.conceptSequence.sequence);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState({});
  const [focusSongs, setFocusSongs] = useState({});
  const [allFocusSongs, setAllFocusSongs] = useState({});

  useEffect(() => {
    const fetchSongs = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, '/'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] })).filter(item => item.songTitle);
          setSongs(dataArray);
        } else {
          console.log("No songs available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const filterSongs = () => {
      const result = {};
      const focusResult = {};
      const allFocusResult = {};

      conceptSequence.forEach(concept => {
        const { function: func, name } = concept;

        // Find practice songs
        let matchedPracticeSongs = songs.filter(song => {
          if (song.function && song.function[func] && song.function[func].practice) {
            return song.function[func].practice.includes(name);
          }
          return false;
        });
        matchedPracticeSongs = shuffleArray(matchedPracticeSongs).slice(0, 5);
        result[concept.id] = matchedPracticeSongs.length > 0 ? matchedPracticeSongs : null;

        // Find all focus songs
        let matchedFocusSongs = songs.filter(song => {
          if (song.function && song.function[func] && song.function[func].presentation) {
            return song.function[func].presentation.includes(name);
          }
          return false;
        });
        allFocusResult[concept.id] = matchedFocusSongs.length > 0 ? matchedFocusSongs : [];

        // Pick a single random focus song
        focusResult[concept.id] = shuffleArray([...matchedFocusSongs]).slice(0, 1)[0] || null;
      });

      setFilteredSongs(result);
      setFocusSongs(focusResult);
      setAllFocusSongs(allFocusResult);
    };

    if (songs.length > 0 && conceptSequence.length > 0) {
      filterSongs();
    } else {
      console.log("Songs are not loaded yet or concept sequence is empty.");
    }
  }, [songs, conceptSequence]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newOrder = Array.from(conceptSequence);
    const [movedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, movedItem);
    dispatch(reorderConceptSequence(newOrder));
  };

  return (
    <div className="App">
      <h1>Concept Sequence</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <ConceptSequence
          conceptSequence={conceptSequence}
          filteredSongs={filteredSongs}
          focusSongs={focusSongs}
          allFocusSongs={allFocusSongs}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
