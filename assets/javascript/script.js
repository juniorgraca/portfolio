/* link */

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



/* Menu princial */

var home = document.querySelector('.home span')
var career = document.querySelector('.career span')
var jobs = document.querySelector('.jobs span')
var about = document.querySelector('.aboutme span')
var contact = document.querySelector('.contact span' )
var menu = document.querySelector('.menuGlobal')
var card = document.querySelector('.timelineItem')


var classNames= [home, career, jobs, about, contact]
var numeros = ''

function addUnderlineSpan(){
  classNames[numeros].style.cssText=
  'margin-top: 2px;'+
  'background: linear-gradient(90deg, rgba(9,9,121,0) 0%, rgba(112,220,115,1) 62%, rgba(112,220,115,1) 100%);'+
  'border-radius: 90px;'+
 ' display: flex;'+
 'width: 100%;'+
  ' height: 1px;'+
  'animation: MenuOn 1.2s;'+
  'animation-delay: 0s;'
}


function removeUnderlineSpan(){
  classNames[numeros].style.cssText= 'margin-top: 2px;'+
  'background: linear-gradient(90deg, rgba(9,9,121,0) 0%, rgba(112,220,115,1) 62%, rgba(112,220,115,1) 100%);'+
  'border-radius: 90px;'+
 ' display: flex;'+
 'width: 100%;'+
  ' height: 1px;'+
  'animation: MenuOf 1.2s reverse forwards; '+
  'animation-delay: 0s;'

}

 window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop
    if( top > 0 ) {
      menu.classList.add("menuGlobalAdd")
    }else if(top = 1){
      menu.classList.remove("menuGlobalAdd")
    }
 }

 var timeline = document.querySelector('.dotTime');
 var scrolline = document.querySelector('.timeline');
 
 scrolline.addEventListener('onscroll',function(){
   if (scrolline.scrollTop > 0) {
       console.log('scrolled down');
   }
 });
 
 /// timeline
var favFilm = document.querySelector('.film')
var prenchFund = document.querySelector('.container-about')
var prenchCont = document.querySelector('.container-about span')
console.log(prenchCont)

function favoriteFilme () {
  prenchCont.innerHTML ='O Hobbit: Uma Jornada Inesperada'
  prenchFund.style.cssText =
   'background-image: url("https://images5.alphacoders.com/379/379867.jpg");'+
  'background-size:cover;'

 
}

function favoriteSport () {
  prenchCont.innerHTML ='Futebol americano'
  prenchFund.style.cssText =
   'background-image: url("https://wallpapers.com/images/featured/patriots-axywr10um5krofde.webp");'+
  'background-size:cover;'

 
}

function aboutMe(){
  prenchCont.innerHTML ='Me chamo José Carlos da Graça Júnior, ou mais conhecido como JUNIORAKAJUNIOR, sou casado, pai de um garotão, tenho 26 anos, moro em Campo Grande-MS, sou estudante de Front-end, atualmente trabalho no Exército Brasileiro.'
  prenchFund.style.cssText ='font-size: 0.7em;'
}

function mouseMe(){

}