import React from 'react';
import PropTypes from 'prop-types';

const PracticeSongs = ({ songs }) => {
  if (!songs || songs.length === 0) {
    return <p>No practice songs available</p>;
  }

  return (
    <div className="practice-songs">
      {songs.map((song, index) => (
        <div key={index} className="practice-song">
          <h4>{song.songTitle || "No Title"}</h4>
          {/* Additional song details */}
        </div>
      ))}
    </div>
  );
};

PracticeSongs.propTypes = {
  songs: PropTypes.array
};

PracticeSongs.defaultProps = {
  songs: []
};

export default PracticeSongs;
