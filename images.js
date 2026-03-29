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
    "pizza_pear": "pizza_pear.jpg",
    "pizza_proshutto": "pizza_proshutto.jpg",

    // НАПИТКИ
    "espresso": "espresso.jpg",
    "filter": "filter.jpg",
    "capuchino": "capuchino.jpg"
    
    // И так далее для всех блюд...
};

// Функция, которая сама расставит фото по местам
window.onload = function() {
    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        imgElements.forEach(el => {
            el.src = menuImages[id];
        });
    }
};
