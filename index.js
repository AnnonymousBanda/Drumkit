function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function buttonClick() {
    this.classList.add("pressed");
    new Audio(audioTrack[this.textContent]).play();
    await delay(200);

    this.classList.remove("pressed");
}

const elements=document.querySelectorAll(".drum");
let audioTrack={"w":"./sounds/crash.mp3",
                "a":"./sounds/kick-bass.mp3",
                "s":"./sounds/snare.mp3",
                "d":"./sounds/tom-1.mp3",
                "j":"./sounds/tom-2.mp3",
                "k":"./sounds/tom-3.mp3",
                "l":"./sounds/tom-4.mp3"};

for(let k of elements) {
    k.addEventListener("click", buttonClick);
}

document.addEventListener("keypress", async (e)=>{
    const drum=document.querySelector("."+e.key.toLowerCase());
    drum.classList.add("pressed");
    new Audio(audioTrack[e.key.toLowerCase()]).play();
    await delay(200);

    drum.classList.remove("pressed");
});