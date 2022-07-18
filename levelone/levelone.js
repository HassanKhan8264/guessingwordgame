// click sound
// const audio = new Audio ('./button-20.mp3')
// const button = document.querySelector('button')

// button.addEventListener('click', function(){
//   audio.play()
// })
// click sound end

//timer
var timeLeft = 30;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        // doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }

    //timer end
    let Dictonery = ["a","bat","cat"]

    //functionss
   
    function a(){
      var button = document.getElementById("button")
      var value = button.innerHTML
      var demo = document.getElementById("demo")
      demo.innerHTML = value
    }
    function b(){
      var button = document.getElementById("button2")
      var value = button.innerHTML
      var demo = document.getElementById("demo")
      demo.innerHTML = value
    }
    