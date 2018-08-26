var pattern = [];
var match = [];

const check = (id) => {
  match.push(id);

console.log(match, pattern);
let i = 0;


  if (parseInt(match[match.length - 1]) !== pattern[match.length - 1]) {

    alert('try again!');
    stream()

  } else {
    play(match[match.length - 1])
  }

  let next = random();
  console.log(next);
  if (match.length === pattern.length) {
    pattern.push(next);
    console.log(pattern, 'pattern');
    setTimeout(function() {
      stream()
    }, 1000)
  }


}

const play = (id) => {


  let x = document.querySelectorAll('audio');

  console.log(id, 'id', pattern, match)
  x[id].play();

document.getElementById(id).style.opacity = "0.5";

  setTimeout(function() {
      document.getElementById(id).style.opacity = "1";
    }, 500)

}


const stream = () => {

  let x = document.querySelectorAll('audio');

  console.log(pattern, 'pattern');



  let i = 0;

  let stall = setInterval(function() {
    if (i === pattern.length) {
      clearInterval(stall);
      return;
    }
    console.log(i, pattern[i], 'inside stall')
    play(pattern[i])
    i++
  }, 2000);

  match = [];

}

const reset = () => {
  pattern = [];
  match = [];
  setTimeout(function() {
      start()
    }, 2000)
}


const random = () => {
  let x = document.querySelectorAll('audio');
  let num = Math.abs(Math.floor(Math.random()*x.length));
  return num;
}

const start = () => {
  let x = document.querySelectorAll('audio');

  document.getElementById('4').style.opacity = "0.5";
  setTimeout(function() {
    document.getElementById('4').style.opacity = "1";
  }, 250)

  let num = random(x);

  pattern.push(num)

  play(num);


}