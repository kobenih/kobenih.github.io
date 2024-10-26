document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.getElementById('particle-container');

    // Fungsi untuk membuat partikel baru
    function createParticle() {
      const particle = document.createElement('span');
      particle.classList.add('particle');

      // Posisi awal partikel (acak di lebar layar)
      particle.style.left = `${Math.random() * 100}vw`;

      // Ukuran acak untuk setiap partikel
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Kecepatan animasi acak
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;

      // Tambahkan partikel ke container
      particleContainer.appendChild(particle);

      // Hapus partikel setelah animasi selesai
      setTimeout(() => {
        particle.remove();
      }, 10000); // Sesuaikan dengan durasi animasi
    }

    // Buat partikel secara berkala
    setInterval(createParticle, 500); // Setiap 500ms
  });


document.getElementById('modeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    this.innerText = "☀️ Light Mode";
  } else {
    this.innerText = "🌙 Dark Mode";
  }
});

const sections = document.querySelectorAll('section');

const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});


