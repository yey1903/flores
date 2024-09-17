const flowers = document.querySelectorAll('.flower');
const poemElement = document.getElementById('poem');

const colors = ['#ff6347', '#ffd700', '#00fa9a', '#8a2be2', '#ff1493'];
const poems = [
    'Tu belleza brilla más que las estrellas en el cielo, Justine.',
    'Cada día a tu lado es un poema que nunca quiero dejar de leer.',
    'Como una flor en primavera, así floreces en mi corazón.',
    'Tu sonrisa ilumina mi mundo más que cualquier amanecer.',
    'En tus ojos veo el reflejo de un amor eterno.',
    'Tus caricias son la brisa suave que llena mi alma de paz.',
    'Amarte es como respirar, algo natural e indispensable para mí.'
];

let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

flowers.forEach((flower) => {
    const newColor = colors[visitCount % colors.length];
    flower.querySelectorAll('.petal').forEach(petal => {
        petal.style.backgroundColor = newColor;
    });
    flower.querySelector('.center').style.backgroundColor = newColor;
});
const poemIndex = Math.floor(Math.random() * poems.length);
poemElement.textContent = poems[poemIndex];

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});
