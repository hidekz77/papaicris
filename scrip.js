// Criar partículas flutuantes
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Criar partículas periodicamente
setInterval(createParticle, 300);

// Adicionar efeitos de clique nas imagens
document.querySelectorAll('.gallery-item, .top-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Efeito de hover nos cards de estatísticas
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const number = this.querySelector('.stat-number');
        number.style.color = '#ffd700';
    });
    
    card.addEventListener('mouseleave', function() {
        const number = this.querySelector('.stat-number');
        number.style.color = '#ff0000';
    });
});