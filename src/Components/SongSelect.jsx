import '../styles/App.css';

function SongSelect(props) {

  const { artist, setArtist, song, setSong, fetchSongData } = props;
  
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