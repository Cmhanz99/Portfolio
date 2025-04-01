function clickMe() {
    let links = document.querySelector('.nav-links');
    links.classList.toggle('active');
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const links = document.querySelector('.nav-links');
    const btn = document.querySelector('.responsiveBtn');
    
    if (!links.contains(e.target) && !btn.contains(e.target)) {
        links.classList.remove('active');
    }
});

console.log(window.innerWidth)

