import playList from "./playList.js";
export default function playAlbumTracks() {
    const allTracksBox = document.createElement('div');
    allTracksBox.className = "tracks";
    for(let i = 0; i < playList.tracks.length; i++) {
        const audioTrack = document.createElement('audio');
        audioTrack.controls = 'true';
        const audioTrackAudio = document.createElement('source');
        const audioTrackImg = document.createElement('img');
        const audioTrackImgTitle = document.createElement('figcaption');
        audioTrackAudio.src = playList.tracks[i].songSrc;
        audioTrackAudio.type = 'audio/mpeg';
        audioTrackImg.src = playList.cover;
        audioTrackImg.alt = 'cover';
        audioTrackImgTitle.textContent = playList.tracks[i].songTitle;
        audioTrack.append(audioTrackAudio);
        allTracksBox.append(audioTrackImg, audioTrack, audioTrackImgTitle);
    }
    document.body.append(allTracksBox);
}