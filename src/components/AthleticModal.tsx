import React, { useState } from 'react';
import { X, Trophy, Activity, Radio } from 'lucide-react';

interface AthleticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AthleticModal: React.FC<AthleticModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'box' | 'playbyplay'>('box');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white border border-black w-full max-w-2xl shadow-2xl relative my-auto max-h-[92vh] flex flex-col font-sansMeta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-black p-4 flex items-center justify-between bg-black text-white">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-lg tracking-wider uppercase">The Athletic</span>
            <span className="text-gray-500">|</span>
            <span className="text-xs uppercase tracking-wider text-gray-300 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
              NLCS Game 3 Live
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white hover:bg-white/20 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Score Header Card */}
          <div className="bg-[#121212] text-white p-5 rounded-none mb-6">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-3 border-b border-gray-800 pb-2">
              <span className="font-bold uppercase tracking-wider text-red-400">National League Championship Series</span>
              <span>Top 7th · 1 Out</span>
            </div>

            <div className="grid grid-cols-3 items-center text-center">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase">Milwaukee</span>
                <h3 className="text-2xl font-black tracking-tight">Brewers</h3>
                <span className="text-xs text-amber-400 font-bold">Leads series 2-0</span>
              </div>

              <div className="text-4xl font-black tracking-widest font-mono">
                5 - 2
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase">Los Angeles</span>
                <h3 className="text-2xl font-black tracking-tight">Dodgers</h3>
                <span className="text-xs text-gray-400">Home · Dodger Stadium</span>
              </div>
            </div>
          </div>

          {/* Navigation tabs */}
          <div className="flex border-b border-nytBorder mb-4 text-xs font-bold">
            <button
              onClick={() => setActiveTab('box')}
              className={`px-4 py-2 border-b-2 transition ${
                activeTab === 'box'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Box Score
            </button>
            <button
              onClick={() => setActiveTab('playbyplay')}
              className={`px-4 py-2 border-b-2 transition ${
                activeTab === 'playbyplay'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Key Plays & Commentary
            </button>
          </div>

          {activeTab === 'box' && (
            <div>
              {/* Linescore table */}
              <div className="overflow-x-auto border border-nytBorder rounded mb-6">
                <table className="w-full text-xs text-center font-mono">
                  <thead className="bg-gray-100 border-b border-nytBorder font-bold text-gray-700">
                    <tr>
                      <th className="py-2 px-3 text-left font-sansMeta">Team</th>
                      <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>
                      <th className="border-l border-gray-300 font-bold">R</th>
                      <th>H</th>
                      <th>E</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3 text-left font-bold font-sansMeta">MIL</td>
                      <td>2</td><td>0</td><td>1</td><td>0</td><td>2</td><td>0</td><td>0</td>
                      <td className="border-l border-gray-300 font-bold text-base">5</td>
                      <td>8</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-left font-bold font-sansMeta">LAD</td>
                      <td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>-</td>
                      <td className="border-l border-gray-300 font-bold text-base">2</td>
                      <td>5</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Top performers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 border border-nytBorder bg-gray-50 rounded">
                  <span className="font-bold uppercase text-[10px] text-gray-500 block mb-1">
                    Brewers Game MVP
                  </span>
                  <strong className="text-sm font-sansMeta block text-black">Jackson Chourio (RF)</strong>
                  <p className="text-gray-600 mt-1">2-for-4, 1 HR (415 ft), 3 RBI, 1 Run, 1 Walk</p>
                </div>
                <div className="p-3 border border-nytBorder bg-gray-50 rounded">
                  <span className="font-bold uppercase text-[10px] text-gray-500 block mb-1">
                    Pitching Matchup
                  </span>
                  <strong className="text-sm font-sansMeta block text-black">Freddy Peralta (W)</strong>
                  <p className="text-gray-600 mt-1">6.1 IP, 4 H, 2 ER, 8 SO, 94 Pitches</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'playbyplay' && (
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-black pl-3 py-1">
                <span className="text-[10px] text-gray-400 font-mono">TOP 1ST · 0 OUTS</span>
                <p className="font-bold text-black mt-0.5">
                  Jackson Chourio homers (1) on a fly ball to right-center field. (415 ft).
                </p>
                <p className="text-gray-600 text-[11px]">Chourio crushed the first pitch of the game at 98.4 mph.</p>
              </div>

              <div className="border-l-2 border-gray-300 pl-3 py-1">
                <span className="text-[10px] text-gray-400 font-mono">BOT 2ND · 1 OUT</span>
                <p className="font-bold text-black mt-0.5">
                  Will Smith doubles on a sharp line drive down left field line. Teoscar Hernández scores.
                </p>
              </div>

              <div className="border-l-2 border-black pl-3 py-1">
                <span className="text-[10px] text-gray-400 font-mono">TOP 5TH · 2 OUTS</span>
                <p className="font-bold text-black mt-0.5">
                  William Contreras doubles to right field. Chourio and Turang score.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
