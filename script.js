document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    yesBtn.addEventListener('click', () => {
        message.classList.remove('hidden');
        message.classList.add('visible');

        // Little celebration effect
        noBtn.style.display = 'none';
        yesBtn.style.transform = 'scale(1.2)';
        yesBtn.disabled = true;

        createConfetti();
    });

    let noClickCount = 0;
    const noPhrases = [
        "No 😔",
        "Are you sure? 🥺",
        "Pleaseee? 🥹",
        "Don't do this to me...",
        "My heart is breaking 💔",
        "Last chance... 🥺💕",
        "You can't resist me forever~",
        "Okay... I'll stop asking... maybe 😭"
    ];

    noBtn.addEventListener('click', () => {
        noClickCount++;

        if (noClickCount < noPhrases.length) {
            noBtn.textContent = noPhrases[noClickCount];
        } else {
            noBtn.textContent = "You monster 😭💔";
        }

        // Make No button run away a little
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 160 - 80;

        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

        // Grow Yes button slightly each time
        const currentScale = 1 + (noClickCount * 0.08);
        yesBtn.style.transform = `scale(${Math.min(currentScale, 1.6)})`;
    });
});

// Very simple confetti
function createConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = `hsl(${Math.random() * 360}, 90%, 60%)`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '100';

        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 720 - 360}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(.37,0,.63,1)'
        });

        setTimeout(() => confetti.remove(), duration * 1000 + 100);
    }
}