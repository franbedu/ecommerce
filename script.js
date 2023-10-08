const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const mainElement = document.querySelector('main');

// Get the height of the <main> element.
const mainHeight = mainElement.clientHeight;
const mainWidth = mainElement.clientWidth;

console.log('Main element height:', mainHeight, 'pixels');
console.log('Main element width:', mainWidth, 'pixels');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}