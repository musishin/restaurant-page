import image from './images/cafe-main-8.jpeg';

export default function homePage() {
    const bodyCont = document.createElement('div');
    const leftCont = document.createElement('div');
    const restName = document.createElement('span');
    const tabCont = document.createElement('div');
    const homeItem = document.createElement('span');
    const menuItem = document.createElement('span');
    const contactItem = document.createElement('span');
    const mainCont = document.createElement('div');
    const imgCont = document.createElement('div');
    const homeImg = document.createElement('img');
    const infoCont = document.createElement('div');
    const blurbCont = document.createElement('div');
    const blurbText = document.createElement('div');
    const hoursCont = document.createElement('div');

    bodyCont.appendChild(leftCont);
    leftCont.appendChild(restName);
    leftCont.appendChild(tabCont);
    tabCont.appendChild(homeItem);
    tabCont.appendChild(menuItem);
    tabCont.appendChild(contactItem);
    bodyCont.appendChild(mainCont);
    mainCont.appendChild(imgCont);
    imgCont.appendChild(homeImg);
    mainCont.appendChild(infoCont);
    infoCont.appendChild(blurbCont);
    blurbCont.appendChild(blurbText);
    infoCont.appendChild(hoursCont);

    restName.innerHTML = 'Seventh Heaven Caf&egrave;';
    homeItem.innerHTML = 'Home';
    menuItem.innerHTML = 'Menu';
    contactItem.innerHTML = 'Contact';
    blurbText.innerHTML = 'Seventh Heaven, alternatively spelled 7th Heaven, is a bar and restaurant owned and run by Tifa Lockhart in the Final Fantasy VII series, located in the Sector 7 slums of Midgar. It has served as a home base for many of the games\' main characters, specifically in Final Fantasy VII. Located in the slums of Sector 7 in Midgar, the original Seventh Heaven bar was built by an unnamed carpenter during the events of Crisis Core -Final Fantasy VII-, and named "Seventh Heaven" by Zack Fair during a conversation.';

    bodyCont.setAttribute('id', 'body-cont');
    leftCont.setAttribute('id', 'left-cont');
    restName.setAttribute('id', 'rest-name');
    tabCont.setAttribute('id', 'tab-cont');
    homeItem.classList.add('menu-items');
    menuItem.classList.add('menu-items');
    contactItem.classList.add('menu-items');
    mainCont.setAttribute('id', 'main-cont');
    mainCont.classList.add('parallax');
    imgCont.setAttribute('id', 'img-cont');
    imgCont.classList.add('parallax-layer', 'parallax-layer-back');
    homeImg.src = image;
    infoCont.setAttribute('id', 'info-cont');
    infoCont.classList.add('parallax-layer', 'parallax-layer-base');
    bodyCont.setAttribute('id', 'body-cont');
    blurbCont.setAttribute('id', 'blurb-cont');
    blurbText.setAttribute('id', 'blurb-text');
    hoursCont.setAttribute('id', 'hours-cont');

    return bodyCont;
}