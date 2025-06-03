// src/pages/MatukioMaalumu.jsx

import { CalendarDays, MapPin } from "lucide-react";

export default function MatukioMaalumu() {
  const events = [
    {
      title: "Siku ya maombi",
      date: "2025-06-15",
      location: "Kanisa Kuu, Dodoma",
      image: "/images/maombi.jpg",
      description:
        "Jiunge nasi kwa siku ya maombi na mafunzo ya kiroho yatakayogusa maisha yako. Wageni kutoka sehemu mbalimbali watakuwepo.",
    },
    {
      title: "Siku ya muziki",
      date: "2025-07-10",
      location: "Uwanja wa Taifa, Dar es Salaam",
      image: "/images/sifa.jpg",
      description:
        "Siku ya kumwimbia Mungu kwa kisho na heshima. Kwamba mbalimbali na waimbaji binafsi watakuwepo.",
    },
    {
      title: "Semina ya Vijana",
      date: "2025-08-03",
      location: "Arusha Convention Centre",
      image: "/images/vijana.jpg",
      description:
        "Semina maalum kwa ajili ya vijana: mafundisho, michezo, ushauri nasaha, na uimbaji. Usikose nafasi hii ya kujifunza na kujenga mtazamo mpya.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Kichwa Kikuu */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Matukio Maalum</h1>
          <p className="text-gray-600 mt-2">
            Haya ndiyo matukio yanayokuja ndani ya huduma yetu – weka tarehe zako vizuri!
          </p>
        </header>

        {/* Grid ya Matukio */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                <div className="flex items-center text-gray-600 gap-2">
                  <CalendarDays size={18} />
                  <span>{new Date(event.date).toLocaleDateString("sw-TZ", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}</span>
                </div>
                <div className="flex items-center text-gray-600 gap-2">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-3 text-green-600 font-semibold hover:underline">
                  Jifunze zaidi →
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
