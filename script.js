// Toggle navigation menu visibility using a class
document.querySelector('.menu-icon').addEventListener('click', function() {
    const nav = document.getElementById('side-nav');
    if (nav) {
        nav.classList.toggle('show-nav');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('#side-nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Smooth scrolling
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjusted for fixed header or spacing
                behavior: 'smooth'
            });
        }

        // Hide the navigation menu after clicking a link
        const nav = document.getElementById('side-nav');
        if (nav) {
            nav.classList.remove('show-nav');
        }
    });
});

// Highlight social media icons on hover
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.color = '#007BFF'; // Change to highlight color
    });

    icon.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Change back to default color
    });
});

