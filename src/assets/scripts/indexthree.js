import gsap from 'gsap';
import * as THREE from 'three';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader} from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { colorMouse } from './colorMouse';


// Load the noise textures
const heightMap = new THREE.TextureLoader().load('/assets/img/noise.jpg');
heightMap.minFilter = THREE.NearestFilter

const displacementMap = new THREE.TextureLoader().load('/assets/img/noise3D.jpg')
const hdriURL = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr'

heightMap.minFilter = displacementMap.minFilter = THREE.NearestFilter
displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping

/** three js part  */

export let hexColor;

export function threeCanvas(indexPage) {

    const uniforms = {
        time: {
            value: 0
        },
        colorA: {
            value: new THREE.Color("#ED965B")
        },
        colorB: {
            value: new THREE.Color(0,0,0)
        },
        heightMap: {
            value: heightMap
        },
        displacementMap: {
            value: displacementMap
        },
        iterations: {
            value: 10
        },
        depth: {
            value: 0.6
        },
        smoothing: {
            value: 0.2
        },
        displacement: {
            value: 0.1
        },
       
    }


    // Canvas
    const canvas = document.querySelector('canvas.webgl');
    const scene = new THREE.Scene() ;
    const materialHeader = new THREE.MeshStandardMaterial({
        roughness: 0.1,
    })


    materialHeader.onBeforeCompile = shader => {
        shader.uniforms = {
            ...shader.uniforms,
            ...uniforms
        }
        // Add to top of vertex shader
        shader.vertexShader = `
  varying vec3 v_pos;
  varying vec3 v_dir;
` + shader.vertexShader

        // Assign values to varyings inside of main()
        shader.vertexShader = shader.vertexShader.replace(/void main\(\) {/, (match) => match + `
  v_dir = position - cameraPosition; // Points from camera to vertex
  v_pos = position;
`)

      // Add to top of fragment shader
      shader.fragmentShader = `
      #define FLIP vec2(-1., -1.)
      
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform sampler2D heightMap;
      uniform sampler2D displacementMap;
      uniform int iterations;
      uniform float depth;
      uniform float smoothing;
      uniform float displacement;
      uniform float time;
      
      varying vec3 v_pos;
      varying vec3 v_dir;
    ` + shader.fragmentShader

          // Add above fragment shader main() so we can access common.glsl.js
          shader.fragmentShader = shader.fragmentShader.replace(/void main\(\) {/, (match) => `
       /**
       * @param p - Point to displace
       * @param strength - How much the map can displace the point
       * @returns Point with scrolling displacement applied
       */
      vec3 displacePoint(vec3 p, float strength) {
        vec2 uv = equirectUv(normalize(p));
        vec2 scroll = vec2(time, 0.);
        vec3 displacementA = texture(displacementMap, uv + scroll).rgb; // Upright
        vec3 displacementB = texture(displacementMap, uv * FLIP - scroll).rgb; // Upside down
        
        // Center the range to [-0.5, 0.5], note the range of their sum is [-1, 1]
        displacementA -= 0.5;
        displacementB -= 0.5;
        
        return p + strength * (displacementA + displacementB);
      }
      
      /**
        * @param rayOrigin - Point on sphere
        * @param rayDir - Normalized ray direction
        * @returns Diffuse RGB color
        */
      vec3 marchMarble(vec3 rayOrigin, vec3 rayDir) {
        float perIteration = 1. / float(iterations);
        vec3 deltaRay = rayDir * perIteration * depth;

        // Start at point of intersection and accumulate volume
        vec3 p = rayOrigin;
        float totalVolume = 0.;

        for (int i=0; i<iterations; ++i) {
          // Read heightmap from spherical direction of displaced ray position
          vec3 displaced = displacePoint(p, displacement);
          vec2 uv = equirectUv(normalize(displaced));
          float heightMapVal = texture(heightMap, uv).r;

          // Take a slice of the heightmap
          float height = length(p); // 1 at surface, 0 at core, assuming radius = 1
          float cutoff = 1. - float(i) * perIteration;
          float slice = smoothstep(cutoff, cutoff + smoothing, heightMapVal);

          // Accumulate the volume and advance the ray forward one step
          totalVolume += slice * perIteration;
          p += deltaRay;
        }
        return toneMapping(mix(colorA, colorB, totalVolume));
      }
    ` + match)

          shader.fragmentShader = shader.fragmentShader.replace(/vec4 diffuseColor.*;/, `
      vec3 rayDir = normalize(v_dir);
      vec3 rayOrigin = v_pos;
      
      vec3 rgb = marchMarble(rayOrigin, rayDir);
      vec4 diffuseColor = vec4(rgb, 1.);      
    `)
  }


    // Objects 
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    const assetLoader = new GLTFLoader();
    assetLoader.setDRACOLoader(dracoLoader);
    let sectionMeshes = [];
    const objectsDistance = 4;


 // Objects
    assetLoader.load('/assets/models/hand.gltf', (gltf) => {
        const mesh1 = gltf.scene;
        mesh1.scale.set(0.7, 0.7, 0.7);
        mesh1.position.y = -objectsDistance * 0.01;
        mesh1.position.x = indexPage ? (sizes.width > sizes.height ? 2 : 0) : 0;
        mesh1.traverse((o) => {
            if (o.isMesh) o.material = materialHeader;
        });
        scene.add(mesh1);
        sectionMeshes.push(mesh1);
    });

        


    /**
 * Sizes
 */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    const updateSizes = () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        sectionMeshes[0].position.x = sizes.width > sizes.height ? 2 : 0;
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', updateSizes);

    /**
     * Camera
     */
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 6;
    cameraGroup.add(camera);



    /**
     * Renderer
     */
    const renderer = createRenderer(canvas);
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    setupEnvironment(hdriURL, renderer, scene);


  /**
 * Scroll
 */
    let scrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        const newSection = Math.round(scrollY / sizes.height);

        const animationParams = {
            duration: 0.3,
            ease: 'linear',
        };

        const mesh = sectionMeshes[0];

        if (mesh) {
            const posO = scrollY / sizes.height * objectsDistance;
            const commonAnimationParams = { ...animationParams, y: posO < objectsDistance - 1 ? -posO : -objectsDistance + 1 };

            if (newSection < 2) {
                const xValue = newSection === 0 ? (sizes.width > sizes.height ? 2 : 0) : 0;
                gsap.to(mesh.position, { ...commonAnimationParams, x: xValue });
            }
        }
    });


    /**
     * Cursor
     */
    const cursor = {}
    cursor.x = 0
    cursor.y = 0

    

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = event.clientY / sizes.height - 0.5

        let sectionX = cursor.x +0.5;
        uniforms.colorA.value = colorMouse(sectionX).uniforms;
        hexColor = colorMouse(sectionX).hexColor;

    })


    window.addEventListener('touchmove', (event) => {
        const touch = event.touches[0];
        cursor.x = touch.clientX / sizes.width - 0.5;
        cursor.y = touch.clientY / sizes.height - 0.5;
    
        let sectionX = cursor.x + 0.5;
        uniforms.colorA.value = colorMouse(sectionX).uniforms;
        hexColor = colorMouse(sectionX).hexColor;
    });
    
    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    const tick = () => {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime

        camera.position.y = -scrollY / sizes.height * objectsDistance

        const parallaxX = -cursor.x * 0.5
        const parallaxY = cursor.y * 0.5

        cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

        // Animate meshes


        for (const mesh of sectionMeshes) {
            mesh.rotation.y += deltaTime * 0.2
            uniforms.time.value =  elapsedTime  * 0.1;
        }

        // Render
        renderer.render(scene, camera);
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()
}


/*  helper functions */

function setupEnvironment(url, renderer, scene) {
    const loader = new RGBELoader()
    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    loader.load(url, (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture
        texture.dispose();
        pmremGenerator.dispose();
        scene.environment = envMap;

    })
}

function createRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({
        canvas:canvas,
        antialias: true,
        alpha: true
    })
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.setSize(window.innerWidth, window.innerHeight)
    return renderer
}

