// ================================================
// Project: Фигурные маршмеллоу на палочке
// Created by Viktor T. | vitek25038.github.io
// This code is part of a personal project demo
// ================================================



console.log("Проект создан Виктором T. | vitek25038.github.io");





// Появление секций при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});



// Плавный скролл по якорным кнопкам
['contact-btn', 'scroll-more'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.getElementById('contact');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
