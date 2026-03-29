const menuImages = {
    // ЕДА
    "grechka": "grechka.jpg",
    "shakshuka": "shakshuka.jpg",
    "pepperoni": "Pepperoni1.jpg", // Твой загруженный файл
    "lasagna": "lasagna.jpg",

    // НАПИТКИ
    "capuchino": "capuchino.jpg"
};

// Функция управления картинками
document.addEventListener("DOMContentLoaded", () => {
    for (let id in menuImages) {
        const imgElements = document.querySelectorAll(`[data-img="${id}"]`);
        imgElements.forEach(el => {
            if (menuImages[id]) {
                el.src = menuImages[id];
                el.onclick = function() { openPhoto(this.src); };
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
