import React from 'react';
import PropTypes from 'prop-types';

const FocusSong = ({ song, allSongs }) => {
  if (!song || !allSongs || allSongs.length === 0) {
    return <p>No focus song available</p>;
  }

  return (
    <div className="focus-song">
      <h4>{song.songTitle || "No Title"}</h4>
      {/* Additional song details */}
    </div>
  );
};

FocusSong.propTypes = {
  song: PropTypes.object,
  allSongs: PropTypes.array
};

FocusSong.defaultProps = {
  song: {},
  allSongs: []
};

export default FocusSong;
