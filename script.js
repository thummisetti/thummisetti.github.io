document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let sectionNameDisplay = document.getElementById('section-name-display');
    
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        // Check if section is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Show and update the section name display
            sectionNameDisplay.style.display = 'block';
            sectionNameDisplay.textContent = section.querySelector('h2').textContent;
        }
    });
});


document.querySelectorAll('#side-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`side-nav ul li a[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`side-nav ul li a[href="#${id}"]`).classList.remove('active');
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
