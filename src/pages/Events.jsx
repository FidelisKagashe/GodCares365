// src/pages/Events.jsx

import { useState, useEffect } from "react";
import { CalendarDays, MapPin } from "lucide-react";

export default function MatukioMaalumu() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://godcares365.pythonanywhere.com/events/");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  if (loading) return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Inapakia matukio…</p>
    </main>
  );

  if (error) return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-red-600">Hitilafu: {error}</p>
    </main>
  );

  // Pagination logic
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Kichwa Kikuu */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Matukio Maalum</h1>
          <p className="text-gray-600 mt-2">
            Angalia matukio yetu hapa chini – chukua taarifa sita tu kwa kila ukurasa.
          </p>
        </header>

        {/* Grid ya Matukio */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map(({ id, title, date, location, image, description }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <div className="flex items-center text-gray-600 gap-2">
                  <CalendarDays size={18} />
                  <span>
                    {new Date(date).toLocaleDateString("sw-TZ", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 gap-2">
                  <MapPin size={18} />
                  <span>{location}</span>
                </div>
                <p className="text-gray-600">{description}</p>
                <button className="mt-3 text-green-600 font-semibold hover:underline">
                  Jifunze zaidi →
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                page === currentPage
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
