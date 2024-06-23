import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore, auth, db, ref, get, child } from '../../firebaseConfig';
import './Browse.css';

function Browse() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // Fetch static songs from Firebase Realtime Database
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, '/'));
        let staticSongs = [];
        if (snapshot.exists()) {
          const data = snapshot.val();
          staticSongs = Object.keys(data).map(key => ({ id: key, ...data[key] })).filter(item => item.songTitle);
        }

        // Fetch user-specific songs from Firestore
        const user = auth.currentUser;
        let userSongs = [];
        if (user) {
          const userSongsSnapshot = await getDocs(collection(firestore, 'users', user.uid, 'addedSongs'));
          userSongs = userSongsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }

        // Combine both lists
        const combinedSongs = [...staticSongs, ...userSongs];
        setSongs(combinedSongs);
        setFilteredSongs(combinedSongs);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const filtered = songs.filter(song => song.songTitle.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredSongs(filtered);
  }, [searchTerm, songs]);

  return (
    <div className="browse-container">
      <div className="sidebar-browse">
        <p>Filter Options</p>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="filter-options">
          <label>
            <input type="checkbox" name="filter1" />
            Filter 1
          </label>
          <label>
            <input type="checkbox" name="filter2" />
            Filter 2
          </label>
        </div>
      </div>
      <div className="main-content">
        {filteredSongs.map(song => (
          <div key={song.id} className="song-item">
            {song.songTitle}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
