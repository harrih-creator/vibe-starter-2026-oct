import React from 'react';
import { SectionTab } from '../types/news';

interface FooterProps {
  onSelectSection: (sec: SectionTab) => void;
  onOpenSubscribe: () => void;
  onOpenGames: () => void;
  onOpenCooking: () => void;
  onOpenWirecutter: () => void;
  onOpenAthletic: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenSubscribe,
  onOpenGames,
  onOpenCooking,
  onOpenWirecutter,
  onOpenAthletic,
}) => {
  return (
    <footer className="max-w-[1280px] mx-auto px-4 lg:px-8 border-t-2 border-black mt-12 pt-4 pb-12 font-sansMeta text-[#121212] text-xs">
      {/* Footer Masthead & Brand Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-nytBorder pb-4 mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="font-masthead text-3xl font-normal select-none">
            The New York Times
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-gray-600 mt-3 sm:mt-0 font-medium">
          <button onClick={onOpenSubscribe} className="hover:underline text-gray-600">Home Delivery</button>
          <button onClick={onOpenSubscribe} className="hover:underline text-gray-600">Digital Subscriptions</button>
          <button onClick={onOpenGames} className="hover:underline text-gray-600">Games</button>
          <button onClick={onOpenCooking} className="hover:underline text-gray-600">Cooking</button>
          <button onClick={onOpenWirecutter} className="hover:underline text-gray-600">Wirecutter</button>
          <button onClick={onOpenAthletic} className="hover:underline text-gray-600">The Athletic</button>
        </div>
      </div>

      {/* Section Navigation Site Map (6 Columns) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pb-8 border-b border-nytBorder text-[11px]">
        {/* Col 1: News */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-[#121212] mb-2">News</h4>
          <ul className="space-y-1.5 text-gray-600">
            <li><button onClick={() => onSelectSection('All')} className="hover:underline">Home Page</button></li>
            <li><button onClick={() => onSelectSection('U.S.')} className="hover:underline">U.S.</button></li>
            <li><button onClick={() => onSelectSection('U.S.')} className="hover:underline">Politics</button></li>
            <li><button onClick={() => onSelectSection('U.S.')} className="hover:underline">New York</button></li>
            <li><button onClick={() => onSelectSection('U.S.')} className="hover:underline">California</button></li>
            <li><button onClick={() => onSelectSection('U.S.')} className="hover:underline">Education</button></li>
            <li><button onClick={() => onSelectSection('Lifestyle')} className="hover:underline">Health</button></li>
            <li><span className="text-gray-400">Obituaries</span></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Science</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline">Climate</button></li>
          </ul>
        </div>

        {/* Col 2: World & Biz */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-[#121212] mb-2">World &amp; Biz</h4>
          <ul className="space-y-1.5 text-gray-600">
            <li><button onClick={() => onSelectSection('World')} className="hover:underline">World News</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline">Americas</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline">Asia Pacific</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline">Middle East</button></li>
            <li><button onClick={() => onSelectSection('World')} className="hover:underline">Europe</button></li>
            <li><button onClick={() => onSelectSection('Business')} className="hover:underline">Economy</button></li>
            <li><button onClick={() => onSelectSection('Business')} className="hover:underline">Tech</button></li>
            <li><button onClick={() => onSelectSection('Business')} className="hover:underline">DealBook</button></li>
            <li><button onClick={() => onSelectSection('Business')} className="hover:underline">Markets</button></li>
          </ul>
        </div>

        {/* Col 3: Arts */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-[#121212] mb-2">Arts</h4>
          <ul className="space-y-1.5 text-gray-600">
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Today's Arts</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Book Review</button></li>
            <li><span className="text-gray-400">Best Sellers</span></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Movies</button></li>
            <li><button onClick={() => onSelectSection('Shows')} className="hover:underline">Television</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Theater</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Music</button></li>
            <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Visual Arts</button></li>
          </ul>
        </div>

        {/* Col 4: Lifestyle */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-[#121212] mb-2">Lifestyle</h4>
          <ul className="space-y-1.5 text-gray-600">
            <li><button onClick={() => onSelectSection('Lifestyle')} className="hover:underline">Style</button></li>
            <li><button onClick={() => onSelectSection('Lifestyle')} className="hover:underline">Travel</button></li>
            <li><button onClick={onOpenCooking} className="hover:underline">Food &amp; Wine</button></li>
            <li><span className="text-gray-400">Love &amp; Vows</span></li>
            <li><button onClick={() => onSelectSection('Business')} className="hover:underline">Real Estate</button></li>
            <li><button onClick={() => onSelectSection('Lifestyle')} className="hover:underline">Well</button></li>
            <li><span className="text-gray-400">T Magazine</span></li>
          </ul>
        </div>

        {/* Col 5: Opinion */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-[#121212] mb-2">Opinion</h4>
          <ul className="space-y-1.5 text-gray-600">
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Today's Opinion</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Columnists</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Editorials</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Guest Essays</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Letters</button></li>
            <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Op-Docs</button></li>
          </ul>
        </div>

        {/* Col 6: More */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-[#121212] mb-2">More</h4>
          <ul className="space-y-1.5 text-gray-600">
            <li><button onClick={onOpenAthletic} className="hover:underline">The Athletic</button></li>
            <li><button onClick={onOpenCooking} className="hover:underline">Cooking</button></li>
            <li><button onClick={onOpenWirecutter} className="hover:underline">Wirecutter</button></li>
            <li><button onClick={onOpenGames} className="hover:underline">Games</button></li>
            <li><span className="text-gray-400">Podcasts</span></li>
            <li><button onClick={() => onSelectSection('Video')} className="hover:underline">Video</button></li>
            <li><span className="text-gray-400">TimesMachine</span></li>
            <li><span className="text-gray-400">NYT Store</span></li>
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-y-3">
        <div>
          <span>© 2026 The New York Times Company</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-500">
          <button className="hover:underline">NYTCo</button>
          <button className="hover:underline">Contact Us</button>
          <button className="hover:underline">Accessibility</button>
          <button className="hover:underline">Work with us</button>
          <button className="hover:underline">Advertise</button>
          <button className="hover:underline">T Brand Studio</button>
          <button className="hover:underline">Privacy Policy</button>
          <button className="hover:underline">Terms of Service</button>
          <button className="hover:underline">Terms of Sale</button>
          <button className="hover:underline">Site Map</button>
          <button onClick={onOpenSubscribe} className="hover:underline font-bold text-gray-700">Subscriptions</button>
        </div>
      </div>
    </footer>
  );
};
