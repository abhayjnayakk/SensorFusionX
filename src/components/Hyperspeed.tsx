import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing';

const Hyperspeed = ({
  effectOptions = {
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3
    }
  }
}) => {
  const hyperspeed = useRef<any>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.dispose();
      const container = document.getElementById('lights');
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    }

    const mountainUniforms = {
      uFreq: { value: new THREE.Vector3(3, 6, 10) },
      uAmp: { value: new THREE.Vector3(30, 30, 20) }
    };

    const xyUniforms = {
      uFreq: { value: new THREE.Vector2(5, 2) },
      uAmp: { value: new THREE.Vector2(25, 15) }
    };

    const LongRaceUniforms = {
      uFreq: { value: new THREE.Vector2(2, 3) },
      uAmp: { value: new THREE.Vector2(35, 10) }
    };

    const turbulentUniforms = {
      uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
      uAmp: { value: new THREE.Vector4(25, 5, 10, 10) }
    };

    const deepUniforms = {
      uFreq: { value: new THREE.Vector2(4, 8) },
      uAmp: { value: new THREE.Vector2(10, 20) },
      uPowY: { value: new THREE.Vector2(20, 2) }
    };

    let nsin = (val: number) => Math.sin(val) * 0.5 + 0.5;

    const distortions: any = {
      mountainDistortion: {
        uniforms: mountainUniforms,
        getDistortion: `
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){ return sin(val) * 0.5 + 0.5; }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3(
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,
        getJS: (progress: number, time: number) => {
          let movementProgressFix = 0.02;
          let uFreq = mountainUniforms.uFreq.value;
          let uAmp = mountainUniforms.uAmp.value;
          let distortion = new THREE.Vector3(
            Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
            Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
            nsin(progress * Math.PI * uFreq.y + time) * uAmp.y -
            nsin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
            nsin(progress * Math.PI * uFreq.z + time) * uAmp.z -
            nsin(movementProgressFix * Math.PI * uFreq.z + time) * uAmp.z
          );
          let lookAtAmp = new THREE.Vector3(2, 2, 2);
          let lookAtOffset = new THREE.Vector3(0, 0, -5);
          return distortion.multiply(lookAtAmp).add(lookAtOffset);
        }
      },
      xyDistortion: {
        uniforms: xyUniforms,
        getDistortion: `
          uniform vec2 uFreq; uniform vec2 uAmp; #define PI 3.14159265358979
          vec3 getDistortion(float progress){ float movementProgressFix = 0.02; return vec3(
            cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
            sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
            0. ); }
        `,
        getJS: (progress: number, time: number) => {
          let movementProgressFix = 0.02;
          let uFreq = xyUniforms.uFreq.value;
          let uAmp = xyUniforms.uAmp.value;
          let distortion = new THREE.Vector3(
            Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
            Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
            Math.sin(progress * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y -
            Math.sin(movementProgressFix * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y,
            0
          );
          let lookAtAmp = new THREE.Vector3(2, 0.4, 1);
          let lookAtOffset = new THREE.Vector3(0, 0, -3);
          return distortion.multiply(lookAtAmp).add(lookAtOffset);
        }
      },
      LongRaceDistortion: {
        uniforms: LongRaceUniforms,
        getDistortion: `
          uniform vec2 uFreq; uniform vec2 uAmp; #define PI 3.14159265358979
          vec3 getDistortion(float progress){ float camProgress = 0.0125; return vec3(
            sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
            sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
            0. ); }
        `,
        getJS: (progress: number, time: number) => {
          let camProgress = 0.0125;
          let uFreq = LongRaceUniforms.uFreq.value;
          let uAmp = LongRaceUniforms.uAmp.value;
          let distortion = new THREE.Vector3(
            Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x -
            Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
            Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
            Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
            0
          );
          let lookAtAmp = new THREE.Vector3(1, 1, 0);
          let lookAtOffset = new THREE.Vector3(0, 0, -5);
          return distortion.multiply(lookAtAmp).add(lookAtOffset);
        }
      },
      turbulentDistortion: {
        uniforms: turbulentUniforms,
        getDistortion: `
          uniform vec4 uFreq; uniform vec4 uAmp; #define PI 3.14159265358979
          float nsin(float val){ return sin(val) * 0.5 + 0.5; }
          float getDistortionX(float progress){ return (
            cos(PI * progress * uFreq.r + uTime) * uAmp.r +
            pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2.) * uAmp.g ); }
          float getDistortionY(float progress){ return (
            -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
            -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a ); }
          vec3 getDistortion(float progress){ return vec3(
            getDistortionX(progress) - getDistortionX(0.0125),
            getDistortionY(progress) - getDistortionY(0.0125), 0. ); }
        `,
        getJS: (progress: number, time: number) => {
          const uFreq = turbulentUniforms.uFreq.value; const uAmp = turbulentUniforms.uAmp.value;
          const getX = (p: number) => Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x + Math.pow(Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)), 2) * uAmp.y;
          const getY = (p: number) => -nsin(Math.PI * p * uFreq.z + time) * uAmp.z - Math.pow(nsin(Math.PI * p * uFreq.w + time / (uFreq.z / uFreq.w)), 5) * uAmp.w;
          let distortion = new THREE.Vector3(getX(progress) - getX(progress + 0.007), getY(progress) - getY(progress + 0.007), 0);
          let lookAtAmp = new THREE.Vector3(-2, -5, 0); let lookAtOffset = new THREE.Vector3(0, 0, -10);
          return distortion.multiply(lookAtAmp).add(lookAtOffset);
        }
      }
    };

    class App {
      container: HTMLElement; renderer: THREE.WebGLRenderer; composer: EffectComposer; scene: THREE.Scene; camera: THREE.PerspectiveCamera;
      clock: THREE.Clock; disposed: boolean; fogUniforms: any; options: any;
      renderPass!: RenderPass; bloomPass!: EffectPass;
      constructor(container: HTMLElement, options: any = {}) {
        this.options = options;
        if (this.options.distortion == null) {
          this.options.distortion = { uniforms: distortion_uniforms, getDistortion: distortion_vertex };
        }
        this.container = container;
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.composer = new EffectComposer(this.renderer);
        container.append(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(options.fov, container.offsetWidth / container.offsetHeight, 0.1, 10000);
        this.camera.position.z = -5; this.camera.position.y = 8; this.camera.position.x = 0;
        this.scene = new THREE.Scene(); this.scene.background = null;
        let fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
        this.scene.fog = fog; this.fogUniforms = { fogColor: { value: fog.color }, fogNear: { value: fog.near }, fogFar: { value: fog.far } };
        this.clock = new THREE.Clock(); this.disposed = false;

        window.addEventListener('resize', this.onWindowResize.bind(this));
      }
      onWindowResize() {
        const width = this.container.offsetWidth; const height = this.container.offsetHeight;
        this.renderer.setSize(width, height); this.camera.aspect = width / height; this.camera.updateProjectionMatrix(); this.composer.setSize(width, height);
      }
      initPasses() {
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.bloomPass = new EffectPass(this.camera, new BloomEffect({ luminanceThreshold: 0.2, luminanceSmoothing: 0, resolutionScale: 1 }));
        const smaaPass = new EffectPass(this.camera, new SMAAEffect({ preset: SMAAPreset.MEDIUM, searchImage: SMAAEffect.searchImageDataURL as any, areaImage: SMAAEffect.areaImageDataURL as any }));
        this.renderPass.renderToScreen = false; this.bloomPass.renderToScreen = false; smaaPass.renderToScreen = true;
        this.composer.addPass(this.renderPass); this.composer.addPass(this.bloomPass); this.composer.addPass(smaaPass);
      }
      render(delta: number) { this.composer.render(delta); }
      tick = () => {
        if (this.disposed) return;
        const delta = this.clock.getDelta();
        this.render(delta);
        requestAnimationFrame(this.tick);
      };
      dispose() {
        this.disposed = true; this.renderer?.dispose(); this.composer?.dispose(); this.scene?.clear();
        window.removeEventListener('resize', this.onWindowResize.bind(this));
      }
      setSize(width: number, height: number, updateStyles?: boolean) { this.composer.setSize(width, height, updateStyles as any); }
      init() {
        this.initPasses();
        // Simple visible content: a road plane and grid helper
        const plane = new THREE.Mesh(
          new THREE.PlaneGeometry(this.options.roadWidth, this.options.length),
          new THREE.MeshBasicMaterial({ color: this.options.colors.roadColor })
        );
        plane.rotation.x = -Math.PI / 2;
        this.scene.add(plane);
        const grid = new THREE.GridHelper(this.options.length, 40, 0x404040, 0x202020);
        (grid as any).position.set(0, 0.01, 0);
        this.scene.add(grid);
        this.tick();
      }
    }

    const distortion_uniforms = { uDistortionX: { value: new THREE.Vector2(80, 3) }, uDistortionY: { value: new THREE.Vector2(-40, 2.5) } };
    const distortion_vertex = `
      #define PI 3.14159265358979
      uniform vec2 uDistortionX; uniform vec2 uDistortionY;
      float nsin(float val){ return sin(val) * 0.5 + 0.5; }
      vec3 getDistortion(float progress){ progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r; float xFreq = uDistortionX.g; float yAmp = uDistortionY.r; float yFreq = uDistortionY.g;
        return vec3( xAmp * nsin(progress * PI * xFreq - PI / 2.), yAmp * nsin(progress * PI * yFreq - PI / 2.), 0. ); }
    `;

    function resizeRendererToDisplaySize(renderer: any, setSize: any) {
      const canvas = renderer.domElement; const width = canvas.clientWidth; const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height; if (needResize) { setSize(width, height, false); } return needResize;
    }

    (function () {
      const container = document.getElementById('lights') as HTMLElement;
      const options: any = { ...effectOptions };
      options.distortion = distortions[options.distortion];
      const myApp = new App(container, options); appRef.current = myApp; myApp.init();
    })();

    return () => { if (appRef.current) { appRef.current.dispose(); } };
  }, [effectOptions]);

  return <div id="lights" className="w-full h-full" ref={hyperspeed}></div>;
};

export default Hyperspeed;


