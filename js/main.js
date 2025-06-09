//creating typewriter effect for the projects page
const message = "Coming Soon...";
const textContainer = document.getElementById("text");
let index = 0; //start index at 0 - first letter of the text
let typing = true; //true means typing forward, false-deleting characters

function typewriter(){
    if(typing){
        if(index < message.length){
            textContainer.textContent += message.charAt(index);
            index++;
            setTimeout(typewriter, 100);
        }else{//when index == message.length (so, it's done typing.)
            typing = false;//since typing is now false, it exits the outer if block)
            setTimeout(typewriter, 1000);
        }
    }else{//typing == false
        if(index > 0){
            index--;
            textContainer.textContent = message.substring(0, index);
            setTimeout(typewriter, 100);
        }else{//index == 0 (so, it's done deleting)
            typing = true;
            setTimeout(typewriter, 1000);
        }
    }

    //so it just keeps going from typing = true to typing = false making it loop forever..
}

//call the function
typewriter()