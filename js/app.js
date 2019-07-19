var lastTrackId = '';
var $player = document.querySelector('#player');
var trackIds = [
    '192172283',
    '207012561',
    '212844856',
    '139057235',
    '141032345',
];

setRandomTrack(0);

function setRandomTrack(attempt) {
    var randomIndex = Math.floor(Math.random() * trackIds.length - 1) + 1;
    var trackId = trackIds[randomIndex];

    if (trackId === lastTrackId && attempt < 3) {
        setRandomTrack(attempt + 1);
        return;
    }

    lastTrackId = trackId;
    $player.setAttribute('src', getEmbedUrl(trackId));
}

function getEmbedUrl(trackId) {
    return 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{track}&color=%23122932&auto_play=false&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        .replace(/{track}/, trackId);
}
