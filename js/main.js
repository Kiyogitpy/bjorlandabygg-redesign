// SV is the source language; EN strings are a translation awaiting native review.
const I18N = {
  sv: {
    "doc.home": "Björlanda Bygg AB – det personliga byggföretaget",
    "doc.contact": "Kontakt | Björlanda Bygg AB",
    "nav.home": "Hem", "nav.contact": "Kontakt", "nav.label": "Huvudmeny", "skip": "Hoppa till innehållet",
    "tel.label": "Ring 0708-92 94 94",
    "hero.h1": "Välkommen till det <em>personliga</em> byggföretaget.",
    "hero.lede": "<strong>35 års erfarenhet</strong> från tanke till färdigt arbete.",
    "hero.cta": "Se våra arbeten", "hero.call": "Ring Patrik",
    "hero.alt": "Rött timmerhus på en klippa mot blå himmel",
    "work.h2": "Våra arbeten", "work.ig": "Fler bilder på Instagram",
    "cap.out": "Utomhus", "cap.kitchen": "Kök", "cap.co": "Björlanda Bygg",
    "alt.roof": "Hus med nytt rött tegeltak och blåvita fönster",
    "alt.oak": "Nytt kök med ekluckor och bänkskiva i sten",
    "alt.white": "Vitt kök med spröjsade luckor och mörkt trägolv",
    "alt.van": "Rödsvart arbetsbil framför ett grått trähus",
    "alt.silver": "Björlanda Byggs silvriga arbetsbil framför ett gult hus",
    "lb.close": "Stäng", "ba.h2": "Före och efter", "ba.hint": "Dra i reglaget för att jämföra.", "ba.before": "Före", "ba.after": "Efter", "ba.aria": "Jämför före och efter", "ba.prev": "Föregående", "ba.next": "Nästa",
    "areas.h2": "Våra områden",
    "areas.intro": "Här nedan kan Du ta del av några av våra områden.",
    "areas.out": "Utomhus", "areas.in": "Inomhus",
    "o1": "Fönster", "o2": "Fasader", "o3": "Altaner", "o4": "Uterum", "o5": "Staket", "o6": "Tillbyggnader",
    "i1": "Badrum", "i2": "Kök", "i3": "Tvättstugor", "i4": "Parkettgolv", "i5": "Trappor", "i6": "Lister",
    "call.h2": "För mer info:", "call.p": "Patrik Pettersson svarar själv.", "call.cta": "Kontakta oss",
    "c.h1": "Kontakt", "c.lead": "Kontakta oss:",
    "f.name": "Namn *", "f.tel": "Telefon *", "f.mail": "E-post *", "f.msg": "Meddelande *", "f.send": "Skicka",
    "f.ok": "Ditt e-postprogram öppnas med meddelandet. Du kan också ringa 0708-92 94 94.",
    "f.err": "Fyll i alla fält.",
    "c.card": "Björlanda Bygg AB", "c.tel": "Tel:", "c.mail": "Mail:",
    "foot.copy": "© 2015 Björlanda Bygg AB"
  },
  en: {
    "doc.home": "Björlanda Bygg AB – the personal building company",
    "doc.contact": "Contact | Björlanda Bygg AB",
    "nav.home": "Home", "nav.contact": "Contact", "nav.label": "Main menu", "skip": "Skip to content",
    "tel.label": "Call 0708-92 94 94",
    "hero.h1": "Welcome to the <em>personal</em> building company.",
    "hero.lede": "<strong>35 years of experience</strong> from idea to finished job.",
    "hero.cta": "See our work", "hero.call": "Call Patrik",
    "hero.alt": "Red timber cabin on a rock against a blue sky",
    "work.h2": "Our work", "work.ig": "More photos on Instagram",
    "cap.out": "Outdoors", "cap.kitchen": "Kitchen", "cap.co": "Björlanda Bygg",
    "alt.roof": "House with a new red tile roof and blue-and-white windows",
    "alt.oak": "New kitchen with oak cabinet doors and a stone worktop",
    "alt.white": "White kitchen with glazed cabinet doors and a dark wood floor",
    "alt.van": "Red and black work van in front of a grey timber house",
    "alt.silver": "Björlanda Bygg's silver work van in front of a yellow house",
    "lb.close": "Close", "ba.h2": "Before and after", "ba.hint": "Drag the handle to compare.", "ba.before": "Before", "ba.after": "After", "ba.aria": "Compare before and after", "ba.prev": "Previous", "ba.next": "Next",
    "areas.h2": "Our areas of work",
    "areas.intro": "Below you can see some of our areas of work.",
    "areas.out": "Outdoors", "areas.in": "Indoors",
    "o1": "Windows", "o2": "Facades", "o3": "Decks & balconies", "o4": "Sunrooms", "o5": "Fences", "o6": "Extensions",
    "i1": "Bathrooms", "i2": "Kitchens", "i3": "Laundry rooms", "i4": "Parquet floors", "i5": "Stairs", "i6": "Trim & mouldings",
    "call.h2": "For more info:", "call.p": "Patrik Pettersson picks up himself.", "call.cta": "Contact us",
    "c.h1": "Contact", "c.lead": "Contact us:",
    "f.name": "Name *", "f.tel": "Phone *", "f.mail": "Email *", "f.msg": "Message *", "f.send": "Send",
    "f.ok": "Your email app is opening with the message. You can also call 0708-92 94 94.",
    "f.err": "Please fill in every field.",
    "c.card": "Björlanda Bygg AB", "c.tel": "Tel:", "c.mail": "Mail:",
    "foot.copy": "© 2015 Björlanda Bygg AB"
  }
};

const store = {
  get() { try { return localStorage.getItem("lang"); } catch { return null; } },
  set(v) { try { localStorage.setItem("lang", v); } catch { /* storage blocked */ } }
};
let lang = store.get() || ((navigator.language || "sv").startsWith("sv") ? "sv" : "en");
if (!I18N[lang]) lang = "sv";

function t(key) { return I18N[lang][key] ?? I18N.sv[key] ?? key; }

function apply() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  document.querySelectorAll("[data-sv]").forEach(el => { el.textContent = (lang === "en" && el.dataset.en) ? el.dataset.en : el.dataset.sv; });
  document.querySelectorAll("[data-i18n-aria-live]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAriaLive)));
  const doc = document.body.dataset.doc;
  if (doc) document.title = t(doc);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang; store.set(lang); apply();
}));
apply();

// Gallery: reveal on scroll (content stays visible without JS) + lightbox
document.documentElement.classList.add("js");
const tiles = document.querySelectorAll(".tile");
// Observe the grid, not the tiles: a tile hidden by its own clip-path never reports as intersecting
const mosaic = document.querySelector(".mosaic");
const reveal = () => tiles.forEach((el, i) => { el.style.transitionDelay = `${i * 110}ms`; el.classList.add("in"); });
if (mosaic && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { reveal(); io.disconnect(); } }, { threshold: 0.05 });
  io.observe(mosaic);
} else reveal();

const lb = document.getElementById("lb");
if (lb) {
  const img = lb.querySelector("img");
  tiles.forEach(tile => tile.addEventListener("click", () => {
    const src = tile.querySelector("img");
    img.src = src.currentSrc || src.src; img.alt = src.alt;
    lb.showModal();
  }));
  lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "BUTTON") lb.close(); });
}

// Contact form: static site, so hand the message to the visitor's email app
const form = document.getElementById("contact-form");
if (form) {
  const status = document.getElementById("form-status");
  form.addEventListener("submit", e => {
    e.preventDefault();
    status.classList.remove("err");
    if (!form.checkValidity()) { status.textContent = t("f.err"); status.classList.add("err"); form.reportValidity(); return; }
    const d = new FormData(form);
    const body = `${d.get("message")}\n\n${d.get("name")}\n${d.get("tel")}\n${d.get("email")}`;
    location.href = `mailto:patrik@bjorlandabygg.se?subject=${encodeURIComponent("Förfrågan via bjorlandabygg.se – " + d.get("name"))}&body=${encodeURIComponent(body)}`;
    status.textContent = t("f.ok");
  });
}

// Before / after: one slider; the arrows cycle through pairs listed in assets/img/before-after/pairs.js.
// The section stays hidden until a real pair exists.
const baSection = document.getElementById("fore-efter");
if (baSection) {
  const dir = "assets/img/before-after/";
  const pairs = window.BA_PAIRS;
  if (Array.isArray(pairs) && pairs.length) {
    const frame = document.getElementById("ba-frame"), range = document.getElementById("ba-range");
    const before = document.getElementById("ba-before"), after = document.getElementById("ba-after");
    const cap = document.getElementById("ba-cap"), count = document.getElementById("ba-count");
    const prev = document.getElementById("ba-prev"), next = document.getElementById("ba-next");
    let i = 0;
    const set = v => { range.value = v; frame.style.setProperty("--pos", v + "%"); };
    const show = n => {
      i = (n + pairs.length) % pairs.length;
      const p = pairs[i];
      before.src = dir + p.before; after.src = dir + p.after;
      cap.dataset.sv = p.caption_sv || ""; cap.dataset.en = p.caption_en || "";
      count.textContent = pairs.length > 1 ? `${i + 1} / ${pairs.length}` : "";
      set(50); apply();
    };
    range.addEventListener("input", () => set(range.value));
    // arrows appear when the pointer nears the left or right edge of the picture
    frame.addEventListener("pointermove", e => {
      if (e.pointerType === "touch") return;
      const r = frame.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
      frame.classList.toggle("near-l", x < 0.16);
      frame.classList.toggle("near-r", x > 0.84);
    });
    frame.addEventListener("pointerleave", () => frame.classList.remove("near-l", "near-r"));
    if (pairs.length > 1) {
      prev.addEventListener("click", () => show(i - 1));
      next.addEventListener("click", () => show(i + 1));
    } else {
      prev.hidden = next.hidden = true;
    }
    show(0);
    baSection.hidden = false;
  }
}
