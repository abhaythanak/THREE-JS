let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "red" });
let mesh = new THREE.Mesh(box, material);

//mesh.position.y = -1;
// mesh.rotation.z = -1;
// mesh.rotation.x = Math.PI * 2;   //180 degree * 2 = 360 degree rotation 
// mesh.rotation.y = Math.PI / 4;   // 180 / 4 = 45 degree 
// mesh.scale.x = 3;

scene.add(mesh);


const canvas = document.querySelector('#canvas');
let renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera); 

// it will rotate diffrent speed according to device FPS  like device is  60fps support and device is 120 FPS support according to devices
// solution for it to work same to all device three js use clock() method

let clock = new THREE.Clock()

function animate(){
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera);
   // mesh.rotation.x = clock.getElapsedTime() * 10;   // increse speed using * 2 or  * 10
   
    mesh.rotation.y += 0.01;
}
animate()