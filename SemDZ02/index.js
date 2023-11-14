"use strict";
/**
 Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. 
 Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения 
   должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
*/

// массив url изображений
const imagesUrls = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
];

// индекс начальной картинки и её установка в слайдер
let currentIndex = 3;
const imageEl = document.querySelector("#image");
imageEl.src = imagesUrls[currentIndex];

// список круглых кнопок пагинации
const paginationCircles = [];
const paginationEl = document.querySelector(".pagination");

// создание пагинации
addPagination();

// Обработчики изображений на кнопки
const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
    currentIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    currentIndex++;

    if (currentIndex >= imagesUrls.length) {
        currentIndex = 0;
    }
    imageEl.src = imagesUrls[currentIndex];

    paginationCircles[currentIndex].classList.add("active");
});

const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", () => {
    currentIndex = indexActivePaginationCircle();
    paginationCircles.forEach((circle) => {
        circle.classList.remove("active");
    });

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imagesUrls.length - 1;
    }
    imageEl.src = imagesUrls[currentIndex];

    paginationCircles[currentIndex].classList.add("active");
});

// выбор кнопки пагинации
changePaginationCircle();

// ---------------------------------------------------------
function createPaginationCircle() {
    const divEl = document.createElement("div");
    divEl.className = "pagination__circle";
    paginationEl.appendChild(divEl);
    paginationCircles.push(divEl);
}

function addPagination() {
    imagesUrls.forEach(createPaginationCircle);
    paginationCircles[currentIndex].classList.add("active");
}

function changePaginationCircle() {
    const paginationCirclesEl = document.querySelectorAll(
        ".pagination__circle"
    );
    for (let i = 0; i < paginationCirclesEl.length; i++) {
        paginationCirclesEl[i].addEventListener("click", () => {
            imageEl.src = imagesUrls[i];
            paginationCircles.forEach((circle) => {
                circle.classList.remove("active");
            });
            paginationCircles[i].classList.add("active");
        });
    }
}

function indexActivePaginationCircle() {
    for (let i = 0; i < paginationCircles.length; i++) {
        if (paginationCircles[i].classList.contains("active")) return i;
    }
}
