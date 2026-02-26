// LOADER
window.onload = () => {
    document.getElementById("loader").style.display = "none";
};

// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// MOBILE MENU
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// PARTICLES BACKGROUND
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#3b82f6";
        ctx.fill();

        p.y += 0.4;
        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(animate);
}

animate();
