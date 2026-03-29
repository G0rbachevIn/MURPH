const menuImages = {
    // ЗАВТРАКИ
    "grechka": "grechka.jpg",
    "shakshuka": "shakshuka.jpg",
    "syirniki": "syirniki.jpg",
    "vareniki": "vareniki.jpg",
    "mortadella_breakfast": "mortadella_breakfast.jpg",
    "omlet": "omlet.jpg",
    "glazunya": "glazunya.jpg",
    "draniki_salmon": "draniki_salmon.jpg",
    "tost_salmon": "tost_salmon.jpg",
    "beygl": "beygl.jpg",

    // ПИЦЦА
    "pepperoni": "Pepperoni1.jpg", 
    "pizza_pear": "pear.jpg",
    "pizza_proshutto": "proshutto.jpg",

    // НАПИТКИ (примеры)
    "espresso": "espresso.jpg",
    "capuchino": "capuchino.jpg",
    "bumble": "bumble.jpg"
};

// Автоматическая подстановка фото при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        imgElements.forEach(el => {
            if (menuImages[id]) {
                el.src = menuImages[id];
                // Добавляем возможность клика
                el.style.cursor = "zoom-in";
                el.onclick = function() {
                    openPhoto(this.src);
                };
            }
        });
    }
});

// Функции для открытия и закрытия
function openPhoto(src) {
    const overlay = document.getElementById('photo-overlay');
    const fullImg = document.getElementById('full-photo');
    fullImg.src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку меню под фото
}

function closePhoto() {
    document.getElementById('photo-overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Возвращаем прокрутку
}
