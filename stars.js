// Selecting elements for the login/register toggle
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Redirection on form submission
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect after 1 sec
            }, 1000);
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            setTimeout(() => {
                window.location.href = "welcome.html"; // Redirect after 1 sec
            }, 1000);
        });
    }
});

// Creating the stars effect
document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");
    document.body.appendChild(starsContainer);

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 5 + 3 + "s"; // Twinkling speed
        starsContainer.appendChild(star);

        // Remove old stars to prevent excessive memory usage
        setTimeout(() => {
            star.remove();
        }, 8000);
    }

    function createShootingStar() {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add("shooting-star");

        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 50;

        shootingStar.style.top = startY + "vh";
        shootingStar.style.left = startX + "vw";

        // Random duration
        const duration = Math.random() * 3 + 2;
        shootingStar.style.animation = `shooting ${duration}s linear infinite`;

        starsContainer.appendChild(shootingStar);

        // Remove after animation
        setTimeout(() => {
            shootingStar.remove();
        }, duration * 1000);
    }

    // Generate static stars
    for (let i = 0; i < 100; i++) {
        createStar();
    }

    // Generate shooting stars at random intervals
    setInterval(() => {
        createShootingStar();
    }, 2000);
});

