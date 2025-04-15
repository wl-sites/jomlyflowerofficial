document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth"
          });
      }
  });
});

document.querySelectorAll("div a").forEach(link => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth"
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const reserveButtons = document.querySelectorAll(".reserve-button"); // Sélectionne tous les boutons de réservation
    const overlay = document.getElementById("overlay");
    const reservationForm = document.getElementById("reservationForm");
    const closeBtn = document.getElementById("closeBtn");

    // Ajouter un écouteur d'événement à chaque bouton de réservation
    reserveButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            overlay.style.display = "block";
            reservationForm.style.display = "flex";
        });
    });

    // Cacher le formulaire et l'overlay
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        reservationForm.style.display = "none";
    });

    // Cacher le formulaire en cliquant sur l'overlay
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        reservationForm.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactButtons = document.querySelectorAll(".contact-button"); // Sélectionne tous les boutons de réservation
    const overlay = document.getElementById("overlay");
    const contactForm = document.getElementById("contactForm");
    const callBtn = document.getElementById("callBtn");

    // Ajouter un écouteur d'événement à chaque bouton de réservation
    contactButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            overlay.style.display = "block";
            contactForm.style.display = "flex";
        });
    });

    // Cacher le formulaire et l'overlay
    callBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        contactForm.style.display = "none";
    });

    // Cacher le formulaire en cliquant sur l'overlay
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        contactForm.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const paymentOverlay = document.getElementById('payment-overlay');
    const paymentForm = document.getElementById('payment-form');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            paymentOverlay.style.display = 'flex'; // Afficher l'overlay et le formulaire
        });
    });

    paymentOverlay.addEventListener('click', function(event) {
        if (event.target === paymentOverlay) {
            paymentOverlay.style.display = 'none'; // Cacher l'overlay si on clique en dehors du formulaire
        }
    });
});