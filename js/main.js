
// show icon scroll up
let iconUp = document.getElementById('icon-up');
let nav = document.querySelector('nav')
window.onscroll = function () {
    
    if(this.scrollY >= 600){
        iconUp.classList.add('show');
        nav.classList.add('show');
        dark.classList.add('up')
    }else{
        iconUp.classList.remove('show');
        nav.classList.remove('show');
      
    }
}
iconUp.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// nav scroll active section
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop -sectionHeight / 7){
            current = section.getAttribute('id')
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})
// creat overlay
// const overlay = document.createElement('div');
// overlay.className = ('overlay');
// document.body.appendChild(overlay)
// // event icon show nav
// let iconNav = document.getElementById('icon-nav');
// let navMinu = document.getElementById('nav-minu');
// iconNav.addEventListener('click', (e) => {
//     navMinu.classList.toggle('show');
//     overlay.classList.toggle('show');
//     iconNav.classList.toggle('fa-times-circle');
//     iconNav.classList.toggle('fa-bars');
    
// })





