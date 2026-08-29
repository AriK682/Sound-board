//create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong','christmas','bamboo','siren'];

//create an array of keys that correspond to the sounds
const keys = ['a', 's', 'd', 'f', 'g', 'h','j','k','l'];

//for each sound in the array, create a button,update text, and append to DOM
sounds.forEach((sound) => {
    //create a button 
    const btn = document.createElement('button');
    //add a class of "btn" to the button
    btn.classList.add('btn');
    //set the text of the button to the sound name
    btn.innerText = sound;

    //add an event listener to the button that plays the sound when clicked
    btn.addEventListener('click', () => {
        //stop sounds first
        stopSounds();
        document.getElementById(sound).play();
    });

    
    //add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

//add an event listener to the button that plays the sound when a key is pressed
//made it similar to the piano project
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const index = keys.indexOf(key);
        //if the key is in the array, play the sound
    if (index !== -1 && index < sounds.length) {
        stopSounds();
        document.getElementById(sounds[index]).play();
    }
});

//Helper function
function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}
