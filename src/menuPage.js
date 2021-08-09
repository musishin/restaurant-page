export default function menuPage() {
    const bodyCont = document.createElement('div');
    const menuTitle = document.createElement('menu-title');
    const menuCont = document.createElement('div');

    bodyCont.appendChild(menuTitle);
    bodyCont.appendChild(menuCont);

    menuTitle.innerHTML = 'Browse Our Menu';

    bodyCont.classList.add('body-cont');
    bodyCont.setAttribute('id', 'menu-body-cont');
    menuTitle.setAttribute('id', 'menu-title');
    menuCont.setAttribute('id', 'menu-cont');

    return bodyCont;
}