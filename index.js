
/* Перебор data-* атрибутов */
const songs = document.querySelectorAll('.nav-item[data-song]')
console.log(songs)
const playBtn = document.querySelector('.play-btn')
const audio = document.querySelector('.audio')
const main = document.querySelector('.main')
const header = document.querySelector('.nav-item')
const navItems = document.querySelectorAll('.nav-item')
//const parentItem

const title = document.querySelector('.title')

/* Запись значений из data-* атрибутов */
const tracks = []

songs.forEach((song) => tracks.push(song.getAttribute(['data-song'])))

console.log(tracks)



let bird = 'forest'
//console.log(soundIndex)

function clickBird(event) {
    if(event.target.classList.contains('nav-item')) {
        bird = event.target.dataset.song
        console.log(bird)
        loadSong(bird)
        playSong(bird)
    }
}
navItems.forEach(item => {
    item.addEventListener('click', clickBird)
})

/* тебе надо повесить ивент клик на родителя кнопок, 
при клике проверяешь, содержится ли в таргете класс ребёнка (кнопки), 
если да - то перебираешь псевдо-массив кнопок через forEach и убираешь 
всем класс эктив, а затем таргету вешаешь класс эктив */

function playingAdd(event) {
    if(event.target.classList.contains('nav-item')){
        navItems.forEach(item => item.classList.remove('playing'))
        event.target.classList.add('playing')
    }
}

navItems.forEach(whatch => {
    whatch.addEventListener('click', playingAdd)
})

//Load

function loadSong(sound) {
    title.innerHTML = sound
    audio.src = `./assets/audio/${sound}.mp3`
    main.style.backgroundImage =  `url(./assets/img/${sound}.jpg)` 
} 


//Play

function playSong(song) {
    header.classList.add('play')
    audio.play()
    playBtn.style.backgroundImage = 'url(./assets/svg/pause-button.svg)'
}

function pauseSong(song) {
    header.classList.remove('play')
    audio.pause()
    playBtn.style.backgroundImage = 'url(./assets/svg/play-button.svg)'
}

playBtn.addEventListener('click', () => {
    const isPlay = header.classList.contains('play')
    if(isPlay){
        pauseSong()
    } else {
        playSong()
    }
})
