import React from 'react';
// Import picha yako
import backgroundImg from '../../assets/Bible.png';

export default function Quote({
  backgroundUrl = backgroundImg,
  quoteText = `"Hili ndilo pendo, si kwamba sisi tulimpenda Mungu, bali kwamba yeye alitupenda sisi, akamtuma Mwanawe kuwa kipatanisho kwa dhambi zetu"`,
  citeText = '– 1 Yohana 4:10',
  className = '', // nafasi/spacing zaidi ikiwa unahitaji
}) {
  return (
    <section
      className={`relative bg-fixed bg-center bg-cover overflow-hidden ${className}`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Overlay giza semi-transparent juu ya picha */}
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />

      {/* Content wrapper juu ya overlay */}
      <div className="relative container mx-auto px-6 py-16 flex flex-col items-center">
        {/* Quote huru, bold, nyeupe, katikati, na drop-shadow kwa readability */}
        <blockquote className="text-2xl md:text-4xl font-bold text-white text-center leading-snug drop-shadow-lg px-4">
          {quoteText}
        </blockquote>

        <cite className="mt-6 text-white font-semibold text-lg text-center drop-shadow-md">
          {citeText}
        </cite>
      </div>
    </section>
  );
}
