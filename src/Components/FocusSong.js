import React, { useState, useEffect } from 'react';

const FocusSong = ({ song, allSongs, onSongChange }) => {
  const [selectedSong, setSelectedSong] = useState(song);

  useEffect(() => {
    setSelectedSong(song);
  }, [song]);

  const handleChange = (event) => {
    const newSong = allSongs.find(s => s.id === event.target.value);
    setSelectedSong(newSong);
    onSongChange(newSong);
  };

  return (
    <div className="focus-song">
      {allSongs.length > 1 ? (
        <select value={selectedSong ? selectedSong.id : ''} onChange={handleChange}>
          {allSongs.map(song => (
            <option key={song.id} value={song.id}>{song.songTitle}</option>
          ))}
        </select>
      ) : (
        <p>{selectedSong ? selectedSong.songTitle : 'Uh oh! You need to go song collecting!'}</p>
      )}
    </div>
  );
};

export default FocusSong;
