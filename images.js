const menuImages = {
    // ЕДА
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
    "green_salad": "",
    "greek_salad": "",
    "latuk_salad": "",
    "bowl": "",
    "pepperoni": "pepperoni.jpg", 
    "pizza_pear": "pizza_pear.jpg",
    "pizza_proshutto": "pizza_proshutto.jpg",
    "chicken_grill": "",
    "nyokki": "",
    "makkeroni": "",
    "lasagna": "",
    "lingvini": "",
    "burger": "",
    "bifshteks": "",
    "soup_tomato": "",
    "soup_chicken": "",
    "fries": "",
    "tartar": "",
    "shu": "",
    "ice_cream_salt": "",
    "cheesecake_strawberry": "",
    "tiramisu": "",

    // НАПИТКИ
    "espresso": "",
    "filter": "",
    "capuchino": "",
    "latte": "",
    "raf": "",
    "tea_puer": "",
    "tea_berry": "",
    "matcha_latte": "",
    "matcha_tonic": "",
    "bumble": "",
    "espresso_tonic": ""
};

document.addEventListener("DOMContentLoaded", () => {
    // Находим все картинки с атрибутом data-img
    const images = document.querySelectorAll('img[data-img]');
    
    images.forEach(img => {
        const id = img.getAttribute('data-img');
        const filename = menuImages[id];
        const parent = img.parentElement;

        if (filename && filename.trim() !== "") {
            // Если фото есть
            img.src = filename;
            img.style.display = "block";
            img.onclick = function() { openPhoto(this.src); };
        } else {
            // Если фото пустое, убираем тег img и ставим текст
            img.style.display = "none";
            parent.style.display = "flex";
            parent.style.alignItems = "center";
            parent.style.justifyContent = "center";
            parent.style.background = "#f5f5f7";
            parent.innerHTML = '<span style="color:#ccc; font-size:10px; text-transform:uppercase; letter-spacing:1px;">[фото]</span>';
        }
    });
});

function openPhoto(src) {
    const overlay = document.getElementById('photo-overlay');
    const fullPhoto = document.getElementById('full-photo');
    if (overlay && fullPhoto) {
        fullPhoto.src = src;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closePhoto() {
    const overlay = document.getElementById('photo-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
