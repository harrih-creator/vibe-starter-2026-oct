import React, { useState } from 'react';
import { X, Check, Shield } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'digital' | 'allaccess'>('digital');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
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
            <span className="font-masthead text-xl">The New York Times</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 text-xs">
          {isSubscribed ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-bold">Welcome to The Times</h3>
              <p className="text-gray-600">
                A verification link has been sent to <strong>{email}</strong>. Enjoy unlimited digital access!
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-nytBlue block mb-1">
                  Limited-Time Subscription Offer
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-nytBlack">
                  Independent Journalism Worth Paying For.
                </h3>
                <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                  Subscribe today for only $1 a week for your first year. Cancel anytime.
                </p>
              </div>

              {/* Plans */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div
                  onClick={() => setSelectedPlan('digital')}
                  className={`p-3.5 border rounded cursor-pointer transition ${
                    selectedPlan === 'digital'
                      ? 'border-black bg-blue-50/50 shadow-sm ring-1 ring-black'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-sm block">Basic Digital</span>
                  <div className="text-xl font-bold text-nytBlack my-1">$1<span className="text-xs font-normal text-gray-500">/week</span></div>
                  <p className="text-[11px] text-gray-600">Full access to NYTimes.com and apps.</p>
                </div>

                <div
                  onClick={() => setSelectedPlan('allaccess')}
                  className={`p-3.5 border rounded cursor-pointer transition ${
                    selectedPlan === 'allaccess'
                      ? 'border-black bg-blue-50/50 shadow-sm ring-1 ring-black'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <span className="font-bold text-sm block">All Access Bundle</span>
                  <div className="text-xl font-bold text-nytBlack my-1">$2.50<span className="text-xs font-normal text-gray-500">/week</span></div>
                  <p className="text-[11px] text-gray-600">News + Games, Cooking, Wirecutter & The Athletic.</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div>
                  <label className="font-bold text-gray-800 block mb-1">Enter your email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full p-2 border border-gray-300 rounded focus:border-black focus:outline-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-nytBlue hover:bg-[#255273] text-white font-bold rounded text-xs tracking-wider uppercase transition shadow"
                >
                  Start Subscription · $1/Week
                </button>

                <p className="text-[10px] text-gray-500 text-center leading-normal">
                  You’ll be billed $4 every 4 weeks for your first year. Automatically renews at standard rate unless cancelled.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
