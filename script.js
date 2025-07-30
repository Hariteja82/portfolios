function showContactAlert() {
    alert("Contact me at 23hariteja@gmail.com or +91 8297009548!");
}

// Optional: Smooth scroll to sections (if you add navigation links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
