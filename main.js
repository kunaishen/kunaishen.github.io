import * as three from 'three';
import cirball from './cirball.png';

const scene = new three.Scene();
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new three.WebGLRenderer({ canvas: document.getElementById("canvas") });
const ambientLight = new three.AmbientLight(0xffffff);
const nineball = new three.Mesh(
    new three.SphereGeometry(10, 32, 32),
    new three.MeshStandardMaterial({
        map: new three.TextureLoader().load(cirball)
    })
);

console.log(nineball);

function main() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);

    scene.add(ambientLight);
    scene.add(nineball);

    camera.position.z = 30;
}

function animate() {
    requestAnimationFrame(animate);
    nineball.rotation.y += 0.0001;

    renderer.render(scene, camera);
}

main();
