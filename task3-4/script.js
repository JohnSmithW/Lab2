var myframe = document.querySelectorAll("iframe.frame");
var comments = document.querySelectorAll("div.comments");
let link = ["https://www.youtube.com/embed/M7XM597XO94", "https://www.youtube.com/embed/pU8-7BX9uxs", "https://www.youtube.com/embed/FknHjl7eQ6o", "https://www.youtube.com/embed/YApuEWtG30w"];

function switchVideo(e){
      myframe[0].src = link[e];  
}


var btn = document.querySelector(".submit");
  btn.addEventListener("click", () => {
  var
  user = document.querySelector(".user-text").value;
  msg = document.querySelector(".textarea").value;
  var
  newBlock = document.createElement("div");
  newBlock.className = "users";
  title = document.createElement("h2");
  com = document.createElement("p");
  title.innerHTML = user;
  com.innerHTML = msg;
  document.querySelector(".comment-container").appendChild(newBlock);
  newBlock.appendChild(title);
  newBlock.appendChild(com);
});






