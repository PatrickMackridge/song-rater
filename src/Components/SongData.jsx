import '../styles/App.css';

function SongData(props) {

  const { artistName, songName, albumName, albumImage } = props;
  
  return (
    <>
      <p>{songName}</p>
      <p>By: {artistName}</p>
      <p>From the album: {albumName}</p>
      <img src={albumImage} alt="Album artwork"/>
    </> 
  );
}

export default SongData;