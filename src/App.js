import { useState } from 'react';
import './styles/App.css';

function App() {

  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        Song Rater
      </header>
      <div className="songSelect">
        <label className="selectionLabel">Artist:
          <input type="text" onChange={event => {setArtist(event.target.value)}} className="selectionBox"/>
        </label>
        <label className="selectionLabel">Song:
          <input type="text" onChange={event => {setSong(event.target.value)}} className="selectionBox"/>
        </label>
      </div>
        <button disabled={(!song || !artist)}>Get Song</button>
    </div>
  );
}

export default App;
