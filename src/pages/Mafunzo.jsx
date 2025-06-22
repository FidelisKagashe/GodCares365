import { useReducer, useEffect, useState, useMemo } from "react";
import {
  HiBookOpen,
  HiOutlineClipboardList,
  HiOutlineBookOpen,
  HiOutlinePresentationChartBar,
  HiPlay,
  HiOutlineEye,
  HiDownload,
  HiThumbUp,
  HiThumbDown,
  HiChatAlt
} from "react-icons/hi";

// **URL ya Msingi ya API**
const API_BASE_URL = 'https://godcares365.pythonanywhere.com';

// **Vigezo vya Vitendo vya Reducer**
const ACTIONS = {
  INIT_TOPICS: 'init_topics',
  LIKE: 'like',
  DISLIKE: 'dislike',
  TOGGLE_COMMENT_BOX: 'toggle_comment_box',
  ADD_COMMENT: 'add_comment',
  SET_COMMENTS: 'set_comments',
  NEXT_PAGE: 'next_page',
  PREV_PAGE: 'prev_page',
  INPUT_CHANGE: 'input_change',
  SET_COUNTS: 'set_counts'
};

// **Reducer kwa Usimamizi wa Hali**
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INIT_TOPICS: {
      const { topics } = action.payload;
      const counts = {}, showCommentBox = {}, comments = {}, inputValues = {}, commentPage = {};
      topics.forEach(topic => {
        counts[topic.id] = { likes: topic.likes_count || 0, dislikes: topic.dislikes_count || 0 };
        showCommentBox[topic.id] = false;
        comments[topic.id] = [];
        inputValues[topic.id] = '';
        commentPage[topic.id] = 0;
      });
      return { counts, showCommentBox, comments, inputValues, commentPage };
    }
    case ACTIONS.LIKE: {
      const { id } = action.payload;
      return {
        ...state,
        counts: {
          ...state.counts,
          [id]: { ...state.counts[id], likes: state.counts[id].likes + 1 }
        }
      };
    }
    case ACTIONS.DISLIKE: {
      const { id } = action.payload;
      return {
        ...state,
        counts: {
          ...state.counts,
          [id]: { ...state.counts[id], dislikes: state.counts[id].dislikes + 1 }
        }
      };
    }
    case ACTIONS.TOGGLE_COMMENT_BOX: {
      const { id } = action.payload;
      return {
        ...state,
        showCommentBox: {
          ...state.showCommentBox,
          [id]: !state.showCommentBox[id]
        }
      };
    }
    case ACTIONS.SET_COMMENTS: {
      const { id, comments: newComments } = action.payload;
      return {
        ...state,
        comments: { ...state.comments, [id]: newComments },
        commentPage: { ...state.commentPage, [id]: 0 }
      };
    }
    case ACTIONS.ADD_COMMENT: {
      const { id, text } = action.payload;
      if (!text.trim()) return state;
      const updated = [text.trim(), ...state.comments[id]];
      return {
        ...state,
        comments: { ...state.comments, [id]: updated },
        inputValues: { ...state.inputValues, [id]: '' },
        showCommentBox: { ...state.showCommentBox, [id]: false }
      };
    }
    case ACTIONS.NEXT_PAGE: {
      const { id, perPage } = action.payload;
      const maxPage = Math.floor((state.comments[id].length - 1) / perPage);
      const next = Math.min(state.commentPage[id] + 1, maxPage);
      return { ...state, commentPage: { ...state.commentPage, [id]: next } };
    }
    case ACTIONS.PREV_PAGE: {
      const { id } = action.payload;
      const prev = Math.max(state.commentPage[id] - 1, 0);
      return { ...state, commentPage: { ...state.commentPage, [id]: prev } };
    }
    case ACTIONS.INPUT_CHANGE: {
      const { id, text } = action.payload;
      return {
        ...state,
        inputValues: { ...state.inputValues, [id]: text }
      };
    }
    case ACTIONS.SET_COUNTS: {
      const { id, likes, dislikes } = action.payload;
      return {
        ...state,
        counts: {
          ...state.counts,
          [id]: { likes, dislikes }
        }
      };
    }
    default:
      return state;
  }
}

// **Komponenti ya TopicCard**
function TopicCard({ topic, state, dispatch, onSelectContent }) {
  const { id, title, description, pdf_url, video_url, embed_url, text_url } = topic;
  const { counts, showCommentBox, comments, inputValues, commentPage } = state;
  const perPage = 50;
  const page = commentPage[id] || 0;
  const start = page * perPage;
  const pagedComments = comments[id]?.slice(start, start + perPage) || [];
  const maxPage = Math.floor((comments[id]?.length - 1) / perPage) || 0;

  const handleDownload = () => window.open(pdf_url, '_blank');
  const handlePlayVideo = () => onSelectContent({ type: 'video', topic });
  const handleReadText = () => onSelectContent({ type: 'text', topic });

  return (
    <article key={id} className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      <div className="flex items-center justify-center bg-yellow-100 h-32">
        {embed_url ? (
          <iframe
            src={embed_url}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <HiOutlineBookOpen size={48} className="text-yellow-500" aria-hidden="true" />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate" title={title}>{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center space-x-4 mb-4">
          {(embed_url || video_url) && (
            <button onClick={handlePlayVideo} className="p-2 rounded-full hover:bg-gray-100" aria-label="Cheza Video">
              <HiPlay size={20} className="text-gray-600" />
            </button>
          )}
          {text_url && (
            <button onClick={handleReadText} className="p-2 rounded-full hover:bg-gray-100" aria-label="Soma Maandishi">
              <HiOutlineEye size={20} className="text-gray-600" />
            </button>
          )}
          {pdf_url && (
            <button onClick={handleDownload} className="p-2 rounded-full hover:bg-gray-100" aria-label="Pakua PDF">
              <HiDownload size={20} className="text-gray-600" />
            </button>
          )}
          <button onClick={() => {
            fetch(`${API_BASE_URL}/biblestudies/${id}/like/`, { method: 'POST' })
              .then(res => res.json())
              .then(data => dispatch({ type: ACTIONS.SET_COUNTS, payload: { id, likes: data.likes, dislikes: state.counts[id].dislikes } }))
              .catch(() => {});
          }} className="flex items-center p-2 rounded-full hover:bg-gray-100" aria-label="Penda">
            <HiThumbUp size={20} className="text-gray-600" />
            <span className="ml-1 bg-gray-200 text-gray-800 rounded-full px-2 text-sm">{counts[id]?.likes || 0}</span>
          </button>
          <button onClick={() => {
            fetch(`${API_BASE_URL}/biblestudies/${id}/dislike/`, { method: 'POST' })
              .then(res => res.json())
              .then(data => dispatch({ type: ACTIONS.SET_COUNTS, payload: { id, likes: state.counts[id].likes, dislikes: data.dislikes } }))
              .catch(() => {});
          }} className="flex items-center p-2 rounded-full hover:bg-gray-100" aria-label="Sitopende">
            <HiThumbDown size={20} className="text-gray-600" />
            <span className="ml-1 bg-gray-200 text-gray-800 rounded-full px-2 text-sm">{counts[id]?.dislikes || 0}</span>
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_COMMENT_BOX, payload: { id } })} className="p-2 rounded-full hover:bg-gray-100" aria-label="Toa Maoni">
            <HiChatAlt size={20} className="text-gray-600" />
          </button>
        </div>

        {showCommentBox[id] && (
          <div className="mb-4">
            <textarea
              value={inputValues[id]}
              onChange={e => dispatch({ type: ACTIONS.INPUT_CHANGE, payload: { id, text: e.target.value } })}
              className="w-full border border-gray-300 rounded-lg p-2 mb-2"
              placeholder="Andika maoni yako..."
            />
            <button
              onClick={() => {
                const text = inputValues[id].trim();
                if (text) {
                  fetch(`${API_BASE_URL}/biblestudies/${id}/comments/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text })
                  })
                    .then(res => res.json())
                    .then(() => {
                      fetch(`${API_BASE_URL}/biblestudies/${id}/comments/`)
                        .then(res => res.json())
                        .then(cdata => dispatch({ type: ACTIONS.SET_COMMENTS, payload: { id, comments: cdata.comments } }))
                        .catch(() => {});
                    })
                    .catch(() => {});
                  dispatch({ type: ACTIONS.ADD_COMMENT, payload: { id, text } });
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={!inputValues[id]?.trim()}
            >
              Tuma Maoni
            </button>
          </div>
        )}

        {comments[id]?.length > 0 && (
          <div className="mt-auto">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Maoni ({comments[id].length}):</h3>
            <ul className="list-disc list-inside space-y-1 h-48 overflow-y-auto">
              {pagedComments.map((cmt, idx) => (
                <li key={idx} className="text-gray-600">{cmt}</li>
              ))}
            </ul>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => dispatch({ type: ACTIONS.PREV_PAGE, payload: { id } })}
                disabled={page === 0}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Zamsha Zaidi
              </button>
              <button
                onClick={() => dispatch({ type: ACTIONS.NEXT_PAGE, payload: { id, perPage } })}
                disabled={page >= maxPage}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Maoni ya Zamani
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

// **Komponenti ya BibleStudies**
export default function BibleStudies() {
  const [state, dispatchBase] = useReducer(reducer, {}, state => state);
  const [studyTopics, setStudyTopics] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [contentData, setContentData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [topicPage, setTopicPage] = useState(0);
  const perPageTopics = 6;

  // **Pakia Masomo ya Biblia**
  useEffect(() => {
    fetch(`${API_BASE_URL}/biblestudies/`)
      .then(res => res.json())
      .then(data => {
        setStudyTopics(data);
        dispatchBase({ type: ACTIONS.INIT_TOPICS, payload: { topics: data } });
        data.forEach(topic => {
          fetch(`${API_BASE_URL}/biblestudies/${topic.id}/comments/`)
            .then(res => res.json())
            .then(cdata => {
              dispatchBase({
                type: ACTIONS.SET_COMMENTS,
                payload: { id: topic.id, comments: cdata.comments || [] }
              });
            })
            .catch(() => {});
        });
      })
      .catch(() => {});
  }, []);

  // **Pakia Maudhui Yanayochaguliwa**
  useEffect(() => {
    if (!selectedContent) return;
    const { topic, type } = selectedContent;
    if (type === 'video') {
      setContentData({ type: 'video', data: null });
      return;
    }
    fetch(`${API_BASE_URL}/biblestudies/${topic.id}/text/`)
      .then(res => res.json())
      .then(data => setContentData({ type, data }))
      .catch(() => setContentData(null));
  }, [selectedContent]);

  const handleSelectContent = ({ type, topic }) => {
    setSelectedContent({ type, topic });
    setContentData(null);
  };

  const prevTopicPage = () => setTopicPage(prev => Math.max(prev - 1, 0));
  const nextTopicPage = () => setTopicPage(prev => Math.min(prev + 1, totalPages - 1));

  const filteredTopics = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return studyTopics.filter(topic =>
      topic.title.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q)
    );
  }, [searchQuery, studyTopics]);

  const totalPages = Math.ceil(filteredTopics.length / perPageTopics);
  const topicsToShow = filteredTopics.slice(topicPage * perPageTopics, topicPage * perPageTopics + perPageTopics);

  useEffect(() => {
    setTopicPage(0);
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Masomo ya Biblia</h1>
          <p className="text-gray-600 mt-2">Chagua somo unalotaka kujifunza kutoka Agano la Kale, Agano Jipya, au mafundisho ya kiroho.</p>
        </header>

        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tafuta somo..."
            className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
            aria-label="Tafuta somo"
          />
        </div>

        {selectedContent && (
          <section className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow p-6 w-3/4 h-3/4 overflow-y-auto">
              {selectedContent.type === 'video' ? (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Video: {selectedContent.topic.title}</h2>
                  {selectedContent.topic.embed_url ? (
                    <iframe
                      src={selectedContent.topic.embed_url}
                      title={selectedContent.topic.title}
                      className="w-full h-96"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video controls className="w-full h-96">
                      <source src={selectedContent.topic.video_url} type="video/mp4" />
                      Browser haiungi mkono video tag.
                    </video>
                  )}
                </div>
              ) : (
                contentData && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Soma: {selectedContent.topic.title}</h2>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentData.data.htmlContent }} />
                  </div>
                )
              )}
              <button
                onClick={() => setSelectedContent(null)}
                className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Funga
              </button>
            </div>
          </section>
        )}

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topicsToShow.map(topic => (
              <TopicCard key={topic.id} topic={topic} state={state} dispatch={dispatchBase} onSelectContent={handleSelectContent} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={prevTopicPage}
                disabled={topicPage === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Kurasa Zaidi
              </button>
              <span className="text-gray-700">
                Ukurasa {topicPage + 1} kati ya {totalPages}
              </span>
              <button
                onClick={nextTopicPage}
                disabled={topicPage >= totalPages - 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Kurasa Zilizopita
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}