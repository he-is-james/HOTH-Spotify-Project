import { get } from './script';

export const getName = async () => {
    let response = await get(`https://api.spotify.com/v1/me`);
    const name = response.display_name;
    return name;
}

export const getListening = async () => {
    let response = await get(`https://api.spotify.com/v1/me/player/currently-playing`);
    if (response.is_playing) {
        const display = response.item.name + " - " + response.item.artists[0].name;
        console.log(display);
        return display;
    }
    else {
        console.log("Offline");
        return "Offline";
    }
}

export const getListeningImage = async () => {
    let response = await get(`https://api.spotify.com/v1/me/player/currently-playing`);
    if (response.is_playing) {
        const display = response.item.album.images[0].url;
        return display;
    }
}

export const getMostPlayed = async () => {
    let response = await get(`https://api.spotify.com/v1/me/top/tracks`);
    console.log(response);
    const display = response.items[0].name + " - " + response.items[0].artists[0].name;
    return display;
}

export const getMostImage = async () => {
    let response = await get(`https://api.spotify.com/v1/me/top/tracks`);
    const display = response.items[0].album.images[0].url;
    return display;
}

export const getTopGenre1 = async () => {
    let response = await get(`https://api.spotify.com/v1/me/top/artists`);
    const display = response.items[0].genres[0]; 
    return display;
}

export const getTopGenre2 = async () => {
    let response = await get(`https://api.spotify.com/v1/me/top/artists`);
    const display = response.items[1].genres[0]; 
    return display;
}

export const getTopGenre3 = async () => {
    let response = await get(`https://api.spotify.com/v1/me/top/artists`);
    const display = response.items[2].genres[0]; 
    return display;
}