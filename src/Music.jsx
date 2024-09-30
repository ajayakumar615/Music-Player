import React, { useRef, useState } from 'react'

import audio1 from "./kathi.mp3"
import audio2 from "./arm.m4a"
import audio3 from "./leo.mp3"
import audio4 from "./goat.mp3"
import audio5 from "./avesham.mp3"
import audio6 from "./devara.mp3"
import audio7 from "./goat1.mp3"
import audio8 from "./gajini.mp3"
import audio9 from "./animal.mp3"
import audio10 from "./vettaiyan.mp3"

import kathi from "./kathi.jpg"
import arm from "./arm.jpg"
import leo from "./leo.jpeg"
import goat from "./goat.jpg"
import avesham from "./avesham.webp"
import devara from "./devara.webp"
import goat1 from "./goat1.webp"
import gajini from "./gajini.webp"
import animal from "./animal.jpg"
import vettaiyan from "./vettaiyan.jpg"

import { IoPlayBackCircle } from "react-icons/io5";
import { FaCirclePause } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlayForwardCircle } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import { MdLoop } from "react-icons/md";

import "./music.css"

function Music() {
    let [play, setPlay] = useState(false);
    let [currentTime, setcurrentTime] = useState(0);
    let audioref = useRef(null);
    let [loop, setloop] = useState(false);
    let toggleloop = () => {
        setloop(!loop);
    }
    let songs = [
        {
            title: "KATHI",
            src: audio1,
            img: kathi

        },
        {
            title: "ARM",
            src: audio2,
            img: arm

        },
        {
            title: "LEO",
            src: audio3,
            img: leo

        },
        {
            title: "GOAT",
            src: audio4,
            img: goat
        },
        {
            title: "AVESHAM",
            src: audio5,
            img: avesham
        },
        {
            title: "DEVARA PART 1",
            src: audio6,
            img: devara
        },
        {
            title: "GOAT",
            src: audio7,
            img: goat1
        },
        {
            title: "GAJINI",
            src: audio8,
            img: gajini
        },
        {
            title: "ANIMAL",
            src: audio9,
            img: animal
        },
        {
            title: "VETTAIYAN",
            src: audio10,
            img: vettaiyan
        }
    ]

    let [currentsongindex, setcurrentsongindex] = useState(0);
    let currentsong = songs[currentsongindex]

    let PlayorPause = () => {
        if (play) {
            audioref.current.pause();
        }
        else {
            audioref.current.play();
        }
        setPlay(!play)
    }

    let timeupdatehandler = (e) => {
        console.log(e.target);
        console.log(e.target.currentTime);
        setcurrentTime(e.target.currentTime);
    }

    let draghandler = (e) => {
        audioref.current.currentTime = e.target.value;
        setcurrentTime(e.target.value);
        console.log(e.target.value);
    }

    let skipforwardplayhandler = (direction) => {

        if (direction === "skip-forward") {
            setcurrentsongindex((previndex) => (previndex + 1) % songs.length);
        }
        else if (direction === "skip-back") {
            setcurrentsongindex((previndex) => (previndex - 1 + songs.length) % songs.length);
        }
        // setPlay(false);
        // audioref.current.pause();
        setTimeout(() =>{
            if(audioref.current){
                audioref.current.play();
                setPlay(true);
            }
        },0)
    }
    return (
        <div>
            <header className="music-player-header">
                <h1><FaMusic /> Music Player <FaMusic /></h1>
            </header>
            <div className='cardplay'>
                <audio
                    src={currentsong.src}
                    ref={audioref}
                    onTimeUpdate={timeupdatehandler}
                    onEnded={() => skipforwardplayhandler("skip-forward")}
                    loop={loop}
                >
                </audio>
                <img src={currentsong.img} alt="" />
                <h1>{currentsong.title}</h1>

                <div>
                    <input
                        type='range'
                        value={currentTime}
                        max={audioref.current ? audioref.current.duration : 0}
                        onChange={draghandler}
                    />
                </div>

                <div className='divcard'>
                    <button onClick={() => skipforwardplayhandler("skip-back")}>
                        <IoPlayBackCircle />
                    </button>

                    {/* <button onClick={toggleloop}><MdLoop /></button> */}

                    <button onClick={toggleloop}>
                        {loop ? (
                            <MdLoop className='active' />
                        ) : (
                            <MdLoop className='nonactive' />
                        )
                        }
                    </button>

                    <button onClick={PlayorPause}>{play ? <FaCirclePause /> : <FaPlayCircle />}

                    </button>
                    <button onClick={() => skipforwardplayhandler("skip-forward")}>
                        <IoPlayForwardCircle />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Music