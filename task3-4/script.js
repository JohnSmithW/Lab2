var myframe = document.querySelectorAll('iframe.frame');
let link = ['https://www.youtube.com/embed/M7XM597XO94', 'https://www.youtube.com/embed/pU8-7BX9uxs', 'https://www.youtube.com/embed/FknHjl7eQ6o', 'https://www.youtube.com/embed/YApuEWtG30w'];
let a = 0;
var currentComments = document.querySelectorAll('.comment-container');
var videoBtn = document.querySelectorAll('.button button');
function switchVideo(e){
  if (link.length == videoBtn.length){
      myframe[0].src = link[e];
       a = e;  

      for(let i = 0; i < currentComments.length; i++){
        currentComments[i].classList.remove('visible');
      }
      currentComments[e].classList.add('visible');
    }
    else {alert('error')}
}

var
form = document.forms[0],
userName = form.elements.text,
userCmnt = form.elements.comments,
btn = document.querySelector('.submit'); 
btn.addEventListener('click', () => {
var newComment;  
newComment = document.createElement('div');
newComment.className = 'users';
var nameTxt;
var cmntTxt;
nameTxt = document.createElement('h2');
cmntTxt = document.createElement('p');
nameTxt.innerHTML = userName.value;
cmntTxt.innerHTML = userCmnt.value;
document.querySelectorAll('.comment-container')[a].appendChild(newComment);
newComment.appendChild(nameTxt);
newComment.appendChild(cmntTxt);

});








