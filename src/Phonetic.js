import React from "react";
import AudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <span className="text">
        <em>{props.phonetic.text}</em>
      </span>
      <br />
      <span className="audio-player">
        <AudioPlayer src={props.phonetic.audio} onPlay controls />
      </span>
    </div>
  );
}
