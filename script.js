const scrollToSection2 = document.querySelector(".scrollToSection2");

scrollToSection2.onclick = () => {
    var elem = document.querySelector(".section2")
    elem.scrollIntoView({behavior: 'smooth', block: 'center'});
    
}

/*
const parallax_el = document.querySelectorAll(".parallax");
const parallax_words = document.querySelector(".words");
let xValue = 0; yValue = 0;
window.addEventListener("mousemove", (e) => {
    xValue = e.clientX-window.innerWidth /2;
    yValue = e.clientY-window.innerWidth /2;
    console.log(xValue, yValue);

    parallax_el.forEach((el) =>{ 
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = (`translateX(calc(-50% +  ${xValue * speedx}px)) translateY(calc(20% + ${yValue * speedy}px))`);
        let captain = 1;
        console.log(`Paging ${xValue} to report to the bridge.`);
        //el.style.transform = 'translateX(calc(-50% + ${xValue}px)) translateY(calc(0% + ${yValue}px))';
    });
    parallax_words.style.transform = (`translateX(calc(30% + ${xValue * parallax_words.dataset.speedx}px)) translateY(calc(20% + ${yValue * parallax_words.dataset.speedy}px))`);
    //el.style.transform = 'translateX(calc(-50% + ${xValue}px)) translateY(calc(0% + ${yValue}px))';
    console.log(parallax_words);
});
*/