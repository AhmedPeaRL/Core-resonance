const canvas = document.getElementById("resonance-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];

for (let i = 0; i < 60; i++) {
  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

const messages = [
  "Silence is your gateway.",
  "This space knows your rhythm.",
  "Let yourself resonate.",
  "You are the signal.",
  "The Core is listening..."
];

function revealMessage() {
  const messageEl = document.getElementById("message");
  const index = Math.floor(Math.random() * messages.length);
  messageEl.textContent = messages[index];
  messageEl.style.opacity = 1;

  setTimeout(() => {
    messageEl.style.opacity = 0;
  }, 5000);
}

setInterval(revealMessage, 7000);
