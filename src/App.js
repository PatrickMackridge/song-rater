import { useState } from 'react';
import SongData from './Components/SongData';
import SongSelect from './Components/SongSelect';
import './styles/App.css';

function App() {

  const [showSongData, toggleSongData] = useState(false)
  const [artistName, setArtistName] = useState('');
  const [songName, setSongName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [albumImage, setAlbumImage] =useState('');

  const fetchSongData = (artist, songName) => {
    const BASE_URL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=2c57152be296550cb66b5e553208f12f"
    return fetch(`${BASE_URL}&artist=${artist}&track=${songName}&format=json`).then(res => res.json())
    .then(res => {

      toggleSongData(true);
      
      if (res.track) {
        const track = res.track
        setArtistName(track.artist.name);
        setSongName(track.name);
        setAlbumName(track.album.title);
  
        const imageURL = Object.keys(track.album.image[track.album.image.length -1])[0];
        setAlbumImage(track.album.image[track.album.image.length -1][imageURL]);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Song Rater
      </header>
      <SongSelect fetchSongData={fetchSongData}/>
  {showSongData && <SongData artistName={artistName} songName={songName} albumName={albumName} albumImage={albumImage}/> }
    </div>
  );
}

export default App;
