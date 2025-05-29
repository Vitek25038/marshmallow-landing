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


// Отправка формы в Telegram + анимация успеха
const form = document.getElementById('order-form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const phone = formData.get('phone');

        const message = `<b>Новая заявка с лендинга</b>\nИмя: ${name}\nТелефон: ${phone}`;
        const token = '8153282617:AAFkf8RYrgBcizphWitwgchCH2H7ufgRh1w';
        const chatId = '6223841439';

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        }).then(response => {

            if (response.ok) {
                const submitBtn = form.querySelector('button');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Отправка...';

                setTimeout(() => {
                    submitBtn.textContent = 'Готово!';
                    form.reset();

                    const msg = document.getElementById("successMessage");
                    msg.classList.add("show");

                    setTimeout(() => {
                        msg.classList.remove("show");
                        submitBtn.textContent = 'Отправить';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 800);
            } else {
                alert('Ошибка при отправке.');
            }

        });
    });
}



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
