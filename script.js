// Função para criar confete
function createConfetti() {
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.classList.add(['pink', 'blue', 'white'][Math.floor(Math.random() * 3)]);
        
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const horizontalMove = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { 
                transform: `translate(0, 0) rotate(0deg)`,
                opacity: 1
            },
            { 
                transform: `translate(${horizontalMove}px, ${window.innerHeight + 100}px) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Criar confete a cada scroll
let lastConfettiTime = 0;
window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastConfettiTime > 1000) {
        createConfetti();
        lastConfettiTime = now;
    }
});

// Observar cards para animação de entrada
const cards = document.querySelectorAll('.card');
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

cards.forEach(card => {
    cardObserver.observe(card);
});

// Criar confete inicial
window.addEventListener('load', () => {
    setTimeout(createConfetti, 500);
});
