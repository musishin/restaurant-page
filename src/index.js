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
        document.getElementById('info-cont').style.background = 'rgb(240, 240, 240)';
    }
    else {
        document.getElementById('info-cont').style.background = 'white';
    }
    if(scrollPos < -460) {
        document.getElementById('rest-name').style.marginTop = '-75vh';
    }
    else {
        document.getElementById('rest-name').style.marginTop = '0';
    }
});