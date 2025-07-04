// src/pages/About.jsx
import Person1 from "../assets/fmk22.jpg"
import Person2 from "../assets/cropped_maasai_women.jpg"
import Person3 from "../assets/IMG_20240821_221430.jpg"
import { Link } from "react-router-dom";
import {
  HiInformationCircle,
  HiUserGroup,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 pt-6">
      <div className="container mx-auto px-6 space-y-12">
        {/* Kichwa cha Ukurasa */}
        <header className="text-center">
          <HiInformationCircle size={48} className="mx-auto text-yellow-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800">Kuhusu Sisi</h1>
          <p className="text-gray-600 mt-2">
            Jifunze zaidi kuhusu historia, dhamira, na timu ya GOD CARES 365.
          </p>
        </header>

        {/* Sehemu ya Taarifa ya Jumla */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Historia Yetu</h2>
          <p className="text-gray-700 leading-relaxed">
            GOD CARES 365 ilianzishwa mnamo mwaka 2023 na kundi la vijana wapenzi wa mafundisho ya
            Biblia. Ilikusudiwa kuwa na tovuti yenye kutoa habari na rasilimali za kiroho kila siku,
            ili waweze kupata faraja, nguvu, na mafunzo yatakayowaimarisha katika mwendo wao na Mungu.
            Tulianza kama kikundi kidogo cha waumini wanayosoma pamoja, na sasa tumekuwa jukwaa
            lenye watazamaji wengi kutoka sehemu mbalimbali za dunia.
          </p>
        </section>

        {/* Sehemu ya Dhamira na Maono */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dhamira */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dhamira Yetu</h2>
              <p className="text-gray-700 leading-relaxed">
                Kupitia GOD CARES 365, tunalenga kueneza Upendo wa Mungu na Habari Njema kwa kila
                mtu. Tunataka kutoa mafunzo ya Biblia yaliyojengwa kwa ufasaha, habari zenye
                kukutia moyo, na rasilimali za kiroho ambazo zitawasaidia watu kujenga imani yao na
                kupata matumaini katika magumu wanayopitia.
              </p>
            </div>

            {/* Maono */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Maono Yetu</h2>
              <p className="text-gray-700 leading-relaxed">
                Maono yetu ni kuona jamii ya waumini ikinyanyuka katika umoja wa kiroho, ikisaidia
                watu kupata neema na uponyaji wa kiroho. Tunataka kuwa kitovu kinachoaminika kupitia
                mitandao yote, ambapo kila mtu, popote alipo, anaweza kupata neno la Mungu, ushauri,
                na msaada wa kiroho.
              </p>
            </div>
          </div>
        </section>

        {/* Sehemu ya Timu */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
            <HiUserGroup className="text-blue-600" />
            <span>Timu Yetu</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mfano wa Mwanachama wa Timu */}
            <article className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col items-center p-6">
              <img
                src={Person1}
                alt="Mwanzilishi"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Fidelis Y. Vitabu</h3>
              <p className="text-gray-600">Mwanzilishi & Muongoza Masomo ya Biblia</p>
            </article>

            <article className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col items-center p-6">
              <img
                src={Person2}
                alt="Mhariri Mkuu"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Anna M. Simba</h3>
              <p className="text-gray-600">Mhariri Mkuu wa Habari & Vipengele</p>
            </article>

            <article className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col items-center p-6">
              <img
                src={Person3}
                alt="Mratibu wa Mitandao"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Zawadi A. Mwinyi</h3>
              <p className="text-gray-600">Mratibu wa Mitandao ya Kijamii</p>
            </article>
          </div>
        </section>

        {/* Sehemu ya Mawasiliano */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <HiOutlineLocationMarker className="text-red-600" />
            <span>Mawasiliano</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Anwani na Saa za Kufungua */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Anwani:</strong> Barabara ya Mtaa Mkuu, Jiji la Dar es Salaam, Tanzania
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Simu:</strong> +255 767 525 234
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Email:</strong> fmklink@gmail.com
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Saa za Kufungua:</strong> Jumatatatu–Jumapili, 8:00 AM – 6:00 PM
              </p>
            </div>

            {/* Fomu ya Kujisajili Kutoa Mawasiliano */}
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Jina Lako
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jina lako kamili"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Barua Pepe
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Ujumbe
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Andika ujumbe wako hapa..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                >
                  Tuma Ujumbe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">GOD CARES 365</h3>
              <p className="text-gray-400">
                Tovuti hii imeundwa kukuimarisha katika imani, kukuunga mkono katika maombi, na kukupeleka karibu na Mungu. Tunaamini kwamba kila siku ni fursa mpya ya kupata neema yake.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Viungo vya Haraka</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white">Nyumbani</Link>
                </li>
                <li>
                  <Link to="/kuhusu-sisi" className="hover:text-white">Kuhusu Sisi</Link>
                </li>
                <li>
                  <Link to="/habari" className="hover:text-white">Habari &amp; Vipengele</Link>
                </li>
                <li>
                  <Link to="/mafunzo" className="hover:text-white">Masomo ya Biblia</Link>
                </li>
                <li>
                  <Link to="/media" className="hover:text-white">Maktaba ya Media</Link>
                </li>
                <li>
                  <Link to="/duka" className="hover:text-white">Duka</Link>
                </li>
                <li>
                  <Link to="/matukio" className="hover:text-white">Matukio Maalum</Link>
                </li>
              </ul>
            </div>
  
            {/* Contact / Social */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Wasiliana Nasi</h3>
              <p className="text-gray-400 mb-4">
                fmklink@gmail.com<br />
                +255 767 525 234
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 5.656c-.77.344-1.6.575-2.47.68a4.327 4.327 0 001.896-2.387 8.582 8.582 0 01-2.736 1.045 4.304 4.304 0 00-7.342 3.925A12.203 12.203 0 013.11 4.88a4.302 4.302 0 001.332 5.74 4.267 4.267 0 01-1.95-.54v.055a4.305 4.305 0 003.455 4.218 4.303 4.303 0 01-1.947.074 4.308 4.308 0 004.02 2.988 8.64 8.64 0 01-5.344 1.842c-.347 0-.688-.02-1.024-.059a12.17 12.17 0 006.59 1.927c7.902 0 12.222-6.548 12.222-12.22 0-.187-.004-.374-.013-.559a8.736 8.736 0 002.146-2.22z" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.415a4.92 4.92 0 011.754 1.148 4.92 4.92 0 011.146 1.753c.176.46.362 1.26.417 2.43.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.055 1.17-.24 1.97-.417 2.428a4.92 4.92 0 01-1.148 1.754 4.92 4.92 0 01-1.753 1.146c-.46.176-1.26.362-2.43.417-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.055-1.97-.24-2.428-.417a4.92 4.92 0 01-1.754-1.148 4.92 4.92 0 01-1.146-1.753c-.176-.46-.362-1.26-.417-2.43C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.071-4.85c.055-1.17.24-1.97.417-2.428a4.92 4.92 0 011.148-1.754A4.92 4.92 0 015.48 2.678c.46-.176 1.26-.362 2.43-.417C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.78.128 4.72.31 3.85.68a7.01 7.01 0 00-2.54 1.63A7.01 7.01 0 00.68 4.85c-.37.87-.552 1.93-.61 3.2C.012 8.332 0 8.735 0 12c0 3.265.012 3.668.07 4.948.058 1.27.24 2.33.61 3.2a7.01 7.01 0 001.63 2.54 7.01 7.01 0 002.54 1.63c.87.37 1.93.552 3.2.61C8.332 23.988 8.735 24 12 24s3.668-.012 4.948-.07c1.27-.058 2.33-.24 3.2-.61a7.01 7.01 0 002.54-1.63 7.01 7.01 0 001.63-2.54c.37-.87.552-1.93.61-3.2.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.058-1.27-.24-2.33-.61-3.2a7.01 7.01 0 00-1.63-2.54 7.01 7.01 0 00-2.54-1.63c-.87-.37-1.93-.552-3.2-.61C15.668.012 15.265 0 12 0zm0 5.838a6.162 6.162 0 106.162 6.162A6.169 6.169 0 0012 5.838zm0 10.162a4 4 0 114-4 4.005 4.005 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} GOD CARES 365. Haki zote zimehifadhiwa.
          </div>
        </footer>
    </main>
  );
}
