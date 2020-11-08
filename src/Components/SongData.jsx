import '../styles/App.css';

function SongData(props) {

  const { artistName, songName, albumName, albumImage } = props;

  const isRealSong = () => {
    return songName && artistName && albumName ? true : false;
  }
  
  return (
    <>
    {isRealSong() === true ?
    <>
      <p>{songName}</p>
      <p>By: {artistName}</p>
      <p>From the album: {albumName}</p>
    <img src={albumImage} alt="Album artwork"/> </> : <p>No song found, please check your song and artist name to try again.</p>}
    </>
  );
}

export default SongData;