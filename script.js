//create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//for each sound in the array, create a button,update text, and append to DOM
sounds.forEach((sound) => {
    //create a button 
    const btn = document.createElement('button');
    //add a class of "btn" to the button
    btn.classList.add('btn');
    //set the text of the button to the sound name
    btn.innerText = sound;
    //add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});