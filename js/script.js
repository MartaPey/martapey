// GESTIÓN DE PANTALLA DE CARGA INICIAL (SPLASH SCREEN)
window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    if (splash) {
      splash.classList.add("hidden");
    }

    // El banner de commissions aparece cuando la pantalla ya ha cargado
    setTimeout(() => {
      const banner = document.querySelector(".comm-banner-container");
      const onDashboard = document
        .getElementById("dashboard-view")
        .classList.contains("active");
      if (banner && onDashboard) banner.classList.add("show");
    }, 1200);
  }, 4500);
});

// COMMISSIONS: ICONOS Y ENLACES (antes de projectsData, que los usa en sus plantillas)
const MK_ICONS = {
  search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>`,
  cross: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  revisions: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 5v6h-6"/></svg>`,
  shield: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};
const COMMISSION_FORM_URL = "https://forms.gle/KWNtKJNGgesFjCVp7";
const CONTACT_MAIL = "mailto:martapey12@gmail.com?subject=Commission%20request";

// COMMISSIONS: EJEMPLOS (img/commissions/web, miniaturas en web/thumbs)
const COMM_EXAMPLES = {
  "lineart-02": "Line-art portrait",
  "line-full-body-01": "Full-body line drawing",
  "line-full-body-02": "Two full-body figures in line art",
  familia: "Monochrome family portrait of five people",
  "color-portrait-01": "Color portrait",
  "maria-light": "Color portrait with light and shadow (light version)",
  "maria-dark": "Color portrait with light and shadow (dark version)",
  "50-years": "Half-body color illustration with layout",
  tita: "Half-body color illustration of two people with layout and elements",
  "lee-scaperoom": "Highly detailed full-body illustration with background and props",
  "star-wars-tlotr": "Two full-body characters in color with animals, background and layout",
  picnic: "Full-body color illustration of two people with objects",
  "postal-dequeerando": "Full-body color illustration with some elements",
  "full-body-layout": "Full-body color illustration with layout",
};
const commImg = (name) => `img/commissions/web/${name}.webp`;
const commThumb = (name) => `img/commissions/web/thumbs/${name}.webp`;

// ABOUT ME: PIEZAS DE LAS PANTALLAS DE PERFIL (antes de projectsData, que las usa)
const PF_ICON_PATHS = {
  home: `<path d="M4 10.5 12 4l8 6.5V20h-5v-6H9v6H4Z"/>`,
  network: `<path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M21 19v-1a4 4 0 0 0-3-3.9M15.5 4.1a3.5 3.5 0 0 1 0 6.8"/>`,
  messages: `<path d="M20 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/>`,
  bell: `<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>`,
  pencil: `<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16Z"/><path d="m13.5 6.5 4 4"/>`,
  plus: `<path d="M12 5v14M5 12h14"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
  pin: `<path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>`,
  language: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>`,
};

const pfIcon = (name, size = 18) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${PF_ICON_PATHS[name]}</svg>`;

const pfEditBtn = (label = "Edit") =>
  `<span class="pf-icon-btn" title="${label}">${pfIcon("pencil", 16)}</span>`;

const PF_NAV = ["Public profile", "Edit intro", "Experience", "Education", "Skills & tools"];

// Frame al que lleva cada pestaña
const PF_FRAMES = {
  "Public profile": "frame-about-profile",
  "Edit intro": "frame-about-intro",
  Experience: "frame-about-experience",
  Education: "frame-about-education",
  "Skills & tools": "frame-about-skills",
};

// Icono teñido de un color (la imagen se saca de la caja y queda su sombra de color)
const pfTintIcon = (icon, color, size = 18) =>
  `<span class="pf-tint" style="--tag-color:${color};width:${size}px;height:${size}px"><img src="img/icons/${icon}" alt=""></span>`;

// Ventana de "configuración del perfil": barra superior + menú lateral + contenido
function pfScreen(active, main) {
  return `
    <div class="pf-app">
      <header class="pf-topbar">
        <div class="pf-brand"><img src="img/avatars/mp_logofigma_color.svg" alt=""><span>Profile</span></div>
        <div class="pf-search">${MK_ICONS.search}<span>Search</span></div>
        <nav class="pf-topnav">
          <span class="pf-topnav-item">${pfIcon("home")}<span>Home</span></span>
          <span class="pf-topnav-item">${pfIcon("network")}<span>Network</span></span>
          <span class="pf-topnav-item">${pfIcon("messages")}<span>Messages</span></span>
          <span class="pf-topnav-item">${pfIcon("bell")}<span>Notifications</span></span>
          <span class="pf-topnav-item active"><img src="img/avatars/perfil.webp" alt=""><span>Me</span></span>
        </nav>
      </header>
      <nav class="pf-tabs">
        <span class="pf-tabs-title">Profile settings</span>
        <div class="pf-tabs-list">
          ${PF_NAV.map(
            (item) =>
              `<button class="pf-tab${item === active ? " active" : ""}" data-jump="${PF_FRAMES[item]}">${item}</button>`,
          ).join("")}
        </div>
      </nav>
      <main class="pf-main">${main}</main>
    </div>
  `;
}

// Fila de experiencia / formación con logo, título, empresa, fechas y chips
function pfEntry({ logo, icon, iconColor = "#0ea5e9", initials, title, sub, meta, chips = [] }) {
  const logoHTML = logo
    ? `<img class="pf-logo" src="${logo}" alt="">`
    : icon
      ? `<span class="pf-logo pf-logo-icon" style="--tag-color:${iconColor}">${pfTintIcon(icon, iconColor, 24)}</span>`
      : `<span class="pf-logo pf-logo-ph">${initials}</span>`;
  return `
    <div class="pf-entry">
      ${logoHTML}
      <div class="pf-entry-body">
        <div class="pf-entry-title">${title}</div>
        <div class="pf-entry-sub">${sub}</div>
        <div class="pf-entry-meta">${meta}</div>
        ${
          chips.length
            ? `<div class="pf-chips">${chips.map((c) => `<span class="pf-chip">${c}</span>`).join("")}</div>`
            : ""
        }
      </div>
      ${pfEditBtn()}
    </div>
  `;
}

// Icono de copiar (fondo azul clarito, icono azul)
const COPY_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15h-.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"/></svg>';

const pfCopyBtn = (value, label) =>
  `<button class="copy-btn" data-copy="${value}" title="Copy ${label}" aria-label="Copy ${label}">${COPY_ICON}</button>`;

const pfField = ({ label, value, icon, required = false, copy = false }) => `
  <div class="pf-field">
    <span class="pf-field-label"><img class="pf-label-icon" src="img/icons/${icon}" alt="">${label}${required ? " *" : ""}</span>
    <span class="pf-input-wrap">
      <input type="text" readonly value="${value}" class="pf-input" aria-label="${label}">
      ${copy ? pfCopyBtn(value, label.toLowerCase()) : ""}
    </span>
  </div>
`;

const PF_SOCIALS = [
  ["Patreon", "https://patreon.com/martapey", "icon-patreon"],
  ["Instagram", "https://www.instagram.com/martapey.art", "icon-instagram"],
  ["Bluesky", "https://bsky.app/profile/martapey.bsky.social", "icon-bluesky"],
  ["Behance", "https://www.behance.net/martapey", "icon-behance"],
  ["LinkedIn", "https://www.linkedin.com/in/martapey", "icon-linkedin"],
  ["Twitch", "https://www.twitch.tv/emapeyy", "icon-twitch"],
  ["YouTube", "https://www.youtube.com/@martapey", "icon-youtube"],
];

const PF_SOFTWARE = [
  ["Figma", "icon_figma"],
  ["Photoshop", "icon_photoshop"],
  ["Illustrator", "icon_illustrator"],
  ["InDesign", "icon_indesign"],
  ["After Effects", "icon_aftereffects"],
  ["Premiere", "icon_premiere"],
  ["Procreate", "icon_procreate"],
  ["Blender", "icon_blender"],
  ["Canva", "icon_canva"],
  ["Mailchimp", "icon_mailchimp"],
  ["VS Code", "icon_vscode"],
];

// BASE DE DATOS DE PROYECTOS
const projectsData = {
  "digital-illustrations": {
    title: "Digital Illustrations",
    columns: 4,
    year: "2021 - 2026",
    role: "Illustrator & Concept Artist",
    description:
      "A collection of standalone digital illustrations, character designs, and digital painting studies focused on lighting, color dynamics, and storytelling.",
    tags: ["Illustration", "Digital Art", "Character Design", "Concept Art"],
    software: ["Procreate", "Adobe Photoshop"],
    artboards: [
      {
        id: "frame-illu-1",
        title: "Artwork 01",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_28.webp" alt="Artwork 01">`,
      },
      {
        id: "frame-illu-2",
        title: "Artwork 02",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_29.webp" alt="Artwork 02">`,
      },
      {
        id: "frame-illu-3",
        title: "Artwork 03",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_30.webp" alt="Artwork 03">`,
      },
      {
        id: "frame-illu-4",
        title: "Artwork 04",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_31.webp" alt="Artwork 04">`,
      },
      {
        id: "frame-illu-5",
        title: "Artwork 05",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_27.webp" alt="Artwork 05">`,
      },
      {
        id: "frame-illu-6",
        title: "Artwork 06",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_26.webp" alt="Artwork 06">`,
      },
      {
        id: "frame-illu-7",
        title: "Artwork 07",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_25.webp" alt="Artwork 07">`,
      },
      {
        id: "frame-illu-8",
        title: "Artwork 08",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_24.webp" alt="Artwork 08">`,
      },
      {
        id: "frame-illu-9",
        title: "Artwork 09",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_23.webp" alt="Artwork 09">`,
      },
      {
        id: "frame-illu-10",
        title: "Artwork 10",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_22.webp" alt="Artwork 10">`,
      },
      {
        id: "frame-illu-11",
        title: "Artwork 11",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_21.webp" alt="Artwork 11">`,
      },
      {
        id: "frame-illu-12",
        title: "Artwork 12",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_20.webp" alt="Artwork 12">`,
      },
      {
        id: "frame-illu-13",
        title: "Artwork 13",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_19.webp" alt="Artwork 13">`,
      },
      {
        id: "frame-illu-14",
        title: "Artwork 14",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_18.webp" alt="Artwork 14">`,
      },
      {
        id: "frame-illu-15",
        title: "Artwork 15",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_17.webp" alt="Artwork 15">`,
      },
      {
        id: "frame-illu-16",
        title: "Artwork 16",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_16.webp" alt="Artwork 16">`,
      },
      {
        id: "frame-illu-17",
        title: "Artwork 17",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_15.webp" alt="Artwork 17">`,
      },
      {
        id: "frame-illu-18",
        title: "Artwork 18",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_14.webp" alt="Artwork 18">`,
      },
      {
        id: "frame-illu-19",
        title: "Artwork 19",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_13.webp" alt="Artwork 19">`,
      },
      {
        id: "frame-illu-20",
        title: "Artwork 20",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_12.webp" alt="Artwork 20">`,
      },
      {
        id: "frame-illu-21",
        title: "Artwork 21",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_11.webp" alt="Artwork 21">`,
      },
      {
        id: "frame-illu-22",
        title: "Artwork 22",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_10.webp" alt="Artwork 22">`,
      },
      {
        id: "frame-illu-23",
        title: "Artwork 23",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_09.webp" alt="Artwork 23">`,
      },
      {
        id: "frame-illu-24",
        title: "Artwork 24",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_08.webp" alt="Artwork 24">`,
      },
      {
        id: "frame-illu-25",
        title: "Artwork 25",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_07.webp" alt="Artwork 25">`,
      },
      {
        id: "frame-illu-26",
        title: "Artwork 26",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_06.webp" alt="Artwork 26">`,
      },
      {
        id: "frame-illu-27",
        title: "Artwork 27",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_05.webp" alt="Artwork 27">`,
      },
      {
        id: "frame-illu-28",
        title: "Artwork 28",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_04.webp" alt="Artwork 28">`,
      },
      {
        id: "frame-illu-29",
        title: "Artwork 29",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_03.webp" alt="Artwork 29">`,
      },
      {
        id: "frame-illu-30",
        title: "Artwork 30",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_02.webp" alt="Artwork 30">`,
      },
      {
        id: "frame-illu-31",
        title: "Artwork 31",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/il_01.webp" alt="Artwork 31">`,
      },
      {
        id: "frame-illu-32",
        title: "Artwork 32",
        w: 480,
        h: "auto",
        content: `<img class="artboard-image" src="img/digital-illustrations/emma_y_silvia.webp" alt="Artwork 32">`,
      },
    ],
  },
  "traditional-illustrations": {
    title: "Traditional Illustrations",
    year: "2021 - 2026",
    role: "Illustrator & Concept Artist",
    description:
      "A collection of standalone traditional illustrations, character designs, and hand-drawn artwork focused on lighting, color dynamics, and storytelling.",
    tags: [
      "Illustration",
      "Traditional Art",
      "Character Design",
      "Concept Art",
      "Procreate",
    ],
    artboards: [
      {
        id: "frame-tr-1",
        title: "Ellie - The Last Of Us Part II",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_ellie01.webp" alt="Ellie traditional illustration">`,
      },
      {
        id: "frame-tr-2",
        title: "Barbie Ferreira",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_barbie.webp" alt="Barbie traditional illustration"> `,
      },
      {
        id: "frame-tr-3",
        title: "Zoe",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_zoe.webp" alt="Zoe traditional illustration"> `,
      },
      {
        id: "frame-tr-4",
        title: "Reneé Rapp",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_renee.webp" alt="Renee traditional illustration">`,
      },
      {
        id: "frame-tr-5",
        title: "Abby - The Last Of Us Part II",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_abby01.webp" alt="Abby traditional illustration">`,
      },
      {
        id: "frame-tr-6",
        title: "Rey - Star Wars",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_rey.webp" alt="Rey traditional illustration">`,
      },
      {
        id: "frame-tr-7",
        title: "Zhavia",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_zhavia.webp" alt="Zhavia traditional illustration">`,
      },
      {
        id: "frame-tr-8",
        title: "Ellie Part II - Alt",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_ellie02.webp" alt="Ellie traditional illustration">`,
      },
      {
        id: "frame-tr-9",
        title: "Natalie Portman",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/traditional-illustrations/tr_natalie.webp" alt="Natalie Portman traditional illustration">`,
      },
    ],
  },
  "ultim-combat": {
    title: "L'Últim Combat",
    year: "2025",
    columns: 1,
    maxFrameWidth: 820, // páginas de cómic: ancho de lectura
    role: "Comic Artist & Writer",
    description:
      "Special Mention for Best Comic with an LGTBI+ Perspective in the 25th Nou Barris Comic Contest. Created, written, and illustrated using Procreate across 4 comic pages.",
    tags: ["Comic", "Illustration", "Procreate", "Storytelling", "4 Pages"],
    artboards: [
      {
        id: "frame-uc-1",
        title: "Page 1",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/ultim-combat/ultim-combat-1.webp" alt="Page 1">`,
      },
      {
        id: "frame-uc-2",
        title: "Page 2",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/ultim-combat/ultim-combat-2.webp" alt="Page 2">`,
      },
      {
        id: "frame-uc-3",
        title: "Page 3",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/ultim-combat/ultim-combat-3.webp" alt="Page 3">`,
      },
      {
        id: "frame-uc-4",
        title: "Page 4",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/ultim-combat/ultim-combat-4.webp" alt="Page 4">`,
      },
    ],
  },
  "vamp-comic": {
    title: "Vamp",
    year: "2025",
    columns: 1,
    maxFrameWidth: 820, // páginas de cómic: ancho de lectura
    role: "Comic Artist & Writer",
    description:
      "A 4-page black-and-white comic written in Catalan, following a teenage girl, her very messy bedroom and an unexpected visit.",
    tags: ["Comic", "Illustration", "Storytelling", "Black & White", "4 Pages"],
    software: ["Procreate"],
    artboards: [
      {
        id: "frame-vamp-1",
        title: "Page 1",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/vamp-comic/vamp-comic-1.webp" alt="Vamp – page 1">`,
      },
      {
        id: "frame-vamp-2",
        title: "Page 2",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/vamp-comic/vamp-comic-2.webp" alt="Vamp – page 2">`,
      },
      {
        id: "frame-vamp-3",
        title: "Page 3",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/vamp-comic/vamp-comic-3.webp" alt="Vamp – page 3">`,
      },
      {
        id: "frame-vamp-4",
        title: "Page 4",
        w: 450,
        h: "auto",
        content: `<img class="artboard-image" src="img/projects/vamp-comic/vamp-comic-4.webp" alt="Vamp – page 4">`,
      },
    ],
  },
  cafler: {
    title: "Cafler AI",
    columns: 1,
    year: "2025 - 2026",
    role: "Graphic Designer, Brand Designer & Content Creator",
    description:
      "In-house design for Cafler AI, an AI platform for automotive aftersales: brand identity, the Cafi character, website, social media, sales materials, product manuals, email and merchandise.",
    tags: [
      "Graphic Design",
      "Brand Identity",
      "Motion Graphics",
      "Character Design",
      "UX/UI Design",
      "Social Media",
      "Email Design",
      "Editorial Design",
    ],
    software: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "AfterEffects", "Canva", "Mailchimp", "VSCode"],
    artboards: [
      {
        id: "frame-cafler-1",
        title: "01. Overview",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <div class="card-header">
              <h1>Cafler AI</h1>
              <span class="badge-year">2025 - 2026</span>
            </div>
            <p class="subtitle">In-house Design • Brand, Web, Content & Merchandise</p>

            <h3>Project Overview</h3>
            <p>
              Since May 2025 I've been part of the marketing team at <strong>Cafler</strong>, a platform that uses AI to run automotive workshops: appointments, work orders, invoicing and customer conversations in one place.
            </p>
            <p>
              I take care of the visual side of the brand end to end: the <strong>Cafler AI</strong> identity and its animations, the character <strong>Cafi</strong>, the website, social media campaigns, sales documents, product manuals, email communications and merchandise.
            </p>

            <div class="figma-comment-inline">
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/martapey_profile.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "The challenge is making a complex product feel simple: every piece has to explain one clear benefit at a glance."
                </div>
              </div>
            </div>
          </div>
        `,
      },
      {
        id: "frame-cafler-2",
        title: "02. Branding — Cafler AI",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Branding — Cafler AI</h1>
            <p>
              Cafler AI is the new sub-brand for the AI platform. I designed its logo — the Cafler wordmark with an "AI" spark — and animated it for video, the web and email, in positive and negative versions.
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><video data-title="Logo animation · positive" src="img/projects/cafler/logo-anim.mp4" autoplay muted loop playsinline></video><video data-title="Logo animation · negative" src="img/projects/cafler/logo-anim-negative.mp4" autoplay muted loop playsinline></video></div>

            <h3>Brand guidelines</h3>
            <p>
              A short brand manual sets the rules: the new AI Blue, a palette of blues and mints, the blue-to-green "intelligence" gradient, logo versions and the background system used across every channel.
            </p>
            <img src="img/projects/cafler/brand-1.webp" alt="Brand manual · cover">
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/brand-3.webp" alt="Brand manual · palette"><img src="img/projects/cafler/brand-4.webp" alt="Brand manual · gradients"></div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/brand-5.webp" alt="Brand manual · logo"><img src="img/projects/cafler/brand-7.webp" alt="Brand manual · backgrounds"></div>
          </div>
        `,
      },
      {
        id: "frame-cafler-3",
        title: "03. Cafi — Character Design",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Cafi — character design</h1>
            <p>
              Cafi is the character that gives a face to the AI: a four-point spark, filled with the brand gradient, with friendly eyes and a tiny smile. I designed the character and its expression system so it can react inside the platform — when it's thinking, when a task is done or when something goes wrong.
            </p>

            <h3>Animated expressions</h3>
            <p>Thirteen expressions, each one animated as a short loop.</p>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; gap:8px;"><video data-title="Cafi · Happy" src="img/projects/cafler/cafi/feliz.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Cheerful" src="img/projects/cafler/cafi/contento.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Excited" src="img/projects/cafler/cafi/emocionado.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Celebrating" src="img/projects/cafler/cafi/celebra.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Wink" src="img/projects/cafler/cafi/guino.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Curious" src="img/projects/cafler/cafi/curioso.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Attentive" src="img/projects/cafler/cafi/atento.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Surprised" src="img/projects/cafler/cafi/sorpresa.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Resting" src="img/projects/cafler/cafi/descansa.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Overwhelmed" src="img/projects/cafler/cafi/agobiado.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Sorry" src="img/projects/cafler/cafi/apenado.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Sad" src="img/projects/cafler/cafi/triste.mp4" autoplay muted loop playsinline></video><video data-title="Cafi · Angry" src="img/projects/cafler/cafi/enfadado.mp4" autoplay muted loop playsinline></video></div>
          </div>
        `,
      },
      {
        id: "frame-cafler-4",
        title: "04. Website — cafler.ai",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Website — cafler.ai</h1>
            <p>
              The current website: a clear headline, real product screens and a free-trial call to action repeated along the page. Every page is responsive and translated for each market.
            </p>
            <img src="img/projects/cafler/web-home.webp" alt="cafler.ai home page">

            <h3>Animated product screens</h3>
            <p>
              Instead of static screenshots, the module landings show the product working: the hero of the work orders page is a live, animated screen — the vehicle check-in fills itself in, damage levels change and the mileage is typed in, just like in the real platform.
            </p>
            <p>
              <a class="btn btn-primary cafler-cta" href="https://cafler.ai/es/product/ordenes-de-trabajo" target="_blank" rel="noopener noreferrer">Visit the landing ↗</a>
            </p>
            <video data-title="Work orders landing · animated hero" src="img/projects/cafler/web-ot-hero.mp4" autoplay muted loop playsinline></video>
          </div>
        `,
      },
      {
        id: "frame-cafler-5",
        title: "05. Social Media Campaigns",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Social media campaigns</h1>
            <p>
              Posts for the free-trial campaign: each piece focuses on one everyday problem in the workshop and the benefit of solving it. Every post is designed for Spain and then adapted to the other markets and languages.
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px;"><img src="img/projects/cafler/post-erp.webp" alt="Campaign post · ERP & accounting"><img src="img/projects/cafler/post-factura.webp" alt="Campaign post · Digital invoicing"><img src="img/projects/cafler/post-facturacion.webp" alt="Campaign post · Integrated billing"><img src="img/projects/cafler/post-ot.webp" alt="Campaign post · Digital work orders"><img src="img/projects/cafler/post-tiempo.webp" alt="Campaign post · Time saved"><img src="img/projects/cafler/post-agentes.webp" alt="Campaign post · 24/7 AI agents"></div>
          </div>
        `,
      },
      {
        id: "frame-cafler-6",
        title: "06. Dossier & One-pager",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Dossier & one-pager</h1>
            <p>
              Sales materials to present Cafler AI: a six-page dossier and a one-page summary, both adapted to every market. The one-pagers are also downloadable from the website, where I presented them with these mockups.
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px;"><img src="img/projects/cafler/dossier-1.webp" alt="Dossier · page 1"><img src="img/projects/cafler/dossier-2.webp" alt="Dossier · page 2"><img src="img/projects/cafler/dossier-3.webp" alt="Dossier · page 3"><img src="img/projects/cafler/dossier-4.webp" alt="Dossier · page 4"><img src="img/projects/cafler/dossier-5.webp" alt="Dossier · page 5"><img src="img/projects/cafler/dossier-6.webp" alt="Dossier · page 6"></div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/onepage-cafler-ai.webp" alt="One-pager · Cafler AI"><img src="img/projects/cafler/onepage-chat-b2c.webp" alt="One-pager · WhatsApp agent"></div>
          </div>
        `,
      },
      {
        id: "frame-cafler-7",
        title: "07. Product Manuals",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Product manuals</h1>
            <p>
              Step-by-step manuals for every module of the platform, so workshops can start using it on their own. Each manual mixes real screens with numbered explanations, and is exported for every market and language. This is the work orders manual.
            </p>
            <img src="img/projects/cafler/manual-ot-mockup.webp" alt="Work orders manual · mockup">
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/manual-ot-1.webp" alt="Manual · cover"><img src="img/projects/cafler/manual-ot-2.webp" alt="Manual · introduction"></div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/manual-ot-14.webp" alt="Manual · vehicle status"><img src="img/projects/cafler/manual-ot-27.webp" alt="Manual · inspection"></div>
          </div>
        `,
      },
      {
        id: "frame-cafler-8",
        title: "08. Email & Newsletters",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Email & newsletters</h1>
            <p>
              Every new manual is announced to customers by email, with a preview of the manual and a direct download. I also design the internal newsletters — like the quarterly one for Cafler's drivers.
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/mail-manual-ot.webp" alt="Email · work orders manual"><img src="img/projects/cafler/newsletter-conductores.webp" alt="Drivers newsletter · Dec–Feb (excerpt)"></div>
          </div>
        `,
      },
      {
        id: "frame-cafler-9",
        title: "09. Merchandise",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">

            <h1>Merchandise</h1>
            <p>
              Clothing and goodies for the team and for events. For Formula 1 week I designed an "F1 Edition" uniform — polos, jacket and hoodies inspired by racing teamwear, with partner logos on the sleeves.
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px;"><img src="img/projects/cafler/merch-polo-morado.webp" alt="F1 polo · purple"><img src="img/projects/cafler/merch-polo-verde.webp" alt="F1 polo · green"><img src="img/projects/cafler/merch-polo-laterales.webp" alt="F1 polo · sleeves"></div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px;"><img src="img/projects/cafler/merch-chaqueta.webp" alt="F1 jacket"><img src="img/projects/cafler/merch-sudadera-morado.webp" alt="F1 hoodie · purple"><img src="img/projects/cafler/merch-sudadera-blanca.webp" alt="Hoodie · white"></div>

            <h3>Goodies</h3>
            <p>
              A tote bag with a word search hiding Cafler's values, a bottle and mugs decorated with the brand's road lines.
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/merch-totebag.webp" alt="Word search tote bag"><img src="img/projects/cafler/merch-botella.webp" alt="Bottle with sleeve"></div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;"><img src="img/projects/cafler/merch-mug-blanco.webp" alt="Mugs · white"><img src="img/projects/cafler/merch-mug-negro.webp" alt="Mugs · black"></div>
          </div>
        `,
      },
    ],
  },
  grandvoyage: {
    title: "GrandVoyage",
    year: "2024",
    columns: 1,
    role: "Graphic Design, UX/UI, Social Media & Brand Identity",
    description:
      "During my university internship at the travel agency GrandVoyage, I worked on adapting and expanding the brand’s visual communications following a major rebranding led by designer Mario Eskenazi.<br>My work encompassed a wide range of touchpoints—from digital product design (UX/UI) and marketing assets to editorial and print design—ensuring visual consistency, scalability, and seamless alignment with the new identity.",
    tags: [
      "Graphic Design",
      "UX/UI Design",
      "Brand Identity",
      "Email Design",
      "Digital Marketing (Google Ads)",
      "Social Media",
    ],
    tools: ["Figma", "Mailchimp", "Canva"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: NEWSLETTER REDESIGN
      ------------------------------------------------------------- */
      {
        id: "frame-gv-1",
        title: "01. Newsletter Redesign (UX/UI)",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Newsletter Redesign (UX/UI)</h1>
            <p>I led the redesign of GrandVoyage’s email newsletters, bridging Mario Eskenazi’s brand identity with the website design concept by Lasse Johnsen. I focused on modular layouts, typography hierarchy, and UI components (buttons, content blocks) to elevate both usability and brand recognition in user inboxes.</p>
            <img class="artboard-image" src="img/projects/grandvoyage/gv_news_header1.webp" alt="Newsletter Redesign">
            <img class="artboard-image" src="img/projects/grandvoyage/gv_news_header2.webp" alt="Newsletter Redesign">
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: DIGITAL MARKETING & GOOGLE ADS
      ------------------------------------------------------------- */
      {
        id: "frame-gv-2",
        title: "02. Digital Marketing & Google Ads",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Digital Marketing & Google Ads</h1>
            <p><b>Display Campaigns:</b> Designed and adapted multi-format Google Ads display banners across diverse responsive layouts, maintaining visual consistency across screen sizes.</p>
            <p><b>Marketing Templates:</b> Developed customizable Canva templates for the marketing team, empowering them to produce on-brand visual assets efficiently and independently.</p>
            <video data-title="Vertical video ads" src="img/projects/grandvoyage/vertical_ads_web.mp4" autoplay muted loop playsinline controls></video>
            <img src="img/projects/grandvoyage/gv_ads_sizes.webp" alt="Canva Templates">
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 3: PRINT & EDITORIAL DESIGN
      ------------------------------------------------------------- */
      {
        id: "frame-gv-3",
        title: "03. Print & Editorial Design",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Print & Editorial Design</h1>
            <p><b>Poster Campaigns:</b> Created promotional posters following the art direction set by Mireia Roda. By applying stylistic typographic alternates and playful compositions, I reinforced the brand’s signature wordplay and subtle French-inspired tone.</p>
            <img src="img/projects/grandvoyage/gv_posters.webp" alt="Poster Campaigns">
            
            <p><b>Travel Guide:</b> Overhauled an existing travel tips guide, updating layout structures, typography, and visual assets to match the newly established brand identity.</p>
            <img src="img/projects/grandvoyage/guide_multiple.webp" alt="Travel Guide">
            <img src="img/projects/grandvoyage/guide_portada.webp" alt="Travel Guide Spread">
            <img src="img/projects/grandvoyage/guide_4.webp" alt="Travel Guide Spread">
            <img src="img/projects/grandvoyage/guide_app.webp" alt="Travel Guide Spread">
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 4: PRE-REBRANDING PHASE
      ------------------------------------------------------------- */
      {
        id: "frame-gv-4",
        title: "04. Pre-Rebranding Phase",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Pre-Rebranding Phase</h1>
            <p>Prior to the launch of the new identity, I contributed to maintaining and structuring the agency’s legacy brand materials:</p>
            
            <h2>Brand Guidelines & Documentation</h2>
            <p>Authored a comprehensive style guide and specification document (including grid layouts, spacing specs, and component dimensions) to establish consistency across platforms.</p>
            <img src="img/projects/grandvoyage/08.color.webp" alt="Brand Guidelines">
            <img src="img/projects/grandvoyage/07.tipografia.webp" alt="Brand Guidelines">
            <img src="img/projects/grandvoyage/09.elementos_graficos.webp" alt="Brand Guidelines">
            <img src="img/projects/grandvoyage/11.iconografia.webp" alt="Brand Guidelines">
            
            <h2>UX/UI & Web Drafts</h2>
            <p>Developed design proposals to improve usability and visual appeal for legacy website sections, email templates, and digital advertising assets.</p>
            <img src="img/projects/grandvoyage/mail_old_proposal.webp" alt="UX/UI & Web Drafts">
            <img src="img/projects/grandvoyage/mails-manual.webp" alt="UX/UI & Web Drafts">
            <img src="img/projects/grandvoyage/old_ads.webp" alt="UX/UI & Web Drafts">
          </div>
        `,
      },
    ],
  },
  pirates: {
    title: "Un conte de pirates",
    columns: 1,
    year: "2023",
    role: "Editorial Designer & Illustrator",
    description:
      "Visual identity and children's book illustration for the short film 'Un conte de pirates'.",
    tags: ["Editorial", "Illustration", "Character Design", "Layout"],
    software: ["Procreate", "Photoshop", "InDesign", "Illustrator"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & CONTEXT
      ------------------------------------------------------------- */
      {
        id: "frame-pirates-1",
        title: "01. Overview & Context",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Un conte de pirates</h1>
              <span class="badge-year">2023</span>
            </div>
            
            <p class="subtitle">Short Film Props & Prop Book Design</p>

            <div class="info-box">
              <h3>Project Overview</h3>
              <p>
                <em>"Un conte de pirates"</em> is a short film directed by Carla Martínez, Alba Muñoz, and Marina Soriano. I was commissioned to create the visual identity for the film, as well as the physical children’s book featured within the narrative, titled <strong>"El tresor de llum"</strong>.
              </p>
            </div>

            <div style="margin-top:16px;">
              <img src="img/projects/pirates/pirates02.webp" alt="El tresor de llum mockups" >
            </div>

            <h3>My Role</h3>
            <p>
              As the lead illustrator and editorial designer, my goal was to visually bring the story to life through captivating artwork and thoughtful layout design. Developed partly as a university design assignment, this project focused on capturing the charming essence of the story—from expressive character development to detailed environment illustrations.
            </p>

            <div class="tags-wrapper">
              <span class="tag-chip">Illustration</span>
              <span class="tag-chip">Editorial Design</span>
              <span class="tag-chip">Prop Design</span>
              <span class="tag-chip">Visual Identity</span>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: PROCESS & COLLABORATION
      ------------------------------------------------------------- */
      {
        id: "frame-pirates-2",
        title: "02. Creative Process & Collaboration",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Character Design & Layout Process</h1>
            
            <p>
              Designing a prop book for film required a close, iterative collaboration with the directors. We worked hand-in-hand to ensure that both the visual tone and story pacing of the book seamlessly aligned with the film’s narrative direction and emotional arc.
            </p>

            <div class="feature-card">
              <h3>Character Development</h3>
              <p>
                Designing friendly, expressive pirate characters suitable for young audiences while keeping their features distinct for quick recognition on camera.
              </p>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin-top:10px;">
                <img src="img/projects/pirates/pirates03.webp" alt="Character Sketches">
                <img src="img/projects/pirates/pirates04.webp" alt="Character Color Pass">
              </div>
            </div>

            <div class="feature-card">
              <h3>📐 Editorial & Layout</h3>
              <p>
                Balancing text placement and full-spread illustrations to create engaging visual rhythm across every page turn.
              </p>
              <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
                <img src="img/projects/pirates/pirates05.webp" alt="Layout Spreads" >
                <img src="img/projects/pirates/pirates06.webp" alt="Page Grid & Process" >
                <img src="img/projects/pirates/pirates07.webp" alt="Storybook Spreads Overview">
              </div>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 3: LEARNINGS & TAKEAWAYS
      ------------------------------------------------------------- */
      {
        id: "frame-pirates-3",
        title: "03. Key Takeaways & Impact",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Learnings & Impact</h1>
            
            <p>
              Working on <em>"El tresor de llum"</em> allowed me to sharpen both my digital painting techniques and my understanding of children's editorial design. 
            </p>

            <!-- Figma Style Static Comment Box -->
            <div class="figma-comment-inline" >
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                
                <div class="figma-comment-body">
                  "I learned how to craft a visually stimulating, immersive experience tailored for young readers—balancing storytelling clarity with vibrant artistic detail."
                </div>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin:16px 0;">
              <img src="img/projects/pirates/pirates08.webp" alt="Physical Book Spread" >
              <img src="img/projects/pirates/pirates09.webp" alt="Book Mockups Showcase" >
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin-bottom:16px;">
              <img src="img/projects/pirates/pirates10.webp" alt="Interior Spread Detail 1">
              <img src="img/projects/pirates/pirates11.webp" alt="Interior Spread Detail 2" >
            </div>

            <div class="stats-grid">
              <div class="stat-item">
                <strong>100%</strong>
                <span>Original Illustrations</span>
              </div>
              <div class="stat-item">
                <strong>Prop & Brand</strong>
                <span>Dual Deliverables</span>
              </div>
            </div>
          </div>
        `,
      },
    ],
  },
  engrunes: {
    title: "Llençar les engrunes",
    columns: 1,
    year: "2024",
    role: "Writer, Illustrator, UX/UI Designer, Web Developer",
    description:
      "Interactive webcomic and research project about adverse childhood experiences and trauma destigmatization.",
    tags: [
      "Webcomic",
      "Illustration",
      "UX/UI Design",
      "Branding",
      "Web Development",
    ],
    software: ["Procreate", "Photoshop", "Figma", "HTML/CSS/JS"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & CONCEPT
      ------------------------------------------------------------- */
      {
        id: "frame-engrunes-1",
        title: "01. Project Overview & Concept",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Llençar les engrunes</h1>
              <span class="badge-year">2024</span>
            </div>
            
            <p class="subtitle">Interactive Webcomic & Final Degree Project</p>

            <div class="info-box">
              <img src="img/projects/engrunes/engrunes01.webp" alt="Llençar les engrunes - UI Concept" style=" margin-bottom:12px;">
              <h3>Project Overview</h3>
              <p>
                <em>"Llençar les engrunes"</em> ("Throwing the Crumbs") is an artistic and social project created at ERAM University (2024) as my Final Degree Project. It is an interactive webcomic based on research into adverse childhood experiences within the family environment.
              </p>
            </div>

            <h3>Mission & Narrative Focus</h3>
            <p>
              The project aims to contribute to the understanding of childhood trauma and help destigmatize it, guiding readers through their own process of comprehension within a therapeutic framework.
            </p>
            <p>
              Narrated in the first person with a blend of humor and guilt, the story explores dualities such as confronting family dynamics to seek personal well-being, facing panic to overcome it, and questioning if an aggressor can also be a victim.
            </p>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline">
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body" >
                  "How can childhood traumas be overcome? Is it possible to stop feeling resentment and maintain a cordial relationship with your aggressor? And what if the aggressor is also a victim?"
                </div>
              </div>
            </div>

            <div class="tags-wrapper">
              <span class="tag-chip">Interactive Webcomic</span>
              <span class="tag-chip">UX/UI</span>
              <span class="tag-chip">Branding</span>
              <span class="tag-chip">Web Development</span>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: BRANDING, BIBLE & ILLUSTRATION
      ------------------------------------------------------------- */
      {
        id: "frame-engrunes-2",
        title: "02. Branding, Art & Project Bible",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>Branding & Visual Identity</h2>
            
            <p>
              I developed the project's overall branding strategy, defining its visual style, tone, and messaging to build a cohesive identity across platforms.
            </p>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin:12px 0;">
              <img src="img/projects/engrunes/engrunes02.webp" alt="Logo Breakdown">
              <img src="img/projects/engrunes/engrunes03.webp" alt="Typography & Palette" >
            </div>

            <div class="feature-card">
              <h3>Project Proposal Bible & Process</h3>
              <p>
                I authored a complete proposal bible detailing character development, narrative timelines, and thematic summaries to guide every creative stage.
              </p>
              
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin-top:10px;">
                <video data-title="Digital Drawing Process" src="img/projects/engrunes/engrunes02.mp4" autoplay muted loop playsinline></video>
                <video data-title="Sketching Process" src="img/projects/engrunes/engrunes03.mp4" autoplay muted loop playsinline></video>
              </div>

              <div style="margin-top:10px;">
                <img src="img/projects/engrunes/engrunes11.webp" alt="Character Concept Art">
              </div>
            
              <img src="img/projects/engrunes/engrunes07.webp" alt="Physical Editorial Bible" >
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 3: WEB DEVELOPMENT & EXPERIENCE
      ------------------------------------------------------------- */
      {
        id: "frame-engrunes-3",
        title: "03. Web Development & Interactive Experience",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>UX/UI & Web Development</h2>
            
            <p>
              Built using HTML, CSS, and JavaScript. I structured the user flow, information architecture, and wireframes to map out every screen and interaction from concept to production.
            </p>

            <div class="feature-card">
            <video data-title="Paper Wireframe Process" src="img/projects/engrunes/engrunes04.mp4" autoplay muted loop playsinline></video>
              <h3>UX Flow & Wireframing</h3>
              <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
                
                <img src="img/projects/engrunes/engrunes04.webp" alt="User Flow Diagram">
                <img src="img/projects/engrunes/engrunes05.webp" alt="Wireframe Components">
                <img src="img/projects/engrunes/engrunes06.webp" alt="UI Design Screens">
              </div>
            </div>

            <h3>Final Mockups & Prototype</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin:12px 0;">
              <img src="img/projects/engrunes/engrunes08.webp" alt="Mobile App UI Mockup">
              <img src="img/projects/engrunes/engrunes09.webp" alt="Desktop Web Presentation">
            </div>

            <div style="margin-bottom:16px;">
              <img src="img/projects/engrunes/engrunes12.webp" alt="Booklet Presentation">
            </div>

            <!-- Read Webcomic Action Box -->
            <div class="action-box" style="background:#f8fafc; border:1px solid #e2e8f0; padding:16px; border-radius:12px; text-align:center;">
              <p style="font-size:12px; color:#64748b; margin-bottom:12px;">
                You can read the first chapter of the comic. <em>Note: Some content may appear blurred for narrative development purposes.</em>
              </p>
              <a href="https://martapey.github.io/engrunes" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display:inline-block; text-decoration:none;">
                Read the webcomic ↗
              </a>
            </div>

          </div>
        `,
      },
    ],
  },
  creactive: {
    title: "Creactive",
    columns: 1,
    year: "2022",
    role: "UX/UI Designer & Brand Designer",
    description:
      "A creative challenge app designed to inspire daily artistic practice across multiple disciplines.",
    tags: ["UX/UI Design", "App Design", "Brand Identity", "Prototyping"],
    software: ["Figma", "Illustrator", "Photoshop"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & CONCEPT
      ------------------------------------------------------------- */
      {
        id: "frame-creactive-1",
        title: "01. App Overview & Concept",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Creactive</h1>
              <span class="badge-year">2022</span>
            </div>
            
            <p class="subtitle">Daily Creative Challenge App • University Project</p>

            <div class="info-box">
              <img src="img/projects/portada-creactive.webp" alt="Creactive" style="width:100%; height:auto; border-radius:8px; margin-bottom:12px;">
              <h3>Project Overview</h3>
              <p>
                <strong>CREACTIVE</strong> is a mobile application designed to empower the artist within everyone. Developed as a university project, the platform delivers daily creative prompts tailored to users' preferred artistic disciplines—including photography, drawing, creative writing, video, and audio production.
              </p>
            </div>

            <h3>Concept & Goals</h3>
            <p>
              The core goal was to build a fun, engaging, and frictionless environment where users can build a daily creative habit, explore different artistic mediums, and complete prompts effortlessly.
            </p>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline" >
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "Our main focus was designing daily creative prompts across photography, drawing, writing, video, and audio—creating seamless interactions that encourage consistent artistic expression."
                </div>
              </div>
            </div>

            <div class="tags-wrapper">
              <span class="tag-chip">UX/UI Design</span>
              <span class="tag-chip">Mobile App</span>
              <span class="tag-chip">Branding</span>
              <span class="tag-chip">Gamification</span>
            </div>
            <img src="img/projects/creactive/creactive03.webp" alt="Creactive Mobile Screens Showcase" style="width:100%; height:auto; border-radius:8px; margin-bottom:12px;">
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: UX/UI DESIGN & INTERACTION
      ------------------------------------------------------------- */
      {
        id: "frame-creactive-2",
        title: "02. UX/UI & Interface Design",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>User Experience & Interface Design</h2>
            
            <p>
              My responsibility focused on conceptualizing and designing the complete user interface, establishing clear visual hierarchies, intuitive layouts, and playful interactive elements.
            </p>

            <div class="feature-card">
              <h3>Key Design Pillars</h3>
              <ul style="margin: 8px 0 0 18px; padding: 0; font-size: 12.5px; color: #475569; line-height: 1.6;">
                <li><strong>User-Centered Workflows:</strong> Streamlined prompt submission and navigation based on user behaviors and preferences.</li>
                <li><strong>Multi-Disciplinary Hub:</strong> Dedicated UI views optimized for distinct creative formats (drawing canvas, audio recorder, photo uploader).</li>
                <li><strong>Visual Consistency:</strong> Vibrant color palettes, typography, and visual cues that keep the experience dynamic and inspiring.</li>
              </ul>
            </div>

            <div style="margin-top: 14px;">
              <img src="img/projects/creactive/creactive02.webp" alt="Creactive App Grid & Interface Overview" style="width:100%; height:auto; border-radius:8px;">
            </div>
          </div>
        `,
      },
    ],
  },
  exhibart: {
    title: "Exhibart",
    columns: 1,
    year: "2022",
    role: "Project Director, UX/UI Designer & Brand Designer",
    description:
      "A digital platform allowing artists to showcase their work through immersive virtual exhibitions.",
    tags: [
      "UX/UI Design",
      "Branding",
      "Motion Design",
      "Video Editing",
      "Conceptual Design",
    ],
    software: ["Figma", "Photoshop", "Illustrator", "Premiere", "AfterEffects"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & CONCEPT
      ------------------------------------------------------------- */
      {
        id: "frame-exhibart-1",
        title: "01. Platform Overview & Branding",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Exhibart</h1>
              <span class="badge-year">2022</span>
            </div>
            
            <p class="subtitle">Virtual Art Exhibition Platform • University Marketing Project</p>

            <div class="info-box">
              <img src="img/projects/portada-exhibart.webp" alt="Exhibart Tablet Mockup" style="width:100%; height:auto; border-radius:8px; margin-bottom:12px;">
              <h3>Project Overview</h3>
              <p>
                <strong>Exhibart</strong> is a conceptual web platform designed for artists who want to curate and showcase their work in a unique, immersive way through interactive digital exhibitions. Developed as a group project for a university marketing assignment, it explores new ways to connect creators with global audiences.
              </p>
            </div>

            <h3>My Role & Creative Direction</h3>
            <p>
              I served as the project director and lead designer, overseeing the brand strategy, visual style, and cross-platform identity. My responsibilities encompassed defining the brand tone and messaging, designing the logo and its motion graphics, editing the promotional video spot, and architecting the complete UX/UI experience.
            </p>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline" >
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "Exhibart was developed as a university marketing proposal to explore how virtual galleries and digital exhibitions can provide independent artists with a fresh, interactive stage for their work."
                </div>
              </div>
            </div>

            <div class="tags-wrapper">
              <span class="tag-chip">UX/UI Design</span>
              <span class="tag-chip">Brand Identity</span>
              <span class="tag-chip">Motion Design</span>
              <span class="tag-chip">Video Spot</span>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: UX/UI DESIGN & VIRTUAL EXHIBITIONS
      ------------------------------------------------------------- */
      {
        id: "frame-exhibart-2",
        title: "02. UX/UI & Virtual Gallery Experience",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>User Experience & Web Interfaces</h2>
            
            <p>
              The web interface combines clean editorial layouts with 3D spatial viewing modes, allowing visitors to navigate curated virtual art galleries seamlessly from any browser.
            </p>

            
              <img src="img/projects/exhibart/exhibart1.webp" alt="Exhibart Homepage Overview" style="width:100%; height:auto; border-radius:6px; margin-bottom:12px;">
              

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:14px;">
              <img src="img/projects/exhibart/exhibart2.webp" alt="Article & Editorial View">
              <img src="img/projects/exhibart/exhibart5.webp" alt="Artist Profile Page">
            </div>

            <div class="feature-card">
              <h3>Virtual Gallery Exploration</h3>
              <p>
                In addition to standard artwork feeds, the UI features an interactive 3D virtual showroom where users can explore exhibitions in a spatial environment.
              </p>
              
              <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                  <img src="img/projects/exhibart/exhibart7.webp" alt="3D Virtual Room Perspective 1">
                  <img src="img/projects/exhibart/exhibart8.webp" alt="3D Virtual Room Perspective 2">
                </div>
              </div>
            </div>
          </div>
        `,
      },
      {
        id: "frame-exhibart-3",
        title: "03. Video Spot & Motion Graphics",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>Video Spot & Motion Graphics</h2>
            
            <p>
              We produced a promotional video spot to showcase the platform's features and immersive experience. The motion graphics were designed to align with the brand's visual identity, creating a cohesive narrative that highlights the unique aspects of Exhibart.
            </p>

            
              <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1230190340?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Exhibart_spot"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
              

          </div>
        `,
      },
    ],
  },
  clarobscurs: {
    title: "Clarobscurs",
    columns: 1,
    year: "2023",
    role: "Brand Identity, Graphic & UI/UX Designer, Motion Animator",
    description:
      "A multi-platform transmedia universe exploring imposter syndrome, artistic self-sabotage, and the burden of unexpected success.",
    tags: [
      "Transmedia",
      "Branding",
      "UX/UI Design",
      "Motion Graphics",
      "Editorial Design",
    ],
    software: ["AfterEffects", "Photoshop", "Illustrator", "Figma", "InDesign"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & TRANSMEDIA CONCEPT
      ------------------------------------------------------------- */
      {
        id: "frame-clarobscurs-1",
        title: "01. Project Overview & Transmedia Universe",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Clarobscurs</h1>
              <span class="badge-year">2023</span>
            </div>
            
            <p class="subtitle">Transmedia Project • Film, Web Platform & Art Installation</p>

            <div class="info-box">
              <video class="artboard-video" src="img/projects/clarobscurs/Clarobscurs_title.mp4" autoplay
                muted
                loop
                playsinline></video>
              <h3>Concept & Narrative</h3>
              <p>
                <strong>Clarobscurs</strong> is a transmedia narrative project exploring the internal contradictions that emerge when success arrives unexpectedly. Focusing on imposter syndrome, self-sabotage, and the persistence of inner dissatisfaction, the project provides an intimate window into the psychological struggles faced by artists under pressure.
              </p>
            </div>

            <h3>Core Transmedia Components</h3>
            <ul style="margin: 8px 0 0 18px; padding: 0; font-size: 12.5px; color: #475569; line-height: 1.6;">
              <li><strong>Short Film & Documentary:</strong> Twin audiovisual pieces following an artist's internal friction with sudden success and creative vulnerability.</li>
              <li><strong>Interactive Web Platform:</strong> A digital portal where viewers delve deeper into the artist's thoughts, emotions, and crew details.</li>
              <li><strong>Physical Art Installation:</strong> A sensory experience co-created with the team to physically embody emotional highs and lows.</li>
              <li><strong>Social & Crowdfunding:</strong> Strategic branding for Barroca Films, Kickstarter campaigns, and Instagram engagement.</li>
            </ul>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline" >
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "'Clarobscurs' reflects on the complex emotional landscape of the artistic mind—exploring how external recognition can clash with internal insecurities."
                </div>
              </div>
            </div>

            <div class="tags-wrapper">
              <span class="tag-chip">Transmedia Narrative</span>
              <span class="tag-chip">Short Film</span>
              <span class="tag-chip">UX/UI</span>
              <span class="tag-chip">Motion Design</span>
            </div>
            <img src="img/projects/clarobscurs/clarobscurs04.webp" alt="Editorial Dossier & Printed Assets" >
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: BRANDING, EDITORIAL & MOTION GRAPHICS
      ------------------------------------------------------------- */
      {
        id: "frame-clarobscurs-2",
        title: "02. Visual Identity & Animated Credits",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>Branding & Motion Aesthetics</h2>
            
            <p>
              I led the overall visual identity for Barroca Films and the <em>Clarobscurs</em> universe, crafting graphic assets, posters, and marketing materials tailored for crowdfunding platforms like Kickstarter.
            </p>

            <div style="margin: 12px 0;">
            <img src="img/projects/clarobscurs/clarobscurs03.webp" alt="Clarobscurs Branding">
              <img src="img/projects/clarobscurs/clarobscurs02.webp" alt="Clarobscurs Official Film Posters">
            </div>

            <div class="feature-card">
              <h3>Watercolor Motion Animation</h3>
              <p>
                Using AfterEffects, I animated the title sequence and end credits of the short film, employing organic watercolor textures to mirror the fluid, uncertain emotional states of the narrative.
              </p>
              
               <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                <video data-title="Watercolor Title Animation Detail" src="img/projects/clarobscurs/clarobscurs_credits02.mp4" autoplay muted loop playsinline></video>
                <video data-title="Watercolor Title Animation Detail" src="img/projects/clarobscurs/clarobscurs_credits03.mp4" autoplay muted loop playsinline></video>
              </div>
            </div>

          
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 3: DIGITAL INTERACTION & SOCIAL MEDIA
      ------------------------------------------------------------- */
      {
        id: "frame-clarobscurs-3",
        title: "03. UX/UI & Digital Ecosystem",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>Interactive Web Platform & Social Strategy</h2>
            
            <p>
              The digital experience extends the film's narrative through an interactive platform designed to give viewers an intimate, structured look at the protagonist's mind and project creation process.
            </p>

            <div class="feature-card">
              <h3>💻 Responsive UI & Layouts</h3>
              <p>
                Carefully crafted color palettes, typography, and intuitive navigation structures designed for both desktop and mobile web experiences.
              </p>
              
              <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                <img src="img/projects/clarobscurs/clarobscurs03.webp" alt="Web Layout Design & Color Palette">
                <img src="img/projects/clarobscurs/clarobscurs05.webp" alt="Cross-Device Web & Mobile UI Showcase">
              </div>
            </div>
          </div>
        `,
      },
    ],
  },
  "sa-matao": {
    title: "Sa matao",
    columns: 1,
    year: "2023",
    role: "3D Motion Designer & Animator",
    description:
      "3D animation and Motion Path exploration created in Blender featuring a humorous, action-packed vehicle sequence.",
    tags: ["3D Animation", "Motion Path", "Blender", "Character Design"],
    software: ["Blender", "AfterEffects", "Premiere"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: VIDEO & PROJECT OVERVIEW
      ------------------------------------------------------------- */
      {
        id: "frame-samatao-1",
        title: "01. 3D Animation & Video Showpiece",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Sa matao</h1>
              <span class="badge-year">2023</span>
            </div>
            
            <p class="subtitle">3D Motion Path Study • Animation Practice</p>

            <!-- Responsive Video Embed Container -->
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin-bottom: 16px; background: #000;">
              <iframe 
                src="https://www.youtube.com/embed/q1gp_0kNRBU?si=UwGLbXFjg5iD-Wof" 
                title="Sa matao | 3D Motion Path" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"
              ></iframe>
            </div>

            <div class="info-box">
              <h3>Project Overview</h3>
              <p>
                <strong>"Sa matao"</strong> is a 3D short animation focused on practicing camera tracking, complex motion paths, and stylized physics. The narrative features a stylized ice cream truck driven by a masked character being pursued by a police car along a mountain cliff road—ending with an unexpected, humorous twist.
              </p>
            </div>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline" >
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "A fun motion path experiment focused on camera dynamics, stylized low-poly 3D modeling, and keyframe animation timing."
                </div>
              </div>
            </div>

            <div class="tags-wrapper">
              <span class="tag-chip">3D Motion Path</span>
              <span class="tag-chip">Blender</span>
              <span class="tag-chip">Camera Tracking</span>
              <span class="tag-chip">Stylized Animation</span>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: TECHNICAL DETAILS & WORKFLOW
      ------------------------------------------------------------- */
      {
        id: "frame-samatao-2",
        title: "02. Technical Focus & Animation Workflow",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>Technical Breakdown</h2>
            
            <p>
              The primary technical goal was mastering motion paths in 3D space—animating multiple independent objects (vehicles, wheels, environmental elements, and dynamic cameras) constrained to complex curves.
            </p>

            <div class="feature-card">
              <h3>Key Aspects Explored</h3>
              <ul style="margin: 8px 0 0 18px; padding: 0; font-size: 12.5px; color: #475569; line-height: 1.6;">
                <li><strong>Motion Path Constraints:</strong> Smooth vehicle navigation along winding cliffside paths with realistic tilt and acceleration curves.</li>
                <li><strong>Dynamic Depth of Field:</strong> Cinematic camera movement shifting focus between the foreground characters and distant landscapes.</li>
                <li><strong>Stylized Aesthetics:</strong> Pastel color palette combined with cartoonish proportions, custom text graphics, and playful sound effects.</li>
              </ul>
            </div>
          </div>
        `,
      },
    ],
  },
  "cube-prompt": {
    title: "Cube Prompt",
    columns: 1,
    year: "2023",
    role: "3D Animator & Motion Designer",
    description:
      "A 3D motion study based on a cube prompt challenge, exploring dynamic transformations, mechanics, and camera animation.",
    tags: [
      "3D Animation",
      "Motion Graphics",
      "ArtStation Showcase",
      "3D Modeling",
    ],
    software: ["Blender", "AfterEffects", "Premiere"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & ARTSTATION SHOWCASE
      ------------------------------------------------------------- */
      {
        id: "frame-cubeprompt-1",
        title: "01. Project Overview & Animation Showcase",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Cube Prompt</h1>
              <span class="badge-year">2023</span>
            </div>
            
            <p class="subtitle">3D Motion Challenge • Dynamic Geometry Study</p>

            <div class="info-box">
              <h3>Project Overview</h3>
              <p>
                <strong>Cube Prompt</strong> is a 3D animation exercise designed around the creative constraint of transforming a simple cube into a complex, dynamic sequence. The project focuses on timing, mechanical transitions, lighting, and cinematic camera tracking in a 3D space.
              </p>
            </div>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline" >
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "A fun creative exercise pushing the limits of 3D motion design: taking a single cube as a starting point and building a fluid, engaging animation sequence."
                </div>
              </div>
            </div>

            <!-- ArtStation External Action Box -->
           

<div class="video-widget-container" style="position: relative; width: 100%; border-radius: 12px; overflow: hidden; margin-top: 16px; border: 1px solid #383838; background: #18181b;">
  <video 
    autoplay 
    loop 
    muted 
    playsinline 
    controls
    style="width: 100%; height: auto; display: block; border-radius: 12px;"
  >
    <source src="img/projects/cube-prompt/martapey-prompt.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

            <div class="tags-wrapper" style="margin-top:16px;">
              <span class="tag-chip">3D Animation</span>
              <span class="tag-chip">ArtStation</span>
              <span class="tag-chip">Motion Study</span>
              <span class="tag-chip">Geometry Transformation</span>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: TECHNICAL FOCUS & LEARNINGS
      ------------------------------------------------------------- */
      {
        id: "frame-cubeprompt-2",
        title: "02. Animation Mechanics & Visual Style",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h2>Technical Breakdown</h2>
            
            <p>
              Starting from a primitive geometry, the goal was to experiment with complex mechanical rigging, keyframe easing, and material shading to produce a polished motion graphics piece.
            </p>

            <div class="feature-card">
              <h3>Focus Areas</h3>
              <ul style="margin: 8px 0 0 18px; padding: 0; font-size: 12.5px; color: #475569; line-height: 1.6;">
                <li><strong>Transformative Motion:</strong> Smooth mechanical transitions unfolding from a single cube structure.</li>
                <li><strong>Camera Dynamics:</strong> Synchronized camera pans and zooms to accentuate weight and impact.</li>
                <li><strong>Lighting & Texturing:</strong> High-contrast studio lighting to highlight surfaces, metallic edges, and geometric reflections.</li>
              </ul>
            </div>
          </div>
        `,
      },
    ],
  },
  brainsick: {
    title: "Brainsick",
    columns: 1,
    year: "2020",
    role: "Editorial Designer & Illustrator",
    description:
      "An illustrated editorial catalog bridging artistic sensitivity and clinical information to destigmatize mental health conditions.",
    tags: [
      "Editorial Design",
      "Illustration",
      "Layout Design",
      "Visual Storytelling",
      "Book Design",
    ],
    software: ["Photoshop", "Illustrator", "InDesign"],
    artboards: [
      /* -------------------------------------------------------------
         CARD 1: OVERVIEW & CONCEPT
      ------------------------------------------------------------- */
      {
        id: "frame-brainsick-1",
        title: "01. Project Overview & Editorial Concept",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <div class="card-header">
              <h1>Brainsick</h1>
              <span class="badge-year">2020</span>
            </div>
            
            <p class="subtitle">Illustrated Editorial Catalog • Mental Health Exploration</p>

            <div class="info-box">
              <h3>Project Overview</h3>
              <p>
                <strong>Brainsick</strong> is an editorial publication that delves into the complex landscape of mental health through a curated, illustrated catalog. The project bridges artistic expression with clinical insights, providing an empathetic, informative, and evocative perspective on various psychological conditions.
              </p>
            </div>

            <h3>Core Objective</h3>
            <p>
              The catalog aims to destigmatize mental health disorders—ranging from generalized anxiety and depression to lesser-known conditions—by combining accessible clinical descriptions (symptoms, causes, and treatments) with deep visual metaphors that foster dialogue and understanding.
            </p>

            <!-- Custom Figma Comment Box -->
            <div class="figma-comment-inline">
              <div class="figma-comment-box open">
                <div class="figma-comment-header">
                  <div class="figma-comment-user">
                    <img src="img/avatars/perfil.webp" class="figma-comment-avatar" alt="Marta Pey">
                    <span class="figma-comment-author">Marta Pey</span>
                  </div>
                  <span class="figma-comment-badge">Author</span>
                </div>
                <div class="figma-comment-body">
                  "Brainsick serves as a visual and emotional testimony to human psychological complexity, using art and editorial layout to translate internal struggles into powerful visual narratives."
                </div>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:14px;">
              <img src="img/projects/brainsick/brainsick02.webp" alt="Editorial Spread Detail 1">
              <img src="img/projects/brainsick/brainsick03.webp" alt="Editorial Spread Detail 2">
            </div>

            <div class="tags-wrapper" style="margin-top:16px;">
              <span class="tag-chip">Editorial Design</span>
              <span class="tag-chip">Conceptual Illustration</span>
              <span class="tag-chip">Mental Health</span>
              <span class="tag-chip">Print Publication</span>
            </div>
          </div>
        `,
      },

      /* -------------------------------------------------------------
         CARD 2: ILLUSTRATION GALLERY & LAYOUT
      ------------------------------------------------------------- */
      {
        id: "frame-brainsick-2",
        title: "02. Visual Metaphors & Illustration Series",
        w: 720,
        h: "auto",
        content: `
          <div class="artboard-card">
            <h1>Conceptual Illustration Series</h1>
            
            <p>
              Each illustration relies on symbolic imagery, dynamic color palettes, and expressive figurative drawing to illuminate the internal, lived experiences of individuals coping with mental disorders.
            </p>

            <div class="feature-card" style="margin-bottom:14px;">
              <h3>Psychological Art Series</h3>
              <p>
                A multi-page visual exploration translating clinical conditions into surreal, expressive art.
              </p>
            </div>

            <!-- Illustration Grid -->
            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:10px;">
              <div>
                <img src="img/projects/brainsick/01_trastorn_ansietat.webp" alt="Anxiety Disorder Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">Anxiety</span>
              </div>
              <div>
                <img src="img/projects/brainsick/02_des_neurologic.webp" alt="Neurological Disorder Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">Neurological</span>
              </div>
              <div>
                <img src="img/projects/brainsick/05_trastorn_son.webp" alt="Sleep Disorder Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">Sleep Disorder</span>
              </div>
              <div>
                <img src="img/projects/brainsick/06_trastorn_bipolar.webp" alt="Bipolar Disorder Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">Bipolar</span>
              </div>
              <div>
                <img src="img/projects/brainsick/07_trastorn_alimentari.webp" alt="Eating Disorder Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">Eating Disorder</span>
              </div>
              <div>
                <img src="img/projects/brainsick/08_trastorn_limit_personalitat.webp" alt="Borderline Personality Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">Borderline</span>
              </div>
              <div>
                <img src="img/projects/brainsick/09_trastorn_obsessiu_compulsiu.webp" alt="OCD Illustration">
                <span style="font-size:11px; color:#888; display:block; margin-top:4px; text-align:center;">OCD</span>
              </div>
            </div>
          </div>
        `,
      },
    ],
  },
  "about-me": {
    title: "Marta Pey — About Me",
    columns: 1,
    year: "2026",
    role: "Designer & Illustrator",
    description:
      "Profile settings screens, inspired by professional networking platforms, presenting my bio, experience, education and skills.",
    tags: ["UI/UX", "Profile Design", "Bio", "Experience", "Skills"],
    software: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "AfterEffects",
      "Premiere",
      "Procreate",
      "Blender",
      "Canva",
      "Mailchimp",
      "VSCode",
    ],
    artboards: [
      /* -------------------------------------------------------------
         PANTALLA 1: PERFIL PÚBLICO
      ------------------------------------------------------------- */
      {
        id: "frame-about-profile",
        title: "01. Public Profile",
        w: 960,
        h: "auto",
        content: pfScreen(
          "Public profile",
          `
          <section class="pf-card pf-intro">
            <div class="pf-cover">
              <img src="img/commissions/web/comm-illustration-crop.webp" alt="">
            </div>
            <div class="pf-intro-body">
              <img class="pf-avatar" src="img/avatars/perfil.webp" alt="Marta Pey">
              <div class="pf-intro-edit">${pfEditBtn("Edit intro")}</div>
              <h1 class="pf-name">Marta Pey</h1>
              <p class="pf-headline">Designer & Illustrator · Graphic design, illustration and UX/UI</p>
              <p class="pf-meta">Barcelona, Spain · <span class="pf-link">Contact info</span></p>
              <p class="pf-meta">Autocafler S.L · Escola Universitària ERAM</p>
              <div class="pf-actions">
                <span class="pf-btn pf-btn-primary">Open to commissions</span>
                <span class="pf-btn">Add profile section</span>
                <span class="pf-btn">More</span>
              </div>
              <div class="pf-status-card">
                <strong>Open to commissions</strong>
                <span>Digital illustration, portraits and custom artwork</span>
                <span class="pf-link">Show details</span>
              </div>
            </div>
          </section>

          <section class="pf-card">
            <div class="pf-card-head"><h3>About</h3>${pfEditBtn()}</div>
            <p class="pf-text">Hello! I'm Marta Pey, a passionate artist and designer with a love for creativity and visual storytelling. With a background in both traditional and digital art, I enjoy exploring various mediums to bring my ideas to life. I believe that art has the power to evoke emotions and connect people.</p>
          </section>

          <section class="pf-card">
            <div class="pf-card-head"><h3>Contact & socials</h3>${pfEditBtn()}</div>
            <div class="pf-contact">
              <div class="pf-contact-copy">
                <a class="pf-contact-row" href="mailto:martapey12@gmail.com">${pfIcon("mail")}<span>martapey12@gmail.com</span></a>
                ${pfCopyBtn("martapey12@gmail.com", "email address")}
              </div>
              <div class="pf-contact-row">${pfIcon("pin")}<span>Barcelona, Spain</span></div>
            </div>
            <div class="pf-socials">
              ${PF_SOCIALS.map(
                ([name, url, icon]) =>
                  `<a class="pf-social" href="${url}" target="_blank" rel="noopener noreferrer"><img src="img/icons/${icon}.svg" alt="">${name}</a>`,
              ).join("")}
            </div>
          </section>
        `,
        ),
      },

      /* -------------------------------------------------------------
         PANTALLA 2: EDITAR PRESENTACIÓN
      ------------------------------------------------------------- */
      {
        id: "frame-about-intro",
        title: "02. Edit Intro",
        w: 960,
        h: "auto",
        content: pfScreen(
          "Edit intro",
          `
          <section class="pf-card">
            <div class="pf-card-head">
              <h3>Edit intro</h3>
              <span class="pf-required">* Indicates required</span>
            </div>
            <div class="pf-form">
              ${pfField({ label: "Full name", value: "Marta Pey", icon: "profile.svg", required: true })}
              ${pfField({ label: "Headline", value: "Designer & Illustrator", icon: "icon-edit.svg", required: true })}
              ${pfField({ label: "Current position", value: "Creative Graphic Designer & Video Content Creator · Autocafler S.L", icon: "icon-briefcase.svg" })}
              ${pfField({ label: "Education", value: "Escola Universitària ERAM, Universitat de Girona", icon: "icon-teacher.svg" })}
              ${pfField({ label: "Country / Region", value: "Spain", icon: "icon-location.svg", required: true })}
              ${pfField({ label: "City", value: "Barcelona", icon: "icon-home-2.svg" })}
              ${pfField({ label: "Email", value: "martapey12@gmail.com", icon: "icon-mail.svg", copy: true })}
              ${pfField({ label: "Languages", value: "Spanish, Catalan, English", icon: "icon-chat-round.svg" })}
            </div>
            <div class="pf-form-footer">
              <span class="pf-btn">Cancel</span>
              <span class="pf-btn pf-btn-primary">Save</span>
            </div>
          </section>
        `,
        ),
      },

      /* -------------------------------------------------------------
         PANTALLA 3: EXPERIENCIA
      ------------------------------------------------------------- */
      {
        id: "frame-about-experience",
        title: "03. Experience",
        w: 960,
        h: "auto",
        content: pfScreen(
          "Experience",
          `
          <section class="pf-card">
            <div class="pf-card-head">
              <h3>Experience</h3>
              <div class="pf-head-actions"><span class="pf-icon-btn" title="Add position">${pfIcon("plus", 16)}</span>${pfEditBtn()}</div>
            </div>
            ${pfEntry({
              logo: "img/about/icon_cafler.webp",
              title: "Creative Graphic Designer & Video Content Creator",
              sub: "Autocafler S.L",
              meta: "May 2025 – Present",
              chips: ["Brand identity", "Deck design", "Web design & dev", "Social media", "Video editing", "Merch", "Onboarding kits", "Marketing", "Mailing"],
            })}
            ${pfEntry({
              logo: "img/about/icon_grandvoyage.webp",
              title: "Graphic Designer & Marketing Intern",
              sub: "GrandVoyage A2C Travel, S.L · Internship",
              meta: "Feb 2024 – Aug 2024 · 7 mos",
              chips: ["Brand identity", "Advertising campaigns", "Promotional content", "Newsletter", "UX & UI design"],
            })}
          </section>

          <section class="pf-card">
            <div class="pf-card-head">
              <h3>Mentorship & teaching</h3>
              <div class="pf-head-actions"><span class="pf-icon-btn" title="Add position">${pfIcon("plus", 16)}</span>${pfEditBtn()}</div>
            </div>
            ${pfEntry({
              icon: "icon-pencil.svg",
              iconColor: "#22c55e",
              title: "Traditional & Digital Drawing Teacher",
              sub: "Private teacher",
              meta: "2023 – 2025",
              chips: ["Graphite drawing", "Traditional drawing techniques", "Color theory", "Digital drawing (Procreate)"],
            })}
            ${pfEntry({
              icon: "pen-tool.svg",
              iconColor: "#6366f1",
              title: "Audiovisual Design Tutor",
              sub: "Classes & guidance in interactive design",
              meta: "2023 – 2025",
              chips: ["Photoshop", "Illustrator", "InDesign", "Premiere", "Figma", "Blender", "Maya"],
            })}
          </section>
        `,
        ),
      },

      /* -------------------------------------------------------------
         PANTALLA 4: FORMACIÓN
      ------------------------------------------------------------- */
      {
        id: "frame-about-education",
        title: "04. Education",
        w: 960,
        h: "auto",
        content: pfScreen(
          "Education",
          `
          <section class="pf-card">
            <div class="pf-card-head">
              <h3>Education</h3>
              <div class="pf-head-actions"><span class="pf-icon-btn" title="Add education">${pfIcon("plus", 16)}</span>${pfEditBtn()}</div>
            </div>
            ${pfEntry({
              logo: "img/about/icon_eram.webp",
              title: "Escola Universitària ERAM, Universitat de Girona",
              sub: "Audiovisual Communication and Multimedia Degree",
              meta: "2019 – 2024",
            })}
            ${pfEntry({
              logo: "img/about/icon_mestres.webp",
              title: "Institut Josep Mestres i Busquets",
              sub: "Artistic Baccalaureate",
              meta: "2017 – 2019",
            })}
            ${pfEntry({
              logo: "img/about/icon_mediterrania.webp",
              title: "Institut Mediterrània",
              sub: "Compulsory Secondary Education (ESO)",
              meta: "2013 – 2017",
            })}
          </section>
        `,
        ),
      },

      /* -------------------------------------------------------------
         PANTALLA 5: APTITUDES Y HERRAMIENTAS
      ------------------------------------------------------------- */
      {
        id: "frame-about-skills",
        title: "05. Skills & Tools",
        w: 960,
        h: "auto",
        content: pfScreen(
          "Skills & tools",
          `
          <section class="pf-card">
            <div class="pf-card-head">
              <h3>Skills</h3>
              <div class="pf-head-actions"><span class="pf-icon-btn" title="Add skill">${pfIcon("plus", 16)}</span>${pfEditBtn()}</div>
            </div>
            <div class="pf-skill-list">
              ${[
                ["Digital illustration", "icon-brush.svg", "#22c55e"],
                ["Traditional drawing", "icon-pencil.svg", "#84cc16"],
                ["Brand identity", "icon-color-swatch.svg", "#f97316"],
                ["Web design & development", "icon-window-code-1.svg", "#14b8a6"],
                ["Editorial design", "book-square.svg", "#eab308"],
                ["3D modeling & animation", "3dcube.svg", "#8b5cf6"],
                ["UI/UX design", "mobile-programming.svg", "#0ea5e9"],
              ]
                .map(
                  ([skill, icon, color]) =>
                    `<div class="pf-skill"><span class="pf-skill-icon" style="--tag-color:${color}">${pfTintIcon(icon, color, 16)}</span>${skill}</div>`,
                )
                .join("")}
            </div>
          </section>

          <section class="pf-card">
            <div class="pf-card-head"><h3>Software</h3>${pfEditBtn()}</div>
            <div class="pf-software">
              ${PF_SOFTWARE.map(
                ([name, icon]) =>
                  `<div class="pf-tool"><img src="img/software/${icon}.png" alt="">${name}</div>`,
              ).join("")}
            </div>
          </section>

          <section class="pf-card">
            <div class="pf-card-head"><h3>Languages</h3>${pfEditBtn()}</div>
            <div class="pf-contact">
              ${["Spanish", "Catalan", "English"]
                .map((lang) => `<div class="pf-contact-row">${pfIcon("language")}<span>${lang}</span></div>`)
                .join("")}
            </div>
          </section>
        `,
        ),
      },
    ],
  },
  commissions: {
    title: "Commissions",
    columns: 1,
    year: "2024 - 2026",
    role: "UX/UI Designer & Illustrator",
    description:
      "A marketplace-style commission page, inspired by platforms like Etsy and Fiverr, where clients can browse packages, compare prices and request custom artwork.",
    tags: ["UX/UI Design", "E-commerce", "Marketplace UI", "Commissions"],
    software: ["Figma", "HTML5/CSS3", "JavaScript"],

    // Orden = orden de las pestañas en la tarjeta de precios
    packages: {
      line: {
        label: "Line",
        title: "Digital line portrait",
        price: "From 5€",
        desc: "A clean line-art portrait of one character, with a preliminary sketch for your approval.",
        delivery: "3 day delivery",
        size: "A3 size",
        revisions: "2 revisions",
        format: "Digital",
        examples: ["lineart-02", "line-full-body-01", "line-full-body-02", "familia"],
        features: [
          { text: "1 figure (5€/each)", included: true },
          { text: "Preliminary sketch", included: true },
          { text: "Include colors in illustration (+10€)", included: false },
          { text: "Include background (+30€)", included: false },
          { text: "Include entire body figure (45€/each)", included: false },
        ],
      },
      color: {
        label: "Color",
        title: "Digital color portrait",
        price: "From 15€",
        desc: "A fully colored digital portrait of one character, from the shoulders up.",
        delivery: "5 day delivery",
        size: "A3 size",
        revisions: "4 revisions",
        format: "Digital",
        examples: ["color-portrait-01", "maria-light", "maria-dark"],
        features: [
          { text: "1 figure (15€/each)", included: true },
          { text: "Preliminary sketch", included: true },
          { text: "Include colors in illustration (+10€)", included: true },
          { text: "Include background (+30€)", included: false },
          { text: "Include entire body figure (45€/each)", included: false },
        ],
      },
      half: {
        label: "Half",
        title: "Half body + layout",
        price: "From 40€",
        desc: "A colored half-body illustration with a simple composition and background.",
        delivery: "10 day delivery",
        size: "A3 size",
        revisions: "4 revisions",
        format: "Digital",
        examples: ["50-years", "tita"],
        features: [
          { text: "1 figure (40€/each)", included: true },
          { text: "Preliminary sketch", included: true },
          { text: "Include colors in illustration", included: true },
          { text: "Include background (+30€)", included: true },
          { text: "Include entire body figure (45€/each)", included: false },
        ],
      },
      full: {
        label: "Full",
        title: "Digital full body",
        price: "From 75€",
        desc: "My most complete package: a full-body colored illustration with a detailed background.",
        delivery: "14 day delivery",
        size: "A3 size",
        revisions: "4 revisions",
        format: "Digital",
        examples: ["lee-scaperoom", "star-wars-tlotr", "picnic", "postal-dequeerando", "full-body-layout"],
        features: [
          { text: "1 figure (75€/each)", included: true },
          { text: "Preliminary sketch", included: true },
          { text: "Include colors in illustration", included: true },
          { text: "Include background (+30€)", included: true },
          { text: "Include entire body figure", included: true },
        ],
      },
      custom: {
        label: "Custom",
        title: "Custom commission",
        price: "Custom quote",
        desc: "Have something different in mind? Tell me your idea and I'll prepare a personalized quote.",
        delivery: "Variable delivery",
        size: "Custom size",
        revisions: "Flexible revisions",
        format: "Digital / Traditional",
        examples: ["star-wars-tlotr", "familia", "color-portrait-01", "lee-scaperoom"],
        features: [
          { text: "Custom requirements", included: true },
          { text: "Personalized scope & pricing", included: true },
          { text: "Direct communication with artist", included: true },
        ],
      },
    },

    artboards: [
      /* -------------------------------------------------------------
         PÁGINA 1: FICHA DEL ENCARGO (galería + tarjeta de paquetes)
      ------------------------------------------------------------- */
      {
        id: "frame-comm-1",
        title: "01. Commission Page — Listing",
        w: 1040,
        h: "auto",
        content: `
        <div class="mk-page">

          <!-- Barra de navegación del marketplace -->
          <header class="mk-nav">
            <div class="mk-logo">
              <img src="img/avatars/martapey_profile.webp" alt="Marta Pey">
              Marta Pey <span class="mk-logo-tag">Commissions</span>
            </div>
            <div class="mk-search">${MK_ICONS.search}<span>What would you like me to draw?</span></div>
            <nav class="mk-nav-links">
              <span>Explore</span>
              <span>How it works</span>
              <span>Terms</span>
            </nav>
            <span class="mk-nav-btn">Contact</span>
          </header>

          <div class="mk-subnav">
            <span class="active">Portraits</span>
            <span>Full body</span>
            <span>Fan art</span>
            <span>Original characters</span>
            <span>Custom ideas</span>
          </div>

          <div class="mk-breadcrumb">Commissions <i>/</i> Illustration <i>/</i> <b>Digital portraits</b></div>

          <!-- Título del anuncio y vendedor (encima de galería + paquetes) -->
          <div class="mk-header">
          <h1 class="mk-title">I will draw a custom digital portrait of you or your favorite character</h1>

          <div class="mk-seller-row">
            <img src="img/avatars/martapey_profile.webp" alt="Marta Pey">
            <div>
              <div class="mk-seller-name">Marta Pey</div>
              <div>Illustrator & Designer</div>
            </div>
            <span class="mk-sep"></span>
            <span class="mk-status">Commissions open</span>
            <span class="mk-sep"></span>
            <span>Avg. delivery: 1 week</span>
          </div>
          </div>

          <div class="mk-layout">

            <!-- Columna principal -->
            <div class="mk-main">
              <!-- Galería (la rellena renderCommPackage) -->
              <div class="mk-gallery" id="mk-gallery"></div>

              <section class="mk-section">
                <h3>About this commission</h3>
                <p>Here you'll find the most common types of commissions I offer, from simple line portraits to full-body illustrations. Have something else in mind? Choose a custom commission and tell me your idea.</p>
                <p>I can turn your ideas, favorite characters or real-life photos into my own art style. Commissions are for personal use only.</p>
                <div class="mk-specs">
                  <div class="mk-spec"><span>Style</span><strong>Cartoon / Realistic</strong></div>
                  <div class="mk-spec"><span>Technique</span><strong>Freehand digital</strong></div>
                  <div class="mk-spec"><span>Theme</span><strong>Fantasy, Fan art, Fine art</strong></div>
                  <div class="mk-spec"><span>Subject</span><strong>Objects, People, Gifts</strong></div>
                </div>
              </section>
            </div>

            <!-- Columna lateral: tarjeta de paquetes -->
            <aside class="mk-sidebar">
              <div class="mk-pkg-card">
                <div class="mk-tabs" id="comm-tabs"></div>
                <div class="mk-pkg-body" id="comm-card-target"></div>
              </div>

              <div class="mk-trust">
                <div>${MK_ICONS.shield}<span>Payment via PayPal, Bizum or bank transfer</span></div>
                <div>${MK_ICONS.clock}<span>You only pay once I've approved your request</span></div>
                <div>${MK_ICONS.revisions}<span>Full refund available before the sketch is finished</span></div>
              </div>
            </aside>

          </div>
        </div>
      `,
      },

      /* -------------------------------------------------------------
         PÁGINA 2: CÓMO FUNCIONA, COMPARATIVA, CONDICIONES Y ARTISTA
      ------------------------------------------------------------- */
      {
        id: "frame-comm-2",
        title: "02. Commission Page — How It Works & Terms",
        w: 1040,
        h: "auto",
        content: `
        <div class="mk-page">

          <section class="mk-section">
            <h1 class="mk-title">How it works</h1>
            <div class="mk-steps">
              <div class="mk-step">
                <span class="mk-step-num">1</span>
                <strong>Choose a package</strong>
                <p>Pick the option that fits your idea, or go for a custom commission.</p>
              </div>
              <div class="mk-step">
                <span class="mk-step-num">2</span>
                <strong>Send your request</strong>
                <p>Fill in the order form with your references and the details of what you'd like.</p>
              </div>
              <div class="mk-step">
                <span class="mk-step-num">3</span>
                <strong>Review & payment</strong>
                <p>I'll review your request and confirm the final price and delivery date with you.</p>
              </div>
              <div class="mk-step">
                <span class="mk-step-num">4</span>
                <strong>Sketch & delivery</strong>
                <p>You'll approve the sketch and get progress updates before the final artwork.</p>
              </div>
            </div>
          </section>

          <section class="mk-section">
            <h3>Compare packages</h3>
            <div class="mk-compare-wrap">
              <table class="mk-compare">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th><strong>Line portrait</strong><span>From 5€</span></th>
                    <th><strong>Color portrait</strong><span>From 15€</span></th>
                    <th><strong>Half body</strong><span>From 40€</span></th>
                    <th><strong>Full body</strong><span>From 75€</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Figures</td><td>1 character</td><td>1 character</td><td>1 character</td><td>1 character</td></tr>
                  <tr><td>Technique</td><td>Digital</td><td>Digital</td><td>Digital</td><td>Digital</td></tr>
                  <tr><td>Preliminary sketch</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td></tr>
                  <tr><td>Color</td><td class="no">${MK_ICONS.cross}</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td></tr>
                  <tr><td>Simple background</td><td class="no">${MK_ICONS.cross}</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td><td class="yes">${MK_ICONS.check}</td></tr>
                  <tr><td>Detailed scene</td><td class="no">${MK_ICONS.cross}</td><td class="no">${MK_ICONS.cross}</td><td class="no">${MK_ICONS.cross}</td><td class="yes">${MK_ICONS.check}</td></tr>
                  <tr><td>Full body</td><td class="no">${MK_ICONS.cross}</td><td class="no">${MK_ICONS.cross}</td><td class="no">${MK_ICONS.cross}</td><td class="yes">${MK_ICONS.check}</td></tr>
                  <tr><td>Revisions</td><td>2</td><td>4</td><td>4</td><td>4</td></tr>
                  <tr><td>Delivery time</td><td>3 days</td><td>5 days</td><td>10 days</td><td>14 days</td></tr>
                  <tr>
                    <td></td>
                    <td><button class="mk-select-pkg" data-pkg="line">Select</button></td>
                    <td><button class="mk-select-pkg" data-pkg="color">Select</button></td>
                    <td><button class="mk-select-pkg" data-pkg="half">Select</button></td>
                    <td><button class="mk-select-pkg" data-pkg="full">Select</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="mk-two-col">
            <section class="mk-section">
              <h3>Terms & conditions</h3>
              <div class="mk-terms">
                <details open>
                  <summary><span class="mk-term-title"><span class="tag-icon mk-term-icon" style="--tag-color:#0ea5e9"><img src="img/icons/icon-document.svg" alt=""></span>General terms</span></summary>
                  <p>I have the right to decline a piece if I feel uncomfortable. Commissions are NOT for commercial use. Payment is via PayPal, Bizum or bank transfer.</p>
                </details>
                <details>
                  <summary><span class="mk-term-title"><span class="tag-icon mk-term-icon" style="--tag-color:#0ea5e9"><img src="img/icons/icon-arrow-redo.svg" alt=""></span>Revisions and changes</span></summary>
                  <p>I will send you updates of the process. Changes not related to coloring after that point will have an extra cost.</p>
                </details>
                <details>
                  <summary><span class="mk-term-title"><span class="tag-icon mk-term-icon" style="--tag-color:#0ea5e9"><img src="img/icons/icon-arrow-undo.svg" alt=""></span>Cancellation policy & refunds</span></summary>
                  <p>Full refunds are only available BEFORE I finish the sketch.</p>
                </details>
                <details>
                  <summary><span class="mk-term-title"><span class="tag-icon mk-term-icon" style="--tag-color:#0ea5e9"><img src="img/icons/icon-lock.svg" alt=""></span>Copyright & usage</span></summary>
                  <p>I (the artist) will own the rights to any produced drawing unless specified otherwise.</p>
                </details>
              </div>
            </section>

            <section class="mk-section">
              <h3>About the artist</h3>
              <div class="mk-artist">
                <div class="mk-artist-head">
                  <img src="img/avatars/martapey_profile.webp" alt="Marta Pey">
                  <div>
                    <div class="mk-seller-name">Marta Pey</div>
                    <div class="mk-muted">Digital Illustrator & Visual Artist</div>
                    <span class="mk-status">Commissions open</span>
                  </div>
                </div>
                <p>I will transform your ideas, favorite characters or real-life photos into my unique art style. Let's chat about your project!</p>
                <div class="mk-artist-stats">
                  <div><span>From</span><strong>Spain</strong></div>
                  <div><span>Member since</span><strong>May 2023</strong></div>
                  <div><span>Avg. delivery</span><strong>1 week</strong></div>
                  <div><span>Languages</span><strong>Spanish, English, Catalan</strong></div>
                </div>
                <a class="mk-cta-secondary" href="#" data-open-contact>Contact me</a>
              </div>
            </section>
          </div>

        </div>
      `,
      },
    ],
  },
};

// COMMISSIONS: PINTA LA GALERÍA Y LA TARJETA DEL PAQUETE ACTIVO
function renderCommPackage(pkgKey, relayout = true) {
  const packages = projectsData.commissions.packages;
  const data = packages[pkgKey];
  const tabs = document.getElementById("comm-tabs");
  const card = document.getElementById("comm-card-target");
  const gallery = document.getElementById("mk-gallery");
  if (!data || !tabs || !card || !gallery) return;

  tabs.innerHTML = Object.entries(packages)
    .map(
      ([key, pkg]) =>
        `<button class="mk-tab${key === pkgKey ? " active" : ""}" data-pkg="${key}">${pkg.label}</button>`,
    )
    .join("");

  const [first] = data.examples;
  const thumbs = data.examples
    .map(
      (name, i) =>
        `<button class="mk-thumb${i === 0 ? " active" : ""}" data-img="${commImg(name)}" data-alt="${COMM_EXAMPLES[name]}" title="${COMM_EXAMPLES[name]}"><img src="${commThumb(name)}" alt="${COMM_EXAMPLES[name]}"></button>`,
    )
    .join("");

  gallery.innerHTML = `
    <div class="mk-gallery-main"><img id="mk-main-img" src="${commImg(first)}" alt="${COMM_EXAMPLES[first]}"></div>
    <div class="mk-thumbs">${thumbs}</div>
  `;

  const features = data.features
    .map(
      (f) =>
        `<li class="${f.included ? "" : "is-off"}">${f.included ? MK_ICONS.check : MK_ICONS.cross}<span>${f.text}</span></li>`,
    )
    .join("");

  card.innerHTML = `
    <div class="mk-pkg-head">
      <h3 class="mk-pkg-title">${data.title}</h3>
      <span class="mk-pkg-price">${data.price}</span>
    </div>
    <p class="mk-pkg-desc">${data.desc}</p>
    <div class="mk-pkg-meta">
      <span>${MK_ICONS.clock} ${data.delivery}</span>
      <span>${MK_ICONS.revisions} ${data.revisions}</span>
    </div>
    <div class="mk-pkg-tags"><span>${data.size}</span><span>${data.format}</span></div>
    <ul class="mk-features">${features}</ul>
    <a class="mk-cta" href="${COMMISSION_FORM_URL}" target="_blank" rel="noopener noreferrer">Continue ${MK_ICONS.arrow}</a>
    <a class="mk-cta-secondary" href="#" data-open-contact>Contact me</a>
    <p class="mk-note">You won't pay anything until I've reviewed your request.</p>
  `;

  // La altura de la ficha cambia según el paquete: recolocar los frames
  if (relayout && currentActiveProject) {
    layoutCanvas();
    updateTransform();
  }
}

// Pestañas, botones "Select" de la tabla y miniaturas de la galería
document.addEventListener("click", (e) => {
  const tab = e.target.closest("#comm-tabs [data-pkg]");
  if (tab) {
    renderCommPackage(tab.dataset.pkg);
    return;
  }

  const select = e.target.closest(".mk-select-pkg[data-pkg]");
  if (select) {
    renderCommPackage(select.dataset.pkg);
    selectFrame("frame-comm-1");
    return;
  }

  const thumb = e.target.closest(".mk-thumb");
  if (thumb) {
    const mainImg = document.getElementById("mk-main-img");
    mainImg.src = thumb.dataset.img;
    mainImg.alt = thumb.dataset.alt;
    thumb.parentElement
      .querySelectorAll(".mk-thumb")
      .forEach((t) => t.classList.toggle("active", t === thumb));
  }
});

// ESTADO GLOBAL
let activeTool = "select";
let scale = 1;
let pointX = 0;
let pointY = 0;
let startX = 0;
let startY = 0;
let isPanning = false;
let spacePressed = false;
let currentActiveProject = null;
let currentProjectId = null;
let currentAnimationId = null;
let userMovedView = false; // si el visitante ya ha movido la vista, no re-encuadrar al cargar imágenes
let canvasSections = [];
let frameRects = {};
let sectionRects = {};

// ELEMENTOS DOM
const viewport = document.getElementById("viewport");
const canvas = document.getElementById("canvas");
const zoomDisplay = document.getElementById("zoom-display");
const shareDropdown = document.getElementById("share-dropdown");
const toast = document.getElementById("toast");
const sidebar = document.getElementById("sidebar");
const layersPanel = document.getElementById("layers-panel");
const propertiesPanel = document.getElementById("properties-panel");
const mobileOverlay = document.getElementById("mobile-overlay");

const escapeHTML = (str) =>
  String(str ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

// VISITANTE: nombre y color del cursor multijugador y de sus comentarios.
// Con null sale un animal al azar, como los anónimos de Figma.
// Para un nombre fijo, escribe por ejemplo: const VISITOR_FIXED_NAME = "Explorer";
const VISITOR_FIXED_NAME = null;

const VISITOR = (() => {
  const animals = [
    "Otter",
    "Fox",
    "Panda",
    "Koala",
    "Owl",
    "Capybara",
    "Axolotl",
    "Penguin",
    "Hedgehog",
    "Lynx",
  ];
  const colors = ["#2563eb", "#f24822", "#14ae5c", "#ff8a00", "#e84faa", "#00a3a3"];
  const pick = (list) => list[Math.floor(Math.random() * list.length)];

  // Un animal y un color nuevos cada vez que se carga la página
  const saved = { animal: pick(animals), color: pick(colors) };

  const name = VISITOR_FIXED_NAME || `Anonymous ${saved.animal}`;
  const initial = (VISITOR_FIXED_NAME || saved.animal).charAt(0).toUpperCase();
  return { name, initial, color: saved.color, avatar: null };
})();

const MARTA = { name: "Marta Pey", avatar: "img/avatars/martapey_profile.webp" };

// MENÚ Y PANELES EN MÓVIL
const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");

function closeMobilePanels() {
  sidebar?.classList.remove("open");
  layersPanel?.classList.remove("open");
  propertiesPanel?.classList.remove("open");
  mobileOverlay?.classList.remove("active");
}

function toggleMobilePanel(panel) {
  if (!panel) return;
  const willOpen = !panel.classList.contains("open");
  closeMobilePanels();
  if (willOpen) {
    panel.classList.add("open");
    mobileOverlay?.classList.add("active");
  }
}

btnToggleSidebar?.addEventListener("click", () => toggleMobilePanel(sidebar));
document
  .getElementById("btn-toggle-layers")
  ?.addEventListener("click", () => toggleMobilePanel(layersPanel));

["btn-toggle-layers", "btn-toggle-panel"].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) document.getElementById("editor-view").appendChild(btn);
});
document
  .getElementById("btn-toggle-panel")
  ?.addEventListener("click", () => toggleMobilePanel(propertiesPanel));
document
  .getElementById("btn-close-layers")
  ?.addEventListener("click", closeMobilePanels);

document.getElementById("btn-collapse-layers")?.addEventListener("click", (e) => {
  const collapsed = layersPanel.classList.toggle("is-collapsed");
  propertiesPanel.classList.toggle("is-collapsed", collapsed);
  const label = collapsed ? "Expand panel" : "Minimize panel";
  e.currentTarget.title = label;
  e.currentTarget.setAttribute("aria-label", label);

  if (currentActiveProject) {
    layoutCanvas();
    if (isFreeCanvas()) fitToScreen(true);
    else updateTransform();
  }
});
document
  .getElementById("btn-close-panel")
  ?.addEventListener("click", closeMobilePanels);
mobileOverlay?.addEventListener("click", closeMobilePanels);

// BANNER DE COMMISSIONS
document.addEventListener("DOMContentLoaded", () => {
  const bannerContainer = document.querySelector(".comm-banner-container");
  const closeBtn = document.getElementById("btn-close-banner");

  // Cerrar el banner al hacer clic en el botón (se muestra al terminar la carga)
});

// NAVEGACIÓN DASHBOARD
const navItems = document.querySelectorAll(".nav-item");
const fileCards = document.querySelectorAll(".file-card");
const categoryTitle = document.getElementById("category-title");

navItems.forEach((item) => {
  if (!item.dataset.category) return;
  item.addEventListener("click", (e) => {
    e.preventDefault();
    setHomeCategory(item.dataset.category);
    closeMobilePanels();
  });
});

fileCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projId = card.dataset.projectId;
    if (projId) openProject(projId);
  });
});

document.getElementById("btn-about-me")?.addEventListener("click", () => {
  openProject("about-me");
  closeMobilePanels();
});

document.querySelectorAll(".js-commissions").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que la página salte al inicio por el href="#"
    openProject("commissions");
    closeMobilePanels();
  });
});

document
  .getElementById("btn-back-home")
  ?.addEventListener("click", () => closeProject());

// Botón atrás del móvil / navegador
window.addEventListener("popstate", (e) => {
  const id = e.state && e.state.project;
  if (id) {
    openProject(id, { fromHistory: true });   // adelante
  } else if (document.getElementById("editor-view").classList.contains("active")) {
    closeProject({ fromHistory: true });      // atrás → inicio
  }
});

// Al cargar la página, parte de un estado limpio (inicio)
history.replaceState(null, "");

document.addEventListener("click", (e) => {
  const jump = e.target.closest("[data-jump]");
  if (jump) {
    selectFrame(jump.dataset.jump);
    return;
  }

  const btn = e.target.closest("[data-open-project]");
  if (!btn) return;
  e.preventDefault();
  shareDropdown?.classList.remove("show");
  document.getElementById("profile-dropdown")?.classList.remove("show");
  openProject(btn.dataset.openProject);
});

// GESTIÓN DE HERRAMIENTAS
function setTool(tool) {
  activeTool = tool;
  document
    .getElementById("tool-select")
    ?.classList.toggle("active", tool === "select");
  document
    .getElementById("tool-hand")
    ?.classList.toggle("active", tool === "hand");
  document
    .getElementById("tool-comment")
    ?.classList.toggle("active", tool === "comment");
  document
    .getElementById("tool-text")
    ?.classList.toggle("active", tool === "text");

  viewport.classList.remove("tool-hand", "tool-select", "tool-comment", "tool-text");
  viewport.classList.add(`tool-${tool}`);
}

document
  .getElementById("tool-hand")
  ?.addEventListener("click", () => setTool("hand"));
document
  .getElementById("tool-select")
  ?.addEventListener("click", () => setTool("select"));
document
  .getElementById("tool-comment")
  ?.addEventListener("click", () => setTool("comment"));
document
  .getElementById("tool-text")
  ?.addEventListener("click", () => setTool("text"));

// ATAJOS DE TECLADO
window.addEventListener("keydown", (e) => {
  if (
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA" ||
    document.activeElement.isContentEditable
  )
    return;

  if ((e.key === "Delete" || e.key === "Backspace") && selectedCanvasObject) {
    e.preventDefault();
    removeCanvasObject(selectedCanvasObject);
    return;
  }

  const editorActive = document
    .getElementById("editor-view")
    .classList.contains("active");

  if (e.key.toLowerCase() === "h") setTool("hand");
  if (e.key.toLowerCase() === "v") setTool("select");
  if (e.key.toLowerCase() === "c") setTool("comment");
  if (e.key.toLowerCase() === "t") setTool("text");
  if (editorActive && e.key.toLowerCase() === "e") toggleStickerPicker();

  // Shift + 1: encuadrar todo, como en Figma
  if (editorActive && e.shiftKey && e.code === "Digit1") {
    userMovedView = false;
    fitToScreen(true);
  }

  if (e.key === "Escape") {
    closeAllThreads();
    clearSelection();
  }

  if (e.code === "Space" && !spacePressed) {
    spacePressed = true;
    viewport.classList.add("tool-hand");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    spacePressed = false;
    if (activeTool !== "hand") viewport.classList.remove("tool-hand");
  }
});

// ESTILO DE CADA ETIQUETA: icono y color (el primero que encaje)
const TAG_STYLES = [
  [/\bux\b|\bui\b/i, "mobile-programming.svg", "#0ea5e9"],
  [/app design|prototyp/i, "icon-mobile.svg", "#06b6d4"],
  [/e-commerce|marketplace|commission/i, "icon-shop.svg", "#10b981"],
  [/profile|bio\b/i, "profile.svg", "#64748b"],
  [/experience/i, "icon-briefcase.svg", "#a8a29e"],
  [/skills/i, "icon-award.svg", "#fbbf24"],
  [/web dev/i, "icon-window-code-1.svg", "#14b8a6"],
  [/brand/i, "icon-color-swatch.svg", "#f97316"],
  [/email|newsletter/i, "icon-mail.svg", "#ef4444"],
  [/marketing|ads\b/i, "icon-presention-chart.svg", "#ec4899"],
  [/social/i, "message-notif.svg", "#f43f5e"],
  [/3d anim/i, "3dcube.svg", "#8b5cf6"],
  [/3d model|blender/i, "icon-3d-cube-scan.svg", "#7c3aed"],
  [/motion/i, "icon-video.svg", "#d946ef"],
  [/video/i, "icon-video-frame-cut-2.svg", "#c026d3"],
  [/transmedia/i, "icon-layer.svg", "#a855f7"],
  [/comic/i, "icon-comic-book.svg", "#fb7185"],
  [/storytelling/i, "icon-magicpen.svg", "#f59e0b"],
  [/editorial/i, "book-square.svg", "#eab308"],
  [/layout/i, "icon-grid-4.svg", "#ca8a04"],
  [/book|pages/i, "icon-document-normal.svg", "#d97706"],
  [/black & white/i, "icon-color-filter.svg", "#a3a3a3"],
  [/traditional/i, "icon-pencil.svg", "#84cc16"],
  [/digital art/i, "icon-brush.svg", "#34d399"],
  [/character/i, "icon-profile-circle.svg", "#16a34a"],
  [/concept/i, "icon-bezier.svg", "#65a30d"],
  [/illustration/i, "brush.svg", "#22c55e"],
  [/artstation/i, "icon-gallery.svg", "#3b82f6"],
  [/procreate/i, "icon-pencil-circle.svg", "#0284c7"],
  [/graphic|design/i, "pen-tool.svg", "#6366f1"],
];

function tagStyle(tag) {
  const match = TAG_STYLES.find(([re]) => re.test(tag));
  return match
    ? { icon: match[1], color: match[2] }
    : { icon: "icon-element-3.svg", color: "#94a3b8" };
}

// Icono teñido del color de la etiqueta (sombra desplazada: funciona también en local)
function tagIconHTML(tag) {
  const { icon, color } = tagStyle(tag);
  return `<span class="tag-icon" style="--tag-color:${color}"><img src="img/icons/${icon}" alt=""></span>`;
}

// APERTURA Y NAVEGACIÓN
function openProject(projectId, { fromHistory = false } = {}) {
  const currentProject = projectsData[projectId];
  if (!currentProject) return;

  // NUEVO: registrar la navegación en el historial
  if (!fromHistory) {
    const state = { project: projectId };
    if (history.state && history.state.project) {
      history.replaceState(state, "");   // cambio de proyecto dentro del editor: no apiles entradas
    } else {
      history.pushState(state, "");      // entrada desde el inicio: nueva entrada
    }
  }


  currentActiveProject = currentProject;
  currentProjectId = projectId;
  userMovedView = false;
  document.documentElement.classList.add("in-editor");

  if (currentAnimationId) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }

  document.getElementById("current-project-title").textContent =
    currentProject.title;
  document.getElementById("dashboard-view").classList.remove("active");
  document.getElementById("editor-view").classList.add("active");

  document.getElementById("info-title").textContent = currentProject.title;
  document.getElementById("info-year").textContent = currentProject.year;
  document.getElementById("info-role").textContent = currentProject.role;
  // innerHTML: algunas descripciones llevan <br>
  document.getElementById("info-desc").innerHTML = currentProject.description;

  document.getElementById("info-tags").innerHTML = currentProject.tags
    .map(
      (t) =>
        `<span class="tag-chip has-icon" style="--tag-color:${tagStyle(t).color}">${tagIconHTML(t)}${t}</span>`,
    )
    .join("");

  const softwareContainer = document.getElementById("info-software");
  const softwareList = currentProject.software || currentProject.tools || [];

  if (softwareContainer) {
    if (softwareList.length > 0) {
      softwareContainer.parentElement.style.display = "block";
      softwareContainer.innerHTML = softwareList.map(softwareIconHTML).join("");
    } else {
      softwareContainer.parentElement.style.display = "none";
    }
  }

  renderPagesList();
  renderProjectCanvas(projectId, currentProject);
  renderLayersList();
}

// Icono de un programa; si no hay icono, se muestra su nombre
function softwareIconHTML(tool) {
  // Convertim el nom a un slug net per trobar la ruta de la icona (ex: "Adobe Photoshop" -> "photoshop")
  const toolIconName = tool
    .toLowerCase()
    .replace(/adobe\s*/g, "")
    .replace(/\s+/g, "-");
  return `
    <div class="software-item" title="${tool}">
      <img
        src="img/software/icon_${toolIconName}.png"
        alt="${tool}"
        class="software-icon"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';"
      />
      <span class="software-badge" style="display:none;">${tool}</span>
    </div>
  `;
}

function closeProject({ fromHistory = false } = {}) {
  // NUEVO: si venimos del botón, deja que el historial haga el trabajo
  if (!fromHistory && history.state && history.state.project) {
    history.back();   // dispara popstate, que vuelve a llamar a closeProject
    return;
  }

  closeStickerPicker();
  cancelStickerPlacement();

  document.documentElement.classList.remove("in-editor");
  document.getElementById("editor-view").classList.remove("active");
  document.getElementById("dashboard-view").classList.add("active");
  shareDropdown.classList.remove("show");
  closeMobilePanels();
}

// =========================================================
// CANVAS: SECCIONES Y FRAMES
// Cada tarjeta de un proyecto se convierte en una sección de Figma, y dentro
// de ella cada bloque de texto y cada imagen o vídeo es un frame propio.
// Solo las galerías tienen canvas libre (arrastrar y zoom); el resto se adapta
// al ancho de la pantalla y se recorre con scroll vertical.
// =========================================================
const FREE_CANVAS_PROJECTS = ["digital-illustrations", "traditional-illustrations"];
// Las secciones solo agrupan frames por dentro: no se dibujan, así que no llevan relleno
const SECTION_PAD_X = 0;
const SECTION_PAD_TOP = 28; // sitio para el nombre del primer frame
const SECTION_PAD_BOTTOM = 0;
const FRAME_GAP_X = 40;
const FRAME_GAP_Y = 64;
const SECTION_GAP = FRAME_GAP_Y;
const CANVAS_TOP = 12; // alineado con los paneles flotantes
const MEDIA_SELECTOR = "img, video, iframe";

const MOBILE_SCROLL_BP = 768; // mismo breakpoint que usas en el layout
const isFreeCanvas = () =>
  FREE_CANVAS_PROJECTS.includes(currentProjectId) &&
  window.innerWidth > MOBILE_SCROLL_BP;

const LAYER_ICONS = {
  section: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="2" y="3.5" width="12" height="10" rx="1.5"/><path d="M2 6.5h5.5V3.5"/></svg>`,
  frame: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M5.5 2v12M10.5 2v12M2 5.5h12M2 10.5h12"/></svg>`,
  text: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 4.5v-2h9v2M8 2.5v11M6 13.5h4"/></svg>`,
  image: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="2" y="2.5" width="12" height="11" rx="1.5"/><circle cx="6" cy="6.3" r="1.2"/><path d="m2.5 12 3.8-3.8 2.6 2.6 1.6-1.6 3 3"/></svg>`,
  video: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="m6.8 6 3 2-3 2Z" fill="currentColor"/></svg>`,
  caret: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.8 5 6.3l2.5-2.5"/></svg>`,
  check: `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8.5 3 3 7-7"/></svg>`,
};

// Banner de commissions que cierra todos los proyectos
const CTA_HTML = `
  <div class="cta-banner">
    <div class="cta-info">
      <h3>Have an idea in mind?</h3>
      <p>Let's discuss what we can achieve together</p>
      <button class="commissions-btn" data-open-project="commissions">Request a commission</button>
    </div>
    <img class="cta-img" src="img/commissions/web/comm-illustration-crop.webp" alt="">
  </div>
`;

// "mi_imagen-01.jpg" -> "mi imagen 01"
const prettyFileName = (src) =>
  (src || "")
    .split("/")
    .pop()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]+/g, " ")
    .trim();

function parseHTML(html) {
  const tpl = document.createElement("template");
  tpl.innerHTML = html;
  return tpl.content;
}

function isSingleMedia(html) {
  const content = parseHTML(html);
  return (
    content.children.length === 1 && content.children[0].matches("img, video")
  );
}

function mediaFrameFrom(el) {
  const media = el.matches(MEDIA_SELECTOR) ? el : el.querySelector(MEDIA_SELECTOR);

  // Vídeos incrustados (YouTube / Vimeo): se conserva el contenedor con la proporción
  if (media.tagName === "IFRAME") {
    return {
      kind: "media",
      mediaType: "video",
      title: media.getAttribute("title") || "Video",
      html: el.outerHTML,
    };
  }

  const clone = media.cloneNode(true);
  clone.removeAttribute("style");
  clone.classList.add(media.tagName === "VIDEO" ? "artboard-video" : "artboard-image");

  const caption =
    el !== media
      ? el.textContent.replace(media.textContent, "").trim()
      : "";
  const src =
    media.getAttribute("src") ||
    media.querySelector("source")?.getAttribute("src");

  return {
    kind: "media",
    mediaType: media.tagName === "VIDEO" ? "video" : "image",
    title:
      media.dataset.title ||
      caption ||
      media.getAttribute("alt") ||
      prettyFileName(src) ||
      "Image",
    html: clone.outerHTML,
  };
}

function parseInlineComment(el) {
  return {
    author: el.querySelector(".figma-comment-author")?.textContent.trim(),
    avatar: el.querySelector(".figma-comment-avatar")?.getAttribute("src"),
    text: (el.querySelector(".figma-comment-body")?.textContent || "")
      .trim()
      .replace(/^["“]|["”]$/g, ""),
  };
}

// Cuántas imágenes por fila tenía una rejilla del diseño original (0 = no es fila)
function rowGroupSize(el) {
  const style = (el.getAttribute("style") || "").replace(/\s+/g, "");
  if (!/display:(grid|flex)/.test(style)) return 0;
  if (/flex-direction:column/.test(style)) return 0;
  if (/repeat\(/.test(style)) return 3;
  const fractions = style.match(/1fr/g);
  return fractions ? fractions.length : 2;
}

function splitCardIntoFrames(artboard) {
  const content = parseHTML(artboard.content);
  const root = content.querySelector(".artboard-card") || content;
  const frames = [];
  const comments = [];
  let group = null;
  let rowCounter = 0;

  const isHeading = (el) =>
    /^H[1-3]$/.test(el.tagName) || el.classList.contains("card-header");

  const isMediaBlock = (el) =>
    el.matches(MEDIA_SELECTOR) ||
    (el.querySelectorAll(MEDIA_SELECTOR).length === 1 &&
      !el.querySelector("h1, h2, h3, p, ul") &&
      el.textContent.trim().length < 60);

  const flush = () => {
    if (group) {
      frames.push({
        kind: "text",
        title: group.title || "Text",
        html: `<div class="artboard-card">${group.nodes
          .map((n) => n.outerHTML)
          .join("")}</div>`,
      });
    }
    group = null;
  };

  const walk = (parent) => {
    Array.from(parent.children).forEach((el) => {
      if (el.tagName === "SCRIPT") return;

      // Los comentarios de autora se convierten en pines sobre el frame actual
      if (el.classList.contains("figma-comment-inline")) {
        comments.push({
          ...parseInlineComment(el),
          frameIndex: group ? frames.length : frames.length - 1,
        });
        return;
      }

      if (isMediaBlock(el)) {
        flush();
        frames.push(mediaFrameFrom(el));
        return;
      }

      // Contenedor con imágenes dentro
      if (el.querySelector(MEDIA_SELECTOR) || el.querySelector(".figma-comment-inline")) {
        const kids = Array.from(el.children).filter((c) => c.tagName !== "SCRIPT");
        const size = rowGroupSize(el);

        // Rejilla de imágenes: comparten fila, igual que en el diseño original
        if (size > 1 && kids.length > 1 && kids.every(isMediaBlock)) {
          flush();
          kids.forEach((kid, i) => {
            const frame = mediaFrameFrom(kid);
            frame.row = `row-${rowCounter}-${Math.floor(i / size)}`;
            frame.rowSize = size;
            frames.push(frame);
          });
          rowCounter++;
          return;
        }

        walk(el);
        return;
      }

      // Bloque de texto: un título nuevo abre un frame nuevo
      if (isHeading(el) && group && group.hasBody) flush();
      if (!group) group = { nodes: [], title: "", hasBody: false };
      if (!group.title && isHeading(el)) {
        group.title = (el.querySelector("h1, h2, h3") || el).textContent.trim();
      }
      if (!isHeading(el) && !el.classList.contains("subtitle")) {
        group.hasBody = true;
      }
      group.nodes.push(el);
    });
  };

  walk(root);
  flush();

  frames.forEach((frame, i) => {
    frame.id = `${artboard.id}-f${i + 1}`;
    frame.w = 400;
  });

  return {
    frames,
    comments: comments.map((c) => ({
      ...c,
      frameId: frames[Math.max(0, c.frameIndex)]?.id,
    })),
  };
}

// Galerías y cómics no llevan introducción en el canvas: directamente las imágenes
const NO_INTRO_PROJECTS = [...FREE_CANVAS_PROJECTS, "ultim-combat", "vamp-comic", "about-me"];

const TITLE_ONLY_PROJECTS = ["commissions"];

// Icono de cada rol (el primero que encaje)
const ROLE_ICONS = [
  [/ux|ui/i, "mobile-programming.svg"],
  [/web/i, "icon-window-code-1.svg"],
  [/brand/i, "icon-color-swatch.svg"],
  [/editorial/i, "book-square.svg"],
  [/comic/i, "icon-comic-book.svg"],
  [/writer/i, "icon-edit.svg"],
  [/3d/i, "3dcube.svg"],
  [/motion|animat/i, "icon-video.svg"],
  [/social/i, "message-notif.svg"],
  [/director/i, "crown.svg"],
  [/illustrat|concept/i, "brush.svg"],
  [/graphic|design/i, "pen-tool.svg"],
];

function roleIconHTML(role) {
  const match = ROLE_ICONS.find(([re]) => re.test(role));
  const icon = match ? match[1] : "profile.svg";
  return `<img class="intro-pill-icon" src="img/icons/${icon}" alt="">`;
}

// Portada del proyecto: la misma imagen (o vídeo) que su tarjeta del inicio
function projectCover(projectId) {
  if (["about-me", "commissions"].includes(projectId)) return null;
  const cover = document.querySelector(
    `.file-card[data-project-id="${projectId}"] .cover-img`,
  );
  if (!cover) return null;

  const clone = cover.cloneNode(true);
  const isVideo = clone.tagName === "VIDEO";
  // La tarjeta usa una miniatura; el proyecto, la imagen original
  const fullSrc = cover.dataset.full || cover.getAttribute("src");
  clone.setAttribute("src", fullSrc);
  clone.removeAttribute("data-full");
  clone.removeAttribute("onerror");
  clone.removeAttribute("style");
  clone.className = isVideo ? "artboard-video" : "artboard-image";
  if (isVideo) clone.setAttribute("playsinline", "");

  return {
    html: clone.outerHTML,
    mediaType: isVideo ? "video" : "image",
    src: fullSrc,
  };
}

// Prepara la introducción a partir del contenido del proyecto:
// - portada: si la de la tarjeta es un GIF o un vídeo y el proyecto tiene vídeo, ese vídeo
// - quita del contenido lo que ya sale en la introducción (cabecera con título y año,
//   "Project Overview", la imagen de portada) para que nada se repita
const OVERVIEW_RE = /project overview|concept & narrative/i;

function prepareIntro(projectId, sections) {
  const extras = { cover: null, descriptionHTML: "", subtitle: "" };
  const removed = new Set();
  const allFrames = sections.flatMap((s) => s.frames);

  // 1. Portada
  const cardCover = document.querySelector(
    `.file-card[data-project-id="${projectId}"] .cover-img`,
  );
  const cardIsAnimated =
    cardCover &&
    (cardCover.tagName === "VIDEO" || /\.gif$/i.test(cardCover.getAttribute("src") || ""));
  const videoFrame = cardIsAnimated
    ? allFrames.find((f) => f.kind === "media" && f.mediaType === "video")
    : null;

  if (videoFrame) {
    extras.cover = { html: videoFrame.html, mediaType: "video" };
    removed.add(videoFrame.id);
  } else {
    const cover = projectCover(projectId);
    if (cover) {
      extras.cover = cover;
      allFrames.forEach((f) => {
        if (f.kind === "media" && cover.src && f.html.includes(`"${cover.src}"`)) {
          removed.add(f.id);
        }
      });
    }
  }

  // 2. Primera parte: fuera la cabecera repetida; su "Project Overview" es la descripción
  sections[0]?.frames.forEach((frame) => {
    if (frame.kind !== "text") return;

    const content = parseHTML(frame.html);
    const root = content.querySelector(".artboard-card") || content;

    root.querySelectorAll(".card-header").forEach((el) => el.remove());
    const subtitle = root.querySelector(".subtitle");
    if (subtitle) {
      if (!extras.subtitle) extras.subtitle = subtitle.textContent.trim();
      subtitle.remove();
    }

    if (!extras.descriptionHTML) {
      const heading = Array.from(root.querySelectorAll("h1, h2, h3")).find((h) =>
        OVERVIEW_RE.test(h.textContent),
      );
      if (heading) {
        const parts = [];
        let node = heading.nextElementSibling;
        while (node && !/^H[1-3]$/.test(node.tagName)) {
          const next = node.nextElementSibling;
          if (node.matches("p, ul")) {
            parts.push(node.outerHTML);
            node.remove();
          }
          node = next;
        }
        heading.remove();
        extras.descriptionHTML = parts.join("");
      }
    }

    if (!root.textContent.trim() && !root.querySelector("img, video, iframe")) {
      removed.add(frame.id);
      return;
    }

    const firstHeading = root.querySelector("h1, h2, h3");
    if (firstHeading) frame.title = firstHeading.textContent.trim();
    frame.html = root.outerHTML;
  });

  // 3. Quitar los frames repetidos y pasar sus comentarios de autora al frame siguiente
  sections.forEach((section) => {
    section.comments.forEach((c) => {
      if (!removed.has(c.frameId)) return;
      const index = section.frames.findIndex((f) => f.id === c.frameId);
      const after = section.frames.slice(index + 1).find((f) => !removed.has(f.id));
      const before = section.frames
        .slice(0, index)
        .reverse()
        .find((f) => !removed.has(f.id));
      c.frameId = (after || before)?.id;
    });
    section.frames = section.frames.filter((f) => !removed.has(f.id));
  });

  return extras;
}

const CALENDAR_ICON = `<img class="intro-pill-icon" src="img/icons/icon-calendar.svg" alt="">`;

// Introducción del proyecto: título suelto con sus tarjetitas (año y rol) y el menú
// de acceso rápido; después la portada y la descripción con el software
function introSection(projectId, project, sections, extras = {}) {
  const roles = (project.role || "")
    .split(/,|&/)
    .map((r) => r.trim())
    .filter(Boolean);
  const software = project.software || project.tools || [];
  const w = 1040;

  // Accesos rápidos: las partes del proyecto (o sus pantallas, si es una sola parte)
  const contentSections = sections.filter((s) => s.frames.length);
  const jumps =
    contentSections.length > 1
      ? contentSections.map((s) => ({ label: s.title, target: s.frames[0].id }))
      : (contentSections[0]?.frames || []).map((f) => ({ label: f.title, target: f.id }));
  const menu =
    jumps.length > 1 && jumps.length <= 8
      ? `<nav class="intro-menu">${jumps
          .map(
            (j) =>
              `<button class="intro-menu-item" data-jump="${j.target}">${escapeHTML(
                j.label.replace(/^\d+\.\s*/, ""),
              )}</button>`,
          )
          .join("")}</nav>`
      : "";

  const tags = `
    <div class="intro-tags">
      <span class="intro-tag">${CALENDAR_ICON}${project.year}</span>
      ${roles.map((r) => `<span class="intro-tag">${roleIconHTML(r)}${r}</span>`).join("")}
    </div>`;

  const frames = [
    {
      id: `${projectId}-intro-title`,
      title: "Title",
      w,
      kind: "intro-title",
      html: `<div class="intro-block intro-heading"><h1 class="intro-title">${project.title}</h1>${
        extras.subtitle ? `<p class="intro-subtitle">${escapeHTML(extras.subtitle)}</p>` : ""
      }${tags}${menu}</div>`,
    },
  ];

  const cover = extras.cover;
  if (cover) {
    frames.push({
      id: `${projectId}-intro-cover`,
      title: "Cover",
      w,
      kind: "media",
      mediaType: cover.mediaType,
      html: cover.html,
    });
  }

  frames.push({
    id: `${projectId}-intro-desc`,
    title: "Description",
    w,
    kind: "intro",
    html: `
      <div class="intro-block">
        ${
          extras.descriptionHTML
            ? `<div class="intro-desc">${extras.descriptionHTML}</div>`
            : `<p class="intro-desc">${project.description}</p>`
        }
        ${
          software.length
            ? `<div class="intro-software-block">
                <span class="intro-label">Software</span>
                <div class="intro-software">${software.map(softwareIconHTML).join("")}</div>
              </div>`
            : ""
        }
      </div>`,
  });

  return {
    id: `${projectId}-intro`,
    title: "Project intro",
    columns: 1,
    rows: true,
    comments: [],
    frames,
  };
}

function buildCanvasModel(projectId, project) {
  const isCardProject = project.artboards.some((ab) =>
    ab.content.includes('class="artboard-card"'),
  );

  let sections;

  if (isCardProject) {
    sections = project.artboards.map((ab) => {
      const { frames, comments } = splitCardIntoFrames(ab);
      return { id: ab.id, title: ab.title, columns: 3, frames, comments };
    });
  } else {
    // Galerías y pantallas de interfaz: una sola sección con los frames tal cual
    sections = [
      {
        id: `${projectId}-section`,
        title: project.title,
        columns: project.columns || 4,
        comments: [],
        frames: project.artboards.map((ab) => {
          const media = isSingleMedia(ab.content);
          return {
            id: ab.id,
            title: ab.title,
            w: ab.w || 320,
            html: ab.content,
            kind: media ? "media" : "ui",
            mediaType:
              media && ab.content.trim().startsWith("<video") ? "video" : "image",
          };
        }),
      },
    ];
  }

  // Todos los proyectos empiezan con su introducción
  if (!NO_INTRO_PROJECTS.includes(projectId)) {
    const extras = prepareIntro(projectId, sections);
    const intro = introSection(projectId, project, sections, extras);

    // Proyectos que solo llevan el título (sin tarjetitas, menú ni descripción)
    if (TITLE_ONLY_PROJECTS.includes(projectId)) {
      intro.frames = [
        {
          ...intro.frames[0],
          html: `<div class="intro-block intro-heading"><h1 class="intro-title">${project.title}</h1></div>`,
        },
      ];
    }
    sections.unshift(intro);
  }

  // Todos los proyectos (menos el propio de commissions) acaban con el banner
  if (projectId !== "commissions") {
    sections.push({
      id: "cta-section",
      title: "Commissions",
      columns: 1,
      comments: [],
      frames: [
        { id: "cta-frame", title: "Request a commission", w: 720, kind: "cta", html: CTA_HTML },
      ],
    });
  }

  return sections;
}

// Abriendo la web como archivo (file://) YouTube no reproduce vídeos incrustados
// (error 153: necesita saber desde qué web se carga). Ahí se enseña la miniatura con
// un enlace al vídeo; publicada en internet se ve el reproductor normal.
function replaceYouTubeWhenLocal() {
  if (location.protocol !== "file:") return;
  canvas.querySelectorAll('iframe[src*="youtube.com/embed/"]').forEach((iframe) => {
    const id = (iframe.src.match(/embed\/([\w-]{6,})/) || [])[1];
    if (!id) return;
    const link = document.createElement("a");
    link.className = "yt-local";
    link.href = `https://www.youtube.com/watch?v=${id}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = "Watch on YouTube";
    link.innerHTML = `
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="">
      <span class="yt-local-play"><svg width="68" height="48" viewBox="0 0 68 48"><path d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2.2 34 .2 34 .2s-21.2 0-26.5 1.5a8.6 8.6 0 0 0-6 6C0 13 0 24 0 24s0 11 1.5 16.3a8.6 8.6 0 0 0 6 6C12.8 47.8 34 47.8 34 47.8s21.2 0 26.5-1.5a8.6 8.6 0 0 0 6-6C68 35 68 24 68 24s0-11-1.5-16.3Z" fill="#f00"/><path d="m27 34 18-10-18-10Z" fill="#fff"/></svg></span>
      <span class="yt-local-label">Watch on YouTube</span>`;
    iframe.replaceWith(link);
  });
}

function renderProjectCanvas(projectId, project) {
  canvas.innerHTML = "";
  canvasSections = buildCanvasModel(projectId, project);
  viewport.classList.toggle("is-scroll-canvas", !isFreeCanvas());

  canvasSections.forEach((section) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "canvas-section";
    sectionEl.id = section.id;
    sectionEl.innerHTML = `<div class="canvas-section-label">${LAYER_ICONS.section}<span>${escapeHTML(section.title)}</span></div>`;

    section.frames.forEach((frame) => {
      const frameEl = document.createElement("div");
      frameEl.className = `artboard is-${frame.kind}`;
      frameEl.id = frame.id;
      frameEl.innerHTML = `
        <div class="artboard-title">${escapeHTML(frame.title)}</div>
        <div class="artboard-content">${frame.html}</div>
      `;

      frameEl.addEventListener("click", (e) => {
        if (activeTool !== "select") return;
        // Enlaces y botones del diseño (pestañas, acordeones…) siguen funcionando
        if (e.target.closest("a, button, summary, input, textarea")) return;
        e.stopPropagation();
        // En las galerías, pulsar una ilustración la encuadra entera
        selectFrame(frame.id, isFreeCanvas());
      });

      sectionEl.appendChild(frameEl);
    });

    canvas.appendChild(sectionEl);
  });

  replaceYouTubeWhenLocal();

  // Commissions: pintar galería y tarjeta del primer paquete antes de medir alturas
  if (project.packages) {
    renderCommPackage(Object.keys(project.packages)[0], false);
  }

  layoutCanvas();
  setupReveal();
  renderAuthorComments();
  fitToScreen();

  if (frameResizeObserver) {
    frameResizeObserver.disconnect();
    canvas
      .querySelectorAll(".canvas-section .artboard")
      .forEach((el) => frameResizeObserver.observe(el));
  }

  // Re-calcular cuando las imágenes o vídeos terminen de cargar
  canvas.querySelectorAll("img, video").forEach((media) => {
    media.addEventListener("load", scheduleLayout);
    media.addEventListener("loadedmetadata", scheduleLayout);
  });
}

// Zona del canvas que queda visible entre los paneles flotantes
function getVisibleArea() {
  const panelsFloating = window.innerWidth > 900;
  const layersCollapsed = layersPanel.classList.contains("is-collapsed");
  const left = !panelsFloating ? 0 : layersCollapsed ? 12 : layersPanel.getBoundingClientRect().right;
  const propertiesCollapsed = propertiesPanel.classList.contains("is-collapsed");
  const right = !panelsFloating
    ? window.innerWidth
    : propertiesCollapsed
      ? window.innerWidth - 12
      : propertiesPanel.getBoundingClientRect().left;
  const bottom = window.innerHeight - 72; // barra de herramientas inferior

  return { left, right, top: 0, bottom, width: right - left, height: bottom };
}

function layoutCanvas() {
  frameRects = {};
  sectionRects = {};

  if (isFreeCanvas()) layoutFreeCanvas();
  else layoutScrollCanvas();

  positionAuthorComments();
}

// Coloca los frames de una sección por filas: cada elemento debajo del otro, salvo
// los de una misma fila (rejillas de imágenes, datos + software). Devuelve la altura.
function layoutSectionRows(section, x, y, width, { gapX, gapY, padTop }) {
  const rows = [];
  section.frames.forEach((frame) => {
    const last = rows[rows.length - 1];
    if (frame.row && last && last.rowKey === frame.row) {
      last.push(frame);
      return;
    }
    const row = [frame];
    if (frame.row) row.rowKey = frame.row;
    rows.push(row);
  });

  let top = padTop;
  rows.forEach((row) => {
    // Las páginas de cómic (maxFrameWidth) van centradas a un ancho de lectura
    const maxFrameWidth =
      row.length === 1 && row[0].kind === "media"
        ? currentActiveProject?.maxFrameWidth
        : null;
    const slots = Math.max(row.length, row[0].rowSize || 0);
    const cellW = maxFrameWidth
      ? Math.min(width, maxFrameWidth)
      : (width - gapX * (slots - 1)) / slots;
    const offset = (width - (cellW * row.length + gapX * (row.length - 1))) / 2;

    let rowH = 0;
    row.forEach((frame, i) => {
      const frameEl = document.getElementById(frame.id);
      if (!frameEl) return;
      const left = offset + i * (cellW + gapX);
      frameEl.style.width = `${cellW}px`;
      frameEl.style.left = `${left}px`;
      frameEl.style.top = `${top}px`;
      const h = frameEl.offsetHeight || 200;
      rowH = Math.max(rowH, h);
      frameRects[frame.id] = { x: x + left, y: y + top, w: cellW, h };
    });
    top += rowH + gapY;
  });

  return top - gapY;
}

// CANVAS LIBRE (galerías): masonry por columnas
function layoutFreeCanvas() {
  const mobile = window.innerWidth <= 768;
  const placed = [];
  let y = 0;

  canvasSections.forEach((section) => {
    const sectionEl = document.getElementById(section.id);
    if (!sectionEl || !section.frames.length) return;

    const maxW = Math.max(...section.frames.map((f) => f.w));
    const colW = mobile
      ? Math.min(maxW, window.innerWidth - SECTION_PAD_X * 2 - 32)
      : maxW;
    let width;
    let height;
    const frames = [];

    if (section.rows) {
      // La introducción se coloca por filas, igual que en el canvas con scroll
      height = layoutSectionRows(section, 0, y, colW, {
        gapX: FRAME_GAP_X,
        gapY: FRAME_GAP_Y,
        padTop: SECTION_PAD_TOP,
      });
      width = colW;
      section.frames.forEach((f) => {
        const r = frameRects[f.id];
        if (r) frames.push({ id: f.id, left: r.x, top: r.y - y, w: r.w, h: r.h });
      });
    } else {
      const cols = Math.max(
        1,
        Math.min(mobile ? 1 : section.columns, section.frames.length),
      );
      const colHeights = new Array(cols).fill(SECTION_PAD_TOP);

      section.frames.forEach((frame) => {
        const frameEl = document.getElementById(frame.id);
        if (!frameEl) return;

        let col = 0;
        for (let i = 1; i < cols; i++) {
          if (colHeights[i] < colHeights[col]) col = i;
        }

        const left = SECTION_PAD_X + col * (colW + FRAME_GAP_X);
        const top = colHeights[col];

        frameEl.style.width = `${colW}px`;
        frameEl.style.left = `${left}px`;
        frameEl.style.top = `${top}px`;

        const h = frameEl.offsetHeight || 200;
        colHeights[col] += h + FRAME_GAP_Y;
        frames.push({ id: frame.id, left, top, w: colW, h });
      });

      width = SECTION_PAD_X * 2 + cols * colW + (cols - 1) * FRAME_GAP_X;
      height = Math.max(...colHeights) - FRAME_GAP_Y + SECTION_PAD_BOTTOM;
    }

    sectionEl.style.top = `${y}px`;
    sectionEl.style.width = `${width}px`;
    sectionEl.style.height = `${height}px`;

    placed.push({ section, sectionEl, y, width, height, frames });
    y += height + SECTION_GAP;
  });

  // Centrar las secciones entre sí
  const maxWidth = Math.max(0, ...placed.map((p) => p.width));
  placed.forEach((p) => {
    const x = (maxWidth - p.width) / 2;
    p.sectionEl.style.left = `${x}px`;
    sectionRects[p.section.id] = { x, y: p.y, w: p.width, h: p.height };
    p.frames.forEach((f) => {
      frameRects[f.id] = { x: x + f.left, y: p.y + f.top, w: f.w, h: f.h };
    });
  });
}

// CANVAS CON SCROLL: ancho de la pantalla, cada elemento debajo del otro
function layoutScrollCanvas() {
  const area = getVisibleArea();
  const mobile = window.innerWidth <= 768;
  const gap = mobile ? 12 : 24; // aire entre los paneles y los frames
  const opts = {
    gapX: mobile ? 14 : 32,
    gapY: mobile ? 48 : 56,
    padTop: SECTION_PAD_TOP,
  };
  const x = area.left + gap;
  const width = Math.max(280, area.width - gap * 2);
  let y = CANVAS_TOP;

  canvasSections.forEach((section) => {
    const sectionEl = document.getElementById(section.id);
    if (!sectionEl || !section.frames.length) return;

    const height = layoutSectionRows(section, x, y, width, opts);

    sectionEl.style.left = `${x}px`;
    sectionEl.style.top = `${y}px`;
    sectionEl.style.width = `${width}px`;
    sectionEl.style.height = `${height}px`;
    sectionRects[section.id] = { x, y, w: width, h: height };

    y += height + opts.gapY;
  });
}

let layoutRequest = null;
function scheduleLayout() {
  if (layoutRequest) return;
  layoutRequest = setTimeout(() => {
    layoutRequest = null;
    layoutCanvas();
    if (!userMovedView) fitToScreen();
    else updateTransform();
  }, 30);
}

// Si un frame cambia de alto (vídeo o iframe que carga, desplegable que se abre…),
// se recolocan los demás
const frameResizeObserver =
  "ResizeObserver" in window ? new ResizeObserver(() => scheduleLayout()) : null;

function getContentBounds() {
  const rects = Object.values(sectionRects);
  if (!rects.length) return null;

  const minX = Math.min(...rects.map((r) => r.x));
  const minY = Math.min(...rects.map((r) => r.y));
  const maxX = Math.max(...rects.map((r) => r.x + r.w));
  const maxY = Math.max(...rects.map((r) => r.y + r.h));

  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function computeFitView() {
  // Canvas con scroll: siempre al 100% y empezando arriba
  if (!isFreeCanvas()) return { x: 0, y: 0, s: 1 };

  const bounds = getContentBounds();
  if (!bounds) return null;

  const area = getVisibleArea();
  const padding = window.innerWidth <= 600 ? 16 : 48;
  const s = Math.max(0.1, Math.min(1, (area.width - padding * 2) / bounds.w));

  return {
    x: area.left + (area.width - bounds.w * s) / 2 - bounds.x * s,
    y: area.top + padding - bounds.y * s,
    s,
  };
}

function fitToScreen(animate = false) {
  const view = computeFitView();
  if (!view) return;

  if (animate) {
    smoothPanAndZoomTo(view.x, view.y, view.s);
  } else {
    pointX = view.x;
    pointY = view.y;
    scale = view.s;
    updateTransform();
  }
}

window.addEventListener("resize", () => {
  if (
    document.getElementById("editor-view").classList.contains("active") &&
    currentActiveProject
  ) {
    const wasScroll = viewport.classList.contains("is-scroll-canvas");
    viewport.classList.toggle("is-scroll-canvas", !isFreeCanvas());  // NUEVO
    layoutCanvas();
    if (isFreeCanvas()) fitToScreen();
    else if (wasScroll !== !isFreeCanvas()) fitToScreen();  // NUEVO: al cambiar de modo, reencuadra
    else updateTransform();
  }
});

// SELECCIÓN DE FRAMES Y SECCIONES
function clearSelection() {
  canvas
    .querySelectorAll(".artboard.selected, .canvas-section.selected")
    .forEach((el) => el.classList.remove("selected"));
  document
    .querySelectorAll("#layers-list .lp-row.active")
    .forEach((el) => el.classList.remove("active"));
}

function selectFrame(id, zoom = true) {
  clearSelection();
  document.getElementById(id)?.classList.add("selected");
  document
    .querySelector(`#layers-list [data-target-id="${id}"]`)
    ?.classList.add("active");

  if (!zoom) return;

  const rect = frameRects[id] || sectionRects[id];
  if (!rect) return;

  userMovedView = true;
  closeMobilePanels();

  // Canvas con scroll: bajar hasta el frame
  if (!isFreeCanvas()) {
    smoothPanAndZoomTo(0, CANVAS_TOP + 12 - rect.y, 1);
    return;
  }

  // Canvas libre: encuadrar el frame entero, también en vertical
  const area = getVisibleArea();
  const padding = 48;
  const s = Math.max(
    0.1,
    Math.min(
      (area.width - padding * 2) / rect.w,
      (area.height - padding * 2) / rect.h,
      2,
    ),
  );
  const targetX = area.left + (area.width - rect.w * s) / 2 - rect.x * s;
  const targetY = area.top + (area.height - rect.h * s) / 2 - rect.y * s;

  smoothPanAndZoomTo(targetX, targetY, s);
}

function smoothPanAndZoomTo(targetX, targetY, targetScale, duration = 400) {
  if (currentAnimationId) cancelAnimationFrame(currentAnimationId);

  const startX = pointX;
  const startY = pointY;
  const startScale = scale;
  const startTime = performance.now();

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    pointX = startX + (targetX - startX) * easedProgress;
    pointY = startY + (targetY - startY) * easedProgress;
    scale = startScale + (targetScale - startScale) * easedProgress;

    updateTransform();

    if (progress < 1) {
      currentAnimationId = requestAnimationFrame(step);
    } else {
      currentAnimationId = null;
    }
  }

  currentAnimationId = requestAnimationFrame(step);
}

// Límites de movimiento del canvas
function clampPan() {
  const bounds = getContentBounds();
  if (!bounds) return;

  // Canvas con scroll: zoom de 1x a 3x; de lado solo se mueve si hay zoom
  if (!isFreeCanvas()) {
    scale = Math.min(Math.max(scale, 1), 3);
    const maxX = bounds.x * (1 - scale); // borde izquierdo en su sitio
    const minX = (bounds.x + bounds.w) * (1 - scale); // borde derecho en su sitio
    pointX = Math.min(Math.max(pointX, minX), maxX);
    const minY = Math.min(0, window.innerHeight - 96 - (bounds.y + bounds.h) * scale);
    pointY = Math.min(0, Math.max(pointY, minY));
    return;
  }

  const area = getVisibleArea();
  const keep = 160; // píxeles de contenido que siempre quedan visibles
  const clamp = (value, a, b) =>
    Math.min(Math.max(value, Math.min(a, b)), Math.max(a, b));

  pointX = clamp(
    pointX,
    area.left + keep - (bounds.x + bounds.w) * scale,
    area.right - keep - bounds.x * scale,
  );
  pointY = clamp(
    pointY,
    keep - (bounds.y + bounds.h) * scale,
    window.innerHeight - keep - bounds.y * scale,
  );
}

function updateTransform() {
  clampPan();

  canvas.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
  if (zoomDisplay) zoomDisplay.textContent = `${Math.round(scale * 100)}%`;
  document.documentElement.style.setProperty("--canvas-scale", scale);

  // Rejilla de puntos que se mueve y escala con el canvas, como en Figma
  let dot = 24 * scale;
  while (dot < 12) dot *= 2;
  viewport.style.backgroundSize = `${dot}px ${dot}px`;
  viewport.style.backgroundPosition = `${pointX}px ${pointY}px`;

  checkReveal();
}

// PANEL IZQUIERDO: PÁGINAS (proyectos) Y CAPAS (secciones y frames)
function renderPagesList() {
  const list = document.getElementById("pages-list");
  if (!list) return;

  list.innerHTML = "";
  document.querySelectorAll(".file-card[data-project-id]").forEach((card) => {
    const id = card.dataset.projectId;
    if (!projectsData[id]) return;

    const row = document.createElement("button");
    row.className = `lp-row lp-page${id === currentProjectId ? " active" : ""}`;
    const mainTag = projectsData[id].tags?.[0] || "";
    row.innerHTML = `<span class="lp-page-tag" style="--tag-color:${tagStyle(mainTag).color}" title="${escapeHTML(mainTag)}">${tagIconHTML(mainTag)}</span><span class="lp-label"></span>${
      id === currentProjectId ? `<span class="lp-page-check">${LAYER_ICONS.check}</span>` : ""
    }`;
    row.querySelector(".lp-label").textContent =
      card.querySelector("h4")?.textContent || projectsData[id].title;

    row.addEventListener("click", () => {
      if (id !== currentProjectId) openProject(id);
      closeMobilePanels();
    });

    list.appendChild(row);
  });
}

function frameIcon(frame) {
  if (frame.kind === "text" || frame.kind === "intro-title") return LAYER_ICONS.text;
  if (frame.kind === "media") {
    return frame.mediaType === "video" ? LAYER_ICONS.video : LAYER_ICONS.image;
  }
  return LAYER_ICONS.frame;
}

function renderLayersList() {
  const list = document.getElementById("layers-list");
  list.innerHTML = "";

  const makeRow = (frame, nested) => {
    const row = document.createElement("button");
    row.className = `lp-row is-frame${nested ? " is-child" : ""}`;
    row.dataset.targetId = frame.id;
    row.innerHTML = `${frameIcon(frame)}<span class="lp-label"></span>`;
    row.querySelector(".lp-label").textContent = frame.title;
    row.addEventListener("click", () => selectFrame(frame.id));
    return row;
  };

  canvasSections.forEach((section) => {
    let parent = null; // último frame de texto: las rejillas que le siguen van dentro
    let group = null;

    section.frames.forEach((frame) => {
      if (frame.row && parent) {
        if (!group) {
          group = document.createElement("div");
          group.className = "lp-children";
          parent.row.classList.add("has-children");
          parent.row.insertAdjacentHTML(
            "afterbegin",
            `<span class="lp-caret">${LAYER_ICONS.caret}</span>`,
          );
          parent.row.querySelector(".lp-caret").addEventListener("click", (e) => {
            e.stopPropagation();
            parent.wrap.classList.toggle("collapsed");
          });
          parent.wrap.appendChild(group);
        }
        group.appendChild(makeRow(frame, true));
        return;
      }

      const wrap = document.createElement("div");
      wrap.className = "lp-section-group";
      const row = makeRow(frame, false);
      wrap.appendChild(row);
      list.appendChild(wrap);
      parent = frame.kind === "text" || frame.kind === "intro-title" ? { row, wrap } : null;
      group = null;
    });
  });

  filterLayers();
}

// Buscador de capas
const layerSearch = document.getElementById("layer-search");

function filterLayers() {
  const query = (layerSearch?.value || "").trim().toLowerCase();
  document.querySelectorAll("#layers-list .lp-row, #pages-list .lp-row").forEach((row) => {
    const match = !query || row.textContent.toLowerCase().includes(query);
    row.style.display = match ? "" : "none";
  });
}

layerSearch?.addEventListener("input", filterLayers);

document.getElementById("btn-layer-search")?.addEventListener("click", () => {
  layerSearch.hidden = !layerSearch.hidden;
  if (!layerSearch.hidden) {
    layerSearch.focus();
  } else {
    layerSearch.value = "";
    filterLayers();
  }
});

// PANEL DERECHO: PRESENTAR Y ZOOM
document.getElementById("btn-present")?.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
});

zoomDisplay?.addEventListener("click", () => {
  userMovedView = false;
  fitToScreen(true);
});

const visitorAvatar = document.getElementById("pp-visitor-avatar");
if (visitorAvatar) {
  visitorAvatar.textContent = VISITOR.initial;
  visitorAvatar.style.backgroundColor = VISITOR.color;
  visitorAvatar.title = `${VISITOR.name} (you)`;
}

/* EVENTOS MOUSE Y PANNING */
viewport.addEventListener("mousedown", (e) => {
  if (activeTool === "hand" || spacePressed || e.button === 1) {
    e.preventDefault();
    isPanning = true;
    userMovedView = true;
    startX = e.clientX - pointX;
    startY = e.clientY - pointY;
    viewport.classList.add("is-panning");
    updateCursorMode(e.target);
  }
});

window.addEventListener("mousemove", (e) => {
  if (!isPanning) return;
  pointX = e.clientX - startX; // en el canvas con scroll, clampPan lo deja en 0
  pointY = e.clientY - startY;
  updateTransform();
});

window.addEventListener("mouseup", (e) => {
  isPanning = false;
  viewport.classList.remove("is-panning");
  updateCursorMode(e.target);
});

/* INTERACCIÓN TÁCTIL / TOUCH EVENTS PARA MÓVILES */
let touchStartDist = 0;
let initialScale = 1;

viewport.addEventListener(
  "touchstart",
  (e) => {
    userMovedView = true;
    if (e.touches.length === 1) {
      isPanning = true;
      startX = e.touches[0].clientX - pointX;
      startY = e.touches[0].clientY - pointY;
    } else if (e.touches.length === 2) {
      isPanning = false;
      touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      initialScale = scale;
    }
  },
  { passive: true },
);

viewport.addEventListener(
  "touchmove",
  (e) => {
    if (isPanning && e.touches.length === 1) {
      pointX = e.touches[0].clientX - startX;
      pointY = e.touches[0].clientY - startY;
      updateTransform();
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      if (touchStartDist > 0) {
        const pinchScale = dist / touchStartDist;
        const next = Math.min(Math.max(0.15, initialScale * pinchScale), 4);
        const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        pointX = mx - (mx - pointX) * (next / scale);
        pointY = my - (my - pointY) * (next / scale);
        scale = next;
        updateTransform();
      }
    }
  },
  { passive: true },
);

viewport.addEventListener("touchend", () => {
  isPanning = false;
  touchStartDist = 0;
});

viewport.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    userMovedView = true;

    // Ruedas que cuentan por líneas (Firefox) en vez de píxeles
    const unit = e.deltaMode === 1 ? 16 : 1;

    // Canvas con scroll: rueda = scroll vertical; Ctrl/pellizco = zoom
    if (!isFreeCanvas() && !(e.ctrlKey || e.metaKey)) {
      pointY -= e.deltaY * unit;
      pointX -= e.deltaX * unit;
      updateTransform();
      return;
    }

    if (e.ctrlKey || e.metaKey) {
      const zoomFactor = 1.05;
      let newScale = e.deltaY < 0 ? scale * zoomFactor : scale / zoomFactor;
      newScale = Math.min(Math.max(0.15, newScale), 4);

      const rect = viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      pointX = mouseX - (mouseX - pointX) * (newScale / scale);
      pointY = mouseY - (mouseY - pointY) * (newScale / scale);
      scale = newScale;
    } else {
      pointX -= e.deltaX * unit;
      pointY -= e.deltaY * unit;
    }

    updateTransform();
  },
  { passive: false },
);

// =========================================================
// APARICIÓN DE FRAMES: el cursor de Marta hace clic y aparece el frame
// =========================================================
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const MARTA_CURSOR_COLOR = "#8a38f5";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let revealQueue = [];
let revealBusy = false;
let revealSession = 0; // cambia al abrir otro proyecto y corta la secuencia anterior
let martaCursor = null;
let martaIdleTimer = null;

let martaAway = false;
let martaNextFlyBy = 0;

const screenToCanvas = (sx, sy) => ({
  x: (sx - pointX) / scale,
  y: (sy - pointY) / scale,
});

// Cuando no hay frames por abrir, el cursor se va; de vez en cuando cruza la pantalla
function scheduleMartaIdle(session) {
  clearTimeout(martaIdleTimer);
  martaAway = false;
  martaNextFlyBy = performance.now() + 15000 + Math.random() * 15000;

  const tick = () => {
    if (session !== revealSession || !martaCursor) return;

    if (!revealBusy && !revealQueue.length) {
      if (!martaAway) {
        martaLeave();
      } else if (performance.now() > martaNextFlyBy) {
        martaFlyBy();
        martaNextFlyBy = performance.now() + 15000 + Math.random() * 15000;
      }
    }

    martaIdleTimer = setTimeout(tick, 900);
  };

  martaIdleTimer = setTimeout(tick, 900);
}

// Sale por el borde derecho (por detrás del panel de información)
function martaLeave() {
  const area = getVisibleArea();
  const current = martaCursor.getBoundingClientRect();
  const target = screenToCanvas(area.right + 80, current.top);

  martaCursor.classList.remove("is-idle", "is-flyby");
  martaCursor.classList.add("is-away");
  martaCursor.style.left = `${target.x}px`;
  martaCursor.style.top = `${target.y}px`;
  martaAway = true;
}

// Cruza la pantalla rápido de un lado al otro y vuelve a desaparecer
function martaFlyBy() {
  const area = getVisibleArea();
  const fromLeft = Math.random() < 0.5;
  const y1 = area.height * (0.2 + Math.random() * 0.6);
  const y2 = Math.min(
    area.height - 40,
    Math.max(40, y1 + (Math.random() * 240 - 120)),
  );
  const from = screenToCanvas(fromLeft ? area.left - 80 : area.right + 80, y1);
  const to = screenToCanvas(fromLeft ? area.right + 80 : area.left - 80, y2);

  martaCursor.classList.add("no-transition");
  martaCursor.classList.remove("is-away");
  martaCursor.style.left = `${from.x}px`;
  martaCursor.style.top = `${from.y}px`;
  void martaCursor.offsetWidth; // aplicar la posición de salida sin animación

  martaCursor.classList.remove("no-transition");
  martaCursor.classList.add("is-flyby");
  martaCursor.style.left = `${to.x}px`;
  martaCursor.style.top = `${to.y}px`;

  setTimeout(() => {
    if (martaCursor?.classList.contains("is-flyby")) {
      martaCursor.classList.remove("is-flyby");
      martaCursor.classList.add("is-away");
    }
  }, 1200);
}

function setupReveal() {
  revealSession++;
  revealQueue = [];
  revealBusy = false;
  martaCursor = null;

  const animate = !prefersReducedMotion;
  canvas.classList.toggle("has-reveal", animate);
  if (!animate) return;

  canvas
    .querySelectorAll(".canvas-section .artboard")
    .forEach((el) => el.classList.add("is-hidden-frame"));

  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  martaCursor = document.createElement("div");
  martaCursor.className = "marta-cursor no-transition";
  martaCursor.style.setProperty("--cursor-color", MARTA_CURSOR_COLOR);
  martaCursor.innerHTML = `<span class="marta-cursor-icon">${CURSOR_ICONS.arrow}</span><span class="marta-cursor-label">Marta Pey</span>`;

  // Empieza un poco por encima y a la izquierda del primer frame
  const first = Object.values(frameRects)[0] || { x: 0, y: 0 };
  martaCursor.style.left = `${first.x + 40}px`;
  martaCursor.style.top = `${first.y + 20}px`;
  canvas.appendChild(martaCursor);
  requestAnimationFrame(() => martaCursor?.classList.remove("no-transition"));
  scheduleMartaIdle(revealSession);
}

// Mira qué frames ocultos han entrado en pantalla y los pone en cola
function checkReveal() {
  if (!canvas.classList.contains("has-reveal")) return;

  const hidden = canvas.querySelectorAll(".artboard.is-hidden-frame:not(.is-queued)");
  if (!hidden.length) return;

  const entering = [];
  hidden.forEach((el) => {
    const rect = frameRects[el.id];
    if (!rect) return;
    const top = rect.y * scale + pointY;
    const bottom = top + rect.h * scale;
    const left = rect.x * scale + pointX;
    const right = left + rect.w * scale;
    if (
      top < window.innerHeight - 60 &&
      bottom > 0 &&
      left < window.innerWidth &&
      right > 0
    ) {
      entering.push({ id: el.id, x: rect.x, y: rect.y });
      el.classList.add("is-queued");
    }
  });

  if (!entering.length) return;
  entering.sort((a, b) => a.y - b.y || a.x - b.x);
  revealQueue.push(...entering.map((e) => e.id));
  processRevealQueue();
}

async function processRevealQueue() {
  if (revealBusy) return;
  revealBusy = true;
  const session = revealSession;

  while (revealQueue.length && session === revealSession) {
    // Muchos frames a la vez (scroll rápido o galerías): aparecen seguidos, sin esperar al cursor
    if (revealQueue.length > 2) {
      const batch = revealQueue.splice(0);
      moveMartaCursor(batch[batch.length - 1]);
      batch.forEach((id, i) =>
        setTimeout(() => session === revealSession && popFrame(id), i * 70),
      );
      await wait(batch.length * 70 + 250);
      continue;
    }

    const id = revealQueue.shift();
    moveMartaCursor(id);
    await wait(560);
    if (session !== revealSession) break;
    martaClick();
    await wait(160);
    if (session !== revealSession) break;
    popFrame(id);
    await wait(260);
  }

  if (session === revealSession) revealBusy = false;
}

function moveMartaCursor(id) {
  const rect = frameRects[id];
  if (!martaCursor || !rect) return;
  martaCursor.classList.remove("is-idle", "is-away", "is-flyby");
  martaAway = false;
  martaCursor.style.left = `${rect.x + rect.w * 0.5}px`;
  martaCursor.style.top = `${rect.y + Math.min(rect.h * 0.4, 140)}px`;
}

function martaClick() {
  if (!martaCursor) return;
  martaCursor.classList.remove("is-clicking");
  void martaCursor.offsetWidth; // reinicia la animación del clic
  martaCursor.classList.add("is-clicking");
}

function popFrame(id) {
  const el = document.getElementById(id);
  if (!el || !el.classList.contains("is-hidden-frame")) return;

  el.classList.remove("is-hidden-frame", "is-queued");
  el.classList.add("is-popping");
  el.addEventListener("animationend", () => el.classList.remove("is-popping"), {
    once: true,
  });

  canvas
    .querySelectorAll(`.fc-wrapper[data-frame-id="${id}"]`)
    .forEach((w) => w.classList.add("is-revealed"));

  typeHeading(el);
}

// El título del frame se escribe letra a letra
function typeHeading(frameEl) {
  const heading = frameEl.querySelector(
    ".artboard-content h1, .artboard-content h2, .artboard-content h3",
  );
  if (!heading) return;

  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode);
  }
  if (!nodes.length) return;

  const texts = nodes.map((n) => n.nodeValue);
  heading.style.minHeight = `${heading.offsetHeight}px`;
  nodes.forEach((n) => (n.nodeValue = ""));

  const caret = document.createElement("span");
  caret.className = "type-caret";
  nodes[0].after(caret);

  const session = revealSession;
  let nodeIndex = 0;
  let charIndex = 0;

  const step = () => {
    if (session !== revealSession) return;
    if (nodeIndex >= nodes.length) {
      caret.remove();
      heading.style.minHeight = "";
      return;
    }
    charIndex++;
    nodes[nodeIndex].nodeValue = texts[nodeIndex].slice(0, charIndex);
    if (charIndex >= texts[nodeIndex].length) {
      nodeIndex++;
      charIndex = 0;
      if (nodes[nodeIndex]) nodes[nodeIndex].after(caret);
    }
    setTimeout(step, 30 + Math.random() * 45);
  };
  step();
}

// =========================================================
// COMENTARIOS TIPO FIGMA (pines anclados al canvas)
// =========================================================
const FC_ICONS = {
  more: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="3.5" cy="8" r="1.3"/><circle cx="8" cy="8" r="1.3"/><circle cx="12.5" cy="8" r="1.3"/></svg>`,
  resolve: `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7.5"/><path d="m6.8 10.2 2.2 2.2 4.2-4.6"/></svg>`,
  close: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>`,
  addReaction: `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M16.8 10a6.8 6.8 0 1 1-6.1-6.8"/><circle cx="7.4" cy="8.4" r=".7" fill="currentColor" stroke="none"/><circle cx="11.6" cy="8.4" r=".7" fill="currentColor" stroke="none"/><path d="M6.9 11.8a3.6 3.6 0 0 0 5.2 0M15.5 2v4.5M13.25 4.25h4.5"/></svg>`,
  emoji: `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="10" cy="10" r="7.3"/><circle cx="7.4" cy="8.4" r=".7" fill="currentColor" stroke="none"/><circle cx="12.6" cy="8.4" r=".7" fill="currentColor" stroke="none"/><path d="M6.9 11.8a4.3 4.3 0 0 0 6.2 0"/></svg>`,
  mention: `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="10" cy="10" r="2.8"/><path d="M12.8 7.5v3.3a2 2 0 0 0 4 0V10a6.8 6.8 0 1 0-2.7 5.4"/></svg>`,
  image: `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><circle cx="12.8" cy="7.2" r="1.3"/><path d="m3.5 15 4.5-4.5 3 3 2-2 3.5 3.5"/></svg>`,
  send: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5"/></svg>`,
};
const FC_EMOJIS = ["👍", "❤️", "🔥", "👏", "🎨", "😍"];

function avatarHTML(person) {
  if (person.avatar) {
    return `<span class="fc-avatar"><img src="${person.avatar}" alt="${escapeHTML(person.name)}"></span>`;
  }
  return `<span class="fc-avatar" style="--fc-color:${person.color}">${escapeHTML(
    person.initial || person.name.charAt(0),
  )}</span>`;
}

function renderThread(wrapper) {
  const msgs = wrapper.messages;
  const first = msgs[0] || VISITOR;

  wrapper.querySelector(".fc-pin").innerHTML = avatarHTML(first);

  wrapper.querySelector(".fc-preview").innerHTML = msgs.length
    ? `<div class="fc-meta"><span class="fc-name">${escapeHTML(first.name)}</span><span class="fc-time">${escapeHTML(first.time)}</span></div>
       <div class="fc-preview-text">${escapeHTML(first.text)}</div>
       ${
         msgs.length > 1
           ? `<div class="fc-preview-replies">${msgs.length - 1} ${msgs.length === 2 ? "reply" : "replies"}</div>`
           : ""
       }`
    : "";

  const messagesEl = wrapper.querySelector(".fc-messages");
  messagesEl.innerHTML = msgs
    .map(
      (m, i) => `
      <div class="fc-msg">
        ${avatarHTML(m)}
        <div class="fc-msg-body">
          <div class="fc-meta">
            <span class="fc-name">${escapeHTML(m.name)}</span>
            <span class="fc-time">${escapeHTML(m.time)}</span>
            ${m.badge ? `<span class="fc-badge">${escapeHTML(m.badge)}</span>` : ""}
          </div>
          <div class="fc-text">${escapeHTML(m.text)}</div>
          <div class="fc-reactions">
            ${m.reactions
              .map(
                (r) =>
                  `<button class="fc-reaction${r.mine ? " mine" : ""}" data-act="react" data-msg="${i}" data-emoji="${r.emoji}">${r.emoji}<span>${r.count}</span></button>`,
              )
              .join("")}
            <button class="fc-add-reaction" data-act="add-reaction" title="Add reaction">${FC_ICONS.addReaction}</button>
            <div class="fc-emoji-picker">
              ${FC_EMOJIS.map(
                (em) =>
                  `<button data-act="pick-emoji" data-msg="${i}" data-emoji="${em}">${em}</button>`,
              ).join("")}
            </div>
          </div>
        </div>
      </div>`,
    )
    .join("");
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function toggleReaction(wrapper, msgIndex, emoji) {
  const msg = wrapper.messages[msgIndex];
  if (!msg) return;

  const reaction = msg.reactions.find((r) => r.emoji === emoji);
  if (!reaction) {
    msg.reactions.push({ emoji, count: 1, mine: true });
  } else if (reaction.mine) {
    reaction.count -= 1;
    reaction.mine = false;
    if (reaction.count <= 0) {
      msg.reactions = msg.reactions.filter((r) => r !== reaction);
    }
  } else {
    reaction.count += 1;
    reaction.mine = true;
  }

  renderThread(wrapper);
}

function openThread(wrapper) {
  closeAllThreads(wrapper);
  wrapper.classList.remove("fc-flip");
  wrapper.classList.add("open");

  placeThread(wrapper);

  if (wrapper.classList.contains("is-draft")) {
    setTimeout(() => wrapper.querySelector(".fc-input")?.focus(), 30);
  }
}

// Coloca el hilo junto al pin pero sin salirse de la parte visible (paneles, barra)
function placeThread(wrapper) {
  const thread = wrapper.querySelector(".fc-thread");
  thread.style.left = "";
  thread.style.top = "";
  const pin = wrapper.getBoundingClientRect(); // el wrapper mide 0×0 en el pin
  const area = getVisibleArea();
  const margin = 8;
  const w = thread.offsetWidth;
  const h = thread.offsetHeight;

  let left = pin.left + 46;
  if (left + w > area.right - margin) left = pin.left - w - 10; // al otro lado
  left = Math.min(Math.max(left, area.left + margin), area.right - margin - w);

  let top = pin.top - 36;
  top = Math.min(Math.max(top, margin), area.bottom - margin - h);
  top = Math.max(top, margin);

  thread.style.left = `${left - pin.left}px`;
  thread.style.top = `${top - pin.top}px`;
}

function closeThread(wrapper) {
  // Un comentario nuevo sin enviar desaparece al cerrarlo
  if (!wrapper.messages.length) {
    wrapper.remove();
    return;
  }
  wrapper.classList.remove("open");
  wrapper
    .querySelectorAll(".fc-menu.open, .fc-emoji-picker.open")
    .forEach((el) => el.classList.remove("open"));
}

function closeAllThreads(except = null) {
  canvas.querySelectorAll(".fc-wrapper").forEach((w) => {
    if (w !== except) closeThread(w);
  });
}

function createCommentThread({ x = 0, y = 0, frameId = null, messages = [] } = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "fc-wrapper";
  wrapper.style.left = `${x}px`;
  wrapper.style.top = `${y}px`;
  if (frameId) wrapper.dataset.frameId = frameId;
  wrapper.messages = messages.map((m) => ({ reactions: [], ...m }));
  if (!wrapper.messages.length) wrapper.classList.add("is-draft");

  wrapper.innerHTML = `
    <button class="fc-pin" title="Comment"></button>
    <div class="fc-preview"></div>
    <div class="fc-thread">
      <div class="fc-head">
        <span class="fc-head-title">Comment</span>
        <div class="fc-head-actions">
          <button class="fc-icon-btn" data-act="more" title="More options">${FC_ICONS.more}</button>
          <button class="fc-icon-btn" data-act="resolve" title="Resolve">${FC_ICONS.resolve}</button>
          <button class="fc-icon-btn" data-act="close" title="Close">${FC_ICONS.close}</button>
          <div class="fc-menu">
            <button data-act="copy-link">Copy link</button>
            <button data-act="delete">Delete thread</button>
          </div>
        </div>
      </div>
      <div class="fc-messages"></div>
      <div class="fc-composer">
        ${avatarHTML(VISITOR)}
        <div class="fc-input-box">
          <textarea class="fc-input" rows="1" placeholder="${
            wrapper.messages.length ? "Reply" : "Add a comment"
          }"></textarea>
          <div class="fc-tools">
            <button class="fc-icon-btn" data-act="emoji" title="Add emoji">${FC_ICONS.emoji}</button>
            <button class="fc-icon-btn" data-act="mention" title="Mention someone">${FC_ICONS.mention}</button>
            <button class="fc-icon-btn" data-act="image" title="Add image">${FC_ICONS.image}</button>
            <button class="fc-send" data-act="send" title="Send" disabled>${FC_ICONS.send}</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const textarea = wrapper.querySelector(".fc-input");
  const sendBtn = wrapper.querySelector(".fc-send");

  // Que arrastrar o hacer scroll dentro del comentario no mueva el canvas
  wrapper.addEventListener("mousedown", (e) => e.stopPropagation());
  wrapper.addEventListener("touchstart", (e) => e.stopPropagation(), {
    passive: true,
  });
  wrapper.addEventListener("wheel", (e) => e.stopPropagation(), {
    passive: true,
  });

  const updateComposer = () => {
    sendBtn.disabled = !textarea.value.trim();
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  };

  const insertText = (text) => {
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? start;
    textarea.value =
      textarea.value.slice(0, start) + text + textarea.value.slice(end);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    updateComposer();
  };

  const submit = () => {
    const text = textarea.value.trim();
    if (!text) return;

    wrapper.messages.push({ ...VISITOR, text, time: "Just now", reactions: [] });
    wrapper.classList.remove("is-draft");
    textarea.value = "";
    textarea.placeholder = "Reply";
    updateComposer();
    renderThread(wrapper);
    showToast("Comment posted");
  };

  textarea.addEventListener("input", updateComposer);
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
    if (e.key === "Escape") closeThread(wrapper);
  });

  wrapper.addEventListener("click", (e) => {
    if (e.target.closest(".fc-pin")) {
      wrapper.classList.contains("open")
        ? closeThread(wrapper)
        : openThread(wrapper);
      return;
    }

    const actionEl = e.target.closest("[data-act]");
    if (!actionEl) return;

    const action = actionEl.dataset.act;
    const msgIndex = Number(actionEl.dataset.msg);

    switch (action) {
      case "more":
        wrapper.querySelector(".fc-menu").classList.toggle("open");
        break;
      case "copy-link":
        wrapper.querySelector(".fc-menu").classList.remove("open");
        copyLinkToClipboard();
        break;
      case "delete":
        wrapper.remove();
        showToast("Comment deleted");
        break;
      case "resolve":
        wrapper.remove();
        showToast("Comment resolved");
        break;
      case "close":
        closeThread(wrapper);
        break;
      case "emoji":
        insertText("🙂");
        break;
      case "mention":
        insertText("@Marta Pey ");
        break;
      case "image":
        showToast("Images can't be added in this preview");
        break;
      case "send":
        submit();
        break;
      case "react":
        toggleReaction(wrapper, msgIndex, actionEl.dataset.emoji);
        break;
      case "add-reaction":
        actionEl.nextElementSibling.classList.toggle("open");
        break;
      case "pick-emoji": {
        const existing = wrapper.messages[msgIndex]?.reactions.find(
          (r) => r.emoji === actionEl.dataset.emoji,
        );
        if (existing?.mine) renderThread(wrapper);
        else toggleReaction(wrapper, msgIndex, actionEl.dataset.emoji);
        break;
      }
    }
  });

  renderThread(wrapper);
  canvas.appendChild(wrapper);
  return wrapper;
}

// Comentarios de autora: pines en la esquina de su frame
function renderAuthorComments() {
  canvasSections.forEach((section) =>
    section.comments.forEach((c) => {
      if (!c.frameId || !c.text) return;
      createCommentThread({
        frameId: c.frameId,
        messages: [
          {
            name: c.author || MARTA.name,
            avatar: MARTA.avatar,
            text: c.text,
            time: currentActiveProject?.year || "",
            badge: "Author",
          },
        ],
      });
    }),
  );
  positionAuthorComments();
}

function positionAuthorComments() {
  canvas.querySelectorAll(".fc-wrapper[data-frame-id]").forEach((wrapper) => {
    const rect = frameRects[wrapper.dataset.frameId];
    if (!rect) return;
    wrapper.style.left = `${rect.x + rect.w - 12}px`;
    wrapper.style.top = `${rect.y + 40}px`;
  });
}

// Herramienta comentario: clic en el canvas = comentario nuevo
viewport.addEventListener("click", (e) => {
  if (activeTool !== "comment") return;
  if (e.target.closest(".fc-wrapper, .canvas-object, a, button")) return;

  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / scale;
  const y = (e.clientY - rect.top) / scale;

  e.fcHandled = true;
  openThread(createCommentThread({ x, y }));
});

// Clic fuera de un comentario: cerrarlo
window.addEventListener("click", (e) => {
  if (e.fcHandled || e.target.closest(".fc-wrapper")) return;
  if (canvas.querySelector(".fc-wrapper")) closeAllThreads();
});

// =========================================================
// TEXTOS Y STICKERS SOBRE EL CANVAS
// Solo los ve quien los pone y desaparecen al recargar o cambiar de proyecto.
// =========================================================
let selectedCanvasObject = null;

function selectCanvasObject(obj) {
  if (selectedCanvasObject && selectedCanvasObject !== obj) {
    selectedCanvasObject.classList.remove("selected");
  }
  selectedCanvasObject = obj;
  obj?.classList.add("selected");
}

function deselectCanvasObject() {
  selectedCanvasObject?.classList.remove("selected");
  selectedCanvasObject = null;
}

function removeCanvasObject(obj) {
  if (obj === selectedCanvasObject) selectedCanvasObject = null;
  obj.remove();
}

// Arrastrar con ratón o dedo (en coordenadas del canvas, sea cual sea el zoom)
function makeCanvasObjectDraggable(obj) {
  const start = (clientX, clientY) => {
    selectCanvasObject(obj);
    const startX = clientX;
    const startY = clientY;
    const left0 = parseFloat(obj.style.left) || 0;
    const top0 = parseFloat(obj.style.top) || 0;
    obj.classList.add("is-dragging");
    return (x, y) => {
      obj.style.left = `${left0 + (x - startX) / scale}px`;
      obj.style.top = `${top0 + (y - startY) / scale}px`;
    };
  };

  obj.addEventListener("mousedown", (e) => {
    e.stopPropagation(); // que no mueva el canvas
    if (e.target.closest(".co-delete") || obj.classList.contains("is-editing")) return;
    e.preventDefault();
    const move = start(e.clientX, e.clientY);
    const onMove = (ev) => move(ev.clientX, ev.clientY);
    const onUp = () => {
      obj.classList.remove("is-dragging");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });

  obj.addEventListener(
    "touchstart",
    (e) => {
      e.stopPropagation();
      if (e.touches.length !== 1 || obj.classList.contains("is-editing")) return;
      const move = start(e.touches[0].clientX, e.touches[0].clientY);
      const onMove = (ev) => {
        ev.preventDefault();
        move(ev.touches[0].clientX, ev.touches[0].clientY);
      };
      const onEnd = () => {
        obj.classList.remove("is-dragging");
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
      };
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onEnd);
    },
    { passive: true },
  );

  obj.querySelector(".co-delete").addEventListener("click", (e) => {
    e.stopPropagation();
    removeCanvasObject(obj);
  });
}

function createCanvasObject(type, x, y, contentHTML) {
  const obj = document.createElement("div");
  obj.className = `canvas-object canvas-${type}`;
  obj.style.left = `${x}px`;
  obj.style.top = `${y}px`;
  obj.innerHTML = `${contentHTML}<button class="co-delete" title="Delete" aria-label="Delete">✕</button>`;
  makeCanvasObjectDraggable(obj);
  canvas.appendChild(obj);
  return obj;
}

// --- Texto ---
function startEditingText(obj) {
  const content = obj.querySelector(".co-content");
  obj.classList.add("is-editing");
  content.contentEditable = "true";
  content.focus();
  const range = document.createRange();
  range.selectNodeContents(content);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function createTextObject(x, y) {
  const obj = createCanvasObject(
    "text",
    x,
    y,
    `<div class="co-content" data-placeholder="Type something" spellcheck="false"></div>`,
  );
  const content = obj.querySelector(".co-content");

  content.addEventListener("blur", () => {
    obj.classList.remove("is-editing");
    content.contentEditable = "false";
    if (!content.textContent.trim()) removeCanvasObject(obj);
  });

  content.addEventListener("keydown", (e) => {
    if (e.key === "Escape") content.blur();
  });

  // Pegar siempre como texto plano
  content.addEventListener("paste", (e) => {
    e.preventDefault();
    const text = e.clipboardData?.getData("text/plain") || "";
    document.execCommand("insertText", false, text);
  });

  obj.addEventListener("dblclick", () => startEditingText(obj));

  selectCanvasObject(obj);
  startEditingText(obj);
  return obj;
}

// Herramienta texto: clic en el canvas = texto nuevo (luego vuelve a seleccionar)
viewport.addEventListener("click", (e) => {
  if (activeTool !== "text") return;
  if (e.target.closest(".canvas-object, .fc-wrapper, a, button")) return;

  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / scale;
  const y = (e.clientY - rect.top) / scale - 20;
  createTextObject(x, y);
  setTool("select");
});

// --- Stickers ---
function placeSticker(emoji, x, y) {
  // Sin posición: cerca del centro de la pantalla
  if (x === undefined) {
    const area = getVisibleArea();
    const center = screenToCanvas(
      area.left + area.width / 2 + (Math.random() * 160 - 80),
      area.height / 2 + (Math.random() * 120 - 60),
    );
    x = center.x;
    y = center.y;
  }

  const obj = createCanvasObject(
    "sticker",
    x - 40,
    y - 40,
    `<div class="co-content">${emojiImgHTML(emoji, "sticker-img")}</div>`,
  );
  obj.style.setProperty("--rot", `${Math.round(Math.random() * 20 - 10)}deg`);
  // Centrado exacto en el punto (el ancho del emoji depende de la fuente)
  obj.style.left = `${x - obj.offsetWidth / 2}px`;
  obj.style.top = `${y - obj.offsetHeight / 2}px`;
  selectCanvasObject(obj);
}

// Al elegir un emoji se lleva en el cursor y se pega donde se haga clic
let pendingSticker = null;

function startStickerPlacement(emoji) {
  pendingSticker = emoji;
  closeStickerPicker();
  document.documentElement.classList.add("is-placing-sticker");
  cursorMode = ""; // refrescar el icono del cursor
  showToast(finePointer ? "Click anywhere to place the sticker · Esc to cancel" : "Tap anywhere to place the sticker");
}

function cancelStickerPlacement() {
  if (!pendingSticker) return;
  pendingSticker = null;
  document.documentElement.classList.remove("is-placing-sticker");
  cursorMode = "";
}

// Mientras se coloca, el clic no mueve el canvas ni selecciona frames
viewport.addEventListener(
  "mousedown",
  (e) => {
    if (!pendingSticker) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  true,
);

viewport.addEventListener(
  "click",
  (e) => {
    if (!pendingSticker) return;
    e.preventDefault();
    e.stopImmediatePropagation();

    const rect = canvas.getBoundingClientRect();
    placeSticker(
      pendingSticker,
      (e.clientX - rect.left) / scale,
      (e.clientY - rect.top) / scale,
    );
    cancelStickerPlacement();
    updateCursorMode(e.target);
  },
  true,
);

// Selector de emojis (se carga la primera vez que se abre)
const EMOJI_TABS = [
  ["recent", "Frequently used", `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`],
  ["smileys", "Smileys & People", `<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01" stroke-width="2.4"/>`],
  ["animals", "Animals & Nature", `<path d="M19 5C10 5 5 9 5 15c0 2 1 4 1 4s2-1 4-1c6 0 9-5 9-13Z"/><path d="M6 19c3-5 6-8 10-10"/>`],
  ["food", "Food & Drink", `<path d="M12 8c-4-2-7 1-7 5s3 8 7 7c4 1 7-3 7-7s-3-7-7-5Z"/><path d="M12 8c0-2 1-4 3-4"/>`],
  ["activities", "Activities", `<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17"/>`],
  ["travel", "Travel & Places", `<path d="M4 15h16l-2-5H6Z"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/><path d="M9 10l1-3h4l1 3"/>`],
  ["objects", "Objects", `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>`],
  ["symbols", "Symbols", `<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>`],
  ["flags", "Flags", `<path d="M6 21V4M6 4h11l-2 4 2 4H6"/>`],
];
const DEFAULT_RECENT = ["👍", "❤️", "😂", "🔥", "😍", "👀", "🎨", "✨", "👏"];

// Los emojis se pintan como imagen (estilo Google / Noto): así se ven igual en
// cualquier navegador, aunque no sepa dibujar la fuente de emojis
const EMOJI_IMG_BASE = "https://cdn.jsdelivr.net/npm/emoji-datasource-google@15.1.2/img/google/64/";
const emojiCode = (emoji, keepFE0F = true) =>
  [...emoji]
    .map((c) => c.codePointAt(0).toString(16).padStart(4, "0"))
    .filter((h) => keepFE0F || h !== "fe0f")
    .join("-");

function emojiImgHTML(emoji, cls = "emoji-img") {
  // Si no existe con FE0F, se prueba sin él; si tampoco, se deja el carácter
  return `<img class="${cls}" src="${EMOJI_IMG_BASE}${emojiCode(emoji)}.png" alt="${emoji}" draggable="false" loading="lazy" decoding="async" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='${EMOJI_IMG_BASE}${emojiCode(emoji, false)}.png'}else{this.replaceWith(document.createTextNode(this.alt))}">`;
}

let emojiData = null;
let emojiLoading = null;
let recentEmojis = [...DEFAULT_RECENT]; // solo durante la visita
let emojiPicker = null;
let emojiTab = "recent";

function loadEmojiData() {
  if (emojiData) return Promise.resolve(emojiData);
  if (!emojiLoading) {
    emojiLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "js/emoji-data.js";
      script.onload = () => {
        emojiData = window.EMOJI_DATA;
        resolve(emojiData);
      };
      script.onerror = () => {
        emojiLoading = null;
        reject(new Error("emoji data"));
      };
      document.head.appendChild(script);
    });
  }
  return emojiLoading;
}

const emojiButtons = (list) =>
  list
    .map(
      ([emoji, label]) =>
        `<button class="ep-emoji" data-emoji="${emoji}" title="${escapeHTML(label || "")}">${emojiImgHTML(emoji)}</button>`,
    )
    .join("");

function renderEmojiPicker() {
  if (!emojiPicker) return;
  emojiPicker.querySelectorAll(".ep-tab").forEach((tab) =>
    tab.classList.toggle("active", tab.dataset.tab === emojiTab),
  );

  const body = emojiPicker.querySelector(".ep-body");
  const query = emojiPicker.querySelector(".ep-search input").value.trim().toLowerCase();

  if (!emojiData) {
    body.innerHTML = `<div class="ep-empty">Loading emojis…</div>`;
    return;
  }

  if (query) {
    const results = emojiData.categories
      .flatMap((c) => c.emojis)
      .filter(([, label, tags]) => `${label} ${tags}`.toLowerCase().includes(query))
      .slice(0, 180);
    body.innerHTML = results.length
      ? `<div class="ep-title">Search results</div><div class="ep-grid">${emojiButtons(results)}</div>`
      : `<div class="ep-empty">No emojis found</div>`;
    return;
  }

  if (emojiTab === "recent") {
    const smileys = emojiData.categories.find((c) => c.id === "smileys");
    body.innerHTML = `
      <div class="ep-title">Frequently used</div>
      <div class="ep-grid">${emojiButtons(recentEmojis.map((e) => [e, ""]))}</div>
      <div class="ep-title">${smileys.label}</div>
      <div class="ep-grid">${emojiButtons(smileys.emojis)}</div>`;
  } else {
    const category = emojiData.categories.find((c) => c.id === emojiTab);
    body.innerHTML = `<div class="ep-title">${category.label}</div><div class="ep-grid">${emojiButtons(category.emojis)}</div>`;
  }
  body.scrollTop = 0;
}

function buildEmojiPicker() {
  emojiPicker = document.createElement("div");
  emojiPicker.className = "emoji-picker";
  emojiPicker.hidden = true;
  emojiPicker.innerHTML = `
    <div class="ep-tabs">
      ${EMOJI_TABS.map(
        ([id, label, path]) =>
          `<button class="ep-tab" data-tab="${id}" title="${label}" aria-label="${label}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${path}</svg></button>`,
      ).join("")}
    </div>
    <label class="ep-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input type="text" placeholder="Search" />
    </label>
    <div class="ep-body"></div>
  `;

  emojiPicker.addEventListener("mousedown", (e) => e.stopPropagation());
  emojiPicker.addEventListener("wheel", (e) => e.stopPropagation(), { passive: true });

  emojiPicker.addEventListener("click", (e) => {
    const tab = e.target.closest(".ep-tab");
    if (tab) {
      emojiTab = tab.dataset.tab;
      emojiPicker.querySelector(".ep-search input").value = "";
      renderEmojiPicker();
      return;
    }
    const button = e.target.closest(".ep-emoji");
    if (button) {
      const emoji = button.dataset.emoji;
      startStickerPlacement(emoji);
      recentEmojis = [emoji, ...recentEmojis.filter((x) => x !== emoji)].slice(0, 18);
    }
  });

  emojiPicker.querySelector(".ep-search input").addEventListener("input", renderEmojiPicker);
  document.getElementById("editor-view").appendChild(emojiPicker);
}

function openStickerPicker() {
  if (!emojiPicker) buildEmojiPicker();
  emojiPicker.hidden = false;
  document.getElementById("tool-sticker")?.classList.add("active");
  renderEmojiPicker();
  loadEmojiData()
    .then(renderEmojiPicker)
    .catch(() => {
      emojiPicker.querySelector(".ep-body").innerHTML =
        `<div class="ep-empty">Emojis couldn't be loaded</div>`;
    });
}

function closeStickerPicker() {
  if (!emojiPicker || emojiPicker.hidden) return;
  emojiPicker.hidden = true;
  document.getElementById("tool-sticker")?.classList.remove("active");
}

function toggleStickerPicker() {
  if (emojiPicker && !emojiPicker.hidden) closeStickerPicker();
  else openStickerPicker();
}

document.getElementById("tool-sticker")?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleStickerPicker();
});

// Clic fuera: cerrar el selector y quitar la selección de textos y stickers
window.addEventListener("mousedown", (e) => {
  if (!e.target.closest(".emoji-picker, #tool-sticker")) closeStickerPicker();
  if (!e.target.closest(".canvas-object")) deselectCanvasObject();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeStickerPicker();
    cancelStickerPlacement();
    deselectCanvasObject();
  }
});

// Que el navegador no arrastre imágenes ni vídeos como si fueran archivos
document.addEventListener("dragstart", (e) => {
  if (e.target instanceof Element && e.target.closest("img, video, a")) {
    e.preventDefault();
  }
});

// Copiar un texto (el correo del menú de Contact)
function copyText(text, message) {
  // Copia clásica (funciona también abriendo el archivo en local)
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (err) {}
  field.remove();

  if (!copied) navigator.clipboard?.writeText(text).catch(() => {});
  showToast(message);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  copyText(
    btn.dataset.copy,
    btn.dataset.copy.includes("@") ? "Email address copied!" : "Copied to clipboard!",
  );
});

// "Contact me" de Commissions: abre el desplegable de contacto del editor
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open-contact]");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation(); // que el clic no lo cierre al llegar a la ventana
  document.getElementById("profile-dropdown")?.classList.remove("show");
  shareDropdown.classList.add("show");
});
// COPIAR ENLACE Y DROPDOWNS
async function copyLinkToClipboard() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied to clipboard!");
  } catch (err) {
    showToast("Unable to copy link");
  }
}

document
  .getElementById("btn-copy-link")
  ?.addEventListener("click", copyLinkToClipboard);
document
  .getElementById("btn-profile-copy-link")
  ?.addEventListener("click", copyLinkToClipboard);

document.getElementById("btn-share-toggle")?.addEventListener("click", (e) => {
  e.stopPropagation();
  shareDropdown.classList.toggle("show");
  if (profileDropdown) profileDropdown.classList.remove("show");
});

const profileBtn = document.getElementById("user-profile-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const btnProfileAbout = document.getElementById("btn-profile-about");

if (profileBtn && profileDropdown) {
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("show");
    shareDropdown.classList.remove("show");
  });
}

if (btnProfileAbout) {
  btnProfileAbout.addEventListener("click", () => {
    openProject("about-me");
    profileDropdown.classList.remove("show");
    closeMobilePanels();
  });
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".share-wrapper")) {
    shareDropdown.classList.remove("show");
  }
  if (!e.target.closest(".user-profile-wrapper")) {
    if (profileDropdown) profileDropdown.classList.remove("show");
  }
});

// MENÚ DE CONTACTO (el mismo en el inicio y en el editor)
const CONTACT_EMAIL = "martapey12@gmail.com";
const CONTACT_SOCIALS = [
  ["Patreon", "https://patreon.com/martapey", "icon-patreon"],
  ["Instagram", "https://www.instagram.com/martapey.art", "icon-instagram"],
  ["Bluesky", "https://bsky.app/profile/martapey.bsky.social", "icon-bluesky"],
  ["Behance", "https://www.behance.net/martapey", "icon-behance"],
  ["LinkedIn", "https://www.linkedin.com/in/martapey", "icon-linkedin"],
  ["Twitch", "https://www.twitch.tv/emapeyy", "icon-twitch"],
  ["YouTube", "https://www.youtube.com/@martapey", "icon-youtube"],
];

const menuIcon = (icon) => `<img src="img/icons/${icon}.svg" class="mm-icon" alt="">`;

const CONTACT_MENU_HTML = `
  <div class="mm-head">
    <img class="mm-avatar" src="img/avatars/martapey_profile.webp" alt="Marta Pey">
    <div class="mm-name">Marta Pey</div>
    <div class="mm-email">
      <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
      <button class="copy-btn" data-copy="${CONTACT_EMAIL}" title="Copy email address" aria-label="Copy email address">${COPY_ICON}</button>
    </div>
  </div>
  <hr class="mm-divider">
  <button class="mm-item" data-open-project="about-me">${menuIcon("profile")}About me</button>
  <button class="mm-item" data-open-project="commissions">${menuIcon("brush")}Commissions</button>
  <hr class="mm-divider">
  <div class="mm-label">Socials</div>
  ${CONTACT_SOCIALS.map(
    ([name, url, icon]) =>
      `<a class="mm-item" href="${url}" target="_blank" rel="noopener noreferrer">${menuIcon(icon)}${name}</a>`,
  ).join("")}
`;

["share-dropdown", "profile-dropdown"].forEach((id) => {
  const menu = document.getElementById(id);
  if (!menu) return;
  menu.innerHTML = CONTACT_MENU_HTML;
  menu.classList.add("mp-menu");
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// CAJA DE SELECCIÓN DE LOS H1 (estilo Figma)
function applyFigmaH1Styles() {
  const headings = document.querySelectorAll(
    ".artboard h1, .artboard-content h1",
  );

  headings.forEach((h1) => {
    // 1. Inyectar handles si no existen
    if (!h1.querySelector(".artboard-h1-handle")) {
      ["tl", "tr", "bl", "br"].forEach((pos) => {
        const span = document.createElement("span");
        span.className = `artboard-h1-handle ${pos}`;
        h1.appendChild(span);
      });
    }

    // 2. Medir dimensiones reales
    const rect = h1.getBoundingClientRect();
    // Compensar la escala del canvas si la hubiera
    const canvas = h1.closest("#canvas") || h1.closest(".canvas");
    let scale = 1;

    if (canvas) {
      const match = canvas.style.transform.match(/scale\(([^)]+)\)/);
      if (match) scale = parseFloat(match[1]);
    }

    const width = Math.round(rect.width / scale);
    const height = Math.round(rect.height / scale);

    if (width > 0 && height > 0) {
      h1.setAttribute("data-size", `${width} × ${height}`);
    }
  });
}

// Observador para detectar cuándo cambia el proyecto o se inyectan nuevos Artboards
const observer = new MutationObserver(() => {
  applyFigmaH1Styles();
});

window.addEventListener("DOMContentLoaded", () => {
  applyFigmaH1Styles();

  // Escuchar cambios en el contenedor del viewport
  const viewport = document.getElementById("viewport") || document.body;
  observer.observe(viewport, { childList: true, subtree: true });
});

window.addEventListener("load", applyFigmaH1Styles);

// =========================================================
// CURSOR MULTIJUGADOR (icono + etiqueta con el nombre del visitante)
// =========================================================
const CURSOR_ICONS = {
  text: `<svg width="18" height="24" viewBox="0 0 18 24" fill="none" stroke-linecap="round"><path d="M5 3h8M9 3v18M5 21h8" stroke="#1e1e1e" stroke-width="4.2"/><path d="M5 3h8M9 3v18M5 21h8" stroke="#fff" stroke-width="1.7"/></svg>`,
  arrow: `<svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.5 2.5v17l4.9-4.4 3.2 6.5 3-1.4-3.1-6.4 6.7-.5Z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  hand: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v4"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/></svg>`,
  grab: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11.5V9a2 2 0 0 0-4 0v1.4"/><path d="M14 10V8a2 2 0 0 0-4 0v2"/><path d="M10 9.9V9a2 2 0 0 0-4 0v5"/><path d="M6 14a2 2 0 0 0-4 0"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"/></svg>`,
  comment: `<svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 21v-9a9 9 0 1 1 9 9Z" fill="currentColor" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 8v8M8 12h8" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let cursorEl = null;
let cursorMode = "";

if (finePointer) {
  document.documentElement.classList.add("has-custom-cursor");

  cursorEl = document.createElement("div");
  cursorEl.className = "mp-cursor";
  cursorEl.setAttribute("aria-hidden", "true");
  cursorEl.style.setProperty("--cursor-color", VISITOR.color);
  cursorEl.innerHTML = `<span class="mp-cursor-icon"></span><span class="mp-cursor-label"></span>`;
  cursorEl.querySelector(".mp-cursor-label").textContent = VISITOR.name;
  document.body.appendChild(cursorEl);

  window.addEventListener(
    "mousemove",
    (e) => {
      cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursorEl.classList.add("visible");
      updateCursorMode(e.target);
    },
    { passive: true },
  );

  document.addEventListener("mouseleave", () =>
    cursorEl.classList.remove("visible"),
  );
}

function updateCursorMode(target) {
  if (!cursorEl || !(target instanceof Element)) return;

  // En campos de texto se usa el cursor de texto del sistema
  cursorEl.classList.toggle(
    "is-hidden",
    !!target.closest("textarea, input, [contenteditable='true']"),
  );

  let mode = "arrow";
  if (target.closest("#viewport") && !target.closest(".fc-wrapper")) {
    if (pendingSticker) mode = "sticker";
    else if (isPanning) mode = "grab";
    else if (spacePressed || activeTool === "hand") mode = "hand";
    else if (activeTool === "comment") mode = "comment";
    else if (activeTool === "text") mode = "text";
  }

  if (mode === cursorMode) return;
  cursorMode = mode;
  cursorEl.dataset.mode = mode;
  cursorEl.querySelector(".mp-cursor-icon").innerHTML =
    mode === "sticker"
      ? `<span class="cursor-sticker" style="width:${Math.max(28, 80 * scale)}px">${emojiImgHTML(pendingSticker, "sticker-img")}</span>`
      : CURSOR_ICONS[mode];
}

// CONTROL DEL TOGGLE SWITCH (MODO CLARO / OSCURO)
const toggleCheckbox = document.getElementById("checkbox-theme");
const currentTheme = localStorage.getItem("portfolio-theme");

// 1. Aplicar preferencia guardada al cargar
if (currentTheme !== "dark") {
  document.body.classList.add("light-theme");
  if (toggleCheckbox) {
    toggleCheckbox.checked = true; // Activa el switch visualmente
  }
}

// 2. Escuchar el cambio en el switch
if (toggleCheckbox) {
  toggleCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.classList.add("light-theme");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("portfolio-theme", "dark");
    }
  });
}

// =========================================================
// INICIO TIPO PANEL DE ARCHIVOS DE FIGMA
// Tarjetas de archivo, buscador, pestañas, orden, vista lista y accesos rápidos
// =========================================================
const HOME_CATEGORIES = {
  all: "Recents",
  illustrations: "Illustrations",
  "diseno-grafico": "Graphic Design",
  "ux-ui": "UX & UI Design",
  editorial: "Editorial & Comic",
  "3d-animacion": "3D & Animation",
};

const homeState = { category: "all", query: "", sort: "default" };
const fileGrid = document.getElementById("file-grid");

// Último año del proyecto ("2021 - 2026" -> 2026)
const projectEndYear = (id) => {
  const years = String(projectsData[id]?.year || "").match(/\d{4}/g);
  return years ? Number(years[years.length - 1]) : 0;
};

function editedLabel(year) {
  const now = new Date().getFullYear();
  if (!year) return "Edited recently";
  if (year >= now) return "Edited this year";
  if (year === now - 1) return "Edited last year";
  return `Edited ${now - year} years ago`;
}

// 1. Tarjetas como archivos de Figma
fileCards.forEach((card, index) => {
  const id = card.dataset.projectId;
  const name = card.querySelector(".file-details h4")?.textContent.trim() || "";
  const subtitle = card.querySelector(".file-details p")?.textContent.trim() || "";
  const firstCat = (card.dataset.category || "").split(" ")[0];
  const year = projectEndYear(id);

  card.removeAttribute("style");
  card.dataset.index = index;
  card.dataset.name = name;
  card.dataset.year = year;
  card.dataset.search = [name, subtitle, ...(projectsData[id]?.tags || [])]
    .join(" ")
    .toLowerCase();

  card.querySelector(".file-info").innerHTML = `
    <span class="file-tag" style="--tag-color:${tagStyle(projectsData[id]?.tags?.[0] || '').color}" title="${escapeHTML(projectsData[id]?.tags?.[0] || '')}">${tagIconHTML(projectsData[id]?.tags?.[0] || '')}</span>
    <div class="file-details">
      <h4>${escapeHTML(name)}</h4>
      <p class="file-meta">${editedLabel(year)}</p>
    </div>
    <span class="file-cat">${escapeHTML(firstCat === "all" ? "Information" : HOME_CATEGORIES[firstCat] || subtitle)}</span>
    <span class="file-date">${projectsData[id]?.year || ""}</span>
    <button class="file-more" title="More options" aria-label="More options">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="3.5" cy="8" r="1.3"/><circle cx="8" cy="8" r="1.3"/><circle cx="12.5" cy="8" r="1.3"/></svg>
    </button>
  `;
});

// Cabecera de la vista lista y aviso de "sin resultados"
fileGrid.insertAdjacentHTML(
  "afterbegin",
  `<div class="file-list-head"><span></span><span>Name</span><span>Category</span><span>Last edited</span><span></span></div>`,
);
fileGrid.insertAdjacentHTML(
  "beforeend",
  `<p class="file-empty" hidden>No files match your search.</p>`,
);

// Menú "•••" de cada tarjeta
const fileMenu = document.createElement("div");
fileMenu.className = "file-menu mp-menu";
fileMenu.innerHTML = `
  <button class="mm-item" data-act="open">Open</button>
  <button class="mm-item" data-act="copy">Copy link</button>
`;
document.body.appendChild(fileMenu);
let fileMenuCard = null;

fileGrid.addEventListener(
  "click",
  (e) => {
    const more = e.target.closest(".file-more");
    if (!more) return;
    e.stopPropagation();
    fileMenuCard = more.closest(".file-card");
    const r = more.getBoundingClientRect();
    fileMenu.style.left = `${Math.min(r.right - 160, window.innerWidth - 176)}px`;
    fileMenu.style.top = `${r.bottom + 6}px`;
    fileMenu.classList.toggle("show");
  },
  true,
);

fileMenu.addEventListener("click", (e) => {
  const act = e.target.closest("[data-act]")?.dataset.act;
  if (!act || !fileMenuCard) return;
  fileMenu.classList.remove("show");
  if (act === "open") openProject(fileMenuCard.dataset.projectId);
  if (act === "copy") copyLinkToClipboard();
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".file-menu, .file-more")) fileMenu.classList.remove("show");
});

// 2. Filtros: categoría + búsqueda, y orden
function applyHomeFilters() {
  const { category, query } = homeState;
  let visible = 0;

  fileCards.forEach((card) => {
    const cats = (card.dataset.category || "").split(" ");
    const inCategory =
      category === "all" ? true : cats.includes(category);
    const matches = !query || card.dataset.search.includes(query);
    const show = inCategory && matches;
    card.hidden = !show;
    if (show) visible++;
  });

  fileGrid.querySelector(".file-empty").hidden = visible > 0;
}

function applyHomeSort() {
  const cards = Array.from(fileCards);
  const by = {
    default: (a, b) => a.dataset.index - b.dataset.index,
    modified: (a, b) => b.dataset.year - a.dataset.year || a.dataset.index - b.dataset.index,
    name: (a, b) => a.dataset.name.localeCompare(b.dataset.name),
  }[homeState.sort];
  const empty = fileGrid.querySelector(".file-empty");
  cards.sort(by).forEach((card) => fileGrid.insertBefore(card, empty));
}

function setHomeCategory(category) {
  homeState.category = category;
  categoryTitle.textContent = HOME_CATEGORIES[category] || "Recents";
  document
    .querySelectorAll(".nav-item[data-category], .home-tab[data-category]")
    .forEach((el) => el.classList.toggle("active", el.dataset.category === category));
  applyHomeFilters();
}

document.getElementById("home-tabs")?.addEventListener("click", (e) => {
  const tab = e.target.closest(".home-tab[data-category]");
  if (tab) setHomeCategory(tab.dataset.category);
});

document.getElementById("home-search")?.addEventListener("input", (e) => {
  homeState.query = e.target.value.trim().toLowerCase();
  applyHomeFilters();
});

document.getElementById("home-sort")?.addEventListener("change", (e) => {
  homeState.sort = e.target.value;
  applyHomeSort();
});

// Número de archivos de cada carpeta de la barra lateral
document.querySelectorAll(".nav-item[data-category] .nav-count").forEach((count) => {
  const category = count.closest(".nav-item").dataset.category;
  count.textContent = Array.from(fileCards).filter((card) =>
    (card.dataset.category || "").split(" ").includes(category),
  ).length;
});

// 5. Vista rejilla / lista (se recuerda en este navegador)
function setHomeView(view) {
  fileGrid.classList.toggle("is-list", view === "list");
  document
    .querySelectorAll(".home-view-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  try {
    localStorage.setItem("portfolio-home-view", view);
  } catch (e) {}
}

document.querySelectorAll(".home-view-btn").forEach((b) =>
  b.addEventListener("click", () => setHomeView(b.dataset.view)),
);

let savedView = "grid";
try {
  savedView = localStorage.getItem("portfolio-home-view") || "grid";
} catch (e) {}
setHomeView(savedView);

// 4. Accesos rápidos
document.getElementById("home-tile-contact")?.addEventListener("click", (e) => {
  e.stopPropagation();
  if (window.innerWidth <= 900) {
    sidebar.classList.add("open");
    mobileOverlay?.classList.add("active");
  }
  document.getElementById("profile-dropdown")?.classList.add("show");
});

document.getElementById("home-avatar-btn")?.addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("profile-dropdown")?.classList.toggle("show");
});

setHomeCategory("all");

// Cerrar el banner del inicio lo quita del todo (ya no flota)
document.getElementById("btn-close-banner")?.addEventListener("click", () => {
  const banner = document.querySelector(".comm-banner-container");
  if (!banner || banner.classList.contains("is-closing")) return;
  // Se desvanece y después recoge su hueco
  banner.style.height = `${banner.offsetHeight}px`;
  banner.classList.add("is-closing");
  requestAnimationFrame(() => banner.classList.add("is-collapsed"));
  setTimeout(() => (banner.style.display = "none"), 650);
});

