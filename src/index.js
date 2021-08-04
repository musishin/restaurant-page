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
    if(scrollPos <= 450) {
        document.getElementById('blurb-cont').style.background = 'rgb(240, 240, 240)';
    }
    else {
        document.getElementById('blurb-cont').style.background = 'white';
    }
    /*if(scrollPos < -499) {
        document.getElementById('left-cont').style.marginTop = '-40vh';
    }
    else {
        document.getElementById('left-cont').style.marginTop = '0';
    }*/
});