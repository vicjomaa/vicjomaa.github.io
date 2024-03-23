import * as THREE from 'three';

let uniforms, hexColor;

export function colorMouse(sectionX) {
    let colorA, colorB, mixFactor;

    if (sectionX < 5 / 9) {
        colorA = new THREE.Color("#DF8C82");
        colorB = new THREE.Color("#ED965B");
        mixFactor = sectionX / (4 / 9);
    } else if (sectionX < 5 / 9) {
        colorA = colorB = new THREE.Color("#ED965B");
        mixFactor = (sectionX - 4 / 9) / (4 / 9);
    } else {
        colorA = new THREE.Color("#ED965B");
        colorB = new THREE.Color("#1c8fe6");
        mixFactor = (sectionX - 5 / 9) / (4 / 9);
    }

    // Smoothly transition between colorA and colorB using mixFactor
    uniforms = new THREE.Color().copy(colorA).lerp(colorB, mixFactor);
    hexColor = `#${uniforms.getHexString()}`;

    return { hexColor, uniforms };
}
