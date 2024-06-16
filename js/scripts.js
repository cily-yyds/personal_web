document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});
