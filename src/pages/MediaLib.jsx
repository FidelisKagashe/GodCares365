// src/pages/MediaLib.jsx
import Img1 from "../assets/WhatsApp Image 2025-05-29 at 17.24.56_370e9e3b.jpg"
import { useState, useEffect } from "react";
import {
  HiDocumentText,
  HiPhotograph,
  HiVideoCamera,
  HiMusicNote,
  HiX,
} from "react-icons/hi";

export default function MediaLib() {
  // State for all media items
  const [mediaItems, setMediaItems] = useState([]);
  // State for which tab is active: "video", "audio", "pdf"
  const [activeTab, setActiveTab] = useState("video");
  // State for which video is open in modal (YouTube embed URL)
  const [openVideoUrl, setOpenVideoUrl] = useState("");

  useEffect(() => {
    // Example data: YouTube URLs (embed), local audio, local PDF
    const initialData = [
      {
        id: 1,
        title: "Mafunzo Ya Biblia (YouTube)",
        url: "https://www.youtube.com/embed/ctw_Vc9xZJk",
        type: "video",
      },
      {
        id: 2,
        title: "Video Ya Mahubiri (YouTube)",
        url: "https://www.youtube.com/embed/3kTz1qs1zM8",
        type: "video",
      },
      {
        id: 3,
        title: "Tukio Maalum 2025 (Audio)",
        url: "/audio/media3.mp3",
        type: "audio",
      },
      {
        id: 4,
        title: "Maonyesho ya Imani (Picha)",
        url: "/images/media1.jpg",
        type: "image",
      },
      {
        id: 5,
        title: "Vifungu Maalum (PDF)",
        url: "/docs/media5.pdf",
        type: "pdf",
      },
    ];
    setMediaItems(initialData);
  }, []);

  // Filter by type
  const videos = mediaItems.filter((item) => item.type === "video");
  const audios = mediaItems.filter((item) => item.type === "audio");
  const documents = mediaItems.filter((item) => item.type === "pdf");
  const images = mediaItems.filter((item) => item.type === "image");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Maktaba Ya Media
          </h1>
          <p className="text-gray-600 mt-2">
            Chaguzi za Video, Audio, Picha na Nyaraka mbalimbali.
          </p>
        </header>

        {/* Tab Navigation */}
        <nav className="flex justify-center space-x-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center space-x-2 ${
              activeTab === "video"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <HiVideoCamera className="w-6 h-6" />
            <span>Video</span>
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center space-x-2 ${
              activeTab === "audio"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            <HiMusicNote className="w-6 h-6" />
            <span>Audio</span>
          </button>
          <button
            onClick={() => setActiveTab("pdf")}
            className={`flex items-center space-x-2 ${
              activeTab === "pdf"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            <HiDocumentText className="w-6 h-6" />
            <span>PDF</span>
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`flex items-center space-x-2 ${
              activeTab === "image"
                ? "border-b-2 border-yellow-600 text-yellow-600"
                : "text-gray-600 hover:text-yellow-600"
            }`}
          >
            <HiPhotograph className="w-6 h-6" />
            <span>Picha</span>
          </button>
        </nav>

        {/* Content Section */}
        <section>
          {/* --- VIDEO TAB --- */}
          {activeTab === "video" && (
            <>
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col"
                    >
                      <div
                        className="relative w-full h-48 bg-black cursor-pointer"
                        onClick={() => setOpenVideoUrl(item.url)}
                      >
                        {/* Thumbnail Overlay */}
                        <img
                          src={`https://img.youtube.com/vi/${
                            item.url.split("/").pop()
                          }/hqdefault.jpg`}
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
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          Tazama vizuri
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Hakuna video zilizopakiwa.</p>
              )}
            </>
          )}

          {/* --- AUDIO TAB --- */}
          {activeTab === "audio" && (
            <>
              {audios.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {audios.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col items-center p-6"
                    >
                      <HiMusicNote
                        size={48}
                        className="text-green-600 mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center truncate">
                        {item.title}
                      </h3>
                      <audio src={item.url} controls className="w-full" />
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Hakuna audio zilizopakiwa.</p>
              )}
            </>
          )}

          {/* --- PDF TAB --- */}
          {activeTab === "pdf" && (
            <>
              {documents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {documents.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col p-4"
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <HiDocumentText
                          size={36}
                          className="text-red-600"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                          {item.title}
                        </h3>
                      </div>
                      {/* Embedded PDF preview */}
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
                <p className="text-gray-500">Hakuna nyaraka zilizopakiwa.</p>
              )}
            </>
          )}

          {/* --- IMAGE TAB --- */}
          {activeTab === "image" && (
            <>
              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {images.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col"
                    >
                      <img
                        src={Img1}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                          {item.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Hakuna picha zilizopakiwa.</p>
              )}
            </>
          )}
        </section>
      </div>

      {/* --- VIDEO MODAL --- */}
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
