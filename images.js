const menuImages = {
    // ==========================================
    // ЕДА
    // ==========================================

    // --- Завтраки ---
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

    // --- Салаты ---
    "green_salad": "green_salad.jpg",
    "greek_salad": "greek_salad.jpg",
    "latuk_salad": "latuk_salad.jpg",
    "bowl": "bowl.jpg",

    // --- Пицца ---
    "pepperoni": "pepperoni.jpg", 
    "pizza_pear": "pizza_pear.jpg",
    "pizza_proshutto": "pizza_proshutto.jpg",

    // --- Пасты / Горячее ---
    "chicken_grill": "chicken_grill.jpg",
    "nyokki": "nyokki.jpg",
    "makkeroni": "makkeroni.jpg",
    "lasagna": "lasagna.jpg",
    "lingvini": "lingvini.jpg",
    "burger": "burger.jpg",
    "bifshteks": "bifshteks.jpg",

    // --- Супы ---
    "soup_tomato": "soup_tomato.jpg",
    "soup_chicken": "soup_chicken.jpg",
    "soup_pumpkin": "soup_pumpkin.jpg", 

    // --- Закуски ---
    "bread_butter": "bread_butter.jpg", 
    "trio_dip": "trio_dip.jpg",        
    "fries": "fries.jpg",
    "tartar": "tartar.jpg",

    // --- Сладкое ---
    "bun": "bun.jpg",                  
    "shu": "shu.jpg",
    "creme_brulee": "creme_brulee.jpg", 
    "napoleon": "napoleon.jpg",         
    "ice_cream_salt": "ice_cream_salt.jpg",
    "cheesecake_matcha": "matcha_cake.jpg", 
    "cake_lemon": "cake_lemon.jpg",         
    "cake_carrot": "cake_carrot.jpg",       
    "cheesecake_strawberry": "cheesecake_strawberry.jpg",
    "tiramisu": "tiramisu.jpg",
    "french_toast": "french_toast.jpg",     
    "apple_pie": "apple_pie.jpg",           


    // ==========================================
    // НАПИТКИ
    // ==========================================

    // --- Классика ---
    "espresso": "espresso.jpg",
    "americano": "americano.jpg",
    "filter": "filter.jpg",
    "v60": "v60.jpg",
    "capuchino": "capuchino.jpg",
    "latte": "latte.jpg",
    "flat_white": "flat_white.jpg",
    "raf": "raf.jpg",
    "ice_latte": "ice_latte.jpg",
    "espresso_tonic": "espresso_tonic.jpg",
    "bumble": "bumble.jpg",

    // --- Чай ---
    "tea_puer": "tea_puer.jpg",
    "tea_gaba": "tea_gaba.jpg",
    "tea_herbal": "tea_herbal.jpg",
    "tea_berry": "tea_berry.jpg",

    // --- Матча ---
    "matcha_latte": "matcha_latte.jpg",
    "matcha_mint": "matcha_mint.jpg",
    "matcha_white_choc": "matcha_white_choc.jpg",
    "matcha_tonic": "matcha_tonic.jpg",
    "matcha_banana": "matcha_banana.jpg",

    // --- Special ---
    "latte_tiramisu": "latte_tiramisu.jpg",
    "bumble_pomegranate": "bumble_pomegranate.jpg",
    "lemonade_strawberry": "lemonade_strawberry.jpg",
    "nitro_apricot": "nitro_apricot.jpg",
    "cacao_currant": "cacao_currant.jpg",
    "latte_cherry": "latte_cherry.jpg",
    "filter_berries": "filter_berries.jpg",
    "raf_caramel": "raf_caramel.jpg",

    // --- Другое ---
    "cacao": "cacao.jpg",
    "fresh_orange": "fresh_orange.jpg",
    "fresh_grapefruit": "fresh_grapefruit.jpg",
    "water": "water.jpg",


    // ==========================================
    // АЛКОГОЛЬ
    // ==========================================

    // --- Вино ---
    "wine_bruni": "wine_bruni.jpg",
    "wine_cava": "wine_cava.jpg",
    "wine_riesling": "wine_riesling.jpg",
    "wine_gewurztraminer": "wine_gewurztraminer.jpg",
    "wine_sauvignon": "wine_sauvignon.jpg",
    "wine_castillo": "wine_castillo.jpg",
    "wine_anjou": "wine_anjou.jpg",

    // --- Коктейли ---
    "cocktail_aperol": "cocktail_aperol.jpg",
    "cocktail_espresso": "cocktail_espresso.jpg",
    "cocktail_gummy": "cocktail_gummy.jpg",
    "cocktail_froggy": "cocktail_froggy.jpg",
    "cocktail_peas": "cocktail_peas.jpg",
    "cocktail_bee": "cocktail_bee.jpg",
    "cocktail_blue": "cocktail_blue.jpg",

    // --- Б/А Коктейли ---
    "cocktail_wrong": "cocktail_wrong.jpg",
    "cocktail_basil": "cocktail_basil.jpg",
    "cocktail_nany": "cocktail_nany.jpg",

    // --- Пиво и Сидр ---
    "beer_corona": "beer_corona.jpg",
    "beer_bluemoon": "beer_bluemoon.jpg",
    "beer_tsingtao": "beer_tsingtao.jpg",
    "cider_apple": "cider_apple.jpg",
    "cider_berry": "cider_berry.jpg"
};

document.addEventListener("DOMContentLoaded", () => {
    const cacheBuster = "?v=" + new Date().getTime();

    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        
        imgElements.forEach(img => {
            const fileName = menuImages[id];
            const parent = img.parentElement;

            if (fileName && fileName.trim() !== "") {
                img.src = "images/" + fileName + cacheBuster;
                img.style.display = "block";
                
                img.onclick = () => openPhoto(img.src);

                img.onerror = () => {
                    img.style.display = "none";
                    showPlaceholder(parent);
                };
            } else {
                img.style.display = "none";
                showPlaceholder(parent);
            }
        });
    }
});

function showPlaceholder(container) {
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.background = "#f5f5f7";
    if (!container.querySelector('span')) {
        container.innerHTML = '<span style="color:#ccc; font-size:10px; text-transform:uppercase;">[фото]</span>';
    }
}

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
