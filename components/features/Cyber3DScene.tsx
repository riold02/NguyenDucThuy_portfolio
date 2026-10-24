"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Cyber3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    camera.position.set(0, 80, 850);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x222438, 1.5);
    scene.add(ambientLight);

    const mouseLight = new THREE.PointLight(0x5865f2, 4, 1200);
    mouseLight.position.set(0, 100, 300);
    scene.add(mouseLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 3, 1000);
    cyanLight.position.set(400, 200, 100);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 1000);
    purpleLight.position.set(-400, -200, 100);
    scene.add(purpleLight);

    // 3. Cyber Matrix Wave Grid (Undulating Digital Horizon)
    const gridWidth = 1800;
    const gridDepth = 1800;
    const gridSegX = 60;
    const gridSegZ = 60;
    const gridGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, gridSegX, gridSegZ);
    gridGeo.rotateX(-Math.PI / 2);

    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x5865f2,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.position.y = -360;
    scene.add(gridMesh);

    // Store original grid Y coordinates for wave animation
    const gridPosAttr = gridGeo.attributes.position;
    const origY = new Float32Array(gridPosAttr.count);
    for (let i = 0; i < gridPosAttr.count; i++) {
      origY[i] = gridPosAttr.getY(i);
    }

    // 4. Interactive Floating Holographic Core Group
    const coreGroup = new THREE.Group();
    coreGroup.position.set(380, 40, -100);
    scene.add(coreGroup);

    // 4.1 Outer Torus Knot (Holographic Wireframe)
    const knotGeo = new THREE.TorusKnotGeometry(75, 20, 100, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x005577,
      emissiveIntensity: 0.4,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    coreGroup.add(knotMesh);

    // 4.2 Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(42, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x5865f2,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x4752c4,
      emissiveIntensity: 0.6,
      wireframe: false,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 4.3 Cyber Rings around Core
    const ring1Geo = new THREE.RingGeometry(110, 114, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(130, 134, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 5. Left Ambient Cyber Satellite (Floating Diamond Octahedron)
    const satGroup = new THREE.Group();
    satGroup.position.set(-450, 140, -150);
    scene.add(satGroup);

    const octGeo = new THREE.OctahedronGeometry(60, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x5865f2,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    satGroup.add(octMesh);

    const octRingGeo = new THREE.RingGeometry(85, 88, 36);
    const octRingMat = new THREE.MeshBasicMaterial({
      color: 0x5865f2,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const octRing = new THREE.Mesh(octRingGeo, octRingMat);
    octRing.rotation.x = Math.PI / 2.5;
    satGroup.add(octRing);

    // 6. Particle Cloud (Cyber Dust & Neon Sparks)
    const particleCount = 1400;
    const pGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x5865f2), // Discord Blurple
      new THREE.Color(0x00e5ff), // Cyber Cyan
      new THREE.Color(0xa855f7), // Neon Violet
      new THREE.Color(0xffffff), // Pure Spark
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }

    pGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeometry.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

    // Particle sprite
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.3, "rgba(88, 101, 242, 0.8)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const pMaterial = new THREE.PointsMaterial({
      size: 10,
      vertexColors: true,
      map: pTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);

    // 7. Mouse and Resize Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Adjust positions for mobile vs desktop
      if (window.innerWidth < 1024) {
        coreGroup.position.set(0, 220, -200);
        satGroup.position.set(0, -320, -200);
      } else {
        coreGroup.position.set(400, 30, -80);
        satGroup.position.set(-480, 120, -120);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // 8. Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) * 0.001;


      // Smooth mouse damping
      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;

      // Camera parallax
      camera.position.x = curMouseX * 120;
      camera.position.y = 80 + curMouseY * 80;
      camera.lookAt(0, 0, 0);

      // Light follows mouse in 3D
      mouseLight.position.x = curMouseX * 500;
      mouseLight.position.y = curMouseY * 350 + 100;

      // Animate Undulating Matrix Wave Grid
      const pos = gridGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = i % (gridSegX + 1);
        const v = Math.floor(i / (gridSegX + 1));
        const wave =
          Math.sin(u * 0.25 + time * 1.8) * 16 +
          Math.cos(v * 0.25 + time * 1.4) * 16;
        pos.setY(i, origY[i] + wave);
      }
      pos.needsUpdate = true;

      // Rotate and float Holographic Core
      knotMesh.rotation.x = time * 0.4 + curMouseY * 0.5;
      knotMesh.rotation.y = time * 0.6 + curMouseX * 0.5;
      innerMesh.rotation.y = -time * 0.8;
      ring1.rotation.z = time * 0.5;
      ring2.rotation.z = -time * 0.4;
      coreGroup.position.y = (window.innerWidth < 1024 ? 220 : 30) + Math.sin(time * 1.2) * 15;

      // Rotate Satellite
      octMesh.rotation.x = time * 0.5;
      octMesh.rotation.y = time * 0.7;
      octRing.rotation.z = time * 0.3;
      satGroup.position.y = (window.innerWidth < 1024 ? -320 : 120) + Math.cos(time * 1.5) * 18;

      // Rotate particle field
      particles.rotation.y = time * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      gridGeo.dispose();
      gridMat.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();
      octGeo.dispose();
      octMat.dispose();
      octRingGeo.dispose();
      octRingMat.dispose();
      pGeometry.dispose();
      pMaterial.dispose();
      pTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
