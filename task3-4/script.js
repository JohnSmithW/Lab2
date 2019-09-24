var myframe = document.querySelectorAll("iframe.frame");

function switchVideo(e){
  if (myframe[e].className === "frame non-frame") {
    
    for (let i = 0; i < myframe.length; i++){
      myframe[i].className = "frame non-frame";
    }
    myframe[e].className = "frame";
  } 
}

