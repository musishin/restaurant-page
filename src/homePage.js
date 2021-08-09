import image from './images/cafe-main-8.jpeg';
import hoursImage from './images/cafe-main-3.jpeg';

export default function homePage() {
    const bodyCont = document.createElement('div');
    const mainCont = document.createElement('div');
    const imgCont = document.createElement('div');
    const homeImg = document.createElement('img');
    const infoCont = document.createElement('div');
    const blurbCont = document.createElement('div');
    const blurbTitle = document.createElement('div');
    const blurbText = document.createElement('div');
    const hoursCont = document.createElement('div');
    const hoursImg = document.createElement('img');
    const hoursInnerCont = document.createElement('div');
    const hoursTitle = document.createElement('div');
    const hoursText = document.createElement('div');
    const addressTitle = document.createElement('div');
    const addressText = document.createElement('div');
    const orderText = document.createElement('div');
    const orderBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const mailCont = document.createElement('div');
    const mailInnerCont = document.createElement('div');
    const mailText = document.createElement('div');
    const mailForm = document.createElement('form');
    const mailInput = document.createElement('input');
    const mailBtn = document.createElement('button');
    const footer = document.createElement('div');
    const footerSecOne = document.createElement('div');
    const footerSecTwo = document.createElement('div');
    const footerSecThree = document.createElement('div');
    const footerSecOneTitle = document.createElement('div');
    const footerSecTwoTitle = document.createElement('div');
    const footerSecThreeTitle = document.createElement('div');
    const footerSecOneText = document.createElement('div');
    const footerSecTwoText = document.createElement('div');
    const footerSecThreeText = document.createElement('div');

    bodyCont.appendChild(mainCont);

    mainCont.appendChild(imgCont);
    mainCont.appendChild(infoCont);
    
    imgCont.appendChild(homeImg);

    infoCont.appendChild(blurbCont);
    infoCont.appendChild(hoursCont);
    infoCont.appendChild(mailCont);
    infoCont.appendChild(footer);

    blurbCont.appendChild(blurbTitle);
    blurbCont.appendChild(blurbText);
    blurbCont.appendChild(aboutBtn);

    hoursCont.appendChild(hoursImg);
    hoursCont.appendChild(hoursInnerCont);

    hoursInnerCont.appendChild(hoursTitle);
    hoursInnerCont.appendChild(hoursText);
    hoursInnerCont.appendChild(addressTitle);
    hoursInnerCont.appendChild(addressText);
    hoursInnerCont.appendChild(orderText);
    hoursInnerCont.appendChild(orderBtn);

    mailCont.appendChild(mailInnerCont);

    mailInnerCont.appendChild(mailText);
    mailInnerCont.appendChild(mailForm);

    mailForm.appendChild(mailInput);
    mailForm.appendChild(mailBtn);

    footer.appendChild(footerSecOne);
    footer.appendChild(footerSecTwo);
    footer.appendChild(footerSecThree);

    footerSecOne.appendChild(footerSecOneTitle);
    footerSecOne.appendChild(footerSecOneText);
    footerSecTwo.appendChild(footerSecTwoTitle);
    footerSecTwo.appendChild(footerSecTwoText);
    footerSecThree.appendChild(footerSecThreeTitle);
    footerSecThree.appendChild(footerSecThreeText);

    blurbText.innerHTML = 'Seventh Heaven, alternatively spelled 7th Heaven, is a bar and restaurant owned and run by Tifa Lockhart in the Final Fantasy VII series, located in the Sector 7 slums of Midgar. It has served as a home base for many of the games\' main characters, specifically in Final Fantasy VII. Located in the slums of Sector 7 in Midgar, the original Seventh Heaven bar was built by an unnamed carpenter during the events of Crisis Core -Final Fantasy VII-, and named "Seventh Heaven" by Zack Fair during a conversation.';
    aboutBtn.innerHTML = 'Learn More';
    blurbTitle.innerHTML = 'Welcome to Seventh Heaven';
    hoursTitle.innerHTML = 'Hours';
    addressTitle.innerHTML = 'Address';
    hoursText.innerHTML = 'Mon - Thurs: 7AM - 2AM<br />Fri - Sun: 7AM - 12AM';
    addressText.innerHTML = '7777 Seventh Street<br />Sector 7, Midgar 01277';
    orderText.innerHTML = 'Order online right now and have your food and drinks ready by the time you arrive! Click order online below.';
    orderBtn.innerHTML = 'Order Online';
    mailText.innerHTML = 'Join our mailing list!';
    mailBtn.innerHTML = 'Join';
    footerSecOneTitle.innerHTML = 'ABOUT OUR COMPANY';
    footerSecTwoTitle.innerHTML = 'POLICY AND PROMOTION';
    footerSecThreeTitle.innerHTML = 'REWARDS';
    footerSecOneText.innerText = '\n\n\nABOUT SEVENTH HEAVEN\n\n\nCAREERS\n\n\nINVESTOR RELATIONS';
    footerSecTwoText.innerText = '\n\n\nSTORE POLICY';
    footerSecThreeText.innerText = '\n\n\nABOUT MEMBERS\' POLICY';

    bodyCont.classList.add('body-cont');
    mainCont.setAttribute('id', 'main-cont');
    mainCont.classList.add('parallax');
    imgCont.setAttribute('id', 'img-cont');
    imgCont.classList.add('parallax-layer', 'parallax-layer-back');
    homeImg.src = image;
    homeImg.classList.add('image-fade-in');
    infoCont.setAttribute('id', 'info-cont');
    infoCont.classList.add('parallax-layer', 'parallax-layer-base');
    bodyCont.setAttribute('id', 'body-cont');
    blurbCont.setAttribute('id', 'blurb-cont');
    blurbTitle.setAttribute('id', 'blurb-title');
    blurbText.setAttribute('id', 'blurb-text');
    hoursCont.setAttribute('id', 'hours-cont');
    hoursImg.src = hoursImage;
    hoursImg.setAttribute('id', 'hours-img');
    hoursInnerCont.setAttribute('id', 'hours-inner-cont');
    hoursTitle.setAttribute('id', 'hours-title');
    hoursText.setAttribute('id', 'hours-text');
    addressTitle.setAttribute('id', 'address-title');
    addressText.setAttribute('id', 'address-text');
    orderText.setAttribute('id', 'order-text');
    orderBtn.setAttribute('id', 'order-btn');
    aboutBtn.setAttribute('id', 'about-btn');
    mailCont.setAttribute('id', 'mail-cont');
    mailInnerCont.setAttribute('id', 'mail-inner-cont');
    mailText.setAttribute('id', 'mail-text');
    mailForm.setAttribute('type', 'text');
    mailForm.setAttribute('id', 'mail-form');
    mailForm.setAttribute('name', 'mail-form');
    mailInput.setAttribute('id', 'mail-input');
    mailBtn.setAttribute('id', 'mail-btn');
    mailBtn.setAttribute('type', 'button');
    footer.setAttribute('id', 'footer');
    footerSecOne.classList.add('footer-section');
    footerSecTwo.classList.add('footer-section');
    footerSecThree.classList.add('footer-section');
    footerSecOneTitle.classList.add('footer-section-title');
    footerSecTwoTitle.classList.add('footer-section-title');
    footerSecThreeTitle.classList.add('footer-section-title');
    footerSecOneText.classList.add('footer-section-text');
    footerSecTwoText.classList.add('footer-section-text');
    footerSecThreeText.classList.add('footer-section-text');

    return bodyCont;
}