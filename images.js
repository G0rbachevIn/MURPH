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
    // Добавляем случайное число к ссылке, чтобы GitHub не выдавал старую версию из кеша
    const cacheBuster = "?v=" + new Date().getTime();

    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        
        imgElements.forEach(img => {
            const fileName = menuImages[id];
            const parent = img.parentElement;

            if (fileName && fileName.trim() !== "") {
                // Пытаемся загрузить картинку. ЗДЕСЬ МЫ ДОБАВИЛИ ПАПКУ images/
                img.src = "images/" + fileName + cacheBuster;
                img.style.display = "block";
                
                // Если картинка загрузилась — вешаем клик
                img.onclick = () => openPhoto(img.src);

                // Если картинка НЕ нашлась (ошибка 404), заменяем на заглушку
                img.onerror = () => {
                    img.style.display = "none";
                    showPlaceholder(parent);
                };
            } else {
                // Если в списке пусто — сразу заглушку
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
    container.innerHTML = '<span style="color:#ccc; font-size:10px; text-transform:uppercase;">[фото]</span>';
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
