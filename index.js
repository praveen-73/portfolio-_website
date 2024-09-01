document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection ? targetSection.offsetTop - 50 : 0, // Adjust for fixed header height
                behavior: "smooth"
            });
        });
    });

    // Active Section Highlighting
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust for fixed header height
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

// Open Project Function
function openProject(url) {
    window.open(url, "_blank");
}




document.querySelectorAll('.navbar a, .contact').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





// Function to Update Radial Progress Bars
function updateRadialProgressBars() {
    document.querySelectorAll('.radial-bars').forEach(bar => {
        const percentage = bar.querySelector('.percentage').textContent;
        const percentageValue = parseFloat(percentage);

        // Calculate the stroke-dashoffset based on percentage
        const circle = bar.querySelector('.path');
        const radius = circle.getAttribute('r');
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentageValue / 100) * circumference;

        circle.style.strokeDashoffset = offset;
    });
}

// Call the function to set initial progress
updateRadialProgressBars();

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('error');
            valid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!valid) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Form Input Styles for Validation
const style = document.createElement('style');
style.innerHTML = `
    .error {
        border: 2px solid red;
    }
`;
document.head.appendChild(style);

//project items///
function openProject(url) {
    window.open(url, '_blank');
}



