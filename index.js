let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
//document.querySelector("title").classList.toggle("win").innerHTML="player 1 wins";
let randomdice = "dice"+randomNumber1+".png";
let randomdice1="dice"+randomNumber2+".png";
let randomimage = "images/"+randomdice;
let randomimage1 = "images/"+randomdice1;
let image1 = document.querySelector(".img1").setAttribute("src",randomimage);
let image2 = document.querySelector(".img2").setAttribute("src",randomimage1);
if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML="Player 2 Wins";
}
