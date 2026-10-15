import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  ChevronRight, 
  Filter, 
  RotateCcw,
  Sparkles,
  ExternalLink,
  Flame,
  Search
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleView } from './components/ArticleView';
import { GamesModal } from './components/GamesModal';
import { CookingModal } from './components/CookingModal';
import { WirecutterModal } from './components/WirecutterModal';
import { AthleticModal } from './components/AthleticModal';
import { TipModal } from './components/TipModal';
import { SubscribeModal } from './components/SubscribeModal';
import { TodaysPaperModal } from './components/TodaysPaperModal';
import { SavedArticlesDrawer } from './components/SavedArticlesDrawer';
import { PollTracker } from './components/PollTracker';

import { ARTICLES_DATA } from './data/mockNewsData';
import { Article, SectionTab, GameKey } from './types/news';

export default function App() {
  // Navigation & view states
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<SectionTab>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [selectedGame, setSelectedGame] = useState<GameKey | null>(null);
  const [isCookingOpen, setIsCookingOpen] = useState(false);
  const [isWirecutterOpen, setIsWirecutterOpen] = useState(false);
  const [isAthleticOpen, setIsAthleticOpen] = useState(false);
  const [isTipOpen, setIsTipOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isTodaysPaperOpen, setIsTodaysPaperOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Bookmarks persistence
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nyt_saved_articles');
      return saved ? JSON.parse(saved) : ['press-secretary-law-credentials', 'ai-agents-dinner-party'];
    } catch {
      return ['press-secretary-law-credentials', 'ai-agents-dinner-party'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nyt_saved_articles', JSON.stringify(savedArticleIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedArticleIds]);

  const toggleBookmark = (id: string) => {
    setSavedArticleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeBookmark = (id: string) => {
    setSavedArticleIds((prev) => prev.filter((item) => item !== id));
  };

  const allArticlesList = Object.values(ARTICLES_DATA);
  const savedArticlesList = allArticlesList.filter((a) => savedArticleIds.includes(a.id));

  // Current selected article object
  const activeArticle = selectedArticleId ? ARTICLES_DATA[selectedArticleId] : null;

  // Filtered stories if searching
  const searchedArticles = searchQuery.trim()
    ? allArticlesList.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.deck.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.byline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (a.tags && a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : null;

  // Section handling
  const handleSelectSection = (sec: SectionTab) => {
    setCurrentSection(sec);
    if (sec === 'Games') {
      setSelectedGame('wordle');
    } else if (sec === 'Cooking') {
      setIsCookingOpen(true);
    } else if (sec === 'Wirecutter') {
      setIsWirecutterOpen(true);
    } else if (sec === 'The Athletic') {
      setIsAthleticOpen(true);
    } else {
      // Scroll to content
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  // If viewing an article, render full ArticleView
  if (activeArticle) {
    return (
      <ArticleView
        article={activeArticle}
        onClose={() => {
          setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onSelectArticle={(id) => {
          setSelectedArticleId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isBookmarked={savedArticleIds.includes(activeArticle.id)}
        onToggleBookmark={toggleBookmark}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sansMeta selection:bg-slate-200">
      {/* Site Header */}
      <Header
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenTodaysPaper={() => setIsTodaysPaperOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedArticleIds.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectArticle={(id) => setSelectedArticleId(id)}
      />

      {/* SEARCH RESULTS VIEW */}
      {searchedArticles !== null ? (
        <main className="max-w-[1280px] mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black mb-6">
            <div>
              <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                Search Results
              </span>
              <h2 className="font-headline text-2xl font-bold text-nytBlack">
                Articles matching “{searchQuery}”
              </h2>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-nytBlue hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Search
            </button>
          </div>

          {searchedArticles.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <Search className="w-10 h-10 mx-auto text-gray-300 mb-2" />
              <p className="text-base font-bold text-gray-800">No articles found</p>
              <p className="text-xs mt-1">Try searching for keywords like "Trump", "Ukraine", "Elections", or "AI".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {searchedArticles.map((art) => (
                <article
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className="cursor-pointer group space-y-2 border-b border-nytBorder pb-6"
                >
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                    {art.category} · {art.readTime}
                  </span>
                  <h3 className="font-headline text-xl font-bold group-hover:text-nytGrayText leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3">{art.deck}</p>
                  <span className="text-[11px] font-bold text-gray-800 block pt-1">{art.byline}</span>
                </article>
              ))}
            </div>
          )}
        </main>
      ) : (
        /* STANDARD BROADSHEET HOMEPAGE */
        <main className="max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Section Filter Indicator if filtered */}
          {currentSection !== 'All' && (
            <div className="bg-gray-100 p-2.5 mb-4 flex items-center justify-between text-xs">
              <span>
                Filtering front page by: <strong className="uppercase">{currentSection}</strong>
              </span>
              <button
                onClick={() => setCurrentSection('All')}
                className="text-xs font-semibold text-nytBlue hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Show All Sections
              </button>
            </div>
          )}

          {/* TOP HEADLINE SECTION: 3-COLUMN BROADSIDE LAYOUT */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-nytBorder">
            {/* LEFT COLUMN: Primary Breaking Headlines (3 cols) */}
            <article className="md:col-span-3 pr-0 md:pr-4 md:border-r border-nytBorder flex flex-col justify-between">
              <div className="space-y-4">
                {/* Story 1 */}
                <div
                  onClick={() => setSelectedArticleId('women-leaving-trump-admin')}
                  className="group cursor-pointer"
                >
                  <h2 className="font-headline text-2xl font-bold group-hover:text-[#5A5A5A] text-[#121212] leading-tight">
                    High-Ranking Women Are Leaving the Trump Administration
                  </h2>
                  <p className="font-body-serif text-xs text-gray-700 mt-2 leading-relaxed">
                    In the president’s second term, those heading for the exits are female officials.
                  </p>
                  <div className="mt-2 text-[10px] font-semibold text-[#5A5A5A] tracking-wide uppercase">
                    5 min read
                  </div>
                </div>

                <hr className="border-nytBorder my-4" />

                {/* Story 2 */}
                <div
                  onClick={() => setSelectedArticleId('kimberly-guilfoyle-fall')}
                  className="group cursor-pointer"
                >
                  <h3 className="font-headline text-xl font-bold group-hover:text-[#5A5A5A] text-[#121212] leading-snug">
                    The Steep Rise and Sudden Fall of Kimberly Guilfoyle
                  </h3>
                  <p className="font-body-serif text-xs text-gray-700 mt-1.5 leading-relaxed">
                    Behind the sudden ambassadorship withdrawal in Athens and shifting loyalties inside Mar-a-Lago.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase">4 min read</span>
                    <span className="text-[11px] text-gray-500 flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1 inline" />
                      519
                    </span>
                  </div>
                </div>

                <hr className="border-nytBorder my-4" />

                {/* Story 3 */}
                <div
                  onClick={() => setSelectedArticleId('democratic-donor-blitz')}
                  className="group cursor-pointer"
                >
                  <h3 className="font-headline text-lg font-bold group-hover:text-[#5A5A5A] text-[#121212] leading-snug">
                    Democratic Donor Emerges to Blitz Red-State Senate Races With Late Ads
                  </h3>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">2 min read</span>
                </div>
              </div>

              {/* Photojournalist credit */}
              <div className="pt-4 mt-4 border-t border-nytBorder text-[10px] text-gray-400">
                <span>Tierney L. Cross / The New York Times</span>
              </div>
            </article>

            {/* CENTER FEATURE: Big Visual + Anchor Article (6 cols) */}
            <article className="md:col-span-6 px-0 md:px-2 md:border-r border-nytBorder">
              <div
                onClick={() => setSelectedArticleId('press-secretary-law-credentials')}
                className="group cursor-pointer"
              >
                {/* Main Hero Image */}
                <div className="w-full overflow-hidden bg-gray-100 mb-3 border border-gray-200">
                  <img
                    alt="White House press briefing room with press secretary speaking at the podium"
                    className="w-full h-auto object-cover max-h-[380px] object-top group-hover:scale-[1.01] transition duration-300"
                    src="/src/assets/images/hero_white_house_press_1792029113303.jpg"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#5A5A5A] mb-2 font-medium">
                  <span>Kenny Holston / The New York Times</span>
                  <span className="text-right">White House Press Briefing Room</span>
                </div>

                {/* Center Headline */}
                <h2 className="font-headline text-2xl sm:text-3xl font-bold leading-tight group-hover:text-[#5A5A5A] text-black">
                  Trump’s New Press Secretary: Not-Quite Attorney at Law
                </h2>
                <p className="font-body-serif mt-2.5 text-sm sm:text-base leading-relaxed text-gray-800">
                  Katie Zacharia told The New York Times that the confusion over her legal credentials is the result of one big misunderstanding. Court filings and bar associations paint a far more complicated picture of her career.
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-[11px] font-bold text-[#121212]">By Eric Lee and Haiyun Jiang</span>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase">4 min read</span>
                </div>
              </div>

              {/* Sub-features below central image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-nytBorder">
                <div
                  onClick={() => setSelectedArticleId('fact-check-senate-debates')}
                  className="cursor-pointer group"
                >
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:underline">
                    Fact-Checking Senate Debates in Georgia, Maine and Michigan
                  </h4>
                  <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                    Claims regarding the economic index and social security claims evaluated by Times reporters.
                  </p>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">4 min read</span>
                </div>

                <div
                  onClick={() => setSelectedArticleId('intel-to-ukraine')}
                  className="cursor-pointer group"
                >
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:underline">
                    The U.S. Continues to Provide Intelligence to Ukraine, Officials Say
                  </h4>
                  <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                    Pentagon officials maintain high-speed reconnaissance lines despite satellite cutoffs.
                  </p>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">3 min read</span>
                </div>
              </div>
            </article>

            {/* RIGHT COLUMN: Opinion, Analysis & Editorial Picks (3 cols) */}
            <aside className="md:col-span-3 pl-0 md:pl-2 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Section Tag */}
                <div className="border-b border-black pb-1 mb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">Opinion</h3>
                </div>

                {/* Columnist 1 */}
                <div
                  onClick={() => setSelectedArticleId('opinion-wallace-wells')}
                  className="group cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-[#121212] block">David Wallace-Wells</span>
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:text-[#5A5A5A]">
                    Democrats Shouldn’t Wait Two More Years
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase">Guest Essay</span>
                    <span className="text-[10px] text-gray-500">💬 390</span>
                  </div>
                </div>

                <hr className="border-nytBorder" />

                {/* Columnist 2 */}
                <div
                  onClick={() => setSelectedArticleId('opinion-heather-kerr')}
                  className="group cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-[#121212] block">Heather Kerr</span>
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:text-[#5A5A5A]">
                    I’ve Never Seen Ebola Spread Like This
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase">Special Dispatch</span>
                  </div>
                </div>

                <hr className="border-nytBorder" />

                {/* Columnist 3 */}
                <div
                  onClick={() => setSelectedArticleId('opinion-carlos-lozada')}
                  className="group cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-[#121212] block">Carlos Lozada</span>
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:text-[#5A5A5A]">
                    A Manifesto to End All Manifestoes
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase">Book Review</span>
                    <span className="text-[10px] text-gray-500">💬 69</span>
                  </div>
                </div>

                <hr className="border-nytBorder" />

                {/* Columnist 4 */}
                <div
                  onClick={() => setSelectedArticleId('opinion-jayson-greene')}
                  className="group cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-[#121212] block">Jayson Greene</span>
                  <h4 className="font-headline text-base font-bold leading-snug group-hover:text-[#5A5A5A]">
                    Tom Cruise’s Big Flop Is a Secret Masterpiece
                  </h4>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">5 min read</span>
                </div>

                {/* Mini Subscription / Tip Box */}
                <div className="bg-[#F7F7F7] p-3 border border-nytBorder mt-4">
                  <p className="text-xs font-bold text-[#121212] mb-1">Got a Tip?</p>
                  <p className="font-body-serif text-xs text-gray-600">The Times offers secure ways to send confidential information.</p>
                  <button
                    onClick={() => setIsTipOpen(true)}
                    className="text-[11px] font-semibold text-[#326891] hover:underline mt-2 inline-block cursor-pointer"
                  >
                    Send a confidential tip ›
                  </button>
                </div>
              </div>
            </aside>
          </section>

          {/* MID-PAGE MODULE: RUSSIA-UKRAINE WAR & GEOPOLITICS */}
          <section className="py-6 border-b border-nytBorder">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4 pb-1 border-b border-nytBorder">
              <div className="flex items-center space-x-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">Russia-Ukraine War</h3>
                <span className="text-xs text-gray-400">|</span>
                <div className="hidden sm:flex space-x-4 text-[11px] text-gray-600">
                  <button onClick={() => setSelectedArticleId('ukraine-exposure-satellite')} className="hover:underline">
                    Wins for Putin
                  </button>
                  <button onClick={() => setSelectedArticleId('ukraine-exposure-satellite')} className="hover:underline">
                    Escalating Assaults
                  </button>
                  <button onClick={() => setSelectedArticleId('trump-diesel-deal')} className="hover:underline">
                    Russian Oil Deal
                  </button>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticleId('ukraine-exposure-satellite')}
                className="text-[11px] text-[#326891] hover:underline font-medium"
              >
                See more coverage ›
              </button>
            </div>

            {/* 3-Column Story Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Story 1 */}
              <article
                onClick={() => setSelectedArticleId('ukraine-exposure-satellite')}
                className="space-y-2 cursor-pointer group"
              >
                <h4 className="font-headline text-xl font-bold leading-snug group-hover:underline">
                  Ukraine’s Exposure Grows as Satellite Use Is Restricted and Russia Escalates
                </h4>
                <p className="font-body-serif text-xs text-gray-700 leading-relaxed">
                  A huge attack cut power to 600,000 people in Kyiv, and a Pentagon-funded satellite internet program appeared to be curbed without warning.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-[#5A5A5A]">
                  <span>By Evgeniy Maloletka</span>
                  <span>•</span>
                  <span>💬 1.1k</span>
                </div>
              </article>

              {/* Story 2 */}
              <article
                onClick={() => setSelectedArticleId('trump-diesel-deal')}
                className="space-y-2 cursor-pointer group"
              >
                <h4 className="font-headline text-xl font-bold leading-snug group-hover:underline">
                  Why Trump’s Diesel Deal With Putin Won’t Knock Down High Prices
                </h4>
                <p className="font-body-serif text-xs text-gray-700 leading-relaxed">
                  Global market analysts point out that crude and refining bottlenecks far outstrip the bilateral export agreements struck in recent talks.
                </p>
                <div className="text-[10px] font-semibold text-[#5A5A5A] uppercase pt-1">
                  4 min read
                </div>
              </article>

              {/* Story 3: Briefing card */}
              <article
                onClick={() => setSelectedArticleId('evening-briefing-oct-14')}
                className="bg-[#FCFCFC] p-4 border border-nytBorder flex flex-col justify-between cursor-pointer group hover:border-black transition"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B00020] font-bold block mb-1">
                    The Evening Briefing
                  </span>
                  <h4 className="font-headline text-lg font-bold leading-tight group-hover:underline">
                    Catch Up on Today’s Biggest Stories
                  </h4>
                  <p className="font-body-serif mt-2 text-xs text-gray-600 leading-normal">
                    Energy prices lift inflation, Ukraine grows more vulnerable and the Texas Senate race tightens.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-200 text-[10px] font-semibold text-[#5A5A5A] uppercase">
                  5 min read
                </div>
              </article>
            </div>
          </section>

          {/* MID-PAGE MODULE: MIDTERM ELECTIONS & AI TECHNOLOGY */}
          <section className="py-6 border-b border-nytBorder">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 8 Cols: Midterms & Key National News */}
              <div className="lg:col-span-8 lg:border-r border-nytBorder lg:pr-8">
                {/* Election Section Header */}
                <div className="flex items-center justify-between pb-1 mb-3 border-b border-nytBorder">
                  <div className="flex items-center space-x-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#B00020]"></span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">Election Dispatches</h3>
                  </div>
                  <div className="hidden sm:flex space-x-3 text-[11px] text-gray-600">
                    <button onClick={() => setSelectedArticleId('texas-senate-race-tightens')} className="hover:underline">
                      Early Vote
                    </button>
                    <button onClick={() => setSelectedArticleId('texas-senate-race-tightens')} className="hover:underline">
                      Race for Congress
                    </button>
                    <button onClick={() => setSelectedArticleId('texas-senate-race-tightens')} className="hover:underline">
                      Latest Polls
                    </button>
                  </div>
                </div>

                {/* Main Election Lead */}
                <div
                  onClick={() => setSelectedArticleId('texas-senate-race-tightens')}
                  className="mb-6 cursor-pointer group"
                >
                  <span className="inline-block bg-[#B00020] text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider mb-2">
                    Live
                  </span>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold leading-tight group-hover:underline">
                    Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge
                  </h3>
                  <p className="font-body-serif mt-2 text-sm text-gray-800 leading-relaxed">
                    New surveys suggest the margin is within three points, prompting rapid ad buys and visits from national surrogates as mail voting gets underway.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-[#121212] list-disc list-inside font-medium">
                    <li><span className="hover:underline">Jon Ossoff says he’s not running for president, but history says he can change his mind.</span></li>
                    <li><span className="hover:underline">The breathtaking cost of the midterms: $10 billion and counting on ads.</span></li>
                    <li><span className="hover:underline">A Maryland lawmaker blamed Democrats for high gas prices. Laughter ensued.</span></li>
                  </ul>
                </div>

                {/* Interactive Polls Tracker Bar */}
                <PollTracker />

                {/* Secondary Grid in Left Section: General News */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-nytBorder">
                  <article
                    onClick={() => setSelectedArticleId('cornell-president-allegations')}
                    className="cursor-pointer group"
                  >
                    <h4 className="font-headline text-lg font-bold leading-snug group-hover:underline">
                      Cornell’s President Is Grilled by Faculty Senate Over Handling of Allegations
                    </h4>
                    <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                      Michael Kotlikoff is facing a vote of no confidence over his administration’s response to fraternity investigations.
                    </p>
                    <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">4 min read</span>
                  </article>

                  <article
                    onClick={() => setSelectedArticleId('pierre-hotel-lutnick-defeat')}
                    className="cursor-pointer group"
                  >
                    <h4 className="font-headline text-lg font-bold leading-snug group-hover:underline">
                      Battle Over the Pierre Ends in Defeat for the Buyer Pushed by Lutnick
                    </h4>
                    <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                      Motasem Khashoggi missed a deadline to make a deposit to purchase the Manhattan luxury landmark.
                    </p>
                    <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">7 min read</span>
                  </article>
                </div>
              </div>

              {/* Right 4 Cols: Artificial Intelligence & The Great Read */}
              <div className="lg:col-span-4">
                {/* AI Topic Header */}
                <div className="flex items-center justify-between pb-1 mb-3 border-b border-nytBorder">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">Artificial Intelligence</h3>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase">Technology</span>
                </div>

                {/* AI Article */}
                <article
                  onClick={() => setSelectedArticleId('ai-agents-dinner-party')}
                  className="mb-6 cursor-pointer group"
                >
                  <h4 className="font-headline text-xl font-bold leading-snug group-hover:underline">
                    What a Group of A.I. Agents Talked About as Their Humans Had a Dinner Party
                  </h4>
                  <p className="font-body-serif mt-2 text-xs text-gray-700 leading-relaxed">
                    As artificial intelligence bots spread, we are increasingly glimpsing how these digital entities interact and what they discuss with one another.
                  </p>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-[#5A5A5A]">
                    <span className="font-bold">By Aaron Fernandez</span>
                    <span>💬 210</span>
                  </div>
                </article>

                {/* Anthropic Earnings */}
                <article
                  onClick={() => setSelectedArticleId('anthropic-revenue-jump')}
                  className="pb-4 border-b border-nytBorder mb-4 cursor-pointer group"
                >
                  <h5 className="font-headline text-base font-bold leading-snug group-hover:underline">
                    Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter
                  </h5>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">3 min read</span>
                </article>

                {/* The Great Read Feature */}
                <div
                  onClick={() => setSelectedArticleId('coming-out-at-50')}
                  className="bg-white border-t-2 border-black pt-3 cursor-pointer group"
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#121212] block mb-1">
                    The Great Read
                  </span>
                  <h4 className="font-headline text-lg font-bold leading-tight group-hover:underline">
                    Coming Out at 50 Can Be Hard. Shelly Found a Coach.
                  </h4>
                  <p className="font-body-serif mt-1.5 text-xs text-gray-700 leading-relaxed">
                    She spent decades building an identity as a wife and mother. Could she disrupt “a perfectly good family dynamic” to live her own truth?
                  </p>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-[#5A5A5A]">
                    <span className="font-bold">Sophie Park / NYT</span>
                    <span>💬 259</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NYT GAMES & BRAIN PUZZLES STRIP */}
          <section className="py-6 border-b border-black">
            <div className="flex items-center justify-between pb-2 mb-4 border-b border-nytBorder">
              <div className="flex items-center space-x-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212]">Games</h3>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-[#5A5A5A]">Daily word puzzles and brain games</span>
              </div>
              <button
                onClick={() => setSelectedGame('wordle')}
                className="text-[11px] text-[#326891] hover:underline font-medium"
              >
                All Games ›
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {/* Wordle */}
              <button
                onClick={() => setSelectedGame('wordle')}
                className="border border-nytBorder p-3 rounded hover:shadow-sm bg-white hover:border-black transition text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#6AAA64] text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-105 transition">
                  W
                </div>
                <span className="font-bold text-xs block text-black">Wordle</span>
                <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Guess 5 letters</span>
              </button>

              {/* Connections */}
              <button
                onClick={() => setSelectedGame('connections')}
                className="border border-nytBorder p-3 rounded hover:shadow-sm bg-white hover:border-black transition text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#B4A7D6] text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-105 transition">
                  C
                </div>
                <span className="font-bold text-xs block text-black">Connections</span>
                <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Group words</span>
              </button>

              {/* Spelling Bee */}
              <button
                onClick={() => setSelectedGame('spellingBee')}
                className="border border-nytBorder p-3 rounded hover:shadow-sm bg-white hover:border-black transition text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#F7DA21] text-black flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-105 transition">
                  🐝
                </div>
                <span className="font-bold text-xs block text-black">Spelling Bee</span>
                <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">7-letter hive</span>
              </button>

              {/* The Mini Crossword */}
              <button
                onClick={() => setSelectedGame('mini')}
                className="border border-nytBorder p-3 rounded hover:shadow-sm bg-white hover:border-black transition text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#4A90E2] text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-105 transition">
                  M
                </div>
                <span className="font-bold text-xs block text-black">The Mini</span>
                <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Quick solve</span>
              </button>

              {/* Strands */}
              <button
                onClick={() => setSelectedGame('wordle')}
                className="border border-nytBorder p-3 rounded hover:shadow-sm bg-white hover:border-black transition text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-[#80C2FF] text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-105 transition">
                  S
                </div>
                <span className="font-bold text-xs block text-black">Strands</span>
                <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Find hidden words</span>
              </button>

              {/* The Crossword */}
              <button
                onClick={() => setSelectedGame('mini')}
                className="border border-nytBorder p-3 rounded hover:shadow-sm bg-white hover:border-black transition text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded bg-black text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-105 transition">
                  ✎
                </div>
                <span className="font-bold text-xs block text-black">The Crossword</span>
                <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">The daily classic</span>
              </button>
            </div>
          </section>

          {/* WIRECUTTER & COOKING & THE ATHLETIC PREVIEW COLUMNS */}
          <section className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cooking */}
              <div>
                <div className="border-b border-black pb-1 mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#121212]">Cooking</span>
                  <button onClick={() => setIsCookingOpen(true)} className="text-[10px] text-[#326891] hover:underline font-semibold">
                    Recipes ›
                  </button>
                </div>
                <div
                  onClick={() => setIsCookingOpen(true)}
                  className="cursor-pointer group"
                >
                  <h4 className="font-headline text-lg font-bold leading-snug group-hover:underline">
                    Meatballs With Any Meat: The Flexible Weeknight Formula
                  </h4>
                  <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                    Melissa Clark’s simple blueprint for making tender meatballs out of pork, turkey, beef or plant grounds.
                  </p>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">Easy • 35 mins</span>
                </div>
              </div>

              {/* Wirecutter */}
              <div>
                <div className="border-b border-black pb-1 mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#121212]">Wirecutter</span>
                  <button onClick={() => setIsWirecutterOpen(true)} className="text-[10px] text-[#326891] hover:underline font-semibold">
                    Reviews ›
                  </button>
                </div>
                <div
                  onClick={() => setIsWirecutterOpen(true)}
                  className="cursor-pointer group"
                >
                  <h4 className="font-headline text-lg font-bold leading-snug group-hover:underline">
                    The Best Cordless Stick Vacuum for Fast, Clean Sweeps
                  </h4>
                  <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                    After 120 hours of test runs over hardwood and rugs, one reliable model continues to outrank the rest.
                  </p>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">Updated October 2026</span>
                </div>
              </div>

              {/* The Athletic */}
              <div>
                <div className="border-b border-black pb-1 mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#121212]">The Athletic</span>
                  <button onClick={() => setIsAthleticOpen(true)} className="text-[10px] text-[#326891] hover:underline font-semibold">
                    Scores ›
                  </button>
                </div>
                <div
                  onClick={() => setIsAthleticOpen(true)}
                  className="cursor-pointer group"
                >
                  <span className="inline-block bg-[#B00020] text-white text-[9px] font-bold px-1 py-0.5 uppercase tracking-wider mb-1">
                    MLB Playoffs
                  </span>
                  <h4 className="font-headline text-lg font-bold leading-snug group-hover:underline">
                    Brewers Lead Dodgers in Game 3 of N.L. Championship Series
                  </h4>
                  <p className="font-body-serif mt-1 text-xs text-gray-600 leading-normal">
                    Jackson Chourio’s homer on the first pitch put Milwaukee ahead early as it eyes a commanding 3-0 series lead.
                  </p>
                  <span className="text-[10px] font-semibold text-[#5A5A5A] uppercase block mt-1">Live Updates</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <Footer
        onSelectSection={handleSelectSection}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenGames={() => setSelectedGame('wordle')}
        onOpenCooking={() => setIsCookingOpen(true)}
        onOpenWirecutter={() => setIsWirecutterOpen(true)}
        onOpenAthletic={() => setIsAthleticOpen(true)}
      />

      {/* MODALS */}
      <GamesModal
        gameKey={selectedGame}
        onClose={() => setSelectedGame(null)}
      />

      <CookingModal
        isOpen={isCookingOpen}
        onClose={() => setIsCookingOpen(false)}
      />

      <WirecutterModal
        isOpen={isWirecutterOpen}
        onClose={() => setIsWirecutterOpen(false)}
      />

      <AthleticModal
        isOpen={isAthleticOpen}
        onClose={() => setIsAthleticOpen(false)}
      />

      <TipModal
        isOpen={isTipOpen}
        onClose={() => setIsTipOpen(false)}
      />

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      <TodaysPaperModal
        isOpen={isTodaysPaperOpen}
        onClose={() => setIsTodaysPaperOpen(false)}
        articles={allArticlesList}
        onSelectArticle={(id) => setSelectedArticleId(id)}
      />

      <SavedArticlesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={(id) => setSelectedArticleId(id)}
        onRemoveBookmark={removeBookmark}
      />
    </div>
  );
}
