function checkQuiz() {

let score = 0;

for (let i = 1; i <= 5; i++) {

let answer = document.querySelector('input[name="q' + i + '"]:checked');

if (answer) {

score += Number(answer.value);

}

}

let result = document.getElementById("result");

if (score === 5) {

result.innerHTML =
"🏆 Excellent! You scored 5/5.<br>You have a strong scientific temper!";

}
else if (score >= 3) {

result.innerHTML =
"👏 Good Job! You scored " + score + "/5.<br>Keep exploring science.";

}
else {

result.innerHTML =
"📚 You scored " + score + "/5.<br>Read the website again and try once more.";

}

}
window.addEventListener("scroll",()=>{

let winScroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});
AOS.init({

duration:1200,

once:false,

offset:150,

easing:"ease-in-out"

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
const card=document.querySelector(".story-card");

card.classList.remove("fade");

void card.offsetWidth;

card.classList.add("fade");
