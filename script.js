var pattern = [];
var match = [];

const check = (id) => {
  match.push(id);

console.log(match, pattern);
let i = 0;


  if (parseInt(match[match.length - 1]) !== pattern[match.length - 1]) {

    alert('try again!');
    reset()

  } else {
    play(match[match.length - 1])
  }

 // for (let i = 0; i < match.length; i++) {
  //   if (pattern[i] !== parseInt(match[i])) {
  //       alert('try again!');
  //       reset()
  //       // match.pop();
  //       // stream();
  //   } else {
  //     console.log(match[i], 'match');
  //     setTimeout(function() {
  //     play(match[i])
  //   }, 500)
    //}
  //}

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

  // match.push(id);
  // console.log(pattern, match)
  let x = document.querySelectorAll('audio');
  //  for (let i = 0; i < pattern.length; i++) {

  //     ///if (pattern[i] !== parseInt(match[i])) {
  //       alert('try again!');
  //  ???     match.pop();
  //       stream();
  //       return;
  //     } else {
  //       document.getElementById(pattern[i]).style.opacity = "0.5";
  //       setTimeout(function() {
  //       x[pattern[i]].play();
  //       document.getElementById(pattern[i]).style.opacity = "1";
  //       }, 1000)

  //     }

  // }
  console.log(id, 'id', pattern, match)
  x[id].play();

document.getElementById(id).style.opacity = "0.5";

  setTimeout(function() {
      document.getElementById(id).style.opacity = "1";
    }, 500)
  // let next = random(x);

  // setTimeout(function() {
  //   check(next);
  // }, 1000)
}


const stream = () => {

  let x = document.querySelectorAll('audio');
  // for (let i = 0; i < match.length; i++) {
  //   if (parseInt(match[i]) !== pattern[i]) {
  //     match.pop();
  //     let fail = document.getElementById(pattern[pattern.length - 1]);
  //     fail.play();
  //     return;
  //   }
  // }

  // let x = document.querySelectorAll('audio');
  // x[id].play();
  console.log(pattern, 'pattern');


  // while (i < pattern.length) {
  //       console.log(i);
  //   setTimeout(function() {
  //       x[pattern[i]].play();
  //       document.getElementById(pattern[i]).style.opacity = "0.5";
  //     }, 1000)
  //     document.getElementById(pattern[i]).style.opacity = "1";
  //     i++;
  //     console.log(pattern)
  // }

  let i = 0;

  // for (let i = 0; i < pattern.length; i++) {
  //   setTimeout(function() {
  //     play(pattern[i])
  //   }, 400)
  // }

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


  // for (let i = 0; i < pattern.length; i++) {
  //   play(pattern[i]);
  // }

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
  console.log('rand', num)
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