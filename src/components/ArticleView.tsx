import React, { useState, useEffect } from 'react';
import { 
  X, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  MessageSquare, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Type, 
  Gift, 
  Printer, 
  ThumbsUp, 
  Check, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { Article, CommentItem } from '../types/news';
import { ARTICLES_DATA } from '../data/mockNewsData';

interface ArticleViewProps {
  article: Article;
  onClose: () => void;
  onSelectArticle: (articleId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onClose,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  // Reading preferences
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [themeMode, setThemeMode] = useState<'paper' | 'clean' | 'sepia'>('clean');
  const [showShareToast, setShowShareToast] = useState(false);

  // Audio player state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(12);
  const [playbackSpeed, setPlaybackSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');

  // Comments state
  const [activeCommentTab, setActiveCommentTab] = useState<'all' | 'nyt' | 'readers'>('all');
  const [userComments, setUserComments] = useState<CommentItem[]>(article.comments || []);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');

  // Audio timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 600);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommentItem = {
      id: `c-user-${Date.now()}`,
      author: newCommentAuthor.trim() || 'Reader',
      location: 'New York, NY',
      timestamp: 'Just now',
      content: newCommentText.trim(),
      upvotes: 1,
    };

    setUserComments([newComment, ...userComments]);
    setNewCommentText('');
  };

  const handleUpvote = (id: string) => {
    setUserComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c))
    );
  };

  const filteredComments = userComments.filter((c) => {
    if (activeCommentTab === 'nyt') return c.isNytPick;
    if (activeCommentTab === 'readers') return c.isReaderPick;
    return true;
  });

  return (
    <div className={`min-h-screen ${themeMode === 'sepia' ? 'bg-[#F9F6F0]' : 'bg-white'} text-[#121212] font-sansMeta`}>
      {/* Toast Notification */}
      {showShareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded shadow-lg flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Article link copied to clipboard</span>
        </div>
      )}

      {/* Sticky Top Reader Action Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-nytBorder px-4 lg:px-8 py-2.5">
        <div className="max-w-[1040px] mx-auto flex items-center justify-between text-xs">
          {/* Left: Back & Section */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 font-bold hover:text-gray-600 transition"
              aria-label="Back to front page"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">The Front Page</span>
            </button>
            <span className="text-gray-300">|</span>
            <span className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">
              {article.category} {article.subcategory ? `› ${article.subcategory}` : ''}
            </span>
          </div>

          {/* Center: Small Masthead on scroll */}
          <div className="hidden md:block font-masthead text-lg tracking-normal">
            The New York Times
          </div>

          {/* Right: Reading tools */}
          <div className="flex items-center space-x-3 text-gray-700">
            {/* Font Size Button */}
            <div className="flex items-center gap-1 border border-gray-300 rounded px-1.5 py-0.5 text-[11px]">
              <Type className="w-3.5 h-3.5 text-gray-400" />
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1 font-bold ${fontSize === 'normal' ? 'text-black underline' : 'text-gray-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1 font-bold text-sm ${fontSize === 'large' ? 'text-black underline' : 'text-gray-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1 font-bold text-base ${fontSize === 'xlarge' ? 'text-black underline' : 'text-gray-400'}`}
              >
                A
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded hover:bg-gray-100 transition ${isBookmarked ? 'text-nytBlue' : 'text-gray-600'}`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Save article'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-nytBlue" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 hidden sm:block"
              title="Print view"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-gray-100 transition text-gray-700"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-[840px] mx-auto px-4 sm:px-6 py-8">
        {/* Category & Section tag */}
        <div className="mb-3 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-nytGrayText">
          {article.isLive && (
            <span className="bg-nytRed text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[1px]">
              {article.liveBadgeText || 'LIVE'}
            </span>
          )}
          <span>{article.category}</span>
          {article.subcategory && <span>· {article.subcategory}</span>}
        </div>

        {/* Headline */}
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-nytBlack mb-4">
          {article.title}
        </h1>

        {/* Standfirst / Deck */}
        <p className="font-body-serif text-lg sm:text-xl text-gray-700 leading-snug mb-6">
          {article.deck}
        </p>

        {/* Byline & Date Row */}
        <div className="border-t border-b border-nytBorder py-3 mb-6 flex flex-wrap items-center justify-between text-xs text-gray-600">
          <div>
            <span className="font-bold text-nytBlack">{article.byline}</span>
            <span className="block text-[11px] text-gray-500 mt-0.5">{article.date}</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <span className="uppercase text-[11px] tracking-wide text-gray-500">{article.readTime}</span>
            <a href="#comments" className="flex items-center gap-1 text-nytBlue hover:underline font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{userComments.length || article.commentsCount} Comments</span>
            </a>
          </div>
        </div>

        {/* Audio Listen Bar */}
        <div className="bg-[#F7F7F7] border border-nytBorder p-3 rounded mb-8 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3 flex-1 mr-4">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm"
              aria-label={isPlayingAudio ? 'Pause article audio' : 'Play article audio'}
            >
              {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-gray-800 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-gray-600" />
                  Listen to this article
                </span>
                <span className="text-[10px] text-gray-500">
                  {isPlayingAudio ? 'Playing...' : 'Audio Edition'}
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1.5 rounded overflow-hidden">
                <div
                  className="bg-nytBlue h-full transition-all duration-300"
                  style={{ width: `${audioProgress}%` }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const speeds: ('1x' | '1.25x' | '1.5x')[] = ['1x', '1.25x', '1.5x'];
                const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                setPlaybackSpeed(speeds[nextIdx]);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-[10px] font-bold text-gray-700 hover:border-black"
            >
              {playbackSpeed}
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        {article.imageUrl && (
          <figure className="mb-8">
            <div className="w-full overflow-hidden bg-gray-100 border border-nytBorder">
              <img
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                className="w-full h-auto object-cover max-h-[520px]"
              />
            </div>
            {(article.imageCaption || article.imageCredit) && (
              <figcaption className="mt-2 text-xs font-sansMeta text-gray-500 flex flex-col sm:flex-row sm:justify-between">
                <span>{article.imageCaption}</span>
                {article.imageCredit && (
                  <span className="text-gray-400 shrink-0 sm:ml-4">{article.imageCredit}</span>
                )}
              </figcaption>
            )}
          </figure>
        )}

        {/* Bullet points if Live Dispatches */}
        {article.bulletPoints && article.bulletPoints.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 border-y border-nytBorder">
            <span className="text-xs font-bold uppercase tracking-wider text-nytBlack block mb-2">
              Key Developments
            </span>
            <ul className="space-y-2 text-sm font-sansMeta text-gray-800 list-disc list-inside">
              {article.bulletPoints.map((pt, idx) => (
                <li key={idx} className="leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Text */}
        <article
          className={`font-body-serif space-y-5 text-gray-900 leading-[1.75] ${
            fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'
          }`}
        >
          {article.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? 'nyt-drop-cap' : ''}>
              {p}
            </p>
          ))}

          {/* Pull Quote */}
          {article.pullQuote && (
            <blockquote className="my-8 py-5 border-y-2 border-black text-center">
              <p className="font-headline italic text-2xl sm:text-3xl font-medium text-black max-w-xl mx-auto leading-snug">
                {article.pullQuote}
              </p>
            </blockquote>
          )}

          <p className="text-sm font-sansMeta text-gray-500 italic pt-4 border-t border-nytBorder">
            Reporting was contributed by The New York Times Washington and International Bureaus.
          </p>
        </article>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-4 border-t border-nytBorder">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
              Related Topics
            </span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-sansMeta bg-gray-100 hover:bg-gray-200 text-gray-800 px-2.5 py-1 rounded cursor-pointer transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles Strip */}
        <section className="mt-12 pt-6 border-t-2 border-black">
          <h3 className="font-sansMeta text-xs font-bold uppercase tracking-wider text-nytBlack mb-4">
            More in {article.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.values(ARTICLES_DATA)
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.id)}
                  className="cursor-pointer group space-y-1.5"
                >
                  <span className="text-[10px] font-sansMeta uppercase text-gray-500 font-semibold block">
                    {rel.category}
                  </span>
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:text-nytGrayText transition">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{rel.deck}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Comments Section */}
        <section id="comments" className="mt-12 pt-8 border-t-2 border-black">
          <div className="flex items-center justify-between pb-3 border-b border-nytBorder mb-6">
            <div className="flex items-center space-x-2">
              <h3 className="font-headline text-2xl font-bold text-nytBlack">Comments</h3>
              <span className="text-sm font-sansMeta text-gray-500">
                ({userComments.length || article.commentsCount})
              </span>
            </div>
            {/* Filter Tabs */}
            <div className="flex items-center space-x-2 text-xs font-semibold">
              <button
                onClick={() => setActiveCommentTab('all')}
                className={`px-2.5 py-1 rounded ${
                  activeCommentTab === 'all' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveCommentTab('nyt')}
                className={`px-2.5 py-1 rounded ${
                  activeCommentTab === 'nyt' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                NYT Picks
              </button>
              <button
                onClick={() => setActiveCommentTab('readers')}
                className={`px-2.5 py-1 rounded ${
                  activeCommentTab === 'readers' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Reader Picks
              </button>
            </div>
          </div>

          {/* New Comment Form */}
          <form onSubmit={handleAddComment} className="bg-gray-50 border border-nytBorder p-4 rounded mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-nytBlack mb-2">
              Share Your Thoughts
            </h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your name or handle (e.g., M. Peterson)"
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
                className="w-full text-xs p-2 border border-gray-300 rounded focus:border-black focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="What do you think about this reporting? Keep comments civil and respectful."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="w-full text-xs p-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded transition"
                >
                  Submit Comment
                </button>
              </div>
            </div>
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {filteredComments.length === 0 ? (
              <p className="text-xs text-gray-500 py-4 text-center">
                No comments found in this view.
              </p>
            ) : (
              filteredComments.map((comment) => (
                <div key={comment.id} className="p-4 border border-nytBorder rounded bg-white space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-nytBlack">{comment.author}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-500">{comment.location}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-400 text-[11px]">{comment.timestamp}</span>
                    </div>
                    {comment.isNytPick && (
                      <span className="bg-nytBlue/10 text-nytBlue text-[10px] font-bold px-2 py-0.5 rounded">
                        NYT Pick
                      </span>
                    )}
                    {comment.isReaderPick && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                        Reader Pick
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-800 leading-relaxed font-body-serif">
                    {comment.content}
                  </p>
                  <div className="flex items-center space-x-3 pt-1">
                    <button
                      onClick={() => handleUpvote(comment.id)}
                      className="flex items-center gap-1 text-[11px] text-gray-500 hover:text-black transition"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{comment.upvotes}</span>
                    </button>
                    <button className="text-[11px] text-gray-400 hover:text-gray-700">Reply</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
