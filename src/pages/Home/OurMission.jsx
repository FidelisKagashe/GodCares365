import React from 'react';
import logo from '../../assets/logo_transparent.png';

export default function OurMission() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-green-50 to-white pb-8"
      aria-labelledby="our-mission-heading"
    >
      {/* SVG dot pattern background (decorative) */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(34,197,94,0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Image */}
          <figure className="flex items-center justify-center">
            <img
              src={logo}
              alt="Unity Event"
              loading="lazy"
              className="w-full max-w-sm h-auto md:pb-12 rounded-lg object-cover"
            />
            {/* <figcaption className="sr-only">Logo ya Umoja Wetu</figcaption> */}
          </figure>

          {/* Right: Text content */}
          <div className="bg-white bg-opacity-60 backdrop-blur-md shadow-md rounded-3xl p-8 text-center md:text-left max-w-xl mx-auto md:mx-0">
            {/* Small heading with vertical line */}
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <span className="w-1 h-6 bg-green-500 mr-2"></span>
              <p className="text-green-600 text-sm uppercase tracking-widest">
                HITAJI LA MOYO LATULIZWA
              </p>
            </div>

            {/* Main heading */}
            <h2 id="our-mission-heading" className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Karibu katika umoja Wetu
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              Tovuti hii imeundwa kukuimarisha katika imani, kukuunga mkono katika maombi, na kukupeleka karibu na Mungu. Tunaamini kwamba kila siku ni fursa mpya ya kusogea kwake Mungu wetu.
            </p>

            {/* "READ MORE" button */}
            <div className="text-right">
              <a
                href="/kuhusu-sisi"
                className="inline-block font-semibold px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                SOMA ZAIDI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
