const menuImages = {
    // ЗАВТРАКИ
    "grechka": "grechka.jpg",
    "shakshuka": "shakshuka.jpg",
    "syirniki": "syirniki.jpg",
    "vareniki": "vareniki.jpg",
    "mortadella_breakfast": "mortadella.jpg",
    "omlet": "omlet.jpg",
    "glazunya": "glazunya.jpg",
    "draniki_salmon": "draniki.jpg",
    "tost_salmon": "tost.jpg",
    "beygl": "beygl.jpg",

    // САЛАТЫ
    "green_salad": "",
    "greek_salad": "",
    "latuk_salad": "",
    "bowl": "",

    // ПИЦЦА
    "pepperoni": "Pepperoni1.jpg", 
    "pizza_pear": "pizza_pear.jpg",     // <--- ИСПРАВЛЕНО
    "pizza_proshutto": "pizza_proshutto.jpg", // <--- ИСПРАВЛЕНО

    // ГОРЯЧЕЕ
    "chicken_grill": "",
    "nyokki": "",
    "makkeroni": "",
    "lasagna": "",
    "lingvini": "",
    "burger": "",
    "bifshteks": "",

    // СЛАДКОЕ
    "shu": "",
    "ice_cream_salt": "",
    "cheesecake_strawberry": "",
    "tiramisu": "",

    // НАПИТКИ
    "espresso": "",
    "capuchino": "",
    "latte": "",
    "bumble": "",
    "tea_puer": "",
    "tea_berry": ""
};

document.addEventListener("DOMContentLoaded", () => {
    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        imgElements.forEach(el => {
            if (menuImages[id]) {
                el.src = menuImages[id];
                el.onclick = function() { openPhoto(this.src); };
            } else {
                // Если фото нет - скрываем пустой квадрат или ставим заглушку
                el.style.display = "none"; 
            }
        });
    }
});

function openPhoto(src) {
    const overlay = document.getElementById('photo-overlay');
    document.getElementById('full-photo').src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePhoto() {
    document.getElementById('photo-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}
