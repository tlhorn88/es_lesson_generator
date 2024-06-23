import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';

const AddSong = () => {
  const [songData, setSongData] = useState({
    songTitle: '',
    source: '',
    function: {
      melodic: {
        practice: [],
      },
      rhythmic: {
        practice: [],
      },
    },
    melody: {
      csp: '',
      tonalCenter: '',
      toneSet: [],
    },
    rhythm: {
      meter: '',
      mm: '',
      rhythmSet: [],
    },
    score: [],
    context: {
      language: '',
      form: [],
    },
    packetSource: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const userDocRef = doc(firestore, 'users', user.uid);
        const songsCollectionRef = collection(userDocRef, 'addedSongs');
        await setDoc(doc(songsCollectionRef), songData);
        console.log('Song added:', songData);
      } catch (error) {
        console.error('Error adding song:', error);
      }
    } else {
      console.log('No user logged in');
    }
  };

  return (
    <div>
      <h2>Add a New Song</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Song Title:
          <input type="text" name="songTitle" value={songData.songTitle} onChange={handleChange} />
        </label>
        <label>
          Source:
          <input type="text" name="source" value={songData.source} onChange={handleChange} />
        </label>
        {/* Add more fields as necessary following the same pattern */}
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSong;