// src/pages/HabariNaVipengele.jsx

import { HiNewspaper, HiPlay, HiBookOpen } from "react-icons/hi";

export default function HabariNaVipengele() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 space-y-12">
        {/* Kichwa Kikuu */}
        <header className="text-center">
          <HiNewspaper size={48} className="mx-auto text-green-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800">Habari na Vipengele</h1>
          <p className="text-gray-600 mt-2">Habari mpya, vipindi vya kiroho, na makala maalum zinazogusa maisha ya kila siku.</p>
        </header>

        {/* Grid ya Habari / Vipengele */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kipengele cha 1 */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
            <img
              src="/images/habari1.jpg"
              alt="Habari ya Siku"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">Habari ya Siku</h2>
              <p className="text-gray-600">Soma habari mpya zenye kuhamasisha, kuelimisha na kukuza imani yako katika maisha ya kila siku.</p>
              <button className="text-green-600 font-semibold hover:underline">Soma zaidi →</button>
            </div>
          </article>

          {/* Kipengele cha 2 */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
            <img
              src="/images/kipindi1.jpg"
              alt="Vipindi vya Video"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <HiPlay className="text-red-500" /> Vipindi vya Video
              </h2>
              <p className="text-gray-600">Tazama mafundisho ya Biblia kupitia vipindi vya video vya kiroho kutoka kwa watumishi mbalimbali.</p>
              <button className="text-green-600 font-semibold hover:underline">Tazama sasa →</button>
            </div>
          </article>

          {/* Kipengele cha 3 */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
            <img
              src="/images/makala1.jpg"
              alt="Makala Maalum"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <HiBookOpen className="text-blue-500" /> Makala Maalum
              </h2>
              <p className="text-gray-600">Pata mafunzo ya kina juu ya maisha, ndoa, imani, na changamoto mbalimbali katika mwanga wa Biblia.</p>
              <button className="text-green-600 font-semibold hover:underline">Soma makala →</button>
            </div>
          </article>
        </section>

        {/* CTA - Wito wa Kujiunga */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Jiunge nasi kwa kila taarifa mpya!</h2>
          <p className="text-gray-600 mb-6">Usikose habari za kiroho na vipengele vinavyokujenga – jiunge na orodha yetu ya barua pepe.</p>
          <form className="max-w-md mx-auto flex items-center space-x-2">
            <input
              type="email"
              placeholder="Weka barua pepe yako"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg"
            >
              Jiunge
            </button>
          </form>
        </section>
        
      </div>
      
    </main>
  );
}
