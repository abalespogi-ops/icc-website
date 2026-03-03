// Ilagay dito ang iyong Google Form o Registration Link
const registrationLink = "https://imuscomputercollege.net.ph/online-registration/"; 

// 1. Function para sa "Enroll Now" Button sa Nav Bar
document.querySelector('.enroll-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Pipigilan ang page na mag-refresh
    window.open(registrationLink, '_blank'); // Bubuksan ang link sa bagong tab
});

// 2. Function para sa lahat ng "Course Cards"
const courseCards = document.querySelectorAll('.card');
courseCards.forEach(card => {
    card.addEventListener('click', function() {
        const courseName = this.querySelector('h3').innerText;
        
        // Magtatanong muna sa user bago i-redirect
        const confirmEnroll = confirm("Gusto mo bang mag-enroll sa " + courseName + "?");
        
        if (confirmEnroll) {
            window.open(registrationLink, '_blank');
        }
    });
});

console.log("ICC Registration Logic: Active!");