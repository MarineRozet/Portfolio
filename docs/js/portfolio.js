document.addEventListener("DOMContentLoaded", function () {
  // --- Slider Management ---
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
      let currentIndex = 0;
      const images = slider.querySelectorAll("img");
      const parentContainer = slider.closest('.slider-container');

      // Initialise la première image
      images[currentIndex].classList.add("active");

      const showImage = (index) => {
          images.forEach((img) => img.classList.remove("active"));
          images[index].classList.add("active");
      };

      parentContainer.querySelector(".prev")?.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          showImage(currentIndex);
      });

      parentContainer.querySelector(".next")?.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
      });

      // --- Lightbox au clic sur image ---
      images.forEach((img) => {
          img.addEventListener("click", () => {
              openLightbox(img.src);
          });
      });
  });

  // --- Lightbox Management ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
  
    document.querySelectorAll('.slider-btn').forEach(btn => {
        btn.style.visibility = 'hidden';
    });
  }
  
  function closeLightbox() {
    lightbox.style.display = "none";
  
    document.querySelectorAll('.slider-btn').forEach(btn => {
        btn.style.visibility = 'visible';
    });
  }
  


  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
          closeLightbox();
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
