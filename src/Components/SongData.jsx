import { FirebaseDatabaseMutation } from '@react-firebase/database';
import "firebase/database";
import { useState } from 'react';
import '../styles/App.css';

function SongData(props) {

  const { artistName, songName, albumName, albumImage } = props;

  const isRealSong = () => {
    return songName && artistName && albumName ? true : false;
  }

  const [rating, setRating] = useState('');
  const [songSaved, setSongSaved] = useState(false);
  
  return (
    <>
      {isRealSong() === true ?
      <>
        <p>{songName}</p>
        <p>By: {artistName}</p>
        <p>From the album: {albumName}</p>
        <img src={albumImage} alt="Album artwork"/> 
        <div className="songRater">
          <label className="ratingLabel">Rate this song:
            <select className="songRating" onChange={event => setRating(event.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
          {rating ? <FirebaseDatabaseMutation type="push" path="/">
            {({ runMutation }) => {
              return (
              <button className="saveRating"
              onClick={ async () => {
                await runMutation({ artistName, songName, albumName, albumImage, rating });
                setSongSaved(true);
              }}>
                Save Rating</button>
              )}}
          </FirebaseDatabaseMutation> : <button className="saveRating" disabled={true}>Save Rating</button>}
        </div>
        {songSaved && <p>Rating Saved!</p>}
      </> : <p>No song found, please check your song and artist name to try again.</p>}
    </>
  );
}

export default SongData;