import React, { useState, useEffect } from 'react';
// import firebase from '../firebase'
import { getName, getListening, getListeningImage, getMostPlayed, getMostImage, getTopGenre1, getTopGenre2, getTopGenre3 } from '../utils/functions';
import './Feed.css';
import Profile from './Profile';

function Feed() {
    const [users, setUser] = useState([])

    const [name, setName] = useState("");
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
            <Profile account={name} isListening={isListening} isLImage={isLImage} mostPlayed={mostPlayed} isPImage={isPImage} topGenre1={topGenre1} topGenre2={topGenre2} topGenre3={topGenre3}/>
            <h4>Friends</h4>
            <button className="add">Add Friends!</button>
        </div>
    )
}

export default Feed;