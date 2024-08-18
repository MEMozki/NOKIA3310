const canvas = document.getElementById('screen-canvas');
const ctx = canvas.getContext('2d');

let currentMenu = 'main';
let menuIndex = 0;

const menus = {
    main: ['Сообщения', 'Контакты', 'Журнал', 'Настройки', 'Игры'],
    messages: ['Входящие', 'Создать сообщение', 'Черновики'],
    contacts: ['Новый контакт', 'Список контактов'],
    // Добавьте остальные меню по необходимости
};

function renderMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#000';

    const items = menus[currentMenu];
    items.forEach((item, index) => {
        if (index === menuIndex) {
            ctx.fillRect(10, 10 + index * 30, 220, 30);
            ctx.fillStyle = '#fff';
            ctx.fillText(item, 20, 30 + index * 30);
            ctx.fillStyle = '#000';
        } else {
            ctx.fillText(item, 20, 30 + index * 30);
        }
    });
}

document.getElementById('nav-up').addEventListener('click', () => {
    if (menuIndex > 0) {
        menuIndex--;
        renderMenu();
    }
});

document.getElementById('nav-down').addEventListener('click', () => {
    if (menuIndex < menus[currentMenu].length - 1) {
        menuIndex++;
        renderMenu();
    }
});

document.getElementById('nav-center').addEventListener('click', () => {
    const selectedItem = menus[currentMenu][menuIndex];
    if (menus[selectedItem.toLowerCase()]) {
        currentMenu = selectedItem.toLowerCase();
        menuIndex = 0;
        renderMenu();
    } else {
        alert(`Открыт раздел: ${selectedItem}`);
    }
});

document.getElementById('button-left').addEventListener('click', () => {
    // Реализация функциональности левой кнопки
    alert('Левая функциональная кнопка нажата');
});

document.getElementById('button-right').addEventListener('click', () => {
    // Реализация функциональности правой кнопки
    if (currentMenu !== 'main') {
        currentMenu = 'main';
        menuIndex = 0;
        renderMenu();
    }
});

document.querySelectorAll('.num-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        alert(`Нажата кнопка: ${value}`);
    });
});

renderMenu();

