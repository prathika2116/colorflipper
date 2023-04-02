const colors=["green","red","rgba(133,122,200)","#f15025"];
  const btn=document.getElementById("btn");
  const color=document.getElementById("r");

  btn.addEventListener("click",function(){
    //get random number between 0 - 3 colors[0-3]
    const randomNumber=getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
  })
  function getRandomNumber(){
    //random function will return value numbers between zero to 1
    return Math.floor(Math.random()*colors.length);
  }