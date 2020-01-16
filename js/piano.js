const keys = document.querySelectorAll(".key");
const White_Key_Sound = ['w', 'e', 'r', 't', 'y', 'u', 'i'];
const Black_Key_Sound = ['a', 's', 'd', 'k', 'l'];

//whitekeys for store div color white in html
const whitekeys = document.querySelectorAll('.key.white');
const blackkeys = document.querySelectorAll('.key.black');
//console.log(whitekeys);


keys.forEach(key => {
    key.addEventListener('click', () => onPlaySound(key));
});

document.addEventListener('keydown', event =>{
    const keyboard = event.key;
    //whiteKeyIndex for store keybord like 'w', 'e';
    const whitekeysIndex = White_Key_Sound.indexOf(keyboard);
    const blackkeysIndex = Black_Key_Sound.indexOf(keyboard);
    //for repeat when double click on keyboard. it is display sound not good. so we need use repeat
    if(!event.repeat){
        if(whitekeysIndex > -1){
           onPlaySound(whitekeys[whitekeysIndex]);
        }
        if(blackkeysIndex > -1){
            onPlaySound(blackkeys[blackkeysIndex]);
        }

    }
    //document.querySelector('button').innerHTML = keyboard;
})

function onPlaySound(key){
    //key is store html div
    const audiokey = document.getElementById(key.dataset.note);
    //when we need 2 or more click. we need use currentTime. becuase if we don't use it. it display not good sound 
    audiokey.currentTime = 0;
    audiokey.play();
    //for add when we clcik on keyboard for add color
    key.classList.add('active');
    //for ended, it stop run after sound stop run or process 
    audiokey.addEventListener('ended', ()=>{
        //for remove when after clcik we remove color from keyborad to change color other.
        key.classList.remove('active');
    })
}

