document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const targetSection = document.getElementById('section12');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the target is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(targetSection);
});

let starAnimationInterval;
let animationStarted = false;

function startStarAnimation() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.opacity = '1';
        star.style.transform = 'scale(' + (Math.random() * 0.4 + 0.8) + ')';
        setTimeout(() => {
            star.style.opacity = '0';
            star.style.transform = 'scale(0)';
        }, Math.random() * 2000 + 1000); // Random duration
    });

    starAnimationInterval = setInterval(() => {
        stars.forEach(star => {
            setTimeout(() => {
                star.style.opacity = '1';
                star.style.transform = 'scale(' + (Math.random() * 0.4 + 0.8) + ')';
                setTimeout(() => {
                    star.style.opacity = '0';
                    star.style.transform = 'scale(0)';
                }, Math.random() * 2000 + 1000); // Random duration
            }, Math.random() * 500); // Random start delay 
        });
    }, 3000); // Repeat animation 
}

//remember button status
document.getElementById('animatedButton').addEventListener('mouseover', () => {
    if (!animationStarted) {
        document.getElementById('animatedButton').classList.add('active');
        startStarAnimation();
        animationStarted = true;
    }
});