document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav_links");
  const blurBackground = document.createElement("div");
  blurBackground.classList.add("blur-background");
  document.body.appendChild(blurBackground);

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    blurBackground.classList.toggle("active");
  });

  blurBackground.addEventListener("click", () => {
    navLinks.classList.remove("active");
    blurBackground.classList.remove("active");
  });
});

//------------------------------------------------------------------------------

const imageData = {
  "images/arch1.jpg": "Ворота Минска",
  "images/arch2.jpg": "Национальная библиотека",
  "images/arch3.jpg": "Театр",
  "images/arch4.jpg": "Резиденция президента",
  "images/arch5.jpg": "Вечный огонь",
  "images/arch6.jpg": "Вокзал",
  "images/shop1.jpg":
    'Торговый центр "Галерея" предлагает широкий выбор магазинов, включая модную одежду, аксессуары и косметику. Здесь также есть уютные кафе и рестораны, где можно отдохнуть после шопинга. "Галерея" известна своим современным дизайном и удобным расположением в центре города.',
  "images/shop2.jpg":
    '"Галилео" — это место, где шопинг сочетается с развлечениями. В торговом центре представлены бренды одежды, электроники и товаров для дома. Также здесь находится кинотеатр и различные развлекательные зоны, что делает его популярным среди семей и молодежи.',
  "images/shop3.jpg":
    '"Грин Сити" — это экологически чистый торговый центр, в котором акцент сделан на натуральные и органические продукты. Здесь можно найти магазины с эко-товарами, а также рестораны, предлагающие здоровое питание. Приятная атмосфера и зеленые зоны делают его отличным местом для отдыха.',
  "images/chill4.jpg":
    '"Дана Молл" — это современный торговый центр с большим ассортиментом магазинов и услуг. Здесь можно найти всё: от одежды и обуви до электроники и бытовой техники. Также в "Дана Молл" есть зоны для отдыха и развлечений, включая детские площадки и кинотеатр.',
  "images/shop5.jpg":
    'Торговый центр "Маяк" славится разнообразием магазинов и услуг. Здесь можно найти как известные бренды, так и местные производители. Просторные торговые площади и удобные зоны для отдыха создают комфортную атмосферу для посетителей.',
  "images/shop6.jpg":
    '"Палаццо" — это стильный и элегантный торговый центр, предлагающий товары класса люкс. Здесь представлены известные бренды моды, ювелирные изделия и косметика. Интерьер "Палаццо" отличается утонченным дизайном, что делает шопинг здесь особенным событием.',
  "images/chill1.jpg":
    "Музей Минска — это увлекательное место, посвященное истории и культуре столицы Беларуси. Здесь представлены экспозиции, которые охватывают разные эпохи, начиная с древних времен и заканчивая современностью. Посетители могут узнать о значимых событиях, личностях и традициях, формировавших Минск.",
  "images/chill2.jpg":
    "Национальный театр Беларуси — это центр культурной жизни страны, предлагающий широкий репертуар спектаклей, включая классические и современные пьесы. Элегантное здание театра привлекает не только любителей искусства, но и туристов своей архитектурой. Здесь проходят различные фестивали и культурные события.",
  "images/chill3.jpg":
    'Аквапарк "Лебяжий" — это идеальное место для семейного отдыха. С множеством водных горок, бассейнов и SPA-зон, он предлагает развлечения для всех возрастов. Яркая атмосфера и разнообразные аттракционы делают его популярным как среди местных жителей, так и туристов.',
  "images/chill5.jpg":
    "Котокафе — это уютное заведение, где можно пообщаться с милыми кошками, наслаждаясь чашкой кофе или чая. Это место идеально подходит для любителей животных, предоставляя возможность расслабиться в компании пушистых друзей. Атмосфера здесь дружелюбная и расслабляющая, что делает его популярным среди студентов и молодежи.",
  "images/chill6.jpg":
    "Костел в Минске — это не только религиозное место, но и архитектурная достопримечательность. Его величественные фасады и красивые витражи привлекают внимание туристов. Внутри можно насладиться атмосферой спокойствия и уединения, а также посетить службы и концерты классической музыки.",
  "images/hot1.jpg":
    "DoubleTree by Hilton — это современный отель, предлагающий комфортные номера с высококачественным обслуживанием. Гостям предоставляются разнообразные удобства, включая фитнес-центр, ресторан и конференц-залы. Удобное расположение в центре города делает его идеальным вариантом для деловых поездок и отдыха.",
  "images/hot2.jpg":
    'Гостиница "Славянская" — это уютный отель, предлагающий доступные цены и комфортное размещение. Здесь есть все необходимое для путешественников, включая ресторан и бесплатный Wi-Fi. Удобное расположение в центре города позволяет легко исследовать окрестности.',
  "images/hot3.jpg":
    'Отель "Турист" — это популярный среди бюджетных путешественников вариант, предлагающий простые, но комфортные номера. Гости могут воспользоваться кафе на территории и близостью к общественному транспорту. Это отличное место для тех, кто ищет экономичный вариант в центре Минска.',
  "images/hot4.jpg":
    "President Hotel — это роскошный отель, который сочетает в себе элегантность и современные удобства. Здесь предлагаются просторные номера с великолепным видом на город, а также рестораны, спа и фитнес-центр. Отель находится вблизи важных достопримечательностей, что делает его популярным среди туристов.",
  "images/hot5.jpg":
    'Boutique Hotel "Гармония" — это стильный отель с уникальным дизайном, который предлагает индивидуальный подход к каждому гостю. Здесь царит уютная атмосфера, а номера оформлены с учетом современных тенденций. Отель находится недалеко от культурных достопримечательностей, что делает его идеальным для туристов.',
  "images/hot6.jpg":
    "Marriott Hotel — это известный отель, предлагающий высокий уровень сервиса и комфорта. Номера оснащены всем необходимым для приятного проживания, а также доступны рестораны и бары, где можно насладиться изысканной кухней. Удобное расположение позволяет легко добраться до основных туристических мест.",
};

document.querySelectorAll(".gallery-container img").forEach((img) => {
  img.onclick = () => {
    const imgSrc = img.getAttribute("src");
    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop-up img").src = imgSrc;
    document.querySelector(".pop-up-text").textContent = imageData[imgSrc];
  };
});

document.querySelector(".pop-up span").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};

//------------------------------------------------------------------------------
