let btn = document.getElementById("start");
let animationRunning = false; // To track if animation is running
let sound = new Audio('https://cdn.glitch.global/0f53d3f0-241f-4f02-9cef-83c84e6ec631/Spreathing%20vr%2060bpm.mp3?v=1662498612704'); // Define sound outside of event listeners
let text = document.getElementById("text");
let intervalId; // Variable to store the interval ID
let alternating = false; // To track if text should alternate
let timeoutId; // Variable to store the timeout ID

btn.addEventListener('click', function() {
    const circles = document.querySelectorAll('.circle');

    if (!animationRunning) {
        circles.forEach((circle) => {
            circle.classList.add('animate');
        });
        sound.currentTime = 0; // Reset playback position
        sound.play();
        btn.innerHTML = 'STOP';
        alternating = true;
        changeText();
    } else {
        circles.forEach((circle) => {
            circle.classList.remove('animate');
        });
        sound.pause();
        btn.innerHTML = 'START';
        text.innerText = "BREATHE";
        
        // Stop the interval when you click on the stop button
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        alternating = false;
    }
  
    animationRunning = !animationRunning; // Toggle animation state
});

function changeText() {
  text.innerText = "IN";
  
  // Set the initial timeout
  timeoutId = setTimeout(() => {
    text.innerText = "OUT";
    
    // Set the interval and store the ID in the variable
    intervalId = setInterval(() => {
      if (alternating) {
        if (text.innerText === "IN") {
          text.innerText = "OUT";
        } else {
          text.innerText = "IN";
        }
      } else {
        clearInterval(intervalId);
      }
    }, 5000);
  }, 5000);
  
  // Check for the end of audio track to stop alternating text
  sound.addEventListener('ended', function() {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    alternating = false;
    btn.innerHTML = 'START';
    text.innerText = "BREATHE";
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle) => {
            circle.classList.remove('animate');
        });
  });
}

//Scroll back to top

let topBtn = document.getElementById('topBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Toggle hamburger/cross icon
const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-bars');
  menu.classList.toggle('fa-xmark');
});

//Change language

var langData = {
  "english": {
    "title": "Breathe and Relax",
    "nav1": "Breathing Guide",
    "nav2": "Music",
    "nav3": "About Cardiac Coherence",
    "circle": "BREATHE",
    "description": "Coherence Breathing is often based on a 5 second inhale followed by a 5 second exhale using your nose. There are many scientific benefits such as improving heart rate variability (HRV), reducing blood pressure, and inducing greater feelings of relaxation.",
    "music": "This track 'Along a sparkling spring' is taken from my cello relaxation album 'Celloscapes 432'. Listen to the full album on streaming platforms here:",
    "socials": "Follow me"
},
  "français": {
    "title": "Respires et détends-toi",
    "nav1": "Guide de respiration",
    "nav2": "Musique",
    "nav3": "A propos de la Cohérence Cardiaque",
    "circle": "RESPIRES",
    "description": "La respiration en cohérence cardiaque est souvent basée sur une inspiration de 5 secondes suivie d'une expiration de 5 secondes par le nez. Il est scientifiquement prouvé qu'elle apporte des bienfaits sur la santé, notamment qu'elle améliore la variabilité de la fréquence cardiaque, réduit la tension et induit une sensation de détente.",
    "music": "Ce morceau 'Along a sparkling spring' ('Le long d'un ruisseau étincelant') est extrait de mon album de relaxation au violoncelle 'Celloscapes 432'. Pour écouter le reste de l'album sur les plateformes de streaming c'est par ici:",
    "socials": "Suivez-moi"
  }
};

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.lang');
const titleEl = document.querySelector('.heading');
const descrEl = document.querySelector('#description');
const circleEl = document.querySelector('#text');
const nav1 = document.querySelector('.guide');
const nav2 = document.querySelector('.music');
const nav3 = document.querySelector('.about');
const musicDescr = document.querySelector('.music-descr');
const follow = document.querySelector('#follow');
const header1 = document.querySelector('.guide-h');
const header2 = document.querySelector('.music-h');
const header3 = document.querySelector('.about-h');

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    titleEl.textContent = langData[attr].title;
    descrEl.textContent = langData[attr].description;
    circleEl.textContent = langData[attr].circle;
    nav1.textContent = langData[attr].nav1;
    nav2.textContent = langData[attr].nav2;
    nav3.textContent = langData[attr].nav3;
    musicDescr.textContent = langData[attr].music;
    header1.textContent = langData[attr].nav1;
    header2.textContent = langData[attr].nav2;
    header3.textContent = langData[attr].nav3;
    follow.textContent = langData[attr].socials;
  });
});