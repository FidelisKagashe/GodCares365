// src/components/Hero.jsx

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section>
      {/* … */}
      <Link
        to="/kuhusu-sisi"
        className="mt-8 inline-block px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-900 transition"
      >
        JIFAHARISHE
      </Link>
    </section>
  );
}
