// Menangkap elemen-elemen navbar
const statsLink = document.querySelector('a[href="#stats"]');
const agentsLink = document.querySelector('a[href="#agents"]');
const skinsLink = document.querySelector('a[href="#skins"]');
const mapsLink = document.querySelector('a[href="#maps"]');
const settingsLink = document.querySelector('a[href="#settings"]');
const aboutvalLink = document.querySelector('a[href="#aboutval"]');

// Fungsi yang akan dipanggil saat tautan navbar ditekan
function navigateToSection(event) {
  // Mencegah tautan mengarah ke halaman baru
  event.preventDefault();

  // Menemukan elemen dengan ID yang sesuai
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  // Menghitung offset untuk menghindari bagian yang tertutup navbar
  const navbarHeight = document.querySelector('nav').offsetHeight;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  // Scroll ke elemen tersebut
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Menambahkan event listener ke setiap tautan navbar
statsLink.addEventListener('click', navigateToSection);
agentsLink.addEventListener('click', navigateToSection);
skinsLink.addEventListener('click', navigateToSection);
mapsLink.addEventListener('click', navigateToSection);
settingsLink.addEventListener('click', navigateToSection);
aboutvalLinkk.addEventListener('click', navigateToSection);

