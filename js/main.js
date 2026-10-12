/* ============================================================
   Shibani Das — LIC Agent | site scripts
   Pure vanilla JS, no build step, no server.
   ============================================================ */

/* ---- BUSINESS CONFIG: edit these if details change ---------- */
const AGENT_NAME = "Shibani Das";
const AGENT_PHONE = "919232162949"; // country code + number, digits only
const WHATSAPP_URL = "https://wa.me/" + AGENT_PHONE;
/* ------------------------------------------------------------- */

/* ---- footer year ---- */
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

/* ---- sticky header shadow ---- */
const header = document.querySelector(".site-header");
const onScrollHeader = () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 10);
};
onScrollHeader();

/* ---- mobile nav ---- */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (navToggle && nav) {
  const closeNav = () => {
    navToggle.classList.remove("open");
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}

/* ---- FAQ accordion (one open at a time) ---- */
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-q");
  const answer = item.querySelector(".faq-a");
  if (!btn || !answer) return;

  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      openItem.classList.remove("open");
      const a = openItem.querySelector(".faq-a");
      if (a) a.style.maxHeight = null;
      const q = openItem.querySelector(".faq-q");
      if (q) q.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---- scroll reveal ---- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

/* ---- animated stat counters ---- */
(function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const run = (el) => {
    const target = parseFloat(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || "";

    if (reduce || !("requestAnimationFrame" in window)) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach(run);
  }
})();

/* ---- active nav link based on section in view ---- */
const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === id)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => spy.observe(section));
}

/* ---- back to top ---- */
const toTop = document.getElementById("toTop");
const onScrollTop = () => {
  if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
};
onScrollTop();
if (toTop) {
  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* single scroll listener */
window.addEventListener(
  "scroll",
  () => {
    onScrollHeader();
    onScrollTop();
  },
  { passive: true }
);

/* ---- call-back form -> WhatsApp (no backend, nothing stored) ---- */
const form = document.getElementById("callbackForm");
if (form) {
  const status = document.getElementById("formStatus");

  /* tiny inline helper for the two UI languages */
  const bn = () => window.__siteLang === "bn";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();

    if (!name || !phone) {
      if (status) {
        status.textContent = bn()
          ? "আপনার নাম ও মোবাইল নম্বর লিখুন।"
          : "Please enter your name and mobile number.";
        status.classList.add("show");
      }
      (name ? form.querySelector("#cbPhone") : form.querySelector("#cbName"))?.focus();
      return;
    }

    const lines = bn()
      ? [
          "হ্যালো " + AGENT_NAME + ", আপনার LIC পেজ দেখে কল করছি। 🙏",
          "",
          "নাম: " + name,
          "মোবাইল: " + phone,
          "সাহায্য দরকার: " + (data.get("topic") || "—"),
          "কল করার সময়: " + (data.get("time") || "—"),
        ]
      : [
          "Hello " + AGENT_NAME + ", I found your LIC page. 🙏",
          "",
          "Name: " + name,
          "Mobile: " + phone,
          "Need help with: " + (data.get("topic") || "—"),
          "Best time to call: " + (data.get("time") || "—"),
        ];

    const message = (data.get("message") || "").toString().trim();
    if (message) lines.push(bn() ? "বার্তা: " + message : "Message: " + message);

    lines.push("", bn() ? "অনুগ্রহ করে আমাকে ফোন করুন। ধন্যবাদ!" : "Please call me back. Thank you!");

    const url = WHATSAPP_URL + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");

    if (status) {
      status.textContent = bn()
        ? "আপনার বার্তাসহ হোয়াটসঅ্যাপ খুলছে। না খুললে, কল করুন " + AGENT_PHONE.slice(2) + "।"
        : "WhatsApp is opening with your message ready. If it did not open, please call " +
            AGENT_PHONE.slice(2) +
            ".";
      status.classList.add("show");
    }
  });
}

/* ---- optional agent photo ------------------------------------
   Save a passport-size photo into the images/ folder as:
       images/agent.jpg   (or .jpeg / .png / .webp)
   It will appear automatically in the hero card and the About
   section. Until then, the tidy "SD" monogram is shown instead.
   -------------------------------------------------------------- */
(function loadAgentPhoto() {
  const slots = document.querySelectorAll("[data-agent-photo]");
  if (!slots.length) return;

  const candidates = [
    "images/agent.jpg",
    "images/agent.jpeg",
    "images/agent.png",
    "images/agent.webp",
  ];

  const usePhoto = (src) => {
    slots.forEach((slot) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = AGENT_NAME + ", LIC Agent";
      img.loading = "lazy";
      img.decoding = "async";
      slot.replaceChildren(img);
    });
  };

  const tryLoad = (i) => {
    if (i >= candidates.length) return; // no photo found — keep the monogram
    const probe = new Image();
    probe.onload = () => usePhoto(candidates[i]);
    probe.onerror = () => tryLoad(i + 1);
    probe.src = candidates[i];
  };

  tryLoad(0);
})();
