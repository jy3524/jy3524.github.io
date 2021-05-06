$(".nav .nav-link").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});

$(window).scroll(function() {
    $(".fa-chevron-down").css("opacity", 1 - $(window).scrollTop() / 500);
});

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.nav')
const chevron = document.querySelector('.fa-chevron-down');
const linkedin = document.querySelector('.fa-linkedin');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

chevron.addEventListener('click', () => {
    location.href='#portfolio';
});

linkedin.addEventListener('click', () => {
    location.href="https://www.linkedin.com/in/masahitoyoon";
});
