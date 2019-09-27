var myframe = document.querySelectorAll('iframe.frame');
var Mycomments = document.querySelectorAll('div.comments');
let link = ["https://www.youtube.com/embed/M7XM597XO94", "https://www.youtube.com/embed/pU8-7BX9uxs", "https://www.youtube.com/embed/FknHjl7eQ6o", "https://www.youtube.com/embed/YApuEWtG30w"];

function switchVideo(e){
  if (myframe[e].className === 'frame non-frame') {
    
    for (let i = 0; i < myframe.length; i++){
      myframe[i].className = 'frame non-frame';
      myframe[i].src = link[i];
      Mycomments[i].className = 'comments users-off';
    }
    myframe[e].className = 'frame';
    Mycomments[e].className = 'comments';
  } 
}




