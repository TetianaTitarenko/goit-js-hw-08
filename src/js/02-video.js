import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayTime, 1000));

function onPlayTime(currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds))
    }

const timeStop = localStorage.getItem("videoplayer-current-time");

if (timeStop) {
    player.setCurrentTime(timeStop).then(function (seconds) {
        console.log(seconds);
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
}