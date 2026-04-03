const kbzhuData = {
    // ЗАВТРАКИ
    "grechka": { k: 400, b: 24, z: 28, u: 14 },
    "shakshuka": { k: 320, b: 17, z: 23, u: 18 },
    "syirniki": { k: 490, b: 22, z: 22, u: 52 },
    "vareniki": { k: 520, b: 28, z: 50, u: 17 },
    "mortadella_breakfast": { k: 490, b: 16, z: 32, u: 34 },
    "omlet": { k: 490, b: 42, z: 24, u: 3 },
    "draniki_salmon": { k: 270, b: 12, z: 8.5, u: 36 },
    "tost_salmon": { k: 410, b: 22, z: 24, u: 26 },

    // САЛАТЫ
    "green_salad": { k: 230, b: 5, z: 18, u: 11 },
    "greek_salad": { k: 270, b: 21, z: 9.5, u: 10 },
    "latuk_salad": { k: 600, b: 22, z: 42, u: 34 },
    "bowl": { k: 420, b: 15, z: 28, u: 28 },

    // ПАСТЫ / ГОРЯЧЕЕ
    "chicken_grill": { k: 350, b: 58, z: 8.5, u: 10 },
    "nyokki": { k: 690, b: 31, z: 22, u: 81 },
    "lasagna": { k: 560, b: 19, z: 38, u: 36 },
    "lingvini": { k: 760, b: 54, z: 20, u: 50 },
    "burger": { k: 680, b: 43, z: 37, u: 43 },
    "bifshteks": { k: 410, b: 31, z: 27, u: 11 },

    // СУПЫ
    "soup_tomato": { k: 200, b: 13, z: 15, u: 7.5 },
    "soup_chicken": { k: 600, b: 23, z: 72, u: 26 },

    // ЗАКУСКИ
    "bread_butter": { k: 650, b: 5.5, z: 50, u: 44 },
    "trio_dip": { k: 510, b: 13, z: 26, u: 56 },
    "fries": { k: 680, b: 14, z: 38, u: 68 },
    "tartar": { k: 610, b: 40, z: 29, u: 35 },

    // СЛАДКОЕ
    "creme_brulee": { k: 270, b: 18, z: 3.5, u: 25 },
    "napoleon": { k: 450, b: 11, z: 14, u: 69 },
    "cheesecake_matcha": { k: 310, b: 5, z: 17, u: 34 },
    "cake_lemon": { k: 590, b: 15, z: 41, u: 39 },
    "cake_carrot": { k: 620, b: 33, z: 8, u: 73 },
    "cheesecake_strawberry": { k: 340, b: 7, z: 24, u: 25 },
    "tiramisu": { k: 530, b: 9.5, z: 32, u: 52 },
    "french_toast": { k: 730, b: 45, z: 12, u: 71 },
    "apple_pie": { k: 450, b: 7, z: 22, u: 56 }
};

document.addEventListener("DOMContentLoaded", () => {
    // Проходимся по всем блюдам, для которых есть КБЖУ
    for (let id in kbzhuData) {
        // Ищем картинку с нужным data-img (так как это наш уникальный идентификатор блюда)
        const imgEl = document.querySelector(`[data-img="${id}"]`);
        
        if (imgEl) {
            const kbzhu = kbzhuData[id];
            
            // Находим блок с описанием блюда (справа от фото)
            const infoContainer = imgEl.closest('.item').querySelector('.item-info');
            
            // Создаем контейнер для плашек
            const kbzhuDiv = document.createElement('div');
            kbzhuDiv.className = 'kbzhu-container';
            
            // Заполняем его стильными бейджами
            kbzhuDiv.innerHTML = `
                <span class="kbzhu-badge">${kbzhu.k} ккал</span>
                <span class="kbzhu-badge">Б: ${kbzhu.b}</span>
                <span class="kbzhu-badge">Ж: ${kbzhu.z}</span>
                <span class="kbzhu-badge">У: ${kbzhu.u}</span>
            `;
            
            // Добавляем КБЖУ в самый низ информационного блока блюда
            infoContainer.appendChild(kbzhuDiv);
        }
    }
});
