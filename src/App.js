import { useState } from 'react';
import SongSelect from './Components/SongSelect';
import './styles/App.css';

function App() {

  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        Song Rater
      </header>
      <SongSelect artist={artist} setArtist={setArtist} song={song} setSong={setSong}/>
    </div>
  );
}

export default App;
