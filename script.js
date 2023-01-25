const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
linkedinBtn = document.querySelector(".linkedin");


// let x = Math.floor((Math.random() * 3) + 1);

window.onload = function(){
  document.getElementById('btn').click();
}

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
      quoteText.innerText= result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    })
}

function backimage() {
  let x = Math.floor((Math.random() * 10) + 1);
  document.body.style.backgroundImage = "url('images/"+x+".jpg')";
}

function calling() {
  randomQuote();
  backimage();
}

soundBtn.addEventListener("click",() => {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", () =>{
  navigator.clipboard.writeText(quoteText.innerText);
});
// linkedinBtn.addEventListener("click", () =>{
//   let post = 'https://twitter.com/intent/tweet?url=${quoteText.innerText}';
//   window.open(post,"_blank")
// }
//);
quoteBtn.addEventListener("click",calling );
