const kbzhuData = {
    // ЗАВТРАКИ
    "grechka": { k: 330, b: 16, z: 24, u: 12 },
    "shakshuka": { k: 340, b: 24, z: 20, u: 18 },
    "syirniki": { k: 530, b: 22, z: 26, u: 52 },
    "vareniki": { k: 790, b: 19, z: 57, u: 50 },
    "mortadella_breakfast": { k: 510, b: 18, z: 34, u: 35 },
    "omlet": { k: 480, b: 24, z: 41, u: 3 },
    "glazunya": { k: 960, b: 30, z: 69, u: 55 },
    "draniki_salmon": { k: 850, b: 18, z: 62, u: 55 },
    "tost_salmon": { k: 430, b: 23, z: 26, u: 26 },
    "beygl": { k: 680, b: 38, z: 44, u: 33 },

    // САЛАТЫ
    "green_salad": { k: 210, b: 4.5, z: 16, u: 11 },
    "salad_radish": { k: 220, b: 8, z: 16, u: 11 },
    "bowl_salmon": { k: 370, b: 18, z: 29, u: 9.5 },
    "bowl_chicken": { k: 570, b: 37, z: 39, u: 19 },

    // ПИЦЦА
    "pepperoni": { k: 1170, b: 33, z: 61, u: 122 },
    "pizza_pear": { k: 1340, b: 35, z: 79, u: 124 },
    "pizza_proshutto": { k: 1370, b: 35, z: 87, u: 112 },

    // ПАСТЫ / ГОРЯЧЕЕ
    "chicken_grill": { k: 380, b: 56, z: 12, u: 12 },
    "nyokki": { k: 670, b: 21, z: 29, u: 81 },
    "schnitzel": { k: 470, b: 48, z: 24, u: 14 },
    "makkeroni": { k: 780, b: 61, z: 33, u: 60 },
    "lasagna": { k: 820, b: 22, z: 65, u: 37 },
    "lingvini": { k: 880, b: 28, z: 57, u: 62 },
    "burger": { k: 800, b: 46, z: 51, u: 41 },
    "bifshteks": { k: 470, b: 31, z: 32, u: 16 },

    // СУПЫ
    "soup_tomato": { k: 290, b: 15, z: 22, u: 7.5 },
    "soup_chicken": { k: 440, b: 57, z: 16, u: 18 },
    "soup_strawberry": { k: 120, b: 5, z: 7, u: 8 },

    // ЗАКУСКИ
    "bread_butter": { k: 520, b: 9.5, z: 34, u: 45 },
    "trio_dip": { k: 540, b: 17, z: 27, u: 58 },
    "fries": { k: 650, b: 14, z: 37, u: 66 },
    "tartar": { k: 610, b: 29, z: 40, u: 35 },

    // СЛАДКОЕ
    "bun": { k: 380, b: 8.5, z: 13, u: 58 },
    "bun_poppy": { k: 340, b: 8, z: 8.5, u: 59 },
    "shu": { k: 250, b: 6, z: 17, u: 17 },
    "creme_brulee": { k: 270, b: 3.5, z: 18, u: 25 },
    "napoleon": { k: 440, b: 11, z: 14, u: 69 },
    "ice_cream_salt": { k: 210, b: 2, z: 16, u: 14 },
    "cheesecake_matcha": { k: 310, b: 5, z: 17, u: 33 },
    "cake_lemon": { k: 600, b: 16, z: 42, u: 39 },
    "cake_carrot": { k: 610, b: 10, z: 34, u: 66 },
    "cheesecake_cherry": { k: 560, b: 12, z: 34, u: 51 },
    "tiramisu": { k: 520, b: 12, z: 26, u: 58 },
    "french_toast": { k: 730, b: 12, z: 45, u: 71 },
    "apple_pie": { k: 510, b: 7.5, z: 26, u: 63 },
    "crombolini": { k: 470, b: 7.5, z: 30, u: 42 },
    "ice_cream_blue": { k: 150, b: 2.5, z: 7.5, u: 17 },
    "tartaletka_raspberry": { k: 440, b: 17, z: 19, u: 52 },
    "compliment": { k: 60, b: 0.5, z: 4, u: 5 }
};

document.addEventListener("DOMContentLoaded", () => {
    // Проверяем язык страницы (ru или en)
    const lang = document.documentElement.lang || 'ru';
    
    // Подстраиваем слова под нужный язык
    const labels = lang === 'en' 
        ? { kcal: 'kcal', p: 'P:', f: 'F:', c: 'C:' } 
        : { kcal: 'ккал', p: 'Б:', f: 'Ж:', c: 'У:' };

    for (let id in kbzhuData) {
        const imgEl = document.querySelector(`[data-img="${id}"]`);
        
        if (imgEl) {
            const kbzhu = kbzhuData[id];
            const infoContainer = imgEl.closest('.item').querySelector('.item-info');
            
            // Если КБЖУ есть, рендерим плашки
            if (kbzhu) {
                const kbzhuDiv = document.createElement('div');
                kbzhuDiv.className = 'kbzhu-container';
                
                kbzhuDiv.innerHTML = `
                    <span class="kbzhu-badge">${kbzhu.k} ${labels.kcal}</span>
                    <span class="kbzhu-badge">${labels.p} ${kbzhu.b}</span>
                    <span class="kbzhu-badge">${labels.f} ${kbzhu.z}</span>
                    <span class="kbzhu-badge">${labels.c} ${kbzhu.u}</span>
                `;
                
                infoContainer.appendChild(kbzhuDiv);
            }
        }
    }
});
