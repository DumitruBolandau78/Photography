const links = document.querySelectorAll("#nav-bar li a");
const linksMobile = document.querySelectorAll('.nav-bar-mobile li a');
const linksParent = document.querySelector("#nav-bar");
const linksMobileParent = document.querySelector(".nav-bar-mobile");

let aboutOffsetTop = document.querySelector("#about").offsetTop;
let servicesOffsetTop = document.querySelector("#services").offsetTop;
let contactOffsetTop = document.querySelector("#contact-us").offsetTop;

links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((link) => {
            link.classList.remove("active");
        });

        link.classList.add("active");
    });
});

document.querySelectorAll('.nav-bar-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-bar-mobile').classList.remove('show');
    });
});

window.addEventListener("scroll", animationOnScroll);
linksParent.addEventListener("click", animationOnClick);
linksMobileParent.addEventListener("click", animationOnClick);

function animationOnClick(e) {
    const link = e.target.closest("li a");
    if (!link) return;
    window.removeEventListener("scroll", animationOnScroll);

    links.forEach((item) => {
        item.classList.remove("active");
    });
    linksMobile.forEach((item) => {
        item.classList.remove("active");
    });
    link.classList.add("active");

    let coordY = window.scrollY;
    const interval = setInterval(() => {
        if (coordY != window.scrollY) {
            coordY = window.scrollY;
        } else {
            window.addEventListener("scroll", animationOnScroll);
            clearInterval(interval);
        }
    }, 100);
}

function animationOnScroll() {
    if (window.scrollY + window.innerHeight / 2 < aboutOffsetTop) {
        addRemoveClass(links, 0);
        addRemoveClass(linksMobile, 0);
    } else if (
        window.scrollY + window.innerHeight / 2 > aboutOffsetTop &&
        window.scrollY + window.innerHeight / 2 < servicesOffsetTop
    ) {
        addRemoveClass(links, 1);
        addRemoveClass(linksMobile, 1);
    } else if (
        window.scrollY + window.innerHeight / 2 > servicesOffsetTop &&
        window.scrollY + window.innerHeight / 2 < contactOffsetTop
    ) {
        addRemoveClass(links, 2);
        addRemoveClass(linksMobile, 2);
    } else if (window.scrollY + window.innerHeight / 2 > contactOffsetTop) {
        addRemoveClass(links, 3);
        addRemoveClass(linksMobile, 3);
    }
}

function addRemoveClass(array, index) {
    if (!array[index].classList.contains("active")) {
        array.forEach((item) => {
            item.classList.remove("active");
        });
        array[index].classList.add("active");
    }
}

window.addEventListener("resize", () => {
    aboutOffsetTop = document.querySelector("#about").offsetTop;
    servicesOffsetTop = document.querySelector("#services").offsetTop;
    contactOffsetTop = document.querySelector("#contact-us").offsetTop;
});