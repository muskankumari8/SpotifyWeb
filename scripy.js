console.log("Welcome To Spotify")
//Initialize the variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs =[
    {songName: "Tera Zikr", filepath: "C:\Users\lalan\Desktop\spotify web\Tera Zikr Darshan Raval 128 Kbps.mp3", coverpath: 'Tera Zikr Darshan Raval 128 Kbps.mp3'},
    {songName: "Tera Zikr", filepath: "Tera Zikr Darshan Raval 128 Kbps.mp3"},
    {songName: "Tera Zikr", filepath: "Tera Zikr Darshan Raval 128 Kbps.mp3"},
    {songName: "Tera Zikr", filepath: "Tera Zikr Darshan Raval 128 Kbps.mp3"},
    {songName: "Tera Zikr", filepath: "Tera Zikr Darshan Raval 128 Kbps.mp3"},
    {songName: "Tera Zikr", filepath: "Tera Zikr Darshan Raval 128 Kbps.mp3"},
]
//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
//Listen to events
myProgressBar.addEventsListner('timeupdate',()=>{
    console.log('timeupdate');
})