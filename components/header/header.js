
document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const section11 = document.getElementById('section11');
    const section12 = document.getElementById('section12');

    // Отримати позицію елементів відносно верху сторінки
    const section11Top = section11.getBoundingClientRect().top + window.scrollY;
    const section12Top = section12.getBoundingClientRect().top + window.scrollY;

    // Отримати поточну позицію скролу
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Перевірити, чи користувач знаходиться на потрібній секції
    if (scrollPosition >= section11Top - 200 && scrollPosition < section12Top + section12.offsetHeight - 200) {
        // Приховати header, якщо користувач на section11 або section12
        header.classList.add('hidden');
    } else {
        // Показати header, якщо користувач не на цих секціях
        header.classList.remove('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const links = document.querySelectorAll('.dropdown-content a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            dropbtn.textContent = this.textContent;
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    //to handle the sliding effect on hover
    dropdown.addEventListener('mouseenter', function () {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
        setTimeout(() => {
            dropdownContent.style.maxHeight = '300px';
            dropdownContent.style.opacity = '1';
        }, 0); // Start transition immediately
    });

    dropdown.addEventListener('mouseleave', function () {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.maxHeight = '0';
        dropdownContent.style.opacity = '0';
        setTimeout(() => {
            dropdownContent.style.display = 'none';
        }, 500); // Match the duration of the transition
    });
});

let starAnimationInterval;
let animationStarted = false;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animatedButton');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('active');
        setTimeout(() => {
            window.location.href = button.getAttribute('href');
        }, 500); // Adjust the delay to match the transition duration
    });
});

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