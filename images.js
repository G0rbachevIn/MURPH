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
            }
        });
    }
});
