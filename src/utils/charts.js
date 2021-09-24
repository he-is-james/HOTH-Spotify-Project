import { get } from './script'
// get recently played songs (max possible)
export const getRecently = async () => {
    let response = await get(`https://api.spotify.com/v1/me/player/recently-played?limit=50`);
    const recentlyPlayed = response.items;
    return recentlyPlayed;
}

// given an array of songs, iterate through each and get the audio features
export const getAudioFeatures = async (musicArray) => {
    const arrayLength = musicArray.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(musicArray[i].track.album.id)
    }
}
// from there keep track of size of array and each value summed and find avg
// with the numbers and categories, create a pie chart