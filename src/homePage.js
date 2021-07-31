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

    restName.innerHTML = 'Seventh Heaven Caf&egrave;';
    homeItem.innerHTML = 'Home';
    menuItem.innerHTML = 'Menu';
    contactItem.innerHTML = 'Contact';

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
    homeImg.src = '../src/images/cafe-main-7.jpeg';
    infoCont.setAttribute('id', 'info-cont');
    infoCont.classList.add('parallax-layer', 'parallax-layer-base');
    bodyCont.setAttribute('id', 'body-cont');

    return bodyCont;
}