// src/pages/BibleStudies.jsx

import { Link } from "react-router-dom";
import {
  HiBookOpen,
  HiOutlineClipboardList,
  HiOutlineBookOpen,
  HiOutlinePresentationChartBar,
} from "react-icons/hi";

export default function BibleStudies() {
  const studyTopics = [
    {
      id: 1,
      title: "Agano la Kale: Mwanzo",
      description: "Uchambuzi wa sura zote za Mwanzo na mafundisho yake.",
      icon: HiOutlineBookOpen,
      path: "/mafunzo/mwanzo",
    },
    {
      id: 2,
      title: "Agano la Kale: Methali",
      description: "Mafunzo ya hekima na mafundisho ya Methali.",
      icon: HiOutlineClipboardList,
      path: "/mafunzo/methali",
    },
    {
      id: 3,
      title: "Agano Jipya: Mathayo",
      description: "Uchunguzi wa Injili ya Mathayo na mafunzo ya Yesu.",
      icon: HiBookOpen,
      path: "/mafunzo/mathayo",
    },
    {
      id: 4,
      title: "Agano Jipya: Marko",
      description: "Mitazamo ya Injili ya Marko na matukio ya Yesu.",
      icon: HiOutlinePresentationChartBar,
      path: "/mafunzo/marko",
    },
    {
      id: 5,
      title: "Mafunzo ya Kiroho: Sala",
      description: "Mfululizo wa masomo kuhusu maombi na maadhimisho.",
      icon: HiOutlineClipboardList,
      path: "/mafunzo/sala",
    },
    {
      id: 6,
      title: "Mafunzo ya Kiroho: Imara",
      description: "Jifunze jinsi ya kumtegemea Mungu katika changamoto.",
      icon: HiOutlinePresentationChartBar,
      path: "/mafunzo/imara",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 space-y-8">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Masomo ya Biblia</h1>
          <p className="text-gray-600 mt-2">
            Chagua somo unalotaka kujifunza kutoka Agano la Kale, Agano Jipya, au mafundisho ya kiroho.
          </p>
        </header>

        {/* Studies Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <article
                  key={topic.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                  <div className="flex items-center justify-center bg-yellow-100 h-32">
                    <Icon size={48} className="text-yellow-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                      {topic.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">{topic.description}</p>
                    <Link
                      to={topic.path}
                      className="mt-auto inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition"
                    >
                      Soma Zaidi
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
