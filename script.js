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



document.querySelectorAll('#side-nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    let activeSectionId = ''; // Track the currently active section ID

    const observer = new IntersectionObserver((entries) => {
        let maxIntersectionRatio = 0;
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                if (entry.intersectionRatio > maxIntersectionRatio) {
                    maxIntersectionRatio = entry.intersectionRatio;
                    activeSectionId = id; // Update the active section to the one with the max intersection ratio
                }
            }
        });

        // Highlight the corresponding nav link for the active section
        document.querySelectorAll('#side-nav ul li a').forEach(link => {
            if (link.getAttribute('href') === `#${activeSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, { rootMargin: "-10% 0px -10% 0px", threshold: 0.1 });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
