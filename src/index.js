import homePage from './homePage';
import './style.css';

const content = document.createElement('div');

content.setAttribute('id', 'content');
document.body.appendChild(content);
content.appendChild(homePage());

document.getElementById('main-cont').addEventListener('scroll', (e) => {
    let scrollPos = 0;
    const el = document.getElementById('info-cont');
    scrollPos = window.pageYOffset + el.getBoundingClientRect().top;
    console.log(scrollPos);
    if(scrollPos <= 300) {
        document.getElementById('left-cont').style.background = '#CAB5AD';
        document.getElementById('left-cont').style.color = '#13130A';
    } else {
        document.getElementById('left-cont').style.background = 'white';
        document.getElementById('left-cont').style.color = 'black';
    }
});