<script lang="ts">
import * as THREE from "three";
import { onMount } from "solid-js";

let scene, camera, renderer, videoTexture, video, controls;

function init() {
	console.log("WORKING");

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000,
	);
	camera.position.set(0, 0, 0);

	const loader = new THREE.TextureLoader();
	loader.load("/360/marchin.jpg", (texture) => {
		createSphere(texture);
		loadVideo();
	});

	//  controls = new DeviceOrientationControls(camera);
	animate();
}

function createSphere(texture) {
	const geometry = new THREE.SphereGeometry(500, 60, 40);
	geometry.scale(-1, 1, 1);

	const material = new THREE.MeshBasicMaterial({ map: texture });
	const sphere = new THREE.Mesh(geometry, material);
	scene.add(sphere);
}

function loadVideo() {
	video = document.createElement("video");
	video.src = "your-360-video.mp4";
	video.loop = true;
	video.muted = true;
	video.setAttribute("playsinline", "");
	video.addEventListener("loadeddata", () => {
		videoTexture = new THREE.VideoTexture(video);
		videoTexture.minFilter = THREE.LinearFilter;
		videoTexture.magFilter = THREE.LinearFilter;
		videoTexture.format = THREE.RGBFormat;

		createSphere(videoTexture);
		video.play();
	});
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

console.log("WORKING !");
init();
window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});
</script>

<div id="video-container"></div>
