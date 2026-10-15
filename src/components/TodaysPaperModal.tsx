import React from 'react';
import { X, Newspaper, ChevronRight } from 'lucide-react';
import { Article } from '../types/news';

interface TodaysPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (id: string) => void;
}

export const TodaysPaperModal: React.FC<TodaysPaperModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}) => {
  if (!isOpen) return null;

  const sections = [
    { title: 'The Front Page (Section A)', page: 'A1', filter: (a: Article) => ['U.S.', 'World'].includes(a.category) },
    { title: 'Business Day (Section B)', page: 'B1', filter: (a: Article) => a.category === 'Business' },
    { title: 'Opinion (Section SR)', page: 'A18', filter: (a: Article) => a.category === 'Opinion' },
    { title: 'Culture & The Great Read', page: 'C1', filter: (a: Article) => ['Arts', 'Lifestyle'].includes(a.category) },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white border border-black w-full max-w-3xl shadow-2xl relative my-auto max-h-[92vh] flex flex-col font-sansMeta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-black p-4 flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center space-x-2">
            <Newspaper className="w-5 h-5 text-nytBlack" />
            <span className="font-masthead text-2xl">The New York Times</span>
            <span className="text-gray-400">·</span>
            <span className="text-xs font-bold uppercase tracking-wider text-nytGrayText">Today's Print Edition</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subhead info */}
        <div className="px-6 py-3 border-b border-nytBorder flex items-center justify-between text-xs text-gray-600 bg-gray-50">
          <span className="font-bold text-black">New York Edition · Wednesday, October 14, 2026</span>
          <span>Late City Final · Vol. CLXXV No. 60,982</span>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {sections.map((sec) => {
            const secArticles = articles.filter(sec.filter);
            return (
              <div key={sec.title} className="border-b border-nytBorder pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-3 border-b border-black pb-1">
                  <h3 className="font-sansMeta text-xs font-bold uppercase tracking-wider text-nytBlack">
                    {sec.title}
                  </h3>
                  <span className="font-mono text-xs font-bold text-gray-500">Page {sec.page}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {secArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art.id);
                        onClose();
                      }}
                      className="cursor-pointer group p-2 rounded hover:bg-gray-50 transition border border-transparent hover:border-nytBorder"
                    >
                      <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">
                        {art.subcategory || art.category} · {art.readTime}
                      </span>
                      <h4 className="font-headline text-base font-bold text-nytBlack group-hover:text-nytGrayText leading-snug">
                        {art.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-1">{art.deck}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
