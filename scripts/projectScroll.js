document.addEventListener('DOMContentLoaded', function() {
    const projectSections = document.querySelectorAll('.project-section');

    function checkScroll() {
        projectSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            //If the section is below the top or bottom of screen
            if (sectionTop < windowHeight && sectionBottom >= 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    checkScroll();

    let throttleTimeout;
    function throttleScroll() {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(function() {
                throttleTimeout = null;
                checkScroll();
            }, 250); 
        }
    }
    window.addEventListener('scroll', throttleScroll);
});
