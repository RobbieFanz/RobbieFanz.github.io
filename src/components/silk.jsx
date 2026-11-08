import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import { Color } from 'three';

const FRAME_INTERVAL = 1000 / 30;
const RENDER_SCALE = 0.75;

const hexToNormalizedRGB = hex => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

const vertexShader = `
varying vec2 vUv;

uniform float uScale;
uniform float uRotation;

void main() {
  float c = cos(uRotation);
  float s = sin(uRotation);
  mat2 rot = mat2(c, -s, s, c);
  vUv = rot * (uv * uScale) * uScale;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  tex        = vUv;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = ({ uniforms }) => {
  const { gl, invalidate, viewport } = useThree();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isVisible = false;
    let timerId = null;

    const updateAnimation = () => {
      if (isVisible && !document.hidden && !reducedMotion.matches) {
        if (timerId !== null) return;

        let lastFrameTime = performance.now();
        timerId = window.setInterval(() => {
          const now = performance.now();
          uniforms.uTime.value += (now - lastFrameTime) / 10000;
          lastFrameTime = now;
          invalidate();
        }, FRAME_INTERVAL);
      } else if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const observer = new IntersectionObserver(entries => {
      isVisible = entries[entries.length - 1].isIntersecting;
      updateAnimation();
    });

    observer.observe(gl.domElement);
    document.addEventListener('visibilitychange', updateAnimation);
    reducedMotion.addEventListener('change', updateAnimation);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateAnimation);
      reducedMotion.removeEventListener('change', updateAnimation);
      if (timerId !== null) window.clearInterval(timerId);
    };
  }, [gl, invalidate, uniforms]);

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
};

const Silk = ({ speed = 5, scale = 1, color = '#7B7481', noiseIntensity = 1.5, rotation = 0 }) => {
  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <Canvas
      dpr={RENDER_SCALE}
      frameloop="demand"
      gl={{ antialias: false, alpha: false, powerPreference: 'low-power' }}
    >
      <SilkPlane uniforms={uniforms} />
    </Canvas>
  );
};

export default Silk;
