import React, { useState } from 'react';
import { Search, Bookmark, User, X } from 'lucide-react';
import { SectionTab } from '../types/news';

interface HeaderProps {
  currentSection: SectionTab;
  onSelectSection: (sec: SectionTab) => void;
  onOpenSubscribe: () => void;
  onOpenTodaysPaper: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  onOpenSubscribe,
  onOpenTodaysPaper,
  onOpenSaved,
  savedCount,
  searchQuery,
  onSearchChange,
}) => {
  const [activeEdition, setActiveEdition] = useState<'U.S.' | 'INTERNATIONAL' | 'CANADA' | 'ESPAÑOL' | '中文'>('U.S.');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const sections: SectionTab[] = [
    'U.S.',
    'World',
    'Business',
    'Arts',
    'Lifestyle',
    'Opinion',
    'Video',
    'Shows',
    'Games',
    'Cooking',
    'Wirecutter',
    'The Athletic',
  ];

  const editions: ('U.S.' | 'INTERNATIONAL' | 'CANADA' | 'ESPAÑOL' | '中文')[] = [
    'U.S.',
    'INTERNATIONAL',
    'CANADA',
    'ESPAÑOL',
    '中文',
  ];

  return (
    <header className="max-w-[1280px] mx-auto px-4 lg:px-8 font-sansMeta">
      {/* Top Utility Bar: Search, Editions, Date, Action Buttons */}
      <div className="flex items-center justify-between text-[11px] text-[#121212] pt-2 pb-1 border-b border-transparent">
        {/* Left: Search and Editions */}
        <div className="flex items-center space-x-3">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
            className="hover:opacity-70 p-1 cursor-pointer transition flex items-center gap-1.5"
            type="button"
          >
            <Search className="w-4 h-4 text-[#121212]" />
            <span className="hidden sm:inline font-semibold text-[10px] tracking-wider uppercase">Search</span>
          </button>

          <span className="text-gray-300">|</span>

          {/* Edition Selector Links */}
          <nav className="hidden md:flex items-center space-x-3 font-semibold tracking-wider text-[10px]">
            {editions.map((ed) => (
              <button
                key={ed}
                onClick={() => setActiveEdition(ed)}
                className={`transition-colors uppercase ${
                  activeEdition === ed
                    ? 'font-bold text-[#121212] underline decoration-1 underline-offset-4'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {ed}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Saved, Subscribe and Account Actions */}
        <div className="flex items-center space-x-2.5">
          {/* Saved Articles Button */}
          <button
            onClick={onOpenSaved}
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-700 hover:text-black px-2 py-1.5 rounded transition"
            title="Saved Stories"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                {savedCount}
              </span>
            )}
          </button>

          {/* Subscribe CTA */}
          <button
            onClick={onOpenSubscribe}
            className="bg-[#326891] hover:bg-[#255273] text-white px-3 py-1.5 font-bold tracking-wider uppercase text-[10px] rounded-[2px] transition duration-150 cursor-pointer shadow-xs"
          >
            Subscribe for $1/week
          </button>

          {/* Log In Button */}
          <button
            onClick={() => setShowLoginModal(true)}
            className="border border-gray-400 hover:border-black text-[#121212] px-3 py-1.5 font-bold tracking-wider uppercase text-[10px] rounded-[2px] transition duration-150 cursor-pointer"
          >
            {isLoggedIn ? 'Account' : 'Log In'}
          </button>
        </div>
      </div>

      {/* Inline Search Bar */}
      {isSearchOpen && (
        <div className="py-2.5 px-3 bg-gray-50 border border-nytBorder rounded mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-1 mr-3">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search The New York Times archive, articles, authors..."
              autoFocus
              className="w-full bg-transparent text-xs text-black placeholder:text-gray-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-gray-400 hover:text-black text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>
          <button
            onClick={() => {
              setIsSearchOpen(false);
              onSearchChange('');
            }}
            className="text-gray-500 hover:text-black p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Date & Today's Paper Row */}
      <div className="flex items-center justify-between text-[11px] text-[#5A5A5A] py-1">
        <div>
          <span className="font-bold text-[#121212]">Wednesday, October 14, 2026</span>
          <span className="hidden sm:inline text-gray-400 ml-2">Today’s Paper · Vol. CLXXV No. 60,982</span>
        </div>
        <div>
          <button
            onClick={onOpenTodaysPaper}
            className="hover:underline text-[11px] text-[#5A5A5A] font-medium cursor-pointer"
          >
            Today’s Paper ›
          </button>
        </div>
      </div>

      {/* Masthead Logo */}
      <div className="text-center py-2 sm:py-3 border-t border-transparent">
        <button
          onClick={() => {
            onSelectSection('All');
            onSearchChange('');
          }}
          aria-label="The New York Times Homepage"
          className="inline-block hover:opacity-95 transition"
        >
          <h1 className="font-masthead text-5xl sm:text-7xl md:text-[84px] text-black tracking-normal leading-none font-normal select-none">
            The New York Times
          </h1>
        </button>
      </div>

      {/* Section Navigation Links */}
      <nav aria-label="Sections" className="border-t border-b border-black py-1.5 my-1">
        <ul className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-5 md:gap-x-6 text-[11px] font-medium tracking-tight text-[#121212]">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => onSelectSection(sec)}
                className={`transition-colors whitespace-nowrap cursor-pointer ${
                  currentSection === sec
                    ? 'font-bold text-black border-b-2 border-black pb-0.5'
                    : 'text-[#121212] hover:underline hover:text-black'
                }`}
              >
                {sec}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-black mb-3"></div>

      {/* Free to Read Banner Indicator */}
      <div className="text-center py-1 border-b border-nytBorder mb-4">
        <p className="text-[12px] text-[#5A5A5A]">
          These top stories are <span className="font-bold text-[#121212]">free to read.</span>
        </p>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border border-black p-6 w-full max-w-sm relative text-xs">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 p-1 text-gray-500 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center mb-4">
              <span className="font-masthead text-2xl block mb-1">The New York Times</span>
              <h3 className="font-headline text-lg font-bold">Log in to your account</h3>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                defaultValue="harriethoo98@gmail.com"
              />
              <input
                type="password"
                placeholder="Password"
                defaultValue="••••••••••••"
                className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none"
              />
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setShowLoginModal(false);
                }}
                className="w-full py-2 bg-black hover:bg-gray-800 text-white font-bold rounded uppercase tracking-wider text-[11px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
