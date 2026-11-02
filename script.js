const alertBox = document.getElementById("alertBox");

window.addEventListener("load", () => {
  alertBox.style.display = "flex";
});

function closeAlert() {
  alertBox.style.display = "none";
}

// MATRIX BACKGROUND
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let drops = [];

function resizeMatrix() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = Math.floor(canvas.width / 18);
  drops = Array(columns).fill(1);
}

resizeMatrix();
window.addEventListener("resize", resizeMatrix);

function drawMatrix() {
  ctx.fillStyle = "rgba(5,11,18,0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff66";
  ctx.font = "15px monospace";

  drops.forEach((y, i) => {
    const char = Math.floor(Math.random() * 10);
    ctx.fillText(char, i * 18, y * 18);

    if (y * 18 > canvas.height && Math.random() > 0.97) {
      drops[i] = 0;
    }

    drops[i]++;
  });
}

setInterval(drawMatrix, 60);

// FAKE HACKER TERMINAL
const messages = [
  "Initializing fictional system...",
  "Connecting to imaginary server...",
  "Checking hostel WiFi...",
  "Searching for missing Maggi...",
  "Roommate detected 😂",
  "Warden approaching...",
  "JUST A PRANK! YOUR PHONE IS SAFE ❤️"
];

let hackerTimer;

function startHacker() {
  const terminal = document.getElementById("terminal");
  clearInterval(hackerTimer);

  terminal.innerHTML = "";
  let i = 0;

  hackerTimer = setInterval(() => {
    if (i >= messages.length) {
      clearInterval(hackerTimer);
      return;
    }

    const line = document.createElement("p");
    line.textContent = "> " + messages[i];
    terminal.appendChild(line);
    i++;
  }, 700);
}

// COUNTDOWN
let countdownTimer;

function startCountdown() {
  clearInterval(countdownTimer);

  let count = 10;
  document.getElementById("countdown").textContent = count;
  document.getElementById("countMessage").textContent =
    "Get ready...";

  countdownTimer = setInterval(() => {
    count--;

    document.getElementById("countdown").textContent = count;

    if (count <= 0) {
      clearInterval(countdownTimer);
      document.getElementById("countMessage").textContent =
        "SURPRISE! YOU ARE THE HOSTEL LEGEND! 🏆";
      party();
    }
  }, 1000);
}

// WIFI
function wifiCheck() {
  const results = [
    "WiFi is sleeping 😴",
    "Warden is using all bandwidth 😂",
    "Signal found near the mess 🍕",
    "Password: Ask your roommate 🤣",
    "Imaginary scan complete!"
  ];

  document.getElementById("wifiResult").textContent =
    results[Math.floor(Math.random() * results.length)];
}

// QUIZ
function answer(choice) {
  document.getElementById("quizResult").textContent =
    choice + " is the real boss of hostel! 😂";
}

// SURPRISE
function surprise() {
  const items = [
    "You are the Hostel Legend! 🏆",
    "Free Maggi for everyone! 🍜",
    "Warden is coming! 😂",
    "Your roommate owes you a treat!",
    "Hostel memories are priceless ❤️"
  ];

  document.getElementById("surpriseText").textContent =
    items[Math.floor(Math.random() * items.length)];

  party();
}

// LEADERBOARD
let players = [];

function addPlayer() {
  const input = document.getElementById("playerName");
  const name = input.value.trim();

  if (!name) {
    alert("Please enter your nickname!");
    return;
  }

  if (players.some(p => p.toLowerCase() === name.toLowerCase())) {
    alert("This nickname already exists!");
    return;
  }

  players.push(name);
  players = players.slice(0, 10);

  const board = document.getElementById("leaderboard");
  board.replaceChildren();

  players.forEach((player, index) => {
    const li = document.createElement("li");
    li.textContent = (index === 0 ? "👑 " : "") + player;
    board.appendChild(li);
  });

  input.value = "";
}

// CONFETTI
function party() {
  const symbols = ["🎉", "🎊", "✨", "❤️", "⭐"];

  for (let i = 0; i < 30; i++) {
    const item = document.createElement("span");

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-30px";
    item.style.fontSize = "25px";
    item.style.zIndex = "2000";
    item.style.pointerEvents = "none";

    document.body.appendChild(item);

    const animation = item.animate([
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      { transform: `translateY(${window.innerHeight + 50}px) rotate(500deg)`, opacity: 0 }
    ], {
      duration: 2000 + Math.random() * 1500
    });

    animation.onfinish = () => item.remove();
  }
}

// FUN FACT
function funFact() {
  const facts = [
    "One Maggi packet can unite the whole hostel! 🍜",
    "Roommates know everyone's secrets! 😂",
    "Hostel WiFi works best during holidays!",
    "Late night talks create lifetime memories ❤️",
    "Mess food is the biggest mystery of hostel life!"
  ];

  document.getElementById("funFact").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}