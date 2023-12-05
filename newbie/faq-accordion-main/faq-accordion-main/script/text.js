function inputText(number){
    const array = [`Frontend Mentor offers realistic coding challenges to help developers improve their 
    frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for 
    all levels and ideal for portfolio building.`,
                   `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
    option providing access to a range of projects suitable for all skill levels.`,
                   `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`,
                   `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
    channel where you can ask questions and seek support from other community members.`];
    var pElement = document.getElementsByClassName("text");
    var imageElement = document.getElementsByClassName("plus");
    
    if(pElement[number].innerHTML.trim() === ''){
        pElement[number].innerHTML = array[number];
        imageElement[number].style.background = 'url("/faq-accordion-main/assets/images/icon-minus.svg")' ;   
    }else{
        pElement[number].innerHTML = '';
        imageElement[number].style.background = 'url("/faq-accordion-main/assets/images/icon-plus.svg")' ; 
    }
}

