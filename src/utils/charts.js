import { get } from './script'
// get recently played songs (max possible)
export const getRecently = async () => {
    let response = await get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`);
    console.log(response)
}

// given an array of songs, iterate through each and get the audio features
// from there keep track of size of array and each value summed and find avg
// with the numbers and categories, create a pie chart