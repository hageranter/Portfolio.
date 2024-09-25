// Add this to your script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// In script.js
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert("Thank you for your message!");
        contactForm.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// In script.js
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        const enlargedImgSrc = image.getAttribute('src');
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.cursor = 'zoom-out';

        const imgTag = document.createElement('img');
        imgTag.src = enlargedImgSrc;
        imgTag.style.maxWidth = '90%';
        imgTag.style.maxHeight = '90%';

        modal.appendChild(imgTag);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});




const menuButton = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for your message!');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
