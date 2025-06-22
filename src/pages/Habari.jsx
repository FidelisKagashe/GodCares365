import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight, HiShare } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { formatDistanceToNow, parseISO, isValid } from 'date-fns';
import { enUS } from 'date-fns/locale';

// Sample data for frontend-only demo
const sampleFeatured = {
  title: 'Habari Kuu: Mfano wa Habari',
  summary: 'Hii ni taarifa ya mfano ili kuonekana kwenye UI bila data halisi.',
  imageUrl: '/images/sample-featured.jpg',
  link: '/news/sample-habari-kuu',
  timestamp: new Date().toISOString(),
  category: 'Kimataifa',
};
const sampleSide = [
  { title: 'Habari Ndogo 1: Mfano', link: '/news/sample-ndogo-1', timestamp: new Date().toISOString() },
  { title: 'Habari Ndogo 2: Mfano', link: '/news/sample-ndogo-2', timestamp: new Date().toISOString() },
  { title: 'Habari Ndogo 3: Mfano', link: '/news/sample-ndogo-3', timestamp: new Date().toISOString() },
];

// Utility: estimate read time from summary
function estimateReadTime(text = '') {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

const FeaturedArticle = React.memo(function FeaturedArticle({ article, fallbackImage, categoryLinkBase, locale, onArticleClick, enableShare, baseUrl }) {
  const { title, summary, imageUrl, link, timestamp, category } = article;

  const formatTimestamp = (ts) => {
    if (!ts) return '';
    let date;
    try {
      date = parseISO(ts);
    } catch {
      return ts;
    }
    if (date && isValid(date)) {
      return formatDistanceToNow(date, { addSuffix: true, locale });
    }
    return ts;
  };

  const categoryUrl = category ? `${categoryLinkBase}/${category.toLowerCase()}` : '#';
  const readTime = estimateReadTime(summary);
  const fullLink = baseUrl && link.startsWith('/') ? `${baseUrl.replace(/\/$/, '')}${link}` : link;

  return (
    <article className="flex-1 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative">
        <img
          src={imageUrl || fallbackImage}
          alt={title || 'Featured image'}
          className="w-full h-64 object-cover"
          loading="lazy"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        {category && (
          <Link
            to={categoryUrl}
            className="absolute top-4 left-4 bg-red-600 text-white text-xs uppercase px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            {category}
          </Link>
        )}
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <Link
            to={link}
            onClick={() => onArticleClick && onArticleClick(article)}
            className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-green-600 transition-colors">
              {title}
            </h2>
          </Link>
          {summary && <p className="text-gray-600 dark:text-gray-300 mt-4">{summary}</p>}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0">
          <span title={timestamp ? new Date(timestamp).toLocaleString() : undefined}>
            {formatTimestamp(timestamp)}
          </span>
          {summary && <span className="text-gray-500 dark:text-gray-400">~{readTime} min kusoma</span>}
          <div className="flex items-center space-x-4">
            <Link
              to={link}
              className="flex items-center text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              onClick={() => onArticleClick && onArticleClick(article)}
            >
              <span>Soma zaidi</span>
              <HiArrowNarrowRight className="ml-1" aria-hidden="true" />
            </Link>
            {enableShare && fullLink && (
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullLink)}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              >
                <HiShare className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});
FeaturedArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    imageUrl: PropTypes.string,
    link: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  fallbackImage: PropTypes.string.isRequired,
  categoryLinkBase: PropTypes.string.isRequired,
  locale: PropTypes.object,
  onArticleClick: PropTypes.func,
  enableShare: PropTypes.bool,
  baseUrl: PropTypes.string,
};
FeaturedArticle.defaultProps = {
  locale: enUS,
  onArticleClick: null,
  enableShare: false,
  baseUrl: '',
};

const SideArticleItem = React.memo(function SideArticleItem({ item, locale, onArticleClick }) {
  const { title, link, timestamp } = item;
  const formatTimestamp = (ts) => {
    if (!ts) return '';
    let date;
    try {
      date = parseISO(ts);
    } catch {
      return ts;
    }
    if (date && isValid(date)) {
      return formatDistanceToNow(date, { addSuffix: true, locale });
    }
    return ts;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
      <Link
        to={link}
        aria-label={title}
        onClick={() => onArticleClick && onArticleClick(item)}
        className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-green-600 transition-colors">
          {title}
        </h3>
      </Link>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
        <span title={timestamp ? new Date(timestamp).toLocaleString() : undefined}>
          {formatTimestamp(timestamp)}
        </span>
        <Link
          to={link}
          className="text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          aria-label="Soma makala"
          onClick={() => onArticleClick && onArticleClick(item)}
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
});
SideArticleItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
  }).isRequired,
  locale: PropTypes.object,
  onArticleClick: PropTypes.func,
};
SideArticleItem.defaultProps = {
  locale: enUS,
  onArticleClick: null,
};

function SideArticleList({ list, category, categoryLinkBase, locale, onArticleClick, maxItems }) {
  if (!list || list.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">Hakuna makala za upande.</p>;
  }
  const itemsToShow = maxItems ? list.slice(0, maxItems) : list;
  return (
    <>
      <ul className="space-y-4">
        {itemsToShow.map((item, idx) => (
          <li key={item.link || idx}>
            <SideArticleItem item={item} locale={locale} onArticleClick={onArticleClick} />
          </li>
        ))}
      </ul>
      {category && (
        <div className="mt-6 text-right">
          <Link
            to={`${categoryLinkBase}/${category.toLowerCase()}`}
            className="text-green-600 hover:underline font-semibold flex items-center justify-end focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          >
            <span>ALL {category.toUpperCase()}</span>
            <HiArrowNarrowRight className="ml-1" aria-hidden="true" />
          </Link>
        </div>
      )}
    </>
  );
}
SideArticleList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      timestamp: PropTypes.string,
    })
  ),
  category: PropTypes.string,
  categoryLinkBase: PropTypes.string.isRequired,
  locale: PropTypes.object,
  onArticleClick: PropTypes.func,
  maxItems: PropTypes.number,
};
SideArticleList.defaultProps = {
  locale: enUS,
  onArticleClick: null,
  maxItems: null,
};

function FeaturedSkeleton() {
  return (
    <div className="animate-pulse flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-4">
        <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-xl" />
        <div className="space-y-2">
          <div className="bg-gray-200 dark:bg-gray-700 h-6 w-3/4 rounded" />
          <div className="bg-gray-200 dark:bg-gray-700 h-4 w-full rounded" />
          <div className="bg-gray-200 dark:bg-gray-700 h-4 w-5/6 rounded" />
        </div>
      </div>
      <aside className="w-full lg:w-1/3 flex-shrink-0 space-y-4">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="bg-gray-200 dark:bg-gray-700 h-24 rounded-xl" />
        ))}
      </aside>
    </div>
  );
}

export default function FeaturedNewsSection({
  headerTitle = 'Habari & Vipengele',
  initialFeatured,
  initialSide,
  categoryLinkBase,
  fallbackImage,
  locale,
  onArticleClick,
  enableShare,
  baseUrl,
  sideMaxItems,
}) {
  const feat = initialFeatured || sampleFeatured;
  const sideList = (initialSide && initialSide.length) ? initialSide : sampleSide;

  return (
    <section
      id="featured-news-section"
      aria-labelledby="featured-section-heading"
      className="container mx-auto px-6 py-12"
    >
      <header className="mb-8 text-center">
        <h1
          id="featured-section-heading"
          className="text-4xl sm:text-5xl font-extrabold text-green-800 dark:text-green-800"
        >
          {headerTitle}
        </h1>
        <p className="mt-2 text-black dark:text-black">
          Habari na vipengele vya mfano bila backend.
        </p>
      </header>

      {feat ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <FeaturedArticle
            article={feat}
            fallbackImage={fallbackImage}
            categoryLinkBase={categoryLinkBase}
            locale={locale}
            onArticleClick={onArticleClick}
            enableShare={enableShare}
            baseUrl={baseUrl}
          />
          <aside className="w-full lg:w-1/3 flex-shrink-0">
            <SideArticleList
              list={sideList}
              category={feat.category}
              categoryLinkBase={categoryLinkBase}
              locale={locale}
              onArticleClick={onArticleClick}
              maxItems={sideMaxItems}
            />
          </aside>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Hakuna habari zilizopatikana.
        </p>
      )}
    </section>
  );
}

FeaturedNewsSection.propTypes = {
  headerTitle: PropTypes.string,
  initialFeatured: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    imageUrl: PropTypes.string,
    link: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
    category: PropTypes.string,
  }),
  initialSide: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      timestamp: PropTypes.string,
    })
  ),
  categoryLinkBase: PropTypes.string,
  fallbackImage: PropTypes.string,
  locale: PropTypes.object,
  onArticleClick: PropTypes.func,
  enableShare: PropTypes.bool,
  baseUrl: PropTypes.string,
  sideMaxItems: PropTypes.number,
};
FeaturedNewsSection.defaultProps = {
  initialFeatured: null,
  initialSide: [],
  categoryLinkBase: '/category',
  fallbackImage: '/images/fallback.jpg',
  locale: enUS,
  onArticleClick: null,
  enableShare: false,
  baseUrl: '',
  sideMaxItems: 3,
};

// Example usage in a page:
// import FeaturedNewsSection from './FeaturedNewsSection';
// function DemoPage() {
//   return <FeaturedNewsSection />;
// }
