import topContactImg from './images/cafe-main-4.jpeg';

export default function contactPage() {
    const bodyCont = document.createElement('div');
    const mainCont = document.createElement('div');
    const contactImgCont = document.createElement('div');
    const contactImg = document.createElement('img');
    const contactTitle = document.createElement('div');

    const contactCont = document.createElement('div');
    const contAddressCont = document.createElement('div');
    const contHoursCont = document.createElement('div');
    const contContactCont = document.createElement('div');

    const contAddressTitle = document.createElement('div');
    const contHoursTitle = document.createElement('div');
    const contContactTitle = document.createElement('div');

    const contAddressInfo = document.createElement('div');
    const contHoursInfo = document.createElement('div');
    const contContactInfo = document.createElement('div');

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
    mainCont.appendChild(contactImgCont);
    contactImgCont.appendChild(contactImg);
    contactImgCont.appendChild(contactTitle);
    mainCont.appendChild(contactCont);
    contactCont.appendChild(contAddressCont);
    contactCont.appendChild(contHoursCont);
    contactCont.appendChild(contContactCont);
    contAddressCont.appendChild(contAddressTitle);
    contHoursCont.appendChild(contHoursTitle);
    contContactCont.appendChild(contContactTitle);
    contAddressCont.appendChild(contAddressInfo);
    contHoursCont.appendChild(contHoursInfo);
    contContactCont.appendChild(contContactInfo);

    mainCont.appendChild(footer);
    footer.appendChild(footerSecOne);
    footer.appendChild(footerSecTwo);
    footer.appendChild(footerSecThree);
    footerSecOne.appendChild(footerSecOneTitle);
    footerSecOne.appendChild(footerSecOneText);
    footerSecTwo.appendChild(footerSecTwoTitle);
    footerSecTwo.appendChild(footerSecTwoText);
    footerSecThree.appendChild(footerSecThreeTitle);
    footerSecThree.appendChild(footerSecThreeText);

    contactTitle.innerHTML = 'Contact Us';
    contAddressTitle.innerHTML = 'Our Location';
    contHoursTitle.innerHTML = 'Hours';
    contContactTitle.innerHTML = 'Contact Us';
    contAddressInfo.innerHTML = '7777 Seventh Street<br>Sector 7, Midgar 01277';
    contHoursInfo.innerHTML = 'Mon - Thurs: 7AM - 2AM<br>Fri - Sat: 12PM - 2AM<br>Sun: 12PM - 12AM';
    contContactInfo.innerHTML = 'Phone: 703-777-7777<br>Email: supportseventh@heaven.com';

    footerSecOneTitle.innerHTML = 'ABOUT OUR COMPANY';
    footerSecTwoTitle.innerHTML = 'POLICY AND PROMOTION';
    footerSecThreeTitle.innerHTML = 'REWARDS';
    footerSecOneText.innerText = '\n\n\nABOUT SEVENTH HEAVEN\n\n\nCAREERS\n\n\nINVESTOR RELATIONS';
    footerSecTwoText.innerText = '\n\n\nSTORE POLICY';
    footerSecThreeText.innerText = '\n\n\nABOUT MEMBERS\' POLICY';

    contactImg.src = topContactImg;

    bodyCont.classList.add('body-cont');
    mainCont.setAttribute('id', 'main-cont');
    mainCont.classList.add('parallax');
    contactImgCont.classList.add('parallax-layer', 'parallax-layer-back');
    contactImgCont.setAttribute('id', 'contact-top-cont');
    contactImg.setAttribute('id', 'contact-top-img');
    contactImg.classList.add('image-fade-in');
    contactTitle.setAttribute('id', 'contact-title');
    contactTitle.classList.add('image-fade-in');
    contactCont.classList.add('parallax-layer', 'parallax-layer-base');
    contactCont.setAttribute('id', 'contact-cont');
    contAddressCont.classList.add('contact-cont-divs');
    contHoursCont.classList.add('contact-cont-divs');
    contContactCont.classList.add('contact-cont-divs');
    contAddressTitle.classList.add('contact-div-titles');
    contHoursTitle.classList.add('contact-div-titles');
    contContactTitle.classList.add('contact-div-titles');
    contAddressInfo.classList.add('contact-div-info');
    contHoursInfo.classList.add('contact-div-info');
    contContactInfo.classList.add('contact-div-info');

    footer.setAttribute('id', 'footer');
    footer.classList.add('parallax-layer', 'parallax-layer-base');
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