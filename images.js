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
    "pepperoni": "Pepperoni1.jpg", 
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
    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        imgElements.forEach(el => {
            if (menuImages[id]) {
                el.src = menuImages[id];
                el.onclick = function() { openPhoto(this.src); };
            } else {
                el.parentElement.innerHTML = '<span style="color:#ccc; font-size:10px;">[фото]</span>';
                el.parentElement.style.display = "flex";
                el.parentElement.style.alignItems = "center";
                el.parentElement.style.justifyContent = "center";
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
