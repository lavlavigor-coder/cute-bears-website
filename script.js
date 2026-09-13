// Данные о медведях
const bears = [
    {
        name: "Большая Панда",
        emoji: "🐼",
        type: "panda",
        description: "Милая панда с чёрно-белым окрасом. Любит бамбук и спать!"
    },
    {
        name: "Панда Малышка",
        emoji: "🐼",
        type: "panda",
        description: "Маленькая, забавная панда, которая любит играть!"
    },
    {
        name: "Полярный медведь",
        emoji: "🐻‍❄️",
        type: "polar",
        description: "Белый и пушистый король Арктики! Очень сильный!"
    },
    {
        name: "Снежный мишка",
        emoji: "❄️🐻",
        type: "polar",
        description: "Живёт на льдах и ловит рыбу. Очень быстрый!"
    },
    {
        name: "Бурый медведь",
        emoji: "🐻",
        type: "brown",
        description: "Большой коричневый мишка. Король леса!"
    },
    {
        name: "Лесной мишутка",
        emoji: "🐻",
        type: "brown",
        description: "Младший брат бурого медведя. Очень проворный!"
    },
    {
        name: "Панда Панда",
        emoji: "🐼",
        type: "panda",
        description: "Супер милая панда, которая ест бамбук весь день!"
    },
    {
        name: "Белый гигант",
        emoji: "🐻‍❄️",
        type: "polar",
        description: "Огромный полярный медведь - король льдов!"
    },
    {
        name: "Бурый друг",
        emoji: "🐻",
        type: "brown",
        description: "Добрый медведь, который любит рыбу и ягоды!"
    }
];

let currentFilter = 'all';

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    renderGallery(bears);
    addInteractivity();
});

// Создание звёзд в фоне
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Отрисовка галереи
function renderGallery(bearsToShow) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    bearsToShow.forEach((bear, index) => {
        const bearCard = document.createElement('div');
        bearCard.className = 'bear-card';
        bearCard.style.animationDelay = (index * 0.1) + 's';
        
        bearCard.innerHTML = `
            <div class="bear-emoji">${bear.emoji}</div>
            <div class="bear-info">
                <h3>${bear.name}</h3>
                <p>${bear.description}</p>
                <span class="bear-type">${getTypeName(bear.type)}</span>
            </div>
        `;

        bearCard.addEventListener('click', () => {
            showBearDetails(bear);
        });

        gallery.appendChild(bearCard);
    });
}

// Фильтрация медведей
function filterBears(type) {
    currentFilter = type;
    
    if (type === 'all') {
        renderGallery(bears);
    } else {
        const filtered = bears.filter(bear => bear.type === type);
        renderGallery(filtered);
    }

    // Обновляем активную кнопку
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.style.opacity = '0.7';
    });
    event.target.style.opacity = '1';
}

// Получить название типа медведя
function getTypeName(type) {
    const names = {
        panda: '🐼 Панда',
        polar: '❄️ Полярный',
        brown: '🐻 Бурый'
    };
    return names[type] || type;
}

// Показать детали медведя
function showBearDetails(bear) {
    alert(`
🐻 ${bear.name} 🐻

${bear.emoji}

Описание: ${bear.description}

Тип: ${getTypeName(bear.type)}

Спасибо, что посетил сайт мимимишек! 💕
    `);
}

// Добавить интерактивность
function addInteractivity() {
    // Анимация при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bear-card').forEach(card => {
        observer.observe(card);
    });

    // Эффект при клике на заголовок
    const header = document.querySelector('header h1');
    header.addEventListener('click', () => {
        header.style.transform = 'rotate(5deg) scale(1.1)';
        setTimeout(() => {
            header.style.transform = 'rotate(0) scale(1)';
        }, 300);
    });
}

// Поддержка клавиатуры
document.addEventListener('keydown', (e) => {
    if (e.key === '1') filterBears('all');
    if (e.key === '2') filterBears('panda');
    if (e.key === '3') filterBears('polar');
    if (e.key === '4') filterBears('brown');
});

// Консольное приветствие
console.log('%c🐻 Добро пожаловать на сайт мимимишек! 🐻', 'font-size: 20px; color: #764ba2; font-weight: bold;');
console.log('%cЭтот сайт создан с любовью к милым медведям! 💕', 'font-size: 14px; color: #667eea;');
