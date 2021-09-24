import React, { useState, useEffect } from 'react';
import { getName, getListening, getListeningImage, getMostPlayed, getMostImage, getTopGenre1, getTopGenre2, getTopGenre3, getNameImage } from '../utils/functions';
import { getRecently, getAudioFeatures } from '../utils/charts'
import './Feed.css';
import Profile from './Profile';

function Feed() {
    getAudioFeatures(getRecently())
    const [users, setUser] = useState([])
    const [name, setName] = useState("");
    const [isNImage, setNImage] = useState("");
    const [isListening, setListening] = useState("");
    const [isLImage, setLImage] = useState("");
    const [mostPlayed, setMostPlayed] = useState("");
    const [isPImage, setPImage] = useState("");
    const [topGenre1, setTG1] = useState("");
    const [topGenre2, setTG2] = useState("");
    const [topGenre3, setTG3] = useState("");

    useEffect(() => {
        getName().then((response) => {
            setName(response)
        })
    });
    useEffect(() => {
        getNameImage().then((response) => {
            setNImage(response)
        })
    })
    useEffect(() => {
        getListening().then((response) => {
            setListening(response)
        })
    });
    useEffect(() => {
        getListeningImage().then((response) => {
            setLImage(response)
        })
    });
    useEffect(() => {
        setInterval(() => {
              getListening().then((response) => {
                  setListening(response)
              })
        }, 30000);
    });
    useEffect(() => {
        setInterval(() => {
            getListeningImage().then((response) => {
                setLImage(response)
            })
        }, 30000);
    });
    useEffect(() => {
        getMostPlayed().then((response) => {
            setMostPlayed(response)
        })
    });
    useEffect(() => {
        getMostImage().then((response) => {
            setPImage(response)
        })
    });
    useEffect(() => {
        getTopGenre1().then((response) => {
            setTG1(response)
        })
    });
    useEffect(() => {
        getTopGenre2().then((response) => {
            setTG2(response)
        })
    });
    useEffect(() => {
        getTopGenre3().then((response) => {
            setTG3(response)
        })
    });
    

    return (
        <div className="feed">
            <h1>Dashboard</h1>
            <h3>Your Profile</h3>
            <Profile account={name} isNImage={isNImage} isListening={isListening} isLImage={isLImage} mostPlayed={mostPlayed} isPImage={isPImage} topGenre1={topGenre1} topGenre2={topGenre2} topGenre3={topGenre3}/>
            {/* change friends feature to playlist code entrance, get the user playlists then discover their aspects and whether or not they satisfy a certain type you like */}
            <h4>Friends</h4>
            <button className="add">Add Friends!</button>
        </div>
    )
}

export default Feed;