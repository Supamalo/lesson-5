"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const mob_main = document.querySelector('.burger');
    mob_main.addEventListener('click', (e) => {
        const drop_down = document.querySelector('.burger-menu');
        mob_main.classList.toggle('burger');
        mob_main.classList.toggle('mark');
        drop_down.classList.toggle('hide_this');
        drop_down.classList.toggle('drop_this');
        e.preventDefault();
    })
})