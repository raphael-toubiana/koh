const audio2 = new Audio('./opening.mp3');
audio2.autoplay = true;
audio2.volume = 0.2;

const move = (playerNo) => {
  const car = document.querySelector(`#player${playerNo}-race .active`);
  if (car.nextElementSibling) {
    car.nextElementSibling.classList.add("active");
    car.classList.remove("active");
    const audio = new Audio('./ah.mp3');
    audio.play();
    document.getElementById("denis").style = "display:block";
    setTimeout(() => { document.getElementById("denis").style = "display:none"; }, 150);
  } else {
    document.getElementById("saddenis").style = "display:block";
    const audio3 = new Audio('./closing.mp3');
    audio3.play();
    alert(`Player ${playerNo} wins`);
    setTimeout(() => { document.location.reload(); }, 4000);
  }
};

document.addEventListener("keyup", (event) => {
  // console.log(event);
  if (event.key === "a") {
    move(1);
  } else if (event.key === "p") {
    move(2);
  }
});
