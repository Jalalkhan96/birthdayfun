// Main app — hash router and page mounting

import './styles/index.css';
import './styles/landing.css';
import './styles/form.css';
import './styles/preview.css';
import './styles/celebration.css';
import './styles/collage.css';

import { renderLanding } from './pages/landing.js';
import { renderForm } from './pages/form.js';
import { renderPreview } from './pages/preview.js';
import { renderCelebration } from './pages/celebration.js';
import { renderGalaxy, destroyGalaxy } from './pages/galaxy.js';

const app = document.getElementById('app');
let currentCleanup = null;
let currentPage = null;

function route() {
    // Cleanup previous page
    if (currentCleanup && typeof currentCleanup === 'function') {
        currentCleanup();
    } else if (currentCleanup && typeof currentCleanup.destroy === 'function') {
        currentCleanup.destroy();
    }
    if (currentPage === 'galaxy') destroyGalaxy();
    currentCleanup = null;
    currentPage = null;

    const hash = window.location.hash || '#/';
    const fullPath = hash.slice(1);
    const path = fullPath.split('?')[0];

    window.scrollTo(0, 0);
    app.classList.add('page-enter');

    if (path === '/' || path === '') {
        currentCleanup = renderLanding(app);
    } else if (path === '/create') {
        renderForm(app);
    } else if (path.startsWith('/preview/')) {
        const id = path.split('/preview/')[1];
        renderPreview(app, id);
    } else if (path.match(/^\/galaxy\//)) {
        // 3D Memory Galaxy
        const id = path.split('/galaxy/')[1];
        currentPage = 'galaxy';
        renderGalaxy(app, id);
    } else if (path.match(/^\/birthday\/[^/]+\/surprise/)) {
        const id = path.split('/birthday/')[1].split('/surprise')[0];
        renderCelebration(app, id, true);
    } else if (path.startsWith('/birthday/')) {
        const id = path.split('/birthday/')[1];
        renderCelebration(app, id, false);
    } else {
        app.innerHTML = `
      <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center;">
        <div class="glass-card" style="max-width:400px;">
          <h1 style="font-size: 4rem; margin-bottom: 16px;">🎂</h1>
          <h2 style="margin-bottom: 12px;">Page Not Found</h2>
          <p style="color:var(--text-secondary); margin-bottom: 24px;">The page you're looking for doesn't exist.</p>
          <button class="btn btn-primary" onclick="window.location.hash='#/'">Go Home</button>
        </div>
      </div>
    `;
    }

    setTimeout(() => app.classList.remove('page-enter'), 500);
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
route();
