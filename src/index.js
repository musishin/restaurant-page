import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import './style.css';
import fbImg from './images/facebook.png';
import twImg from './images/twitter.png';
import instImg from './images/instagram.png';
import ytImg from './images/youtube.png';

const Body = () => {
    let bodyCont;
    const setBodyCont = (newBodyCont) => {
        bodyCont = newBodyCont;
    }
    const getBodyCont = () => bodyCont;
    return {setBodyCont, getBodyCont}
};

const bodyCont = Body();

const initialLoad = (() => {
    const content = document.createElement('div');
    const leftCont = document.createElement('div');
    const restName = document.createElement('span');
    const tabCont = document.createElement('div');
    const homeItem = document.createElement('span');
    const menuItem = document.createElement('span');
    const contactItem = document.createElement('span');
    const socialCont = document.createElement('div');
    const fbLogo = document.createElement('img');
    const twLogo = document.createElement('img');
    const instLogo = document.createElement('img');
    const ytLogo = document.createElement('img');

    content.appendChild(leftCont);

    leftCont.appendChild(restName);
    leftCont.appendChild(tabCont);
    leftCont.appendChild(socialCont);

    tabCont.appendChild(homeItem);
    tabCont.appendChild(menuItem);
    tabCont.appendChild(contactItem);

    socialCont.appendChild(instLogo);
    socialCont.appendChild(fbLogo);
    socialCont.appendChild(twLogo);
    socialCont.appendChild(ytLogo);

    document.body.appendChild(content);

    restName.innerHTML = 'Seventh Heaven Caf&egrave;';
    homeItem.innerHTML = 'Home';
    menuItem.innerHTML = 'Menu';
    contactItem.innerHTML = 'Contact';

    fbLogo.src = fbImg;
    twLogo.src = twImg;
    instLogo.src = instImg;
    ytLogo.src = ytImg;

    content.setAttribute('id', 'content');
    leftCont.setAttribute('id', 'left-cont');
    restName.setAttribute('id', 'rest-name');
    tabCont.setAttribute('id', 'tab-cont');
    homeItem.classList.add('menu-items');
    homeItem.setAttribute('id', 'home-item');
    menuItem.classList.add('menu-items');
    menuItem.setAttribute('id', 'menu-item');
    contactItem.classList.add('menu-items');
    contactItem.setAttribute('id', 'contact-item');
    socialCont.setAttribute('id', 'social-cont');
    fbLogo.classList.add('social-logo');
    twLogo.classList.add('social-logo');
    instLogo.classList.add('social-logo');
    ytLogo.classList.add('social-logo');

    bodyCont.setBodyCont(homePage());
    content.appendChild(bodyCont.getBodyCont());
})();

document.getElementById('home-item').addEventListener('click', () => {
    content.removeChild(bodyCont.getBodyCont());
    bodyCont.setBodyCont(homePage());
    content.appendChild(bodyCont.getBodyCont());
});

document.getElementById('menu-item').addEventListener('click', () => {
    content.removeChild(bodyCont.getBodyCont());
    bodyCont.setBodyCont(menuPage());
    content.appendChild(bodyCont.getBodyCont());
});

document.getElementById('contact-item').addEventListener('click', () => {
    content.removeChild(bodyCont.getBodyCont());
    bodyCont.setBodyCont(contactPage());
    content.appendChild(bodyCont.getBodyCont());
});

//changes color of blurb-cont background when page is scrolled up a certain amount.
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
});