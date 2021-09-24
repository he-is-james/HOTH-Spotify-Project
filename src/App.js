import React, { Component } from 'react';
import './App.css';
import * as spotifyCredentials from './secrets';  // SPOTIFY CREDENTIALS
import Profile from './components/Profile'
import { computeHeadingLevel } from '@testing-library/react';

const profiles = [
  {
    account: 'James',
    isListening: 'Offline',
    mostPlayed: 'Moonlight - XXXTENTACION',
    topGenre1: 'Pop',
    topGenre2: 'Rap',
    topGenre3: 'Indie Pop'
  }
]

const handleLogin = () => {
  window.location = `${spotifyCredentials.authEndpoint}?client_id=${spotifyCredentials.clientId}&redirect_uri=${spotifyCredentials.redirectUri}&scope=${spotifyCredentials.scopes.join("%20")}&response_type=token&show_dialog=true`;
};

function App() {
  return (
    // create the homepage for people to enter
    // description: purpose, how it works
    <div className="appBox">
      <h1>Welcome!</h1>
      <div className="description">
        <p>A HOTH and Personal Project - James<br/>
        <br/>
        <strong>Purpose</strong> <br/>
        Want to see your own Spotify 2020 rewind data again? <br/>
        Spotify Profiles allows a user to discover their most played<br/>tracks and artists, while also understanding what audio features they like the most<br/> 
        <br/>
        <strong>How to get started?</strong> <br/>
        After being authorized, you can look at your top tracks data as well as <br/>functionality (in the future) to share your profile with your friends!
        </p>
      </div>
      <h3>Example below: </h3>
      {
        profiles.map( post => {
          return <Profile 
            account={post.account}
            isListening={post.isListening}
            mostPlayed={post.mostPlayed}
            topGenre1={post.topGenre1}
            topGenre2={post.topGenre2}
            topGenre3={post.topGenre3}
            key={post.account}
          />
        })
      }
      <button className="login" type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
