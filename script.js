let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))


let songs = [
    { songName: "Adiyoginam Pranamamyaham", filePath: "songs/1.mp3", coverPath: "img/1.jpeg", timestamp :"04:07" },
    { songName: "Na Hi Shiva Sneha", filePath: "songs/2.mp3", coverPath: "img/2.jpeg" , timestamp :"09:01"},
    { songName: "Parvati Vallabha", filePath: "songs/3.mp3", coverPath: "img/3.jpeg" , timestamp :"07:13" },
    { songName: "Guruvashtakam", filePath: "songs/4.mp3", coverPath: "img/4.jpeg" , timestamp :"10:05"},
    { songName: "Uma Maheshwara", filePath: "songs/5.mp3", coverPath: "img/5.jpeg" , timestamp :"06:19" },
    { songName: "Chandrashekhara", filePath: "songs/2.mp3", coverPath: "img/6.jpeg" , timestamp :"08:02"},
    { songName: "Gauranga", filePath: "songs/2.mp3", coverPath: "img/7.jpeg" , timestamp :"10:15"},
    { songName: "Adiyogi", filePath: "songs/2.mp3", coverPath: "img/8.jpeg" , timestamp :"04:15" },
    { songName: "Bhairavi", filePath: "songs/2.mp3", coverPath: "img/9.jpeg" , timestamp :"04:52" },
    { songName: "Mann Mast Hua", filePath: "songs/4.mp3", coverPath: "img/10.jpeg" , timestamp :"06:30"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
   })


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})



audioElement.addEventListener('timeupdate', () => {
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
            myProgressBar.value = progress;
        });
        myProgressBar.addEventListener('change', () => {
            audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
        })

        const makeAllPlays = () => {
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
            })
        };
        const playedpause = () => {
            songItemPlay.forEach((element) => {
                if (audioElement.played || audioElement.currentTime >= 0) {
                    audioElement.pause();
                }

            })
        }
        songItemPlay.forEach((element) => {
            element.addEventListener('click', (e) => {
                makeAllPlays();
                if (audioElement.paused || audioElement.currentTime <= 0) {
                    songIndex = parseInt(e.target.id)
                    e.target.classList.remove('fa-play-circle');
                    e.target.classList.add('fa-pause-circle');
                    audioElement.src = `songs/${songIndex + 1}.mp3`
                    masterSongName.innerText = songs[songIndex].songName;
                    audioElement.currentTime = 0;
                    audioElement.play();
                    gif.style.opacity = 1;
                    masterplay.classList.remove('fa-play-circle');
                    masterplay.classList.add('fa-pause-circle');
                }
                else{
                    songIndex = parseInt(e.target.id)
                    e.target.classList.remove('fa-pause-circle');
                    e.target.classList.add('fa-play-circle');
                    audioElement.src = `songs/${songIndex + 1}.mp3`
                    audioElement.currentTime = 0;
                    audioElement.pause();
                    // playedpause();
                    gif.style.opacity = 0;
                    masterplay.classList.remove('fa-pasue-circle');
                    masterplay.classList.add('fa-play-circle');
                    
                }
            })
        });

        document.getElementById('next').addEventListener('click', () => {
            if (songIndex >= 9) {
                songIndex = 0;
            }
            else {
                songIndex += 1;
            }
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        })
        document.getElementById('previous').addEventListener('click', () => {
            if (songIndex <= 0) {
                songIndex = 0;
            }
            else {
                songIndex -= 1;
            }
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        })