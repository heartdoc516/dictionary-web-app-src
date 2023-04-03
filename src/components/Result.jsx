import { Meanings } from "./Meanings";
import { useState, useEffect } from "react";

export const Result = ({ wordData, theme }) => {
  const [audioDisabled, setAudioDisabled] = useState(true);
  const audioFile = wordData.phonetics.find(
    (phonetic) => phonetic.audio.length > 1
  ).audio;
  useEffect(
    () => (audioFile !== "" ? setAudioDisabled(false) : setAudioDisabled(true)),
    [audioFile]
  );

  return (
    <>
      <audio src={audioFile}></audio>

      <div className="row pt-5">
        <div className="col-auto">
          <h1>{wordData.word}</h1>
          <h4 className="text-primary">{wordData.phonetic}</h4>
        </div>
        <div className="col-auto ms-auto d-flex align-items-center">
          <button
            disabled={audioDisabled}
            className="play-btn btn rounded-circle"
            onClick={() => {
              const audioElement = document.querySelector("audio");
              audioElement.play();
            }}
          >
            <i className="bi bi-play-fill fs-2 text-primary"></i>
          </button>
        </div>
      </div>
      <Meanings wordData={wordData} theme={theme} />
      <div className="custom-divider w-100 mt-4"></div>
      <p className="text-secondary pt-4 fs-5">Source</p>

      <a
        href="https://meta.wikimedia.org/wiki/Wiktionary"
        className="source text-primary"
      >
        https://meta.wikimedia.org/wiki/Wiktionary
      </a>

      <div className="pb-5"></div>
    </>
  );
};
