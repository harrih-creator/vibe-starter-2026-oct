import React, { useState } from 'react';
import { X, Award, CheckCircle2, XCircle, Star, ShoppingBag, ShieldCheck } from 'lucide-react';

interface WirecutterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WirecutterModal: React.FC<WirecutterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'top' | 'budget' | 'testing'>('top');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white border border-black w-full max-w-2xl shadow-2xl relative my-auto max-h-[92vh] flex flex-col font-sansMeta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-black p-4 flex items-center justify-between bg-[#004B87] text-white">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight">Wirecutter</span>
            <span className="text-blue-200">|</span>
            <span className="text-xs uppercase tracking-wider font-semibold">
              Independent Reviews You Can Trust
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
          <div className="mb-4">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-1">
              Home Appliances · Vacuums
            </span>
            <h2 className="font-headline text-3xl font-bold text-nytBlack">
              The Best Cordless Stick Vacuum for Fast, Clean Sweeps
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Updated October 2026 · 120 Hours of Rigorous Lab Testing
            </p>
          </div>

          {/* Hero product photo */}
          <div className="w-full h-64 overflow-hidden rounded bg-gray-50 mb-6 border border-nytBorder">
            <img
              src="/src/assets/images/wirecutter_stick_vacuum_1792029112822.jpg"
              alt="Cordless stick vacuum on natural oak hardwood floors"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Model Pick Tabs */}
          <div className="flex border-b border-nytBorder mb-6 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('top')}
              className={`px-4 py-2 border-b-2 transition ${
                activeTab === 'top'
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              The Top Pick: Dyson V15
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`px-4 py-2 border-b-2 transition ${
                activeTab === 'budget'
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Budget Pick: Shark Stratos
            </button>
            <button
              onClick={() => setActiveTab('testing')}
              className={`px-4 py-2 border-b-2 transition ${
                activeTab === 'testing'
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              How We Tested
            </button>
          </div>

          {activeTab === 'top' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-2 p-2 bg-emerald-50 border border-emerald-300 rounded text-emerald-900">
                <Award className="w-5 h-5 text-emerald-700 shrink-0" />
                <div>
                  <span className="font-bold block">Our Top Pick: Dyson V15 Detect Absolute</span>
                  <span className="text-[11px] text-emerald-800">
                    Highest dirt pick-up score, laser illumination, and 60-min battery.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="font-bold text-emerald-700 flex items-center gap-1 mb-2">
                    <CheckCircle2 className="w-4 h-4" /> Why It Won
                  </h4>
                  <ul className="space-y-1.5 text-gray-700 list-disc list-inside">
                    <li>Fluffy optic head exposes invisible pet dander on hardwood</li>
                    <li>Acoustic piezo sensor automatically ramps suction</li>
                    <li>Zero roller hair wrap during 40-minute carpet tests</li>
                    <li>HEPA whole-machine filtration traps 99.99% of dust</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-600 flex items-center gap-1 mb-2">
                    <XCircle className="w-4 h-4" /> Flaws But Not Dealbreakers
                  </h4>
                  <ul className="space-y-1.5 text-gray-700 list-disc list-inside">
                    <li>Premium retail price ($649 MSRP)</li>
                    <li>Continuous trigger hold required on older batches</li>
                    <li>Slightly top-heavy for overhead cobweb reaches</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-gray-50 border border-nytBorder rounded flex items-center justify-between mt-4">
                <div>
                  <span className="font-bold block text-sm">$649 at Dyson & Target</span>
                  <span className="text-[11px] text-gray-500">Includes 5 cleaning attachments</span>
                </div>
                <button
                  onClick={() => window.open('https://www.target.com', '_blank')}
                  className="bg-[#004B87] hover:bg-[#003866] text-white font-bold px-4 py-2 rounded text-xs flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Buy at Retailer
                </button>
              </div>
            </div>
          )}

          {activeTab === 'budget' && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-300 rounded text-blue-900">
                <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
                <div>
                  <span className="font-bold block">Budget Pick: Shark Stratos Cordless</span>
                  <span className="text-[11px] text-blue-800">
                    Remarkable deep-cleaning power at less than half the price.
                  </span>
                </div>
              </div>

              <p className="font-body-serif text-gray-800 leading-relaxed">
                If you do not want to spend $600 on a vacuum, the Shark Stratos Cordless delivered 90% of our test debris capture at $280. Its MultiFLEX folding wand lets you vacuum directly under couches without crouching, and its anti-odor neutralizer cartridge keeps the exhaust smelling fresh.
              </p>

              <div className="p-3 bg-gray-50 border border-nytBorder rounded flex items-center justify-between mt-4">
                <div>
                  <span className="font-bold block text-sm">$279 at Amazon & Best Buy</span>
                  <span className="text-[11px] text-gray-500">DuoClean PowerFins roller</span>
                </div>
                <button
                  onClick={() => window.open('https://www.amazon.com', '_blank')}
                  className="bg-[#004B87] hover:bg-[#003866] text-white font-bold px-4 py-2 rounded text-xs flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Buy at Retailer
                </button>
              </div>
            </div>
          )}

          {activeTab === 'testing' && (
            <div className="space-y-3 text-xs font-body-serif text-gray-800 leading-relaxed">
              <h4 className="font-sansMeta font-bold text-sm text-black">Our Rigorous Lab Protocol</h4>
              <p>
                To evaluate stick vacuums fairly, we set up test tracks across seven distinct surface textures: unvarnished white oak, commercial tile, low-pile Berber rugs, and deep plush shag carpets.
              </p>
              <p>
                We spread weighed measurements of Cheerios, fine beach sand, coffee grounds, and synthetic hair. Vacuums were tested for edge suction against baseboards, maneuverability around tight dining chair legs, and total battery endurance on both Eco and Boost modes.
              </p>
              <div className="p-3 bg-gray-100 rounded font-sansMeta text-[11px]">
                <strong>Key Metric:</strong> The Dyson picked up 98.4% of weighed sand from shag carpet on a single pass, compared to the industry average of 74.2%.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
