import playList from "./playList.js";
export default function writeArtistTitle() {
    const headerBox = document.createElement('div');
    headerBox.className ="header";
    const artist = document.createElement('h1');
    artist.textContent = `artist: ${playList.artist}`;
    const album = document.createElement('p');
    album.textContent = `album: ${playList.albumTitle}`;
    const img = document.createElement('img');
    img.src = playList.albumImg;
    headerBox.append(img, artist, album);
    document.body.append(headerBox);
}