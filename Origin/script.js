// abre e fecha o menu quando clicar no icone
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// quando clicar em um item, fechar o menu
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// add sombra no header
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// Testimonial carousel
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testmonials,
  #contact .text, #contact .links,
  footer .brand, footer .social   
`,
  { interval: 100 }
);

// botão de voltar ao topo
const backButton = document.querySelector(".back-to-top");
function backToTop() {
  if (window.scrollY >= 560) {
    backButton.classList.add("show");
  } else {
    backButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  changeHeader();
  backToTop();
});
