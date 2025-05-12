const menuIcon = document.getElementById('menuToggle');
const closeIcon = document.getElementById('closeToggle');
const openToggle = document.getElementById("barToggle");
const mobileNav = document.getElementById('mobileNav');
const header = document.querySelector(".header");
const mobileNavLinks = document.querySelector(".mobile-nav-links");
const mobileButtons = document.querySelector(".mobile-buttons");

// menu toggle
menuIcon.addEventListener('click', () => {
  mobileNav.classList.add('show');
  menuIcon.classList.remove('show');
  closeIcon.classList.add('show');
  document.body.classList.add('mobile-open');
});

closeIcon.addEventListener('click', () => {
  mobileNav.classList.remove('show');
  closeIcon.classList.remove('show');
  menuIcon.classList.add('show');
  document.body.classList.remove('mobile-open');
  mobileNav.style.display = "none"; // reset full menu
});

// header scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 0);
});

document.querySelectorAll('a[href="#services"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('services').style.display = 'block';
  });
});


// mobile nav
document.addEventListener("DOMContentLoaded", function () {
  const servicesPage = document.getElementById("servicesPage");
  const transportPage = document.getElementById("transportPage");
  const statesPage = document.getElementById("statesWeServePage");

  const serviceToggle = document.querySelector(".service-toggle");
  const transportToggle = document.querySelector(".transport-toggle");
  const statesToggle = document.querySelector(".states-toggle");

  const backToMobileNav = document.getElementById("backToMobileNav");
  const backToTransportNav = document.getElementById("backToTransportNav");
  const backToStatesNav = document.getElementById("backToStatesNav");

  function showSection(page) {
    servicesPage.style.display = "none";
    transportPage.style.display = "none";
    statesPage.style.display = "none";

    mobileNavLinks.style.display = "none";
    mobileButtons.style.display = "none";

    page.style.display = "block";
  }

  function goBackToMainNav() {
    servicesPage.style.display = "none";
    transportPage.style.display = "none";
    statesPage.style.display = "none";

    mobileNavLinks.style.display = "block";
    mobileButtons.style.display = "flex";
  }

  serviceToggle.addEventListener("click", () => showSection(servicesPage));
  transportToggle.addEventListener("click", () => showSection(transportPage));
  statesToggle.addEventListener("click", () => showSection(statesPage));

  backToMobileNav.addEventListener("click", (e) => {
    e.preventDefault();
    goBackToMainNav();
  });

  backToTransportNav.addEventListener("click", (e) => {
    e.preventDefault();
    goBackToMainNav();
  });

  backToStatesNav.addEventListener("click", (e) => {
    e.preventDefault();
    goBackToMainNav();
  });

  openToggle.addEventListener("click", () => {
    mobileNav.style.display = "block";
    goBackToMainNav();
  });
});
