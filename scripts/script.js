const currentYear = document.getElementById('current-year');

// update copyright date to current year
const year = new Date().getFullYear();
currentYear.innerHTML = year;

// Select all buttons that should trigger the scroll behavior
document.querySelectorAll('.scroll-button').forEach(button => {
  button.addEventListener('click', function(e) {
    console.log('clicked');
    e.preventDefault(); // Prevent the default anchor behavior
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Replace 'nav' with your navbar selector

    // Smooth scroll to the section, adjusted for the navbar height
    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  });
});