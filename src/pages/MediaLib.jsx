import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  HiDocumentText,
  HiPhotograph,
  HiVideoCamera,
  HiMusicNote,
  HiX,
} from "react-icons/hi";

export default function MediaLib() {
  const [mediaItems, setMediaItems] = useState([]);
  const [activeTab, setActiveTab] = useState("video");
  const [openVideoUrl, setOpenVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  const { isDark } = useTheme();

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        // Fetch API root
        const rootRes = await fetch("https://godcares365.pythonanywhere.com/");
        const root = await rootRes.json();

        // Fetch each media type
        const [videosRes, audiosRes, docsRes, photosRes] = await Promise.all([
          fetch(root.videos),
          fetch(root.audios),
          fetch(root.documents),
          fetch(root.photos),
        ]);

        const [videos, audios, documents, photos] = await Promise.all([
          videosRes.json(),
          audiosRes.json(),
          docsRes.json(),
          photosRes.json(),
        ]);

        // Map to unified format
        const mappedVideos = videos.map((v) => ({
          id: v.id,
          title: v.title,
          url: v.embed_url.includes("watch?v=")
            ? v.embed_url.replace("watch?v=", "embed/")
            : v.embed_url,
          type: "video",
        }));

        const mappedAudios = audios.map((a) => ({
          id: a.id,
          title: a.title,
          url: a.file,
          type: "audio",
        }));

        const mappedDocs = documents.map((d) => ({
          id: d.id,
          title: d.title,
          url: d.file,
          type: "pdf",
        }));

        const mappedPhotos = photos.map((p) => ({
          id: p.id,
          title: p.title,
          url: p.image,
          type: "image",
        }));

        setMediaItems([
          ...mappedVideos,
          ...mappedAudios,
          ...mappedDocs,
          ...mappedPhotos,
        ]);
      } catch (error) {
        console.error("Error fetching media items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const videos = mediaItems.filter((item) => item.type === "video");
  const audios = mediaItems.filter((item) => item.type === "audio");
  const documents = mediaItems.filter((item) => item.type === "pdf");
  const images = mediaItems.filter((item) => item.type === "image");

  if (loading) {
    return (
      <main className={`min-h-screen flex items-center justify-center transition-colors ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <LoadingSpinner text={t('loading')} />
      </main>
    );
  }

  return (
    <main className={`min-h-screen py-12 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6 space-y-8">
        <header className="text-center">
          <h1 className={`text-4xl font-bold transition-colors ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            {t('mediaLibTitle')}
          </h1>
          <p className={`mt-2 transition-colors ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('mediaLibDesc')}
          </p>
        </header>

        <nav className="flex justify-center space-x-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center space-x-2 transition-colors ${
              activeTab === "video"
                ? "border-b-2 border-blue-600 text-blue-600"
                : isDark 
                  ? "text-gray-400 hover:text-blue-400" 
                  : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <HiVideoCamera className="w-6 h-6" />
            <span>{t('video')}</span>
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center space-x-2 transition-colors ${
              activeTab === "audio"
                ? "border-b-2 border-green-600 text-green-600"
                : isDark 
                  ? "text-gray-400 hover:text-green-400" 
                  : "text-gray-600 hover:text-green-600"
            }`}
          >
            <HiMusicNote className="w-6 h-6" />
            <span>{t('audio')}</span>
          </button>
          <button
            onClick={() => setActiveTab("pdf")}
            className={`flex items-center space-x-2 transition-colors ${
              activeTab === "pdf"
                ? "border-b-2 border-red-600 text-red-600"
                : isDark 
                  ? "text-gray-400 hover:text-red-400" 
                  : "text-gray-600 hover:text-red-600"
            }`}
          >
            <HiDocumentText className="w-6 h-6" />
            <span>PDF</span>
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`flex items-center space-x-2 transition-colors ${
              activeTab === "image"
                ? "border-b-2 border-yellow-600 text-yellow-600"
                : isDark 
                  ? "text-gray-400 hover:text-yellow-400" 
                  : "text-gray-600 hover:text-yellow-600"
            }`}
          >
            <HiPhotograph className="w-6 h-6" />
            <span>{t('images')}</span>
          </button>
        </nav>

        <section>
          {activeTab === "video" && (
            <> 
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((item) => (
                    <article
                      key={item.id}
                      className={`rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div
                        className="relative w-full h-48 bg-black cursor-pointer"
                        onClick={() => setOpenVideoUrl(item.url)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${item.url.split("/").pop()}/hqdefault.jpg`}
                          alt={`${item.title} thumbnail`}
                          className="object-cover w-full h-full brightness-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white bg-opacity-80 p-3 rounded-full">
                            <HiVideoCamera className="text-blue-600 w-8 h-8" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className={`text-lg font-semibold truncate transition-colors ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm mt-1 transition-colors ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          Tazama vizuri
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className={`transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Hakuna video zilizopakiwa.</p>
              )}
            </>
          )}

          {activeTab === "audio" && (
            <> 
              {audios.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {audios.map((item) => (
                    <article
                      key={item.id}
                      className={`rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col items-center p-6 ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <HiMusicNote size={48} className="text-green-600 mb-4" />
                      <h3 className={`text-lg font-semibold mb-2 text-center truncate transition-colors ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>
                        {item.title}
                      </h3>
                      <audio src={item.url} controls className="w-full" />
                    </article>
                  ))}
                </div>
              ) : (
                <p className={`transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Hakuna audio zilizopakiwa.</p>
              )}
            </>
          )}

          {activeTab === "pdf" && (
            <> 
              {documents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {documents.map((item) => (
                    <article
                      key={item.id}
                      className={`rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col p-4 ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <HiDocumentText size={36} className="text-red-600" />
                        <h3 className={`text-lg font-semibold truncate transition-colors ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <iframe
                        src={item.url}
                        className="w-full h-48 border rounded-lg mb-4"
                        title={item.title}
                      ></iframe>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center space-x-1 text-red-600 hover:text-red-800 font-medium"
                      >
                        <span>Angalia PDF nzima</span>
                      </a>
                    </article>
                  ))}
                </div>
              ) : (
                <p className={`transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Hakuna nyaraka zilizopakiwa.</p>
              )}
            </>
          )}

          {activeTab === "image" && (
            <> 
              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {images.map((item) => (
                    <article
                      key={item.id}
                      className={`rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col ${
                        isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="p-4">
                        <h3 className={`text-lg font-semibold truncate transition-colors ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className={`transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>Hakuna picha zilizopakiwa.</p>
              )}
            </>
          )}
        </section>
      </div>

      {openVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl mx-4 sm:mx-0">
            <button
              className="absolute top-2 right-2 text-white hover:text-red-400"
              onClick={() => setOpenVideoUrl("")}
            >
              <HiX className="w-8 h-8" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={openVideoUrl}
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
