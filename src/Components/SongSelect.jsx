import '../styles/App.css';
import { useState } from 'react';

function SongSelect(props) {

  const { fetchSongData } = props;
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  
  return (
    <>
      <div className="songSelect">
        <label className="selectionLabel">Artist:
          <input type="text" onChange={event => {setArtist(event.target.value)}} className="selectionBox"/>
        </label>
        <label className="selectionLabel">Song:
          <input type="text" onChange={event => {setSong(event.target.value)}} className="selectionBox"/>
        </label>
      </div>
        <button disabled={(!song || !artist)} onClick={() => fetchSongData(artist, song)}>Get Song</button>
     </> 
  );
}

export default SongSelect;