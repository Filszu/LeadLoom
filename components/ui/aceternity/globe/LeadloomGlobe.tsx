"use client";
import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import the World component from three-globe
const World = dynamic(() => import('./globe').then((m) => m.World), {
  ssr: false,
});

// Helper: ensure a value is a valid string color
const toValidColor = (value: string, fallback = '#ffffff') => {
  if (typeof value === 'string') return value;
  // If it's not a string, try to convert it or use fallback
  try {
    return String(value);
  } catch {
    return fallback;
  }
};

export function LeadloomGlobe() {
  // Define globe configuration ensuring all color values are strings.
  const globeConfig = {
    pointSize: 4,
    globeColor: toValidColor('#156e37'),
    showAtmosphere: true,
    atmosphereColor: toValidColor('#FFFFFF'),
    atmosphereAltitude: 0.1,
    emissive: toValidColor('#14f571'),
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: toValidColor('rgba(255,255,255,0.7)'),
    directionalLeftLight: toValidColor('#ffffff'),
    ambientLight: toValidColor('#d528f7'),
    directionalTopLight: toValidColor('#ffffff'),
    pointLight: toValidColor('#ffffff'),
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  // Define a set of color strings
  const colors = ['#06b6d4', '#3b82f6', '#6366f1'];

  // Create sample arcs and ensure the color values are sanitized
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: toValidColor(colors[Math.floor(Math.random() * colors.length)]),
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: toValidColor(colors[Math.floor(Math.random() * colors.length)]),
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: toValidColor(colors[Math.floor(Math.random() * colors.length)]),
    },
    // ... (add other arcs as needed, making sure each color is sanitized)
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: toValidColor(colors[Math.floor(Math.random() * colors.length)]),
    },
  ];

  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center py-20 md:h-auto">
      <div className="relative mx-auto h-full w-full max-w-7xl overflow-hidden md:h-[40rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <div className="px-4">
            <h2 className="text-center text-xl font-bold text-white md:text-4xl">
              Play from anywhere in the World
            </h2>
            <section className="mx-auto mt-2 max-w-md text-center text-base font-normal text-neutral-200 md:text-lg">
              <p>
                In countries such as the USA, Canada, Germany, France and Luxembourg you can win the highest rewards*.
              </p>
              <p className="mt-2 text-sm">
                *But beware of unwise use of GeForce now or VPNs, it can lead to account blocking
              </p>
            </section>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full select-none bg-gradient-to-b from-transparent to-background" />
        <div className="absolute -bottom-20 z-10 h-5/6 w-full md:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
