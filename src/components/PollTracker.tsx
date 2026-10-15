import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BarChart3, TrendingUp } from 'lucide-react';

export const PollTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'senate' | 'house' | 'gov' | 'approval'>('senate');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#F7F7F7] border border-nytBorder p-3 mb-6 font-sansMeta text-xs">
      {/* Top Header Row with clickable tabs */}
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-3.5 h-3.5 text-nytBlack" />
          <span className="font-bold text-[#121212]">The Latest Polls:</span>
        </div>

        <div className="flex flex-wrap items-center space-x-4 text-[11px] font-semibold text-[#326891]">
          <button
            onClick={() => {
              setActiveTab('senate');
              setIsExpanded(true);
            }}
            className={`hover:underline cursor-pointer ${activeTab === 'senate' && isExpanded ? 'text-black font-bold underline' : ''}`}
          >
            Senate Tracker ›
          </button>
          <button
            onClick={() => {
              setActiveTab('house');
              setIsExpanded(true);
            }}
            className={`hover:underline cursor-pointer ${activeTab === 'house' && isExpanded ? 'text-black font-bold underline' : ''}`}
          >
            House Forecast ›
          </button>
          <button
            onClick={() => {
              setActiveTab('gov');
              setIsExpanded(true);
            }}
            className={`hover:underline cursor-pointer ${activeTab === 'gov' && isExpanded ? 'text-black font-bold underline' : ''}`}
          >
            Governor Races ›
          </button>
          <button
            onClick={() => {
              setActiveTab('approval');
              setIsExpanded(true);
            }}
            className={`hover:underline cursor-pointer ${activeTab === 'approval' && isExpanded ? 'text-black font-bold underline' : ''}`}
          >
            Presidential Approval ›
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-black p-0.5 ml-1"
            title={isExpanded ? 'Collapse forecast view' : 'Expand forecast view'}
          >
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded Interactive Forecast Visualizer */}
      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-gray-300 text-xs animate-in fade-in duration-200">
          {activeTab === 'senate' && (
            <div>
              <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-bold">
                <span>Battleground Senate Margins (Times/Siena Average)</span>
                <span>Margin / Lean</span>
              </div>
              <div className="space-y-2">
                {/* Texas */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-black">Texas · Talarico (D) vs. Republican Nominee (R)</span>
                    <span className="font-mono font-bold text-blue-700">D +2.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#326891] h-full" style={{ width: '49.2%' }} />
                    <div className="bg-gray-300 h-full" style={{ width: '4%' }} />
                    <div className="bg-[#B00020] h-full" style={{ width: '46.8%' }} />
                  </div>
                </div>

                {/* Ohio */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-black">Ohio · Brown (D) vs. Moreno (R)</span>
                    <span className="font-mono font-bold text-blue-700">D +0.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#326891] h-full" style={{ width: '48.6%' }} />
                    <div className="bg-gray-300 h-full" style={{ width: '3.6%' }} />
                    <div className="bg-[#B00020] h-full" style={{ width: '47.8%' }} />
                  </div>
                </div>

                {/* Montana */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-black">Montana · Tester (D) vs. Sheehy (R)</span>
                    <span className="font-mono font-bold text-red-700">R +1.6%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#326891] h-full" style={{ width: '47.1%' }} />
                    <div className="bg-gray-300 h-full" style={{ width: '4.2%' }} />
                    <div className="bg-[#B00020] h-full" style={{ width: '48.7%' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'house' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-black">House Control Projection (218 needed for majority)</span>
                <span className="font-mono text-gray-600">54% Tossup / Tilt Dem</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded overflow-hidden flex font-mono text-[9px] font-bold text-white text-center leading-4">
                <div className="bg-[#326891] h-full" style={{ width: '51%' }}>219 D</div>
                <div className="bg-[#B00020] h-full" style={{ width: '49%' }}>216 R</div>
              </div>
              <p className="text-[11px] text-gray-500">
                Key competitive districts in suburban California, New York, and Virginia remain inside 1.5 points.
              </p>
            </div>
          )}

          {activeTab === 'gov' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-2 border border-gray-200 rounded">
                <span className="font-bold text-black block">North Carolina</span>
                <span className="text-[11px] text-blue-700 font-bold font-mono">D +6.2%</span>
                <span className="text-[10px] text-gray-400 block">Stein vs. Robinson</span>
              </div>
              <div className="bg-white p-2 border border-gray-200 rounded">
                <span className="font-bold text-black block">New Hampshire</span>
                <span className="text-[11px] text-red-700 font-bold font-mono">R +1.8%</span>
                <span className="text-[10px] text-gray-400 block">Ayotte vs. Craig</span>
              </div>
              <div className="bg-white p-2 border border-gray-200 rounded">
                <span className="font-bold text-black block">Washington</span>
                <span className="text-[11px] text-blue-700 font-bold font-mono">D +8.4%</span>
                <span className="text-[10px] text-gray-400 block">Ferguson vs. Reichert</span>
              </div>
            </div>
          )}

          {activeTab === 'approval' && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span>Presidential Job Approval</span>
                <span className="font-mono text-red-700">Net -8.4%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded overflow-hidden flex">
                <div className="bg-emerald-600 h-full" style={{ width: '43.8%' }} title="Approve: 43.8%" />
                <div className="bg-gray-300 h-full" style={{ width: '3.8%' }} title="Neutral / Undecided: 3.8%" />
                <div className="bg-red-600 h-full" style={{ width: '52.4%' }} title="Disapprove: 52.4%" />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                <span>Approve: 43.8%</span>
                <span>Disapprove: 52.4%</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
