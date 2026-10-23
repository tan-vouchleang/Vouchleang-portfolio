const $ = (id) => document.getElementById(id);
const root = document.documentElement;
const GITHUB = "https://github.com/tan-vouchleang/";
const LIVE = "https://tan-vouchleang.github.io/"; 

/* project */
const projects = [
  {
    name: "World Happiness Record",
    tag: "data",
    tools: ["Python", "Pandas", "Charts"],
    img: "happy-family.png",
    repo: "world-happiness-record",
    live: "https://world-happiness-record.streamlit.app/",
    short:
      "What makes people happy? A data story of countries around the world.",
    desc: "I explored world happiness data to see what moves a country’s score: money, health, freedom, and social support.",
    steps: [
      "Cleaned the data and fixed missing values",
      "Compared countries and years with charts",
      "Looked for links between each factor and the happiness score",
    ],
    learn: "A good chart tells a story faster than a big table.",
  },
  {
    name: "Olympics Medals",
    tag: "data",
    tools: ["Python", "Pandas", "Charts"],
    img: "olympics.png",
    repo: "olympic-medal",
    live: "https://olympic-medal.streamlit.app/",
    short:
      "Which countries win the most medals, and how does it change over time?",
    desc: "A dataset project that looks for medal patterns by country, year, and sport.",
    steps: [
      "Loaded and cleaned the medal dataset",
      "Counted medals by country and year",
      "Made bar and line charts to show the patterns",
    ],
    learn:
      "Grouping and counting data can show patterns you cannot see by eye.",
  },
  {
    name: "Mini Clothes Management System",
    tag: "system",
    tools: ["C", "C++"],
    img: "clothes.png",
    repo: "small-clothes-shop-management",
    live: "https://tan-vouchleang.github.io/small-clothes-shop-management/",
    short: "A small program to manage the items in a clothes shop.",
    desc: "A console system that helps a small shop keep track of its clothes and stock.",
    steps: [
      "Planned the menu and the data for each item",
      "Added features to add, search, update, and remove items",
      "Tested with sample shop data",
    ],
    learn: "Clear structure makes a bigger program easier to fix and grow.",
  },
  {
    name: "Numerical Analysis: Root Finding",
    tag: "math",
    tools: ["Python", "Math"],
    img: "num-analysis.png",
    repo: "numerical-analysis-root-finding",
    live: "https://numerical-analysis-root-finding.streamlit.app/",
    short: "Solve equations step by step with numerical methods.",
    desc: "I coded root-finding methods, such as Bisection and Newton–Raphson, and compared how fast each one gets close to the answer.",
    steps: [
      "Wrote each method as a simple Python function",
      "Counted the steps each method needs",
      "Compared the error of each method",
    ],
    learn:
      "Some methods are slow but safe, and some are fast but need a good start.",
  },
  {
    name: "BacII Grade Prediction",
    tag: "ml",
    tools: ["Python", "Machine Learning"],
    img: "bacll.png",
    repo: "bacll-grade-prediction",
    live: "https://bacll-grade-prediction-wgojdp4yevbdkly2kqg8xy.streamlit.app/",
    short: "Can a model guess a student’s BacII grade?",
    desc: "A machine learning project that predicts exam grades from student information.",
    steps: [
      "Prepared the data for the model",
      "Trained a model and tested it on new data",
      "Checked how good the predictions are",
    ],
    learn: "A model is only as good as the data and the testing behind it.",
  },
  {
    name: "Carbon Footprint Prediction",
    tag: "ml",
    tools: ["Python", "Machine Learning"],
    img: "carbon.png",
    live: "https://carbon-emissions-prediction.streamlit.app/",
    repo: "Carbon-Emissions-Prediction",
    short: "Predict carbon emissions with machine learning.",
    desc: "A prediction project that estimates carbon emissions, to help people understand what drives them.",
    steps: [
      "Explored and cleaned the emission data",
      "Trained a model to predict emissions",
      "Measured the error of the predictions",
    ],
    learn: "Data science can help with real problems like climate.",
  },
  {
    name: "Dog and Cat Recognition",
    tag: "ml",
    tools: ["Python", "Images", "Deep Learning"],
    img: "dog_cat.png",
    repo: "Dog-Cat-recognition",
    live: "https://dog-cat-recognition.streamlit.app/",
    short: "Teach a computer to tell a dog from a cat.",
    desc: "An image recognition project. The model looks at a photo and says if it is a dog or a cat.",
    steps: [
      "Prepared and resized the images",
      "Trained a model to learn the difference",
      "Tested it on photos it had never seen",
    ],
    learn: "Computers learn from many examples, like we do.",
  },
  {
    name: "Retail Demand Forecasting",
    tag: "ml",
    tools: ["Python", "Forecasting"],
    img: "retail-demand.png",
    repo: "Retail-demand-foracasting",
    live: "https://retail-demand-foracasting.streamlit.app/",
    short: "Guess how much a store will sell next.",
    desc: "A forecasting project for retail demand. Good forecasts help a shop order the right amount of products.",
    steps: [
      "Studied past sales and their trends",
      "Built a model to forecast future demand",
      "Compared the forecast with real numbers",
    ],
    learn:
      "Past data can help us plan the future, but we must always check the error.",
  },
];

/* theme */
function setTheme(t) {
  root.dataset.theme = t;
  localStorage.setItem("vl-theme", t);
  const i = document.querySelector("#theme i");
  if (i) i.className = "fa-solid fa-" + (t == "dark" ? "sun" : "moon");
}

/* nav and footer */
const pages = [
  ["index", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];
const here =
  (location.pathname.split("/").pop() || "index.html").replace(".html", "") ||
  "index";
const links = pages
  .map(
    ([p, t]) => `<a href="${p}.html" class="${p == here ? "on" : ""}">${t}</a>`,
  )
  .join("");

document.body.insertAdjacentHTML(
  "afterbegin",
  `
  <div id="prog"></div><div class="glow" id="glow"></div>
  <header class="top"><div class="wrap bar">
    <a class="logo" href="index.html">Vouch<b>leang</b></a>
    <nav id="links">${links}</nav>
    <button class="icon" id="theme" aria-label="Switch theme"><i class="fa-solid fa-moon"></i></button>
    <button class="icon" id="burger" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
  </div></header>`,
);

document.body.insertAdjacentHTML(
  "beforeend",
  `
  <footer><div class="wrap">
    <div class="grid">
      <div><h4>Vouchleang</h4><p>Data Science student turning curiosity into insight.</p></div>
      <div><h4>Pages</h4>${links}</div>
      <div><h4>Find me</h4>
        <a href="${GITHUB}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
        <a href="https://www.linkedin.com/in/vouchleang-tan-29a491376/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://t.me/tanvouchleang" target="_blank"><i class="fa-brands fa-telegram"></i> Telegram</a>
      </div>
    </div>
    <p class="copy">© 2026 Tan Vouchleang . Data Science</p>
  </div></footer><div class="toast" id="toast"></div>`,
);

setTheme(root.dataset.theme);
$("theme").onclick = () =>
  setTheme(root.dataset.theme == "dark" ? "light" : "dark");
$("burger").onclick = () => $("links").classList.toggle("open");

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("on");
  setTimeout(() => t.classList.remove("on"), 2200);
}

/* scroll effect */
addEventListener("scroll", () => {
  $("prog").style.width =
    (scrollY / (root.scrollHeight - innerHeight)) * 100 + "%";
  document.querySelectorAll(".tl").forEach((tl) => {
    const r = tl.getBoundingClientRect();
    tl.style.setProperty(
      "--p",
      Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height)),
    );
  });
});
addEventListener(
  "mousemove",
  (e) =>
    ($("glow").style.transform =
      `translate(${e.clientX - 150}px,${e.clientY - 150}px)`),
);

function count(el) {
  const to = +el.dataset.to,
    dec = +(el.dataset.dec || 0);
  let start = 0;
  const step = (t) => {
    if (!start) start = t;
    const k = Math.min((t - start) / 1200, 1);
    el.textContent = (to * k).toFixed(dec);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("show");
      e.target.querySelectorAll("[data-to]").forEach(count);
      io.unobserve(e.target);
    }),
  { threshold: 0.15 },
);
const watch = () =>
  document
    .querySelectorAll(".reveal:not(.show)")
    .forEach((el) => io.observe(el));

/* background effect */
const cv = $("bg"),
  cx = cv.getContext("2d");
let W,
  H,
  mouse = { x: -999, y: -999 };
const dots = Array.from({ length: 60 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  vx: Math.random() - 0.5,
  vy: Math.random() - 0.5,
}));
const size = () => {
  W = cv.width = innerWidth;
  H = cv.height = innerHeight;
};
size();
addEventListener("resize", size);
addEventListener("mousemove", (e) => (mouse = { x: e.clientX, y: e.clientY }));

function line(x1, y1, x2, y2, alpha) {
  cx.globalAlpha = alpha;
  cx.beginPath();
  cx.moveTo(x1, y1);
  cx.lineTo(x2, y2);
  cx.stroke();
}
(function draw() {
  cx.clearRect(0, 0, W, H);
  cx.fillStyle = cx.strokeStyle = getComputedStyle(root)
    .getPropertyValue("--a")
    .trim();
  dots.forEach((p, i) => {
    p.x += p.vx * 0.4;
    p.y += p.vy * 0.4;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    cx.globalAlpha = 0.6;
    cx.beginPath();
    cx.arc(p.x, p.y, 2, 0, 7);
    cx.fill();
    for (let j = i + 1; j < dots.length; j++) {
      const d = Math.hypot(p.x - dots[j].x, p.y - dots[j].y);
      if (d < 130) line(p.x, p.y, dots[j].x, dots[j].y, (1 - d / 130) * 0.35);
    }
    const m = Math.hypot(p.x - mouse.x, p.y - mouse.y);
    if (m < 160) line(p.x, p.y, mouse.x, mouse.y, (1 - m / 160) * 0.6);
  });
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
    requestAnimationFrame(draw);
})();

/* home design */
if ($("typing")) {
  const words = [
    "Data Science Student",
    "Math Teacher",
    "Machine Learning Explorer",
    "Problem Solver",
  ];
  let w = 0,
    i = 0,
    del = false;
  (function type() {
    const word = words[w];
    $("typing").textContent = word.slice(0, i);
    if (!del && i == word.length) {
      del = true;
      return setTimeout(type, 1400);
    }
    if (del && i == 0) {
      del = false;
      w = (w + 1) % words.length;
    }
    i += del ? -1 : 1;
    setTimeout(type, del ? 40 : 90);
  })();
}

function clock() {
  const now = new Date();
  if ($("time")) $("time").textContent = now.toLocaleTimeString();
  if ($("date"))
    $("date").textContent = now.toLocaleDateString(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
}
clock();
setInterval(clock, 1000);

if ($("plot")) {
  const c = $("plot").getContext("2d");
  const css = (v) => getComputedStyle(root).getPropertyValue(v).trim();
  let data = [];

  function fit() {
    const n = data.length,
      mx = data.reduce((a, p) => a + p[0], 0) / n,
      my = data.reduce((a, p) => a + p[1], 0) / n;
    let sxy = 0,
      sxx = 0,
      syy = 0;
    data.forEach(([x, y]) => {
      sxy += (x - mx) * (y - my);
      sxx += (x - mx) ** 2;
      syy += (y - my) ** 2;
    });
    const m = sxy / sxx;
    return { m, b: my - m * mx, r2: (sxy * sxy) / (sxx * syy) };
  }
  function show(t) {
    const w = ($("plot").width = $("plot").clientWidth),
      h = ($("plot").height = $("plot").clientHeight),
      f = fit();
    c.fillStyle = css("--b");
    data.forEach(([x, y], i) => {
      const k = Math.min(1, Math.max(0, t * 2 - i / data.length));
      c.globalAlpha = k;
      c.beginPath();
      c.arc(x * w, (1 - y) * h, 6 * k, 0, 7);
      c.fill();
    });
    c.globalAlpha = 1;
    c.strokeStyle = css("--a");
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(0, (1 - f.b) * h);
    c.lineTo(w * t, (1 - (f.b + f.m * t)) * h);
    c.stroke();
    $("plotInfo").textContent =
      `slope ${f.m.toFixed(2)} · R² ${f.r2.toFixed(2)}`;
  }
  function make() {
    const slope = Math.random() * 1.6 - 0.8,
      noise = 0.05 + Math.random() * 0.25;
    data = Array.from({ length: 35 }, () => {
      const x = Math.random();
      return [
        x,
        Math.min(
          1,
          Math.max(
            0,
            0.5 + slope * (x - 0.5) + (Math.random() - 0.5) * noise * 2,
          ),
        ),
      ];
    });
    let t = 0;
    (function frame() {
      t = Math.min(t + 0.03, 1);
      show(t);
      if (t < 1) requestAnimationFrame(frame);
    })();
  }
  $("plot").onclick = (e) => {
    const r = $("plot").getBoundingClientRect();
    data.push([
      (e.clientX - r.left) / r.width,
      1 - (e.clientY - r.top) / r.height,
    ]);
    show(1);
  };
  $("again").onclick = make;
  make();
}

/* about */
if ($("ageDisplay")) {
  const birthday = new Date("2005-12-17T14:00:00");
  const units = ["years", "months", "days", "hours", "minutes", "seconds"];
  let u = 0;
  function age() {
    const sec = Math.floor((new Date() - birthday) / 1000),
      min = Math.floor(sec / 60),
      hr = Math.floor(min / 60),
      day = Math.floor(hr / 24);
    const v = {
      years: Math.floor(day / 365.2425),
      months: Math.floor(day / 30.4375),
      days: day,
      hours: hr,
      minutes: min,
      seconds: sec,
    };
    $("ageDisplay").textContent = `${v[units[u]].toLocaleString()} ${units[u]}`;
  }
  $("ageBox").onclick = () => {
    u = (u + 1) % units.length;
    age();
  };
  age();
  setInterval(age, 1000);
}

/* project function */
function card(p, i) {
  return `<article class="card proj lift reveal" data-i="${i}" data-tag="${p.tag}" data-name="${p.name.toLowerCase()}" tabindex="0">
    <div class="thumb"><img src="assets/img/${p.img}" alt="${p.name}" onerror="this.remove()"></div>
    <h3>${p.name}</h3><p>${p.short}</p>
    <div class="tags">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div>
    <p class="links"><a href="${GITHUB}${p.repo}" target="_blank"><i class="fa-brands fa-github"></i> View code</a>
    <a href="${p.live || LIVE + p.repo + "/"}" target="_blank"><i class="fa-solid fa-rocket"></i> Live demo</a></p></article>`;
}
function openProject(i) {
  const p = projects[i],
    m = $("modal");
  m.innerHTML = `<div class="in"><button class="x" aria-label="Close" onclick="modal.close()">&times;</button>
    <div class="thumb" style="height:200px"><img src="assets/img/${p.img}" alt="${p.name}" onerror="this.remove()"></div>
    <h2>${p.name}</h2><p>${p.desc}</p>
    <h4>What I did</h4><ul>${p.steps.map((s) => `<li>${s}</li>`).join("")}</ul>
    <h4>What I learned</h4><p>${p.learn}</p>
    <div class="tags">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div>
    <div class="btns">
      <a class="btn" href="${GITHUB}${p.repo}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
      <a class="btn ghost" href="${p.live || LIVE + p.repo + "/"}" target="_blank"><i class="fa-solid fa-rocket"></i> Live demo</a>
    </div></div>`;
  m.showModal();
}
document.addEventListener("click", (e) => {
  const c = e.target.closest(".proj");
  if (!c || e.target.closest(".links a")) return;
  if ($("modal")) openProject(c.dataset.i);
  else location.href = "projects.html?open=" + c.dataset.i;
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && e.target.classList.contains("proj")) e.target.click();
});

if ($("featured"))
  $("featured").innerHTML = projects.slice(0, 3).map(card).join("");

if ($("projectGrid")) {
  $("projectGrid").innerHTML = projects.map(card).join("");
  let tag = "all";
  const filter = () =>
    document.querySelectorAll(".proj").forEach((c) => {
      const ok =
        (tag == "all" || c.dataset.tag == tag) &&
        c.dataset.name.includes($("search").value.toLowerCase());
      c.classList.toggle("hide", !ok);
    });
  document.querySelectorAll("[data-f]").forEach(
    (b) =>
      (b.onclick = () => {
        document
          .querySelectorAll("[data-f]")
          .forEach((x) => x.classList.remove("on"));
        b.classList.add("on");
        tag = b.dataset.f;
        filter();
      }),
  );
  $("search").oninput = filter;
  $("modal").onclick = (e) => {
    if (e.target == $("modal")) $("modal").close();
  };
  const open = new URLSearchParams(location.search).get("open");
  if (open !== null) openProject(open);
}

/* contact */
document.querySelectorAll("[data-tilt]").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.transform = `perspective(900px) rotateX(${((e.clientY - r.top) / r.height - 0.5) * -10}deg) rotateY(${((e.clientX - r.left) / r.width - 0.5) * 10}deg) translateY(-6px)`;
  });
  el.addEventListener("mouseleave", () => (el.style.transform = ""));
});
document.querySelectorAll("[data-copy]").forEach(
  (b) =>
    (b.onclick = (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(b.dataset.copy);
      toast("Copied: " + b.dataset.copy);
    }),
);
if ($("form"))
  $("form").onsubmit = (e) => {
    e.preventDefault();
    const d = new FormData($("form"));
    location.href = `mailto:tanvouchleang@gmail.com?subject=${encodeURIComponent("Hello from " + d.get("name"))}&body=${encodeURIComponent(d.get("msg") + "\n\n" + d.get("name") + " (" + d.get("mail") + ")")}`;
    toast("Opening your email app…");
  };

watch();
