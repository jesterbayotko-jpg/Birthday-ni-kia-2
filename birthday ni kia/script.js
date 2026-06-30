let musicPlaying = false;



function showMessage(){


document.getElementById("message").style.display="block";


}





function playMusic(){


let music=document.getElementById("music");


if(!musicPlaying){


music.play();


musicPlaying=true;


}


}