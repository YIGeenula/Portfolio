//Project Section See more Button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("projBtn").addEventListener("click", function() {
        window.open("projects.html", "_blank");
    });

    //Skills Section View CV Button
    document.getElementById("viewjBtn").addEventListener("click", function() {
        window.open("resume.html", "_blank");
    });
    
    //Animation when i scrolling to each section
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); 
                observer.unobserve(entry.target);
            }
        });
    }

    const observerAbout = new IntersectionObserver(handleIntersection, {threshold: 0.2});
    const observerProjects = new IntersectionObserver(handleIntersection, {threshold: 0.2});
    const observerSkills = new IntersectionObserver(handleIntersection, {threshold: 0.2});
    const observerContact = new IntersectionObserver(handleIntersection, {threshold: 0.2});

    const aboutElements = document.querySelectorAll('#about .about-sec-1, .about-sec-2');
    const projectElements = document.querySelectorAll('#projects .proj-container');
    const skillsElements = document.querySelectorAll('#skills .skills-container');
    const contactTitle = document.querySelector('#contact .contact-title');
    const contactElements = document.querySelectorAll('#contact .contact-container');

    aboutElements.forEach(element => {
        observerAbout.observe(element);
    });
    projectElements.forEach(element => {
        observerProjects.observe(element);
    });
    skillsElements.forEach(element => {
        observerProjects.observe(element);
    });
    contactElements.forEach(element => {
        observerProjects.observe(element);
    });
    observerContact.observe(contactTitle);
    observerContact.observe(contactContainer);
});

