import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu Sisi',
    news: 'Habari & Vipengele',
    studies: 'Masomo ya Biblia',
    media: 'Maktaba ya Media',
    shop: 'Duka',
    events: 'Matukio Maalum',
    more: 'Zaidi',
    
    // Common
    loading: 'Inapakia...',
    error: 'Hitilafu',
    readMore: 'Soma Zaidi',
    learnMore: 'Jifunze Zaidi',
    viewEvents: 'Angalia Matukio',
    close: 'Funga',
    search: 'Tafuta',
    next: 'Ifuatayo',
    previous: 'Iliyotangulia',
    
    // Home page
    heroTitle1: 'Tumtukuze Mungu kwa Upendo na Matendo',
    heroSubtitle1: 'Tukifurahia neema na rehema Yake, tushirikiane kuinua jina lake kwa matendo mema na upendo usio na mipaka.',
    heroTitle2: 'Tusome Neno la Mungu Pamoja',
    heroSubtitle2: 'Jiunge nasi kwa kuyachunguza Maandiko Matakatifu, tukikua katika imani na kuthamini upendo wa Bwana.',
    heroTitle3: 'Umoja kwa Mungu',
    heroSubtitle3: 'Pamoja tunashangilia uumbaji wake na urithi wetu, tukitambua nguvu ya umoja chini ya ulinzi na baraka za Mungu.',
    
    // Footer
    footerDescription: 'Tovuti hii imeundwa kukuimarisha katika imani, kukuunga mkono katika maombi, na kukupeleka karibu na Mungu. Tunaamini kwamba kila siku ni fursa mpya ya kusogea kwake Mungu.',
    quickLinks: 'Viungo vya Haraka',
    contactUs: 'Wasiliana Nasi',
    allRightsReserved: 'Haki zote zimehifadhiwa',
    
    // About page
    ourHistory: 'Historia Yetu',
    ourMission: 'Dhamira Yetu',
    ourVision: 'Maono Yetu',
    ourTeam: 'Timu Yetu',
    contact: 'Mawasiliano',
    
    // Bible Studies
    bibleStudiesTitle: 'Masomo ya Biblia',
    bibleStudiesDesc: 'Chagua somo unalotaka kujifunza kutoka Agano la Kale, Agano Jipya, au mafundisho ya kiroho.',
    searchLesson: 'Tafuta somo...',
    
    // Media Library
    mediaLibTitle: 'Maktaba Ya Media',
    mediaLibDesc: 'Chaguzi za Video, Audio, Picha na Nyaraka mbalimbali.',
    video: 'Video',
    audio: 'Audio',
    images: 'Picha',
    
    // Events
    eventsTitle: 'Matukio Maalum',
    eventsDesc: 'Angalia matukio yetu hapa chini – chukua taarifa sita tu kwa kila ukurasa.',
    
    // News
    newsTitle: 'Habari & Vipengele',
    newsDesc: 'Habari na vipengele vya mfano bila backend.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    news: 'News & Articles',
    studies: 'Bible Studies',
    media: 'Media Library',
    shop: 'Shop',
    events: 'Special Events',
    more: 'More',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    readMore: 'Read More',
    learnMore: 'Learn More',
    viewEvents: 'View Events',
    close: 'Close',
    search: 'Search',
    next: 'Next',
    previous: 'Previous',
    
    // Home page
    heroTitle1: 'Glorify God with Love and Actions',
    heroSubtitle1: 'Rejoicing in His grace and mercy, let us work together to lift up His name through good deeds and boundless love.',
    heroTitle2: 'Let Us Read God\'s Word Together',
    heroSubtitle2: 'Join us in exploring the Holy Scriptures, growing in faith and cherishing the Lord\'s love.',
    heroTitle3: 'Unity in God',
    heroSubtitle3: 'Together we celebrate His creation and our heritage, recognizing the power of unity under God\'s protection and blessings.',
    
    // Footer
    footerDescription: 'This website was created to strengthen you in faith, support you in prayer, and bring you closer to God. We believe that every day is a new opportunity to draw near to God.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    allRightsReserved: 'All rights reserved',
    
    // About page
    ourHistory: 'Our History',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourTeam: 'Our Team',
    contact: 'Contact',
    
    // Bible Studies
    bibleStudiesTitle: 'Bible Studies',
    bibleStudiesDesc: 'Choose a lesson you want to learn from the Old Testament, New Testament, or spiritual teachings.',
    searchLesson: 'Search lesson...',
    
    // Media Library
    mediaLibTitle: 'Media Library',
    mediaLibDesc: 'Collection of Videos, Audio, Images and various Documents.',
    video: 'Video',
    audio: 'Audio',
    images: 'Images',
    
    // Events
    eventsTitle: 'Special Events',
    eventsDesc: 'Check out our events below – showing six items per page.',
    
    // News
    newsTitle: 'News & Articles',
    newsDesc: 'Sample news and articles without backend.',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'sw';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'sw' ? 'en' : 'sw');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};