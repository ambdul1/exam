// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth',
            });
        }
    });
});

// Gallery Modal
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';

        // Image to display in modal
        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        modalImage.style.maxWidth = '90%';
        modalImage.style.maxHeight = '90%';
        modalImage.style.border = '5px solid white';
        modalImage.style.borderRadius = '10px';

        // Close modal on click
        modal.addEventListener('click', () => {
            modal.remove();
        });

        // Append image to modal and modal to body
        modal.appendChild(modalImage);
        document.body.appendChild(modal);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formAlert.textContent = 'Veuillez remplir tous les champs.';
        formAlert.className = 'text-danger';
        return;
    }

    formAlert.textContent = 'Merci pour votre message ! Nous vous répondrons bientôt.';
    formAlert.className = 'text-success';
    contactForm.reset();
});

