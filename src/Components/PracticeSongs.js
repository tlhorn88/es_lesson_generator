import React from 'react';

const PracticeSongs = ({ songs }) => (
  <div className="songs-list">
    {songs ? (
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.songTitle}</li>
        ))}
      </ul>
    ) : (
      <p>Uh oh! You need to go song collecting!</p>
    )}
  </div>
);

export default PracticeSongs;
