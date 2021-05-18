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

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
let hue = 0;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener('click', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle());
    }
});

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle());
    }
});

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

init();

function controlParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            /*
            if (dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = particles[i].size/10;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.closePath();
            }
            */
        }
        if (particles[i].size <= 0.3) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillStyle = 'rgba(255,255,255,0.05';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    controlParticles();
    hue += 3;
    requestAnimationFrame(animate);
}

animate();