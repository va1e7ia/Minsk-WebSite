// Кнопка меню для мобильных
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle'); // Кнопка открытия меню
    const navLinks = document.querySelector('.nav_links'); // Ссылка на меню
    const blurBackground = document.createElement('div'); // Создаем размытие фона
    blurBackground.classList.add('blur-background');
    document.body.appendChild(blurBackground);

    // Открытие/закрытие меню
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        blurBackground.classList.toggle('active');
    });

    // Закрытие меню при клике на фон
    blurBackground.addEventListener('click', () => {
        navLinks.classList.remove('active');
        blurBackground.classList.remove('active');
    });
});

//------------------------------------------------------------------------------

document.querySelectorAll('.gallery-container img').forEach(img=>{
    img.onclick = () =>{
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
     }
});

document.querySelector('.pop-up span').onclick = () =>{
    document.querySelector('.pop-up').style.display = 'none';
}

//------------------------------------------------------------------------------


