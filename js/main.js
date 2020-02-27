let header = document.querySelector("header");

document.querySelector(".miniMenu").addEventListener("click", () => {

    document.querySelector(".menu").classList.toggle("open");

})

document.querySelector(".up").addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

})


window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 400) {
        header.classList.add("header");

    } else if (document.documentElement.scrollTop < 400) {
        header.classList.remove("header");
    }

})


$('.slider').owlCarousel({
    center: true,
    loop: false,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        993: {
            items: 3
        }
    }
});