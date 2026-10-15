import React, { useState } from 'react';
import { X, Lock, Shield, Send, Check } from 'lucide-react';

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TipModal: React.FC<TipModalProps> = ({ isOpen, onClose }) => {
  const [tipCategory, setTipCategory] = useState('Politics / Government');
  const [tipDetails, setTipDetails] = useState('');
  const [isSecureUpload, setIsSecureUpload] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipDetails.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTipDetails('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white border border-black w-full max-w-lg shadow-2xl relative my-auto max-h-[92vh] flex flex-col font-sansMeta"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-black p-4 flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-nytBlack" />
            <span className="font-headline text-lg font-bold">Confidential News Tip</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 text-xs">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold">Transmission Received Securely</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Your encrypted submission has been routed to our confidential investigative desk. No IP address or browser fingerprints are recorded.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-gray-50 border border-nytBorder rounded flex items-start space-x-2.5 text-gray-600 text-[11px] leading-relaxed">
                <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  The New York Times maintains SecureDrop and PGP channels to protect sources. If you face legal risk, do not submit from a corporate device or home Wi-Fi.
                </span>
              </div>

              <div>
                <label className="font-bold text-gray-800 block mb-1">Investigation Desk</label>
                <select
                  value={tipCategory}
                  onChange={(e) => setTipCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                >
                  <option>Politics / Government</option>
                  <option>Corporate Accountability & Finance</option>
                  <option>National Security & Defense</option>
                  <option>Technology & Artificial Intelligence</option>
                  <option>Climate & Environmental Harm</option>
                  <option>Other Public Interest Story</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-800 block mb-1">
                  What is the documentation or evidence?
                </label>
                <textarea
                  rows={4}
                  required
                  value={tipDetails}
                  onChange={(e) => setTipDetails(e.target.value)}
                  placeholder="Describe what occurred, who was involved, and what corroborating records or public filings exist..."
                  className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none text-xs"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="secureUpload"
                  checked={isSecureUpload}
                  onChange={(e) => setIsSecureUpload(e.target.checked)}
                  className="rounded text-black focus:ring-0"
                />
                <label htmlFor="secureUpload" className="text-[11px] text-gray-600">
                  Strip metadata and anonymize routing packets
                </label>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-nytBorder">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded font-bold hover:border-black text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800 text-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Transmit Tip
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
