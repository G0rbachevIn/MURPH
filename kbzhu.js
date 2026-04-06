const kbzhuData = {
    // ЗАВТРАКИ
    "grechka": { k: 330, b: 16, z: 24, u: 12 },
    "shakshuka": { k: 310, b: 23, z: 17, u: 18 },
    "syirniki": { k: 490, b: 22, z: 22, u: 52 },
    "vareniki": { k: 760, b: 20, z: 54, u: 50 },
    "mortadella_breakfast": { k: 490, b: 17, z: 32, u: 35 },
    "omlet": { k: 480, b: 24, z: 41, u: 3 },
    "glazunya": { k: 690, b: 24, z: 48, u: 42 },
    "draniki_salmon": { k: 270, b: 12, z: 8.5, u: 36 },
    "tost_salmon": { k: 410, b: 22, z: 24, u: 26 },
    "beygl": { k: 680, b: 38, z: 44, u: 33 },

    // САЛАТЫ
    "green_salad": { k: 210, b: 5, z: 16, u: 11 },
    "greek_salad": { k: 230, b: 6.5, z: 19, u: 8.5 },
    "latuk_salad": { k: 520, b: 50, z: 28, u: 17 },
    "bowl": { k: 400, b: 14, z: 28, u: 23 },

    // ПИЦЦА
    "pepperoni": { k: 740, b: 32, z: 16, u: 115 },
    "pizza_pear": { k: 910, b: 34, z: 34, u: 117 },
    "pizza_proshutto": { k: 940, b: 35, z: 42, u: 106 },

    // ПАСТЫ / ГОРЯЧЕЕ
    "chicken_grill": { k: 320, b: 56, z: 7, u: 7.5 },
    "nyokki": { k: 690, b: 22, z: 31, u: 81 },
    "makkeroni": { k: 780, b: 61, z: 33, u: 60 },
    "lasagna": { k: 820, b: 21, z: 65, u: 37 },
    "lingvini": { k: 790, b: 28, z: 48, u: 62 },
    "burger": { k: 760, b: 46, z: 46, u: 41 },
    "bifshteks": { k: 410, b: 31, z: 27, u: 11 },

    // СУПЫ
    "soup_tomato": { k: 200, b: 15, z: 13, u: 7.5 },
    "soup_chicken": { k: 440, b: 57, z: 16, u: 18 },
    "soup_pumpkin": { k: 240, b: 17, z: 14, u: 11 },

    // ЗАКУСКИ
    "bread_butter": { k: 520, b: 9.5, z: 34, u: 45 },
    "trio_dip": { k: 530, b: 17, z: 25, u: 58 },
    "fries": { k: 650, b: 14, z: 37, u: 66 },
    "tartar": { k: 610, b: 29, z: 40, u: 35 },

    // СЛАДКОЕ
    "bun": { k: 380, b: 8.5, z: 13, u: 58 }, // Булочка с корицей
    "bun_poppy": { k: 340, b: 8, z: 8.5, u: 59 }, // Булочка с маком
    "shu": { k: 250, b: 6, z: 18, u: 16 },
    "creme_brulee": { k: 270, b: 3.5, z: 18, u: 25 },
    "napoleon": { k: 450, b: 11, z: 14, u: 69 },
    "ice_cream_salt": { k: 210, b: 2, z: 16, u: 14 },
    "cheesecake_matcha": { k: 310, b: 5, z: 17, u: 33 },
    "cake_lemon": { k: 590, b: 15, z: 41, u: 39 }, // Миндальный кекс
    "cake_carrot": { k: 610, b: 10, z: 34, u: 66 },
    "cheesecake_strawberry": { k: 370, b: 7, z: 24, u: 31 },
    "tiramisu": { k: 230, b: 6, z: 7, u: 35 },
    "french_toast": { k: 730, b: 12, z: 45, u: 71 },
    "apple_pie": { k: 490, b: 7.5, z: 23, u: 63 },
    "crombolini": { k: 470, b: 7.5, z: 30, u: 42 }, // Новое
    "ice_cream_blue": { k: 150, b: 2.5, z: 7.5, u: 17 }, // Новое (с плесенью)
    "tartaletka_raspberry": { k: 440, b: 17, z: 19, u: 52 }, // Новое
    "compliment": { k: 60, b: 0.5, z: 4, u: 5 } // Новое
};

document.addEventListener("DOMContentLoaded", () => {
    for (let id in kbzhuData) {
        const imgEl = document.querySelector(`[data-img="${id}"]`);
        
        if (imgEl) {
            const kbzhu = kbzhuData[id];
            const infoContainer = imgEl.closest('.item').querySelector('.item-info');
            
            const kbzhuDiv = document.createElement('div');
            kbzhuDiv.className = 'kbzhu-container';
            
            kbzhuDiv.innerHTML = `
                <span class="kbzhu-badge">${kbzhu.k} ккал</span>
                <span class="kbzhu-badge">Б: ${kbzhu.b}</span>
                <span class="kbzhu-badge">Ж: ${kbzhu.z}</span>
                <span class="kbzhu-badge">У: ${kbzhu.u}</span>
            `;
            
            infoContainer.appendChild(kbzhuDiv);
        }
    }
});
