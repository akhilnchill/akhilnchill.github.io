/**
 * ============================================================
 *  AKHIL KODURI — RENDERER
 *  This file reads content.js and builds the page.
 *  You don't need to edit this file.
 * ============================================================
 */

// SVG icons for contact links
const ICONS = {
  email: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"/><path d="M9 4H4v5a6 6 0 0 0 9.83 4.6M15 4h5v5a6 6 0 0 1-1.5 4"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
};

document.addEventListener('DOMContentLoaded', () => {
  const S = SITE;

  // ── HERO ──
  document.getElementById('hero-eyebrow').textContent = S.hero.eyebrow;
  document.getElementById('hero-heading').innerHTML =
    `${S.hero.heading1}<br/><span>${S.hero.heading2}</span>`;
  document.getElementById('hero-desc').textContent = S.hero.description;

  document.getElementById('hero-stats').innerHTML = S.hero.stats.map(s => `
    <div>
      <span class="stat-num">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');

  // ── ABOUT ──
  document.getElementById('about-bio').innerHTML =
    S.about.bio.map(p => `<p>${p}</p>`).join('');

  document.getElementById('expertise-list').innerHTML =
    S.about.expertise.map(e => `<li>${e}</li>`).join('');

  // ── ARTICLES ──
  document.getElementById('article-grid').innerHTML = S.articles.map(a => `
    <a href="${a.url}" target="_blank" class="article-card">
      <div class="article-top">
        <span class="article-tag">${a.tag}</span>
        <span class="article-publisher">${a.publisher}</span>
      </div>
      <h3 class="article-title">${a.title}</h3>
      <p class="article-excerpt">${a.excerpt}</p>
      <div class="article-meta">
        ${a.meta}
        <span class="article-read-more">Read →</span>
      </div>
    </a>
  `).join('');

  // ── RESEARCH ──
  document.getElementById('research-tiles').innerHTML = S.research.map(r => `
    <div class="interest-tile">
      <span class="tile-icon">${r.icon}</span>
      <p class="tile-title">${r.title}</p>
      <p class="tile-desc">${r.desc}</p>
    </div>
  `).join('');

  // ── CONTACT ──
  document.getElementById('contact-note').textContent = S.contact.note;

  document.getElementById('contact-links').innerHTML = S.contact.links.map(l => `
    <a href="${l.url}" ${l.active ? 'target="_blank"' : ''} class="contact-link${l.active ? '' : ' inactive'}">
      <span class="contact-link-icon">${ICONS[l.icon] || ''}</span>
      ${l.label}
    </a>
  `).join('');
});
