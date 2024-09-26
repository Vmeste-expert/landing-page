const header = document.querySelector('.header_inner');
const logo = document.querySelector('.header__logo');
window.addEventListener('scroll', () => {
    header.classList.toggle('header_inner-scrolled', window.scrollY > 50),
    logo.classList.toggle('header__logo-scrolled', window.scrollY > 50)
});

document.addEventListener("DOMContentLoaded", function() {
const word = document.querySelectorAll('.description__word');
const modules = document.querySelectorAll("section");

let firstModuleHeight = modules[0].offsetHeight;
let secondModuleHeight = modules[1].offsetHeight;
let textModuleHeight = modules[2].offsetHeight;
let firstModules = firstModuleHeight + secondModuleHeight

let currentWordIndex = 0;
let textOffset = (window.innerHeight * 0.4)
let textScroll = textModuleHeight - window.innerHeight
let scrollPerWord = textScroll / word.length
let startTextScroll = firstModules - textOffset

window.onscroll = function() {
    currentWordIndex = Math.floor((window.scrollY - startTextScroll) / scrollPerWord)
    if (currentWordIndex < 0) {
        currentWordIndex = 0
    } else if (currentWordIndex > word.length - 1) {
        currentWordIndex = word.length;
    }
    for (let i = 0; i < word.length; i++) {
        if (i < currentWordIndex) {
            word[i].classList.add('word-dark');
        } else {
            word[i].classList.remove('word-dark');
        }
    }
}
})

    const firstSwitches = {
        study: {
            button: document.getElementById('switchStudy'),
            text: document.getElementById('textStudy'),
            img: document.getElementById('imgStudy')
        },
        work: {
            button: document.getElementById('switchWork'),
            text: document.getElementById('textWork'),
            img: document.getElementById('imgWork')
        },
        life: {
            button: document.getElementById('switchLife'),
            text: document.getElementById('textLife'),
            img: document.getElementById('imgLife')
        },
    };
    
       const secondSwitches = {
        help: {
            button: document.getElementById('switchHelp'),
            text: document.getElementById('textHelp'),
            img: document.getElementById('imgHelp')
        },
        time: {
            button: document.getElementById('switchTime'),
            text: document.getElementById('textTime'),
            img: document.getElementById('imgTime')
        },
        salary: {
            button: document.getElementById('switchSalary'),
            text: document.getElementById('textSalary'),
            img: document.getElementById('imgSalary')
        }
    }
    
    const setActive = (switches, activeKey) => {
        for (const key in switches) {
            const { button, text, img } = switches[key];
            if (key === activeKey) {
                button.classList.add('active');
                text.classList.add('visible');
                img.classList.add('visible');
            } else {
                button.classList.remove('active');
                text.classList.remove('visible');
                img.classList.remove('visible');
            }
        }
    };

    for (const key in firstSwitches) {
        firstSwitches[key].button.onclick = () => setActive(firstSwitches, key);
    }
    
    for (const key in secondSwitches) {
        secondSwitches[key].button.onclick = () => setActive(secondSwitches, key);
    }

    function onToggle(event) {
        if (event.target.open) {
          document.querySelectorAll(".FAQ__answers_item > details[open]").forEach((el) => {      
            if (el === event.target) {
              return;
            }
            el.open = false;
          });
        }
      }
      document
        .querySelectorAll(".FAQ__answers_item > details")
        .forEach((el) => el.addEventListener("toggle", onToggle));