import React, { useState, useEffect } from 'react';
import { db, ref, get, child } from '../../firebaseConfig';
import './Browse.css';

function Browse() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      const dbRef = ref(db);
      try {
        const snapshot = await get(child(dbRef, '/'));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] })).filter(item => item.songTitle);
          setSongs(dataArray);
          setFilteredSongs(dataArray);  // Initialize with all songs
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
    const filtered = songs.filter(song => song.songTitle.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredSongs(filtered);
  }, [searchTerm, songs]);

  return (
    <div className="browse-container">
      <div className="sidebar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {/* Add more filter options here */}
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
