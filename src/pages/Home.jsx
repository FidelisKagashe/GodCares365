// src/pages/Home.jsx
import logo from '../assets/logo_transparent.png';
import women from '../assets/cropped_maasai_women.jpg';
import ImageBible from '../assets/ChatGPT Image Jun 3, 2025, 06_06_23 PM.png'
import { Link } from 'react-router-dom';
import { HiInformationCircle, HiNewspaper, HiBookOpen, HiPhotograph, HiShoppingCart, HiCalendar } from 'react-icons/hi';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
       <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${women})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 py-10 flex flex-col items-center text-center text-white">
          {/* Logo + Title */}
          <img src={logo} alt="GOD CARES 365 Logo" className="w-48 h-48 mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Karibu kwenye <span className="text-yellow-400">GOD</span><span className="text-blue-800"> CARES</span><span className="text-green-800"> 365</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Ufahamu wa Upendo na Neema ya Mungu kila siku.
          </p>
          <Link
            to="/habari"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Soma Habari &amp; Vipengele
          </Link>
        </div>
      </section>

      {/* Featured Verse */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg px-8 py-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-semibold text-gray-800 mb-4">
            “Hili ndilo pendo, si kwamba sisi tulimpenda Mungu, bali kwamba yeye alitupenda sisi, akamtuma Mwanawe kuwa kipatanisho kwa dhambi zetu” 
          </blockquote>
          <cite className="block text-gray-600 font-medium">– 1 Yohana 4:10</cite>
        </div>
      </section>

      {/* Our Mission */}
      {/* Dhamira Yetu (Our Mission) with background image */}
      <section className="flex flex-col-reverse md:flex-row items-center bg-gray-50 py-6">
        {/* Image on left (desktop), below text on mobile */}
        <div className="w-full p-4 md:w-1/2">
          <img
            src={ImageBible}
            alt="Open Bible with sunlight"
            className="w-full md:h-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Text on right (desktop), above image on mobile */}
        <div className="w-full md:w-1/2 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dhamira Yetu
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Tunakusudia kueneza upendo wa Mungu kwa njia yenye moyo na ushuhuda halisi. Kupitia tovuti hii, unakaribishwa kuona nyuso zenye tabasamu kama ishara ya tumaini na neema Yake, ukitambua kwamba hakika Mungu anatupenda na anatuhudumia kila siku.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Habari za Injili na Ushuhuda:</strong> Makala za kiroho zinazochochea imani na kutoa nguvu.</li>
            <li><strong>Mafunzo ya Biblia:</strong> Tafsiri na falsafa za maandiko zitakazokuongoza kwenye safari yako ya kiroho.</li>
            <li><strong>Maktaba ya Media:</strong> Video za mahubiri, vipindi vya sauti, na picha zenye hisia za upendo na tumaini.</li>
            <li><strong>Matukio Maalum:</strong> Simulizi na mikutano ya mtandaoni itakayokuwezesha kushiriki na kukua pamoja na wengine.</li>
          </ul>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Chagua Kituo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kuhusu Sisi */}
          <Link
            to="/kuhusu-sisi"
            className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <HiInformationCircle size={48} className="text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Kuhusu Sisi</h3>
            <p className="text-gray-600">
              Jifunze juu ya historia na malengo ya GOD CARES 365, timu yetu, na jinsi unavyoweza kushiriki nasi.
            </p>
          </Link>

          {/* Habari & Vipengele */}
          <Link
            to="/habari"
            className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <HiNewspaper size={48} className="text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Habari &amp; Vipengele</h3>
            <p className="text-gray-600">
              Soma makala za kiroho, vidokezo vya maisha, na habari mpya zinazohusiana na imani na jamii yetu.
            </p>
          </Link>

          {/* Masomo ya Biblia */}
          <Link
            to="/mafunzo"
            className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <HiBookOpen size={48} className="text-green-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Masomo ya Biblia</h3>
            <p className="text-gray-600">
              Upate masomo ya kina ya agano la kale na jipya, tafsiri za maandiko, na mipango ya kusoma Biblia.
            </p>
          </Link>

          {/* Maktaba ya Media */}
          <Link
            to="/media"
            className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <HiPhotograph size={48} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Maktaba ya Media</h3>
            <p className="text-gray-600">
              Tazama video za mahubiri, sikia vipindi vya redio, na pakua vifaa vya kufundisha.
            </p>
          </Link>

          {/* Duka */}
          <Link
            to="/duka"
            className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <HiShoppingCart size={48} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Duka</h3>
            <p className="text-gray-600">
              Nunua vitabu vya kiroho, T-shirt zenye ujumbe wa imani, na vifaa vingine vya kujenga roho.
            </p>
          </Link>

          {/* Matukio Maalum */}
          <Link
            to="/matukio"
            className="flex flex-col items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
          >
            <HiCalendar size={48} className="text-indigo-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Matukio Maalum</h3>
            <p className="text-gray-600">
              Angalia kalenda ya mikutano ya mtandaoni, semina, na matukio ya kijamii yanayoleta kukua kiroho.
            </p>
          </Link>
        </div>
      </section>

      {/* Newsletter / Prayer Request CTA */}
      <section className="bg-yellow-100 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Jiunge na Jarida letu la Maombi
            </h2>
            <p className="text-gray-700">
              Pata ujumbe wa kila wiki, maombi maalum, na rasilimali mpya moja kwa moja kwenye barua pepe yako. Pia, tuma ombi lako la maombi nasi—tuko hapa kuombea pamoja nawe.
            </p>
          </div>
          <form className="w-full md:w-1/2 lg:w-1/3 flex">
            <input
              type="email"
              placeholder="Barua Pepe Yako"
              className="w-full px-4 py-3 rounded-l-full border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-r-full transition"
            >
              Jiunge
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
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
