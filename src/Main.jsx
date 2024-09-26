import React, { useRef, useState } from 'react'
import VIDEO from './video.mp4'
import AUDIO from './audio.mp3'

function Main() {
    // let inputref = useRef(null);
    // let reffunction= ()=>{
    //     console.log(inputref);
    //     console.log(inputref.current.value);
    //     inputref.current.placeholder ="Enter your name";
    //     inputref.current.focus();

    // ^ ------------------- Video -----------------------------------

    // let [play,setPlay] = useState(false);
    // let [text,setText] = useState("");
    // let videoRef = useRef(null);

    // let PlayorPause = ()=>{
    //     if (play){
    //         setPlay(videoRef.current.pause());
    //         setText("Video is Paused........")
    //     }
    //     else{
    //         setPlay(videoRef.current.play());
    //         setText("Video is Playing........")
    //     }
    // }

    //  ^ --------------- Audio -----------------------------

    let [play, setPlay] = useState(false);
    let [text, setText] = useState("");
    let audioref = useRef(null);

    let PlayorPause = () => {
        if (play) {
            setPlay(audioref.current.pause());
            setText("Audio is Paused........")
        }
        else {
            setPlay(audioref.current.play());
            setText("Audio is Playing........")
        }
    }

    return (
        <div>
            {/* <input type="text" ref={inputref} /> */}
            <h1>{text}</h1>
            {/* <video src={VIDEO} ref={videoRef} onClick={PlayorPause} /> */}
            {/* <button onClick={reffunction}>Submit</button> */}
            <audio src={AUDIO} ref={audioref}></audio> 
            <button onClick={PlayorPause}>{play ? "Pause" : "Play"}</button>
        </div>
    )
}

export default Main