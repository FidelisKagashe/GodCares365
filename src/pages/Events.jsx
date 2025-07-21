// src/pages/Events.jsx

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { CalendarDays, MapPin } from "lucide-react";

export default function MatukioMaalumu() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const { t } = useLanguage();
  const { isDark } = useTheme();

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
    <main className={`min-h-screen flex items-center justify-center transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <LoadingSpinner text={t('loading')} />
    </main>
  );

  if (error) return (
    <main className={`min-h-screen flex items-center justify-center transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <p className="text-red-600">{t('error')}: {error}</p>
    </main>
  );

  // Pagination logic
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <main className={`min-h-screen py-12 px-6 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Kichwa Kikuu */}
        <header className="text-center mb-12">
          <h1 className={`text-4xl font-bold transition-colors ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>{t('eventsTitle')}</h1>
          <p className={`mt-2 transition-colors ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('eventsDesc')}
          </p>
        </header>

        {/* Grid ya Matukio */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map(({ id, title, date, location, image, description }) => (
            <div
              key={id}
              className={`rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h2 className={`text-xl font-bold transition-colors ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>{title}</h2>
                <div className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
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
                <div className={`flex items-center gap-2 transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <MapPin size={18} />
                  <span>{location}</span>
                </div>
                <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
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
              className={`px-4 py-2 rounded-md transition-colors ${
                page === currentPage
                  ? 'bg-green-600 text-white'
                  : isDark 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
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
