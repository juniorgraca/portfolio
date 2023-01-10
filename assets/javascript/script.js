const home = document.getElementById('home');
const homeArrow = document.querySelector('#home span');

const skills = document.getElementById('skills');
const skillsArrow = document.querySelector('#skills span');

const projects = document.getElementById('projects');
const projectsArrow = document.querySelector('#projects span'); 

const about = document.getElementById('about');
const aboutArrow = document.querySelector('#about span');

const contact = document.getElementById('contact');
const contactArrow = document.querySelector('#contact span');

var names = [home, skills, projects, about, contact]
var arrow = [homeArrow, skillsArrow, projectsArrow, aboutArrow, contactArrow] 

/* Btn Linkedin */

const linkedin = document.getElementById('linkedin');
const linkedinSpan = document.querySelector('#linkedin span');

function addLinkedin(){
  linkedinSpan.innerHTML = "<i class='fa-brands fa-linkedin' aria-hidden='true'></i>"
}

function removeLinkedin(){
  linkedin.style.cssText= ''
  linkedinSpan.innerHTML = ''
}

function esculta(e){
  names[numero].style.cssText=
  'transition-delay: 0s;'+
  'color: #fff;' +
  'border-radius: 5px;'
  arrow[numero].innerHTML = "<i class='fa-solid fa-arrow-right' aria-hidden='true'></i>"
}

function retract (){
  names[numero].style.cssText= ''
  arrow[numero].innerHTML = ''
}

const tyiping = document.querySelector('[data-js="typing"]')

const messages = ['HTML', 'CSS ','JAVA SCRIPT','JOOMLA' ,'PHP'];

let messageIndex= 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters =''

const type = () =>{ 
  if(messageIndex === messages.length){
    messageIndex =0
  }
  currentMessage = messages[messageIndex]
  currentCharacters = currentMessage.slice(0,characterIndex++)
  tyiping.textContent = currentCharacters

  if(currentCharacters.length ===currentMessage.length){
    messageIndex++
    characterIndex = 0
  }
}
setInterval(type, 500)
