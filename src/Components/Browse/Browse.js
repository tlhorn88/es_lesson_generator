import React, { useState, useEffect } from 'react';
import { db, ref, get, child } from '../../firebaseConfig';
import { fetchUserSongs } from '../firebaseFunctions/firebaseFunctions';
import './Browse.css';

function Browse() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadSongs = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, '/'));
        const staticSongs = snapshot.exists() ? Object.keys(snapshot.val()).map(key => ({ id: key, ...snapshot.val()[key] })).filter(item => item.songTitle) : [];
        
        const userSongs = await fetchUserSongs();
        
        const allSongs = [...staticSongs, ...userSongs];
        setSongs(allSongs);
        setFilteredSongs(allSongs); // Initialize with all songs
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    loadSongs();
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
