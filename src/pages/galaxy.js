// AI Memory Galaxy — 3D space scene with photo planets
// Uses Three.js for WebGL rendering

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { getBirthday } from '../utils/storage.js';
import { applyTheme, getTheme } from '../utils/themes.js';

let scene, camera, renderer, controls;
let planets = [];
let stars;
let constellationLines;
let animationId;
let cleanupFns = [];

export function renderGalaxy(container, id) {
    cleanup();
    const data = getBirthday(id);

    if (!data || !data.photos || data.photos.length === 0) {
        container.innerHTML = `
      <div class="celebration-page" style="display:flex;align-items:center;justify-content:center;min-height:100vh;">
        <div class="glass-card text-center" style="max-width:450px;">
          <h2 style="font-size:3rem; margin-bottom:16px;">🌌</h2>
          <h2 style="margin-bottom:16px;">Memory Galaxy</h2>
          <p style="color:var(--text-secondary); margin-bottom:24px;">
            Upload photos to create your Memory Galaxy!<br>
            Each photo becomes a planet in space.
          </p>
          <button class="btn btn-primary" onclick="window.location.hash='#/create'">Add Photos</button>
        </div>
      </div>
    `;
        return;
    }

    applyTheme(data.theme);
    const themeData = getTheme(data.theme);

    container.innerHTML = `
    <div class="galaxy-page" style="position:relative; width:100%; height:100vh; overflow:hidden; background:#050510;">
      <canvas id="galaxy-canvas" style="display:block;"></canvas>
      
      <div class="galaxy-overlay glass-card-strong" id="galaxy-overlay" style="
        position:absolute; inset:0; margin:auto; width:90%; max-width:500px; height:fit-content;
        display:flex; flex-direction:column; align-items:center; justify-content:center;
        z-index:10; transition: opacity 1.5s ease; text-align:center; box-shadow: 0 0 100px rgba(123,47,247,0.3);">
        <div style="font-size:5rem; margin-bottom:16px; animation: float 3s ease-in-out infinite;">🚀</div>
        <h1 class="text-gradient" style="font-size:2.5rem; margin-bottom:12px; font-weight:800;">Memory Galaxy</h1>
        <p style="color:var(--text-secondary); margin-bottom:32px; font-size:1.1rem;">
          Explore a 3D universe created entirely from ${data.name}'s memories.
        </p>
        <button class="btn btn-primary" id="enter-galaxy" style="padding: 16px 40px; font-size: 1.2rem;">
          ✨ Enter Galaxy
        </button>
      </div>

      <div class="galaxy-hud" id="galaxy-hud" style="
        position:absolute; top:20px; left:20px; z-index:5; opacity:0;
        transition: opacity 0.5s ease;">
        <button class="btn btn-secondary" style="padding:10px 20px; font-size:0.9rem; border-radius:30px;"
          onclick="window.location.hash='#/birthday/${id}'">← Back to Celebration</button>
      </div>

      <div class="galaxy-info" id="galaxy-info" style="
        position:absolute; bottom:40px; left:50%; transform:translateX(-50%);
        z-index:5; opacity:0; transition: opacity 0.5s ease;
        padding: 12px 24px; border-radius: 50px; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px);
        color:rgba(255,255,255,0.9); font-size:0.9rem; text-align:center;
        pointer-events:none; border: 1px solid rgba(255,255,255,0.1);">
        🖱️ Drag to rotate &nbsp;·&nbsp; Scroll to zoom &nbsp;·&nbsp; Click a planet to view memory
      </div>

      <div id="photo-modal" style="
        position:fixed; inset:0; z-index:100; display:none;
        background:rgba(0,0,0,0.9); backdrop-filter:blur(15px);
        align-items:center; justify-content:center; cursor:pointer;">
        <img id="modal-img" style="max-width:90vw; max-height:85vh; border-radius:16px;
          box-shadow:0 30px 90px rgba(0,0,0,0.8); object-fit:contain; transition: transform 0.3s ease;" />
        <div style="position:absolute; top:30px; right:40px; color:white; font-size:2.5rem; 
          background: rgba(255,255,255,0.1); width: 60px; height: 60px; border-radius: 50%;
          display:flex; align-items:center; justify-content:center; cursor:pointer; hover:background:rgba(255,255,255,0.2);">✕</div>
      </div>
    </div>
  `;

    const canvas = document.getElementById('galaxy-canvas');
    initScene(canvas, data, themeData);

    // Enter button
    document.getElementById('enter-galaxy').addEventListener('click', () => {
        const overlay = document.getElementById('galaxy-overlay');
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => {
            overlay.style.display = 'none';
            document.getElementById('galaxy-hud').style.opacity = '1';
            document.getElementById('galaxy-info').style.opacity = '1';
            warpEntrance();
        }, 800);
    });

    // Photo modal
    const modal = document.getElementById('photo-modal');
    modal.addEventListener('click', () => {
        const img = document.getElementById('modal-img');
        img.style.transform = 'scale(0.8)';
        setTimeout(() => modal.style.display = 'none', 200);
    });
}

function initScene(canvas, data, themeData) {
    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.002);

    // Camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 30, 80);

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 250;
    controls.minDistance = 5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;

    // Lighting (BRIGHTER)
    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);
    const point = new THREE.PointLight(0xffffff, 3, 500);
    point.position.set(0, 50, 0);
    scene.add(point);

    // Add directional light for better 3D depth
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(100, 100, 50);
    scene.add(dirLight);

    // Stars
    createStarfield();

    // Nebula
    createNebula(themeData);

    // Photo planets
    createPlanets(data);

    // Constellations
    createConstellations();

    // Birthday planet at center
    createBirthdayPlanet(data);

    // 3D Birthday World objects
    createGiantCake(data);
    create3DBalloons();
    createGiftBoxes(data);
    createMessageBoards(data);
    createShootingStars();

    // Raycaster for clicking
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    canvas.addEventListener('click', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);

        // Check planets
        const clickable = planets.map(p => p.mesh).filter(Boolean);
        const intersects = raycaster.intersectObjects(clickable);

        if (intersects.length > 0) {
            const planet = planets.find(p => p.mesh === intersects[0].object);
            if (planet && planet.photoUrl) {
                showPhotoModal(planet.photoUrl);
            }
        }

        // Check interactive objects (gifts, cake)
        const interactiveObjects = scene.children.filter(c => c.userData && c.userData.interactive);
        const hitInteractive = raycaster.intersectObjects(interactiveObjects, true);

        if (hitInteractive.length > 0) {
            let obj = hitInteractive[0].object;
            while (obj && !obj.userData?.interactive) obj = obj.parent;
            if (obj?.userData?.interactive) {
                handleInteraction(obj);
            }
        }
    });

    // Resize
    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    cleanupFns.push(() => window.removeEventListener('resize', onResize));

    // WASD keyboard controls
    const keys = {};
    const onKeyDown = (e) => { keys[e.code] = true; };
    const onKeyUp = (e) => { keys[e.code] = false; };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    cleanupFns.push(() => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    });

    // Pre-allocate vectors to avoid garbage collection in animate loop
    const _dir = new THREE.Vector3();
    const _right = new THREE.Vector3();

    // Animate
    function animate() {
        animationId = requestAnimationFrame(animate);

        // WASD movement - use pre-allocated vectors
        const speed = 0.5;
        camera.getWorldDirection(_dir);
        _right.crossVectors(_dir, camera.up).normalize();

        if (keys['KeyW']) camera.position.addScaledVector(_dir, speed);
        if (keys['KeyS']) camera.position.addScaledVector(_dir, -speed);
        if (keys['KeyA']) camera.position.addScaledVector(_right, -speed);
        if (keys['KeyD']) camera.position.addScaledVector(_right, speed);
        if (keys['KeyQ']) camera.position.y += speed;
        if (keys['KeyE']) camera.position.y -= speed;

        // Rotate planets
        planets.forEach(p => {
            if (p.mesh) {
                p.mesh.rotation.y += 0.003;
            }
            if (p.glow) {
                p.glow.material.opacity = 0.3 + Math.sin(Date.now() * 0.001 + p.phase) * 0.15;
            }
            if (p.ring) {
                p.ring.rotation.z += 0.001;
            }
        });

        // Animate stars
        if (stars) {
            stars.rotation.y += 0.0001;
            stars.rotation.x += 0.00005;
        }

        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}

function createStarfield() {
    const count = 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const r = 300 + Math.random() * 700;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);

        const brightness = 0.5 + Math.random() * 0.5;
        colors[i3] = brightness;
        colors[i3 + 1] = brightness;
        colors[i3 + 2] = 0.8 + Math.random() * 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
    });

    stars = new THREE.Points(geometry, material);
    scene.add(stars);
}

function createNebula(themeData) {
    // Create nebula clouds using colored sprites
    const nebulaColors = themeData.particleColors || ['#ff2d75', '#7b2ff7', '#00d4ff'];

    for (let i = 0; i < 8; i++) {
        const canvas2d = document.createElement('canvas');
        canvas2d.width = 128;
        canvas2d.height = 128;
        const ctx = canvas2d.getContext('2d');

        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        const color = nebulaColors[i % nebulaColors.length];
        gradient.addColorStop(0, color + '33');
        gradient.addColorStop(0.5, color + '11');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);

        const texture = new THREE.CanvasTexture(canvas2d);
        const sprite = new THREE.Sprite(
            new THREE.SpriteMaterial({
                map: texture, transparent: true, opacity: 0.15,
                blending: THREE.AdditiveBlending
            })
        );

        sprite.position.set(
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 200
        );
        sprite.scale.set(80 + Math.random() * 60, 80 + Math.random() * 60, 1);
        scene.add(sprite);
    }
}

function createPlanets(data) {
    const photos = data.photos || [];
    const count = photos.length;
    planets = [];

    // Arrange in spiral
    photos.forEach((photoUrl, i) => {
        const angle = (i / count) * Math.PI * 2 * 1.5;
        const radius = 20 + (i / count) * 40;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 20;
        const planetSize = 3 + Math.random() * 2;

        // Planet sphere - reduced segments for performance (12x12 instead of 32x32)
        const geometry = new THREE.SphereGeometry(planetSize, 12, 12);

        // Load photo as texture
        const loader = new THREE.TextureLoader();
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.5,
            metalness: 0.1,
        });

        loader.load(photoUrl, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            material.map = texture;
            material.needsUpdate = true;
        }, undefined, () => {
            // On error, use a colored fallback
            material.color.setHex(0xff2d75);
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        scene.add(mesh);

        // Glow atmosphere - reduced segments for performance
        const glowGeom = new THREE.SphereGeometry(planetSize * 1.3, 8, 8);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0xff2d75,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide,
        });
        const glow = new THREE.Mesh(glowGeom, glowMat);
        glow.position.copy(mesh.position);
        scene.add(glow);

        // Ring for some planets - reduced segments
        let ring = null;
        if (Math.random() > 0.5) {
            const ringGeom = new THREE.RingGeometry(planetSize * 1.5, planetSize * 2, 16);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0x7b2ff7,
                transparent: true,
                opacity: 0.2,
                side: THREE.DoubleSide,
            });
            ring = new THREE.Mesh(ringGeom, ringMat);
            ring.position.copy(mesh.position);
            ring.rotation.x = Math.PI / 3 + Math.random() * 0.5;
            scene.add(ring);
        }

        // Point light near planet
        const pLight = new THREE.PointLight(0xff2d75, 0.5, 15);
        pLight.position.copy(mesh.position);
        scene.add(pLight);

        planets.push({
            mesh,
            glow,
            ring,
            photoUrl,
            phase: Math.random() * Math.PI * 2,
            position: mesh.position.clone(),
        });
    });
}

function createConstellations() {
    if (planets.length < 2) return;

    const points = planets.map(p => p.position);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: 0x334477,
        transparent: true,
        opacity: 0.3,
    });
    constellationLines = new THREE.Line(geometry, material);
    scene.add(constellationLines);
}

function createBirthdayPlanet(data) {
    // Central birthday planet — largest
    const geometry = new THREE.SphereGeometry(6, 64, 64);

    // Create a cake-themed texture
    const canvas2d = document.createElement('canvas');
    canvas2d.width = 512;
    canvas2d.height = 512;
    const ctx = canvas2d.getContext('2d');

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#ff2d75');
    gradient.addColorStop(0.5, '#7b2ff7');
    gradient.addColorStop(1, '#00d4ff');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎂', 256, 200);
    ctx.font = 'bold 36px Arial';
    ctx.fillText('HAPPY', 256, 280);
    ctx.fillText('BIRTHDAY', 256, 330);
    ctx.font = 'bold 40px Arial';
    ctx.fillText(data.name || '', 256, 400);

    const texture = new THREE.CanvasTexture(canvas2d);
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.3,
        metalness: 0.2,
        emissive: 0x331133,
        emissiveIntensity: 0.3,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    // Large glow
    const glowGeom = new THREE.SphereGeometry(9, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
        color: 0xff2d75,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    scene.add(glow);

    // Strong light
    const light = new THREE.PointLight(0xff2d75, 3, 50);
    scene.add(light);

    planets.push({
        mesh, glow, ring: null,
        photoUrl: null, phase: 0,
        position: mesh.position.clone(),
        isBirthdayPlanet: true,
    });
}
// ═══ 3D BIRTHDAY WORLD OBJECTS ═══

function createGiantCake(data) {
    const group = new THREE.Group();
    group.position.set(-30, -5, -20);
    group.userData = { interactive: true, type: 'cake', name: data.name };

    // Bottom tier
    const tier1 = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 4, 32),
        new THREE.MeshStandardMaterial({ color: 0xf5c6d0, roughness: 0.6 })
    );
    tier1.position.y = 2;
    group.add(tier1);

    // Middle tier
    const tier2 = new THREE.Mesh(
        new THREE.CylinderGeometry(3.5, 3.5, 3, 32),
        new THREE.MeshStandardMaterial({ color: 0xffb6c1, roughness: 0.6 })
    );
    tier2.position.y = 5.5;
    group.add(tier2);

    // Top tier
    const tier3 = new THREE.Mesh(
        new THREE.CylinderGeometry(2.2, 2.2, 2.5, 32),
        new THREE.MeshStandardMaterial({ color: 0xff69b4, roughness: 0.5 })
    );
    tier3.position.y = 8.25;
    group.add(tier3);

    // Frosting drips
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const drip = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 8, 8),
            new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
        );
        drip.position.set(Math.cos(angle) * 5, 3.8, Math.sin(angle) * 5);
        drip.scale.y = 1.5;
        group.add(drip);
    }

    // Candles
    const candleColors = [0xff2d75, 0x7b2ff7, 0x00d4ff, 0xffd700, 0xff6b35];
    for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const candle = new THREE.Mesh(
            new THREE.CylinderGeometry(0.15, 0.15, 1.5, 8),
            new THREE.MeshStandardMaterial({ color: candleColors[i] })
        );
        candle.position.set(Math.cos(angle) * 1.5, 10.2, Math.sin(angle) * 1.5);
        group.add(candle);

        // Flame
        const flame = new THREE.PointLight(0xffaa00, 1, 5);
        flame.position.set(Math.cos(angle) * 1.5, 11.2, Math.sin(angle) * 1.5);
        group.add(flame);

        const flameMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xffdd44 })
        );
        flameMesh.position.copy(flame.position);
        flameMesh.scale.y = 1.5;
        group.add(flameMesh);
    }

    // Cake glow
    const cakeLight = new THREE.PointLight(0xff69b4, 2, 25);
    cakeLight.position.set(-30, 15, -20);
    scene.add(cakeLight);

    scene.add(group);
}

function create3DBalloons() {
    const balloonColors = [0xff2d75, 0x7b2ff7, 0x00d4ff, 0xffd700, 0xff6b35, 0x39ff14,
        0xff1493, 0x9370db, 0x00ced1, 0xff4500, 0x32cd32, 0xff69b4];

    balloonColors.forEach((color, i) => {
        const group = new THREE.Group();
        const x = (Math.random() - 0.5) * 80;
        const y = 15 + Math.random() * 30;
        const z = (Math.random() - 0.5) * 80;
        group.position.set(x, y, z);

        // Balloon body
        const balloon = new THREE.Mesh(
            new THREE.SphereGeometry(1.2, 16, 16),
            new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.1 })
        );
        balloon.scale.y = 1.3;
        group.add(balloon);

        // Balloon knot
        const knot = new THREE.Mesh(
            new THREE.ConeGeometry(0.2, 0.4, 8),
            new THREE.MeshStandardMaterial({ color })
        );
        knot.position.y = -1.4;
        knot.rotation.x = Math.PI;
        group.add(knot);

        // String
        const stringGeom = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, -1.6, 0),
            new THREE.Vector3(0.1, -3.5, 0.1),
        ]);
        const stringMat = new THREE.LineBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.4 });
        group.add(new THREE.Line(stringGeom, stringMat));

        // Glow
        const glowLight = new THREE.PointLight(color, 0.3, 8);
        group.add(glowLight);

        // Store for animation
        group.userData = { bobPhase: Math.random() * Math.PI * 2, bobSpeed: 0.5 + Math.random() * 0.5, baseY: y };

        scene.add(group);
    });
}

function createGiftBoxes(data) {
    const giftData = [
        { pos: [25, -3, -15], color: 0xff2d75, ribbonColor: 0xffd700, message: `A special surprise for ${data.name}! 🎁` },
        { pos: [-15, -3, 25], color: 0x7b2ff7, ribbonColor: 0x00d4ff, message: "Unwrap happiness! 🎉" },
        { pos: [35, -3, 20], color: 0x00d4ff, ribbonColor: 0xff2d75, message: "Every moment is a gift! ✨" },
        { pos: [-35, -3, -10], color: 0xffd700, ribbonColor: 0xff6b35, message: `Love and joy for you, ${data.name}! 💖` },
        { pos: [10, -3, -35], color: 0x39ff14, ribbonColor: 0x7b2ff7, message: "Best wishes forever! 🌟" },
    ];

    giftData.forEach(g => {
        const group = new THREE.Group();
        group.position.set(...g.pos);
        group.userData = { interactive: true, type: 'gift', message: g.message };

        // Box
        const box = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 3),
            new THREE.MeshStandardMaterial({ color: g.color, roughness: 0.4, metalness: 0.1 })
        );
        box.position.y = 1.5;
        group.add(box);

        // Lid
        const lid = new THREE.Mesh(
            new THREE.BoxGeometry(3.3, 0.5, 3.3),
            new THREE.MeshStandardMaterial({ color: g.color, roughness: 0.3 })
        );
        lid.position.y = 3.25;
        group.add(lid);

        // Ribbon cross
        const ribbon1 = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 3.1, 3.1),
            new THREE.MeshStandardMaterial({ color: g.ribbonColor, roughness: 0.2, metalness: 0.3 })
        );
        ribbon1.position.y = 1.5;
        group.add(ribbon1);

        const ribbon2 = new THREE.Mesh(
            new THREE.BoxGeometry(3.1, 3.1, 0.3),
            new THREE.MeshStandardMaterial({ color: g.ribbonColor, roughness: 0.2, metalness: 0.3 })
        );
        ribbon2.position.y = 1.5;
        group.add(ribbon2);

        // Bow on top
        const bow = new THREE.Mesh(
            new THREE.TorusGeometry(0.6, 0.2, 8, 16),
            new THREE.MeshStandardMaterial({ color: g.ribbonColor })
        );
        bow.position.y = 3.5;
        bow.rotation.x = Math.PI / 2;
        group.add(bow);

        // Gift glow
        const giftLight = new THREE.PointLight(g.color, 0.5, 10);
        giftLight.position.y = 3;
        group.add(giftLight);

        scene.add(group);
    });
}

function createMessageBoards(data) {
    const messages = [
        { text: `HAPPY BIRTHDAY\n${data.name || 'Friend'}!`, pos: [0, 12, -50] },
        { text: "MAKE A WISH\n⭐✨⭐", pos: [40, 10, 0] },
        { text: "MEMORIES\nALL AROUND", pos: [-40, 10, 15] },
    ];

    messages.forEach(m => {
        const canvas2d = document.createElement('canvas');
        canvas2d.width = 512;
        canvas2d.height = 256;
        const ctx = canvas2d.getContext('2d');

        ctx.fillStyle = 'rgba(15,15,25,0.8)';
        ctx.fillRect(0, 0, 512, 256);
        ctx.strokeStyle = '#ff2d75';
        ctx.lineWidth = 3;
        ctx.strokeRect(5, 5, 502, 246);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        const lines = m.text.split('\n');
        lines.forEach((line, i) => {
            ctx.fillText(line, 256, 110 + i * 50);
        });

        const texture = new THREE.CanvasTexture(canvas2d);
        const board = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 6),
            new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide })
        );
        board.position.set(...m.pos);
        board.lookAt(0, board.position.y, 0);
        scene.add(board);

        // Neon glow behind board
        const boardGlow = new THREE.PointLight(0xff2d75, 1, 15);
        boardGlow.position.set(...m.pos);
        scene.add(boardGlow);
    });
}

function createShootingStars() {
    // Periodic shooting stars
    const shootingStar = () => {
        if (!scene) return;
        const startX = (Math.random() - 0.5) * 300;
        const startY = 100 + Math.random() * 100;
        const startZ = (Math.random() - 0.5) * 300;

        const geom = new THREE.SphereGeometry(0.3, 8, 8);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geom, mat);
        star.position.set(startX, startY, startZ);
        scene.add(star);

        const light = new THREE.PointLight(0xffffff, 1, 20);
        light.position.copy(star.position);
        scene.add(light);

        const dx = (Math.random() - 0.5) * 2;
        const dy = -1 - Math.random();
        const dz = (Math.random() - 0.5) * 2;
        let life = 1;

        const animateStar = () => {
            if (!scene || life <= 0) {
                if (scene) {
                    scene.remove(star);
                    scene.remove(light);
                }
                geom.dispose();
                mat.dispose();
                return;
            }
            star.position.x += dx;
            star.position.y += dy;
            star.position.z += dz;
            light.position.copy(star.position);
            life -= 0.02;
            mat.opacity = life;
            mat.transparent = true;
            light.intensity = life;
            requestAnimationFrame(animateStar);
        };
        animateStar();
    };

    // Launch shooting stars periodically
    const interval = setInterval(() => {
        if (!scene) { clearInterval(interval); return; }
        shootingStar();
    }, 3000 + Math.random() * 2000);
    cleanupFns.push(() => clearInterval(interval));
}

function handleInteraction(obj) {
    const { type, message, name } = obj.userData;

    if (type === 'cake') {
        // Pulse cake candles — add a burst of light
        obj.children.forEach(child => {
            if (child.isPointLight) {
                child.intensity = 3;
                setTimeout(() => { child.intensity = 1; }, 1500);
            }
        });
        showPopupMessage(`🎂 Happy Birthday ${name || ''}! Make a wish!`);
    } else if (type === 'gift') {
        // Bounce the gift
        const startY = obj.position.y;
        obj.position.y += 2;
        setTimeout(() => { obj.position.y = startY; }, 300);
        showPopupMessage(message);
    }
}

function showPopupMessage(text) {
    let popup = document.getElementById('galaxy-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'galaxy-popup';
        popup.style.cssText = `
      position:fixed; bottom:100px; left:50%; transform:translateX(-50%);
      padding:16px 28px; background:rgba(15,15,25,0.9); backdrop-filter:blur(20px);
      border:1px solid rgba(255,45,117,0.3); border-radius:20px;
      color:#fff; font-size:1rem; font-weight:500; z-index:50;
      opacity:0; transition:opacity 0.4s ease; pointer-events:none;
      box-shadow:0 8px 32px rgba(0,0,0,0.4); text-align:center; max-width:400px;
    `;
        document.body.appendChild(popup);
    }
    popup.textContent = text;
    popup.style.opacity = '1';
    clearTimeout(popup._timeout);
    popup._timeout = setTimeout(() => { popup.style.opacity = '0'; }, 3000);
}

function warpEntrance() {
    if (!camera) return;
    const startZ = 200;
    camera.position.set(0, 30, startZ);

    const duration = 2500;
    const startTime = Date.now();

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out

        camera.position.z = startZ - (startZ - 80) * eased;
        camera.position.y = 30 - 10 * eased;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

function showPhotoModal(photoUrl) {
    const modal = document.getElementById('photo-modal');
    const img = document.getElementById('modal-img');
    if (!modal || !img) return;
    img.src = photoUrl;
    modal.style.display = 'flex';
}

function cleanup() {
    cleanupFns.forEach(fn => fn());
    cleanupFns = [];
    planets = [];

    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (renderer) {
        renderer.dispose();
        renderer = null;
    }
    if (controls) {
        controls.dispose();
        controls = null;
    }
    scene = null;
    camera = null;
    stars = null;
    constellationLines = null;
}

export function destroyGalaxy() {
    cleanup();
}
