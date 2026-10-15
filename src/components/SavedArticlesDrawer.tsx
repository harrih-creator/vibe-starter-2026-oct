import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types/news';

interface SavedArticlesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (id: string) => void;
  onRemoveBookmark: (id: string) => void;
}

export const SavedArticlesDrawer: React.FC<SavedArticlesDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col font-sansMeta animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-black flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-nytBlack" />
            <span className="font-headline text-lg font-bold">Saved Stories</span>
            <span className="text-xs text-gray-500 font-mono">({savedArticles.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 text-gray-400 space-y-2">
              <Bookmark className="w-10 h-10 mx-auto text-gray-300 stroke-[1.5]" />
              <p className="text-sm font-semibold text-gray-600">No saved stories yet</p>
              <p className="text-xs max-w-xs mx-auto">
                Tap the bookmark icon on any article to save it for reading later.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.id}
                className="p-3 border border-nytBorder rounded hover:border-black transition group relative"
              >
                <div
                  onClick={() => {
                    onSelectArticle(article.id);
                    onClose();
                  }}
                  className="cursor-pointer pr-6"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    {article.category} · {article.readTime}
                  </span>
                  <h4 className="font-headline text-base font-bold text-nytBlack group-hover:text-nytGrayText leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">{article.deck}</p>
                </div>

                <button
                  onClick={() => onRemoveBookmark(article.id)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-600 p-1 transition"
                  title="Remove from saved"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
