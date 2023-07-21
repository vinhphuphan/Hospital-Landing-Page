const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#nav__btn--open");
const closeNavBtn = document.querySelector("#nav__btn--close");

openNavBtn.addEventListener('click', () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () => {
    navItems.style.display = "none";
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener("click", closeNav);


// Close Nav menu when a menu item is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll("#nav__items li a").forEach(navItems => {
        navItems.addEventListener('click', () => {
            closeNav();
        })
    })

    document.onclick = function(div) {
        if ((closeNavBtn.style.display == 'inline-block') && (div.target !== "a" )) 
        {
           closeNav;
        }
    };

}

// Change Navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// Testimonials Section 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        280: {
            slidesPerView: 1
        },
        // when window width is >= 800px
        600: {
            slidesPerView: 2
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3
        }
  }
});