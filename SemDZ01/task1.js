"use strict";

/**
 * Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение 
об этом на веб-странице.
 */

function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        alert("Ориентации экрана устройства портретная");
    } else {
        alert("Ориентации экрана устройства ландшафтная");
    }
}

window.addEventListener("orientationchange", checkOrientation);

// Отслеживает изменение размеров окна
window.addEventListener("resize", () => {
    alert("Изменён размер окна");
});
