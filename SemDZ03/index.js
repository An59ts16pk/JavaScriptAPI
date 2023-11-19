"use strict";
// Итоговое задание.
// Цель: Разработать веб-приложение, которое каждый день будет отображать
// новое случайное изображение из коллекции Unsplash, давая пользователю
// возможность узнать больше о фотографе и сделать "лайк" изображению.
// Регистрация на Unsplash:
// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было
//   регистрации до этого, новый аккаунт создавать не нужно).
// Создание приложения:
// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать
//   http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.
// Разработка веб-приложения:
// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк",
//   при нажатии на которую подсвечивается "лайкнутый" элемент.

// // Your key in Unsplash
//const ACCESS_KEY = "";

const spanEl = document.querySelector(".box__span");
const imgEl = document.querySelector(".box__img");
const btnEl = document.querySelector(".box__btn");
const errorEl = document.querySelector(".box__error");
const iconEl = document.querySelector(".box__icon");
const likeEl = document.querySelector(".box__like");

async function fetchPhotos() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?count=1`,
            {
                method: "GET",
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`,
                },
            }
        );
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error("Ошибка при загрузке фотографий:", error);
        return [];
    }
}

async function loadPhotos() {
    errorEl.textContent = "";
    const responseObj = await fetchPhotos();
    if (responseObj.length === 0) {
        errorEl.textContent = "Ошибка! Фото не получено!";
        throw new Error("Фото не загрузилось!");
    } else {
        imgEl.src = responseObj[0].urls.small;
        spanEl.textContent = responseObj[0].user.name;
        likeEl.setAttribute("fill", "none");
    }
}

btnEl.addEventListener("click", loadPhotos);
iconEl.addEventListener("click", () => {
    let currentColor = likeEl.getAttribute("fill");
    if (currentColor !== "red") {
        likeEl.setAttribute("fill", "red");
    } else {
        likeEl.setAttribute("fill", "none");
    }
});
