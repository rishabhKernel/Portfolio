import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// 1. Particle Network with connecting lines
const ParticleNetwork = () => {
  const pointsRef = useRef();
  const linesRef = useRef();
  const time = useRef(0);
  
  const particleCount = 70; // optimized for mobile and low-end GPUs
  const maxDistance = 3.0; // slightly increased to compensate for fewer particles
  const maxLines = 300; // Safe limit to prevent WebGL buffer overload
  
  // Initialize positions and colors
  const { positions, colors, originalPositions, linePositions, lineColors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const origPos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    // Pre-allocate line buffers
    const lPos = new Float32Array(maxLines * 2 * 3);
    const lCol = new Float32Array(maxLines * 2 * 3);
    
    // Tech/neural colors: soft blue, violet, cyan
    const colorPalette = [
      new THREE.Color('#60a5fa'), 
      new THREE.Color('#8b5cf6'), 
      new THREE.Color('#22d3ee')
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 12;
      
      pos[i * 3] = x;     pos[i * 3 + 1] = y;     pos[i * 3 + 2] = z;
      origPos[i * 3] = x; origPos[i * 3 + 1] = y; origPos[i * 3 + 2] = z;
      
      const mixedColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return { positions: pos, colors: col, originalPositions: origPos, linePositions: lPos, lineColors: lCol };
  }, [particleCount, maxLines]);

  useFrame((state, delta) => {
    time.current += delta * 0.2;
    
    if (!pointsRef.current || !linesRef.current) return;
    
    const posArray = pointsRef.current.geometry.attributes.position.array;
    
    // Animate points
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      posArray[i3] = originalPositions[i3] + Math.sin(time.current + i * 0.1) * 0.4;
      posArray[i3 + 1] = originalPositions[i3 + 1] + Math.cos(time.current + i * 0.15) * 0.4;
      posArray[i3 + 2] = originalPositions[i3 + 2] + Math.sin(time.current + i * 0.05) * 0.4;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Calculate connecting lines
    let lineCount = 0;
    
    // Very basic distance check
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;
        
        if (distSq < maxDistance * maxDistance) {
          const idx = lineCount * 6;
          // Point 1
          linePositions[idx] = posArray[i * 3];
          linePositions[idx + 1] = posArray[i * 3 + 1];
          linePositions[idx + 2] = posArray[i * 3 + 2];
          // Point 2
          linePositions[idx + 3] = posArray[j * 3];
          linePositions[idx + 4] = posArray[j * 3 + 1];
          linePositions[idx + 5] = posArray[j * 3 + 2];
          
          lineColors[idx] = colors[i * 3];
          lineColors[idx + 1] = colors[i * 3 + 1];
          lineColors[idx + 2] = colors[i * 3 + 2];
          lineColors[idx + 3] = colors[j * 3];
          lineColors[idx + 4] = colors[j * 3 + 1];
          lineColors[idx + 5] = colors[j * 3 + 2];
          
          lineCount++;
          if (lineCount >= maxLines) break;
        }
      }
      if (lineCount >= maxLines) break;
    }
    
    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, lineCount * 2);
    }
  });

  return (
    <group>
      <Points ref={pointsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      <lineSegments ref={linesRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} usage={THREE.DynamicDrawUsage} />
          <bufferAttribute attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} usage={THREE.DynamicDrawUsage} />
        </bufferGeometry>
        <lineBasicMaterial 
          vertexColors 
          transparent 
          opacity={0.15} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </lineSegments>
    </group>
  );
};

// 2. Soft Radial Gradient Glow
const GradientGlow = () => {
  const glowRef = useRef();
  
  const shaderArgs = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#1e3a8a') }, // deep blue
      color2: { value: new THREE.Color('#5b21b6') }  // purple
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vUv - 0.5;
        float dist = length(center);
        
        // pulsing effect
        float pulse = sin(time * 1.5) * 0.05 + 1.0;
        
        // gradient calculation
        float alpha = smoothstep(0.5, 0.0, dist * pulse);
        vec3 finalColor = mix(color1, color2, dist * 2.5);
        
        gl_FragColor = vec4(finalColor, alpha * 0.45);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }), []);

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.material.uniforms.time.value = state.clock.elapsedTime;
      // glow always faces camera so it never looks flat from angle
      glowRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <mesh ref={glowRef} position={[0, 0, -3.5]}>
      <planeGeometry args={[14, 14]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
};

// 3. Optional Small Floating Elements
const FloatingElements = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-3, 2, -1]}>
        <mesh>
          <icosahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[3, -1.5, -2]}>
        <mesh>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.4} wireframe />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5} position={[-2, -2, 0]}>
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.6} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.8} floatIntensity={1.5} position={[2.5, 2.5, 1]}>
        <mesh>
          <tetrahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.3} wireframe />
        </mesh>
      </Float>
    </group>
  );
};

// Modern rotating wireframe sphere
const WireframeSphere = () => {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.05;
      sphereRef.current.rotation.y += delta * 0.08;
      sphereRef.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#1e3a8a"
        emissiveIntensity={0.3}
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
    </mesh>
  );
};

// Subtle camera movement for advanced parallax
const CameraController = () => {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Very subtle floating motion
    const driftX = Math.sin(time * 0.2) * 0.2;
    const driftY = Math.cos(time * 0.15) * 0.15;
    
    // Gentle parallax with pointer/mouse
    // pointer is normalized between -1 and 1
    let pointerX = 0;
    let pointerY = 0;
    
    // Use pointer if available (R3F > v8), otherwise fallback to 0
    if (state.pointer) {
      pointerX = state.pointer.x;
      pointerY = state.pointer.y;
    } else if (state.mouse) {
      pointerX = state.mouse.x;
      pointerY = state.mouse.y;
    }

    const targetX = driftX + pointerX * 0.8;
    const targetY = driftY + pointerY * 0.5;
    
    // Smooth dampening towards target
    state.camera.position.x += (targetX - state.camera.position.x) * 0.02;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.02;
    // Maintain a steady z-distance
    state.camera.position.z += (6 - state.camera.position.z) * 0.02; 
    
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

const IntroBackground = () => {
  return (
    <Canvas
      key="intro-canvas"
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 1.5]}
    >
      {/* Lighting Improvement */}
      <ambientLight intensity={0.4} />
      
      {/* Soft blue point light in front */}
      <pointLight 
        position={[4, 3, 5]} 
        intensity={0.8} 
        color="#60a5fa"
        distance={25}
      />
      
      {/* Subtle purple rim light behind the sphere */}
      <pointLight 
        position={[-3, -2, -4]} 
        intensity={1.2} 
        color="#8b5cf6"
        distance={20}
      />

      <CameraController />
      
      {/* Layers */}
      <GradientGlow />
      <ParticleNetwork />
      <FloatingElements />
      
      {/* Core Element */}
      <WireframeSphere />
    </Canvas>
  );
};

export default IntroBackground;
