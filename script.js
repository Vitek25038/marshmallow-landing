// ================================================
// Project: Фигурные маршмеллоу на палочке
// Created by Viktor T. | vitek25038.github.io
// ================================================

console.log("Проект создан Виктором T. | vitek25038.github.io");

// Анимация появления секций при скролле
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

// Отправка формы в Telegram
const tgForm = document.getElementById('tg-form');

if (tgForm) {
    tgForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = tgForm.name.value;
        const phone = tgForm.phone.value;
        const message = `📩 Новая заявка с сайта:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

        fetch('https://api.telegram.org/bot8153282617:AAFkf8RYrgBcizphWitwgchCH2H7ufgRh1w/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: '6223841439',
                text: message
            })
        }).then(res => {
            if (res.ok) {
                tgForm.reset();
                const msg = document.getElementById("successMessage");
                msg.classList.add("show");
                setTimeout(() => {
                    msg.classList.remove("show");
                }, 3000);
            } else {
                alert('Ошибка при отправке.');
            }
        });
    });
}

// Плавный скролл
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
