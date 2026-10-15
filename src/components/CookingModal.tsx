import React, { useState, useEffect } from 'react';
import { X, Clock, Users, ChefHat, Play, Pause, RotateCcw, Check } from 'lucide-react';

interface CookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookingModal: React.FC<CookingModalProps> = ({ isOpen, onClose }) => {
  const [servings, setServings] = useState(4);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  
  // Kitchen Timer state
  const [timerSeconds, setTimerSeconds] = useState(20 * 60); // 20 mins simmer
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds((s) => s - 1), 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  if (!isOpen) return null;

  const ingredients = [
    { name: 'Ground meat (beef chuck, pork shoulder, dark turkey or plant grounds)', baseQty: 1, unit: 'lb' },
    { name: 'Whole-milk ricotta cheese (or whole milk)', baseQty: 0.5, unit: 'cup' },
    { name: 'Panko breadcrumbs', baseQty: 0.5, unit: 'cup' },
    { name: 'Finely grated Parmigiano-Reggiano', baseQty: 0.5, unit: 'cup' },
    { name: 'Large egg, lightly beaten', baseQty: 1, unit: 'egg' },
    { name: 'Garlic cloves, finely grated', baseQty: 2, unit: 'cloves' },
    { name: 'Fennel seeds, toasted and crushed', baseQty: 0.75, unit: 'tsp' },
    { name: 'Kosher salt and freshly cracked black pepper', baseQty: 1, unit: 'pinch' },
    { name: 'Extra-virgin olive oil for pan-searing', baseQty: 2, unit: 'tbsp' },
    { name: 'Marinara or crushed San Marzano tomato sauce', baseQty: 3, unit: 'cups' },
    { name: 'Fresh basil leaves for garnish', baseQty: 0.25, unit: 'cup' },
  ];

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white border border-black w-full max-w-2xl shadow-2xl relative my-auto max-h-[92vh] flex flex-col font-sansMeta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-black p-4 flex items-center justify-between bg-[#FCFAF6]">
          <div className="flex items-center space-x-2">
            <span className="font-masthead text-xl font-normal">NYT Cooking</span>
            <span className="text-gray-400">|</span>
            <span className="text-xs font-bold uppercase tracking-wider text-nytBlack">
              Recipe Guide
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black hover:bg-gray-200 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="mb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-nytRed block mb-1">
              Easy Weeknight Recipe
            </span>
            <h2 className="font-headline text-3xl font-bold text-nytBlack">
              Meatballs With Any Meat: The Flexible Weeknight Formula
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              By Melissa Clark · Published in The New York Times Magazine
            </p>
          </div>

          {/* Hero photo */}
          <div className="w-full h-64 overflow-hidden rounded bg-gray-100 mb-6 border border-nytBorder">
            <img
              src="/src/assets/images/cooking_meatballs_skillet_1792029115037.jpg"
              alt="Skillet meatballs with tomato sauce and fresh basil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cooking metadata bar */}
          <div className="grid grid-cols-3 gap-4 border-y border-nytBorder py-3 mb-6 text-center text-xs">
            <div>
              <span className="text-gray-400 block uppercase text-[10px] font-semibold">Prep Time</span>
              <span className="font-bold text-gray-800">15 mins</span>
            </div>
            <div>
              <span className="text-gray-400 block uppercase text-[10px] font-semibold">Total Time</span>
              <span className="font-bold text-gray-800">35 mins</span>
            </div>
            <div>
              <span className="text-gray-400 block uppercase text-[10px] font-semibold">Yield</span>
              <span className="font-bold text-gray-800">{servings} servings</span>
            </div>
          </div>

          {/* Interactive Simmer Timer */}
          <div className="bg-[#FAF7EE] border border-[#E8DEC7] p-3 rounded mb-6 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-800" />
              <div>
                <span className="font-bold text-amber-900 block">Simmer Timer:</span>
                <span className="text-gray-600 text-[11px]">20-minute skillet reduction</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-mono text-lg font-bold text-amber-950">{formatTimer(timerSeconds)}</span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-1.5 bg-amber-800 text-white rounded hover:bg-amber-900 transition"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(20 * 60);
                }}
                className="p-1.5 border border-amber-800 text-amber-800 rounded hover:bg-amber-100 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Servings Adjuster */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold uppercase text-xs tracking-wider text-nytBlack">Ingredients</h3>
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-500">Servings:</span>
              <button
                onClick={() => setServings((s) => Math.max(2, s - 2))}
                className="w-6 h-6 border border-gray-300 rounded font-bold hover:border-black"
              >
                -
              </button>
              <span className="font-bold">{servings}</span>
              <button
                onClick={() => setServings((s) => Math.min(12, s + 2))}
                className="w-6 h-6 border border-gray-300 rounded font-bold hover:border-black"
              >
                +
              </button>
            </div>
          </div>

          {/* Ingredients Checklist */}
          <ul className="space-y-2 mb-8 text-xs border-b border-nytBorder pb-6">
            {ingredients.map((ing, idx) => {
              const scaledQty = ((ing.baseQty * servings) / 4).toFixed(1).replace(/\.0$/, '');
              const isChecked = !!checkedIngredients[idx];

              return (
                <li
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`flex items-start space-x-2.5 p-1.5 rounded cursor-pointer transition ${
                    isChecked ? 'bg-gray-100 text-gray-400 line-through' : 'hover:bg-gray-50 text-gray-800'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                    isChecked ? 'bg-black border-black text-white' : 'border-gray-400 bg-white'
                  }`}>
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                  <span>
                    <strong className="text-black">{scaledQty} {ing.unit}</strong> {ing.name}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Steps */}
          <div>
            <h3 className="font-bold uppercase text-xs tracking-wider text-nytBlack mb-3">Preparation</h3>
            <ol className="space-y-4 text-xs font-body-serif text-gray-800 leading-relaxed list-decimal list-inside">
              <li>
                <strong className="font-sansMeta">Mix the Binder:</strong> In a wide bowl, gently whisk ricotta, breadcrumbs, grated parmesan, egg, garlic, fennel seed, 1 teaspoon salt, and pepper. Let hydrate for 5 minutes.
              </li>
              <li>
                <strong className="font-sansMeta">Incorporate Meat:</strong> Add ground meat of choice. Use fingertips to mix gently until combined; do not overwork the meat. Roll into 1.5-inch balls (about 16 meatballs).
              </li>
              <li>
                <strong className="font-sansMeta">Brown in Skillet:</strong> Heat olive oil in a heavy 12-inch cast-iron skillet over medium-high heat. Brown meatballs in batches for 2 to 3 minutes per side until a deep golden crust develops.
              </li>
              <li>
                <strong className="font-sansMeta">Simmer in Sauce:</strong> Pour warm marinara sauce gently around the meatballs. Turn heat to medium-low, cover partially with lid, and simmer 15 to 20 minutes until cooked through.
              </li>
              <li>
                <strong className="font-sansMeta">Garnish & Serve:</strong> Top with torn fresh basil, extra parmesan, and a swirl of virgin olive oil. Serve with crusty sourdough or pasta.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
