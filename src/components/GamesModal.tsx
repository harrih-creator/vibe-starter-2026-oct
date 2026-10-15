import React, { useState, useEffect } from 'react';
import { X, CheckCircle, RotateCcw, Share2, Timer, Sparkles } from 'lucide-react';
import { GameKey } from '../types/news';

interface GamesModalProps {
  gameKey: GameKey | null;
  onClose: () => void;
}

export const GamesModal: React.FC<GamesModalProps> = ({ gameKey, onClose }) => {
  const [activeTab, setActiveTab] = useState<GameKey>(gameKey || 'wordle');

  // WORDLE STATE
  const TARGET_WORD = 'TIMES';
  const [wordleGuesses, setWordleGuesses] = useState<string[]>(['']);
  const [wordleCurrentInput, setWordleCurrentInput] = useState<string>('');
  const [wordleGameOver, setWordleGameOver] = useState<boolean>(false);
  const [wordleWon, setWordleWon] = useState<boolean>(false);
  const [copiedWordle, setCopiedWordle] = useState<boolean>(false);

  // THE MINI STATE
  const MINI_SOLUTION = [
    ['P', 'R', 'I', 'N', 'T'],
    ['A', 'L', 'O', 'N', 'E'],
    ['P', 'A', 'P', 'E', 'R'],
    ['E', 'V', 'E', 'N', 'T'],
    ['R', 'E', 'A', 'D', 'S'],
  ];
  const [miniGrid, setMiniGrid] = useState<string[][]>([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);
  const [miniChecked, setMiniChecked] = useState<boolean>(false);
  const [miniWon, setMiniWon] = useState<boolean>(false);
  const [miniSeconds, setMiniSeconds] = useState<number>(0);
  const [selectedClue, setSelectedClue] = useState<string>('1A');

  // Timer for the mini
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeTab === 'mini' && !miniWon) {
      interval = setInterval(() => setMiniSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [activeTab, miniWon]);

  // CONNECTIONS STATE
  const CONNECTIONS_ITEMS = [
    { word: 'MASTHEAD', category: 'NEWSPAPER PARTS', color: 'bg-[#F9DF6D]' },
    { word: 'BYLINE', category: 'NEWSPAPER PARTS', color: 'bg-[#F9DF6D]' },
    { word: 'HEADLINE', category: 'NEWSPAPER PARTS', color: 'bg-[#F9DF6D]' },
    { word: 'COLUMN', category: 'NEWSPAPER PARTS', color: 'bg-[#F9DF6D]' },

    { word: 'EARBUDS', category: 'CORDLESS DEVICES', color: 'bg-[#A0C35A]' },
    { word: 'VACUUM', category: 'CORDLESS DEVICES', color: 'bg-[#A0C35A]' },
    { word: 'DRILL', category: 'CORDLESS DEVICES', color: 'bg-[#A0C35A]' },
    { word: 'MOUSE', category: 'CORDLESS DEVICES', color: 'bg-[#A0C35A]' },

    { word: 'HOMER', category: 'BASEBALL TERMS', color: 'bg-[#B0C4EF]' },
    { word: 'BUNT', category: 'BASEBALL TERMS', color: 'bg-[#B0C4EF]' },
    { word: 'STEAL', category: 'BASEBALL TERMS', color: 'bg-[#B0C4EF]' },
    { word: 'STRIKE', category: 'BASEBALL TERMS', color: 'bg-[#B0C4EF]' },

    { word: 'TURKEY', category: 'MEATBALL INGREDIENTS', color: 'bg-[#BA81C5]' },
    { word: 'PORK', category: 'MEATBALL INGREDIENTS', color: 'bg-[#BA81C5]' },
    { word: 'BEEF', category: 'MEATBALL INGREDIENTS', color: 'bg-[#BA81C5]' },
    { word: 'RICOTTA', category: 'MEATBALL INGREDIENTS', color: 'bg-[#BA81C5]' },
  ];

  const [connectionsShuffled, setConnectionsShuffled] = useState(
    [...CONNECTIONS_ITEMS].sort(() => Math.random() - 0.5)
  );
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [solvedCategories, setSolvedCategories] = useState<string[]>([]);
  const [mistakesLeft, setMistakesLeft] = useState<number>(4);
  const [connectionsMsg, setConnectionsMsg] = useState<string>('');

  // SPELLING BEE STATE
  const [spellingBeeInput, setSpellingBeeInput] = useState<string>('');
  const [spellingBeeWords, setSpellingBeeWords] = useState<string[]>(['TIMES', 'STATE']);
  const [beeScore, setBeeScore] = useState<number>(14);

  // Sync tab with props
  useEffect(() => {
    if (gameKey) setActiveTab(gameKey);
  }, [gameKey]);

  if (!gameKey) return null;

  // Handle Wordle key
  const handleWordleKey = (key: string) => {
    if (wordleGameOver) return;
    if (key === 'ENTER') {
      if (wordleCurrentInput.length !== 5) return;
      const newGuesses = [...wordleGuesses];
      newGuesses[newGuesses.length - 1] = wordleCurrentInput.toUpperCase();
      if (wordleCurrentInput.toUpperCase() === TARGET_WORD) {
        setWordleWon(true);
        setWordleGameOver(true);
        setWordleGuesses(newGuesses);
      } else if (newGuesses.length >= 6) {
        setWordleGameOver(true);
        setWordleGuesses(newGuesses);
      } else {
        newGuesses.push('');
        setWordleGuesses(newGuesses);
        setWordleCurrentInput('');
      }
    } else if (key === 'BACKSPACE') {
      setWordleCurrentInput((prev) => prev.slice(0, -1));
    } else if (/^[A-Z]$/i.test(key) && wordleCurrentInput.length < 5) {
      setWordleCurrentInput((prev) => (prev + key).toUpperCase());
    }
  };

  const getWordleKeyColor = (char: string) => {
    let status = '';
    for (const g of wordleGuesses) {
      if (!g || g.length < 5) continue;
      for (let i = 0; i < 5; i++) {
        if (g[i] === char) {
          if (TARGET_WORD[i] === char) return 'bg-[#6AAA64] text-white';
          if (TARGET_WORD.includes(char)) status = 'bg-[#C9B458] text-white';
          else if (!status) status = 'bg-[#787C7E] text-white';
        }
      }
    }
    return status || 'bg-gray-200 hover:bg-gray-300 text-black';
  };

  const copyWordleShare = () => {
    const text = `Wordle Wednesday (Oct 14, 2026) ${wordleGuesses.length}/6\n\n🟩🟩🟩🟩🟩`;
    navigator.clipboard?.writeText(text);
    setCopiedWordle(true);
    setTimeout(() => setCopiedWordle(false), 2000);
  };

  const resetWordle = () => {
    setWordleGuesses(['']);
    setWordleCurrentInput('');
    setWordleGameOver(false);
    setWordleWon(false);
  };

  // Handle Connections toggle
  const toggleConnectionWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else if (selectedWords.length < 4) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const submitConnections = () => {
    if (selectedWords.length !== 4) return;
    const items = CONNECTIONS_ITEMS.filter((i) => selectedWords.includes(i.word));
    const firstCat = items[0].category;
    const allMatch = items.every((i) => i.category === firstCat);

    if (allMatch) {
      setSolvedCategories([...solvedCategories, firstCat]);
      setSelectedWords([]);
      setConnectionsMsg(`Group Solved: ${firstCat}!`);
      setTimeout(() => setConnectionsMsg(''), 2500);
    } else {
      setMistakesLeft((prev) => Math.max(0, prev - 1));
      setConnectionsMsg('Not quite! Try another combination.');
      setTimeout(() => setConnectionsMsg(''), 2000);
    }
  };

  // Handle Mini Check
  const checkMiniCrossword = () => {
    let allCorrect = true;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (miniGrid[r][c].toUpperCase() !== MINI_SOLUTION[r][c]) {
          allCorrect = false;
        }
      }
    }
    setMiniChecked(true);
    setMiniWon(allCorrect);
  };

  const autoFillMini = () => {
    setMiniGrid(MINI_SOLUTION.map((row) => [...row]));
    setMiniChecked(true);
    setMiniWon(true);
  };

  const formatMiniTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white border border-black w-full max-w-2xl rounded-none shadow-2xl relative my-auto max-h-[92vh] flex flex-col font-sansMeta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-black p-3.5 flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center space-x-2">
            <span className="font-masthead text-xl font-normal">NYT Games</span>
            <span className="text-gray-400">|</span>
            <span className="text-xs font-bold uppercase tracking-wider text-nytBlack">
              Daily Brain Puzzles
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-black hover:bg-gray-200 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Tabs */}
        <div className="flex border-b border-nytBorder text-xs font-sansMeta font-semibold bg-white overflow-x-auto">
          {[
            { id: 'wordle', label: 'Wordle', icon: 'W', color: 'bg-[#6AAA64] text-white' },
            { id: 'mini', label: 'The Mini', icon: 'M', color: 'bg-[#4A90E2] text-white' },
            { id: 'connections', label: 'Connections', icon: 'C', color: 'bg-[#B4A7D6] text-white' },
            { id: 'spellingBee', label: 'Spelling Bee', icon: '🐝', color: 'bg-[#F7DA21] text-black' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as GameKey)}
              className={`flex items-center gap-1.5 px-4 py-2.5 border-r border-nytBorder whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-b-2 border-b-black bg-gray-50 text-black font-bold'
                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }`}
            >
              <span className={`w-4 h-4 rounded text-[10px] flex items-center justify-center font-bold ${tab.color}`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {/* WORDLE TAB */}
          {activeTab === 'wordle' && (
            <div className="max-w-md mx-auto flex flex-col items-center">
              <div className="text-center mb-4">
                <h3 className="font-headline text-2xl font-bold">Wordle</h3>
                <p className="text-xs text-gray-500 mt-0.5">Guess the 5-letter word in 6 tries.</p>
              </div>

              {/* Wordle Grid */}
              <div className="grid grid-rows-6 gap-1.5 mb-4 w-[280px]">
                {Array.from({ length: 6 }).map((_, rowIndex) => {
                  const isCurrentRow = rowIndex === wordleGuesses.length - 1 && !wordleGameOver;
                  const rowWord = isCurrentRow
                    ? wordleCurrentInput
                    : wordleGuesses[rowIndex] || '';

                  return (
                    <div key={rowIndex} className="grid grid-cols-5 gap-1.5">
                      {Array.from({ length: 5 }).map((_, colIndex) => {
                        const letter = rowWord[colIndex] || '';
                        let cellBg = 'bg-white border-2 border-gray-300 text-black';

                        if (!isCurrentRow && wordleGuesses[rowIndex]) {
                          if (TARGET_WORD[colIndex] === letter) {
                            cellBg = 'bg-[#6AAA64] border-[#6AAA64] text-white font-bold';
                          } else if (TARGET_WORD.includes(letter)) {
                            cellBg = 'bg-[#C9B458] border-[#C9B458] text-white font-bold';
                          } else {
                            cellBg = 'bg-[#787C7E] border-[#787C7E] text-white font-bold';
                          }
                        } else if (letter) {
                          cellBg = 'bg-white border-2 border-black text-black font-bold';
                        }

                        return (
                          <div
                            key={colIndex}
                            className={`w-12 h-12 flex items-center justify-center text-xl uppercase transition-all duration-200 ${cellBg}`}
                          >
                            {letter}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Status Message */}
              {wordleGameOver && (
                <div className="mb-4 text-center p-3.5 border border-black bg-gray-50 w-full rounded animate-in zoom-in-95 duration-200">
                  {wordleWon ? (
                    <div className="space-y-1.5">
                      <div className="text-emerald-700 font-bold flex items-center justify-center gap-1.5 text-sm">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Genius! You solved Wordle in {wordleGuesses.length} guesses!</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 pt-1">
                        <button
                          onClick={copyWordleShare}
                          className="px-3 py-1 bg-black text-white text-xs font-bold rounded flex items-center gap-1 hover:bg-gray-800 transition cursor-pointer"
                        >
                          <Share2 className="w-3 h-3" />
                          <span>{copiedWordle ? 'Copied to Clipboard!' : 'Share Result'}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-red-700 font-bold">
                      The word was <span className="underline">{TARGET_WORD}</span>. Better luck tomorrow!
                    </div>
                  )}
                  <button
                    onClick={resetWordle}
                    className="mt-2 text-xs font-bold underline hover:text-black flex items-center justify-center gap-1 mx-auto cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Play Again
                  </button>
                </div>
              )}

              {/* Virtual Keyboard with dynamic key colors */}
              <div className="w-full max-w-sm space-y-1.5 select-none">
                {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, rIdx) => (
                  <div key={rIdx} className="flex justify-center gap-1">
                    {rIdx === 2 && (
                      <button
                        onClick={() => handleWordleKey('ENTER')}
                        className="px-2 py-3 bg-gray-200 hover:bg-gray-300 text-[10px] font-bold rounded cursor-pointer transition active:scale-95"
                      >
                        ENTER
                      </button>
                    )}
                    {row.split('').map((char) => (
                      <button
                        key={char}
                        onClick={() => handleWordleKey(char)}
                        className={`w-8 h-10 font-bold text-sm rounded flex items-center justify-center cursor-pointer transition active:scale-95 ${getWordleKeyColor(char)}`}
                      >
                        {char}
                      </button>
                    ))}
                    {rIdx === 2 && (
                      <button
                        onClick={() => handleWordleKey('BACKSPACE')}
                        className="px-2.5 py-3 bg-gray-200 hover:bg-gray-300 text-xs font-bold rounded cursor-pointer transition active:scale-95"
                      >
                        ⌫
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* THE MINI CROSSWORD TAB */}
          {activeTab === 'mini' && (
            <div className="max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-nytBorder">
                <div>
                  <h3 className="font-headline text-2xl font-bold">The Mini Crossword</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <span className="flex items-center gap-1 font-mono font-bold text-black">
                      <Timer className="w-3.5 h-3.5" /> {formatMiniTime(miniSeconds)}
                    </span>
                    <span>· Wednesday, October 14, 2026</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={checkMiniCrossword}
                    className="px-3 py-1 bg-black text-white text-xs font-bold hover:bg-gray-800 transition cursor-pointer"
                  >
                    Check
                  </button>
                  <button
                    onClick={autoFillMini}
                    className="px-3 py-1 border border-gray-400 text-xs font-bold hover:border-black transition cursor-pointer"
                  >
                    Solve
                  </button>
                </div>
              </div>

              {miniWon && (
                <div className="mb-4 bg-emerald-50 border border-emerald-400 p-2.5 text-xs text-emerald-800 font-bold text-center animate-in zoom-in-95">
                  🎉 Congratulations! You solved the Wednesday Mini Crossword in {formatMiniTime(miniSeconds)}!
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 5x5 Crossword Grid */}
                <div className="w-[220px] mx-auto md:mx-0">
                  <div className="grid grid-cols-5 border-2 border-black bg-black gap-[1px]">
                    {miniGrid.map((row, r) =>
                      row.map((cell, c) => {
                        const cellNum =
                          r === 0 && c === 0 ? '1' :
                          r === 0 && c === 1 ? '2' :
                          r === 0 && c === 2 ? '3' :
                          r === 0 && c === 3 ? '4' :
                          r === 0 && c === 4 ? '5' :
                          r === 1 && c === 0 ? '6' :
                          r === 2 && c === 0 ? '7' :
                          r === 3 && c === 0 ? '8' :
                          r === 4 && c === 0 ? '9' : null;

                        const isError = miniChecked && cell && cell.toUpperCase() !== MINI_SOLUTION[r][c];

                        return (
                          <div key={`${r}-${c}`} className="relative bg-white aspect-square">
                            {cellNum && (
                              <span className="absolute top-0.5 left-0.5 text-[9px] text-gray-500 font-bold leading-none select-none">
                                {cellNum}
                              </span>
                            )}
                            <input
                              type="text"
                              maxLength={1}
                              value={cell}
                              onChange={(e) => {
                                const newGrid = miniGrid.map((rowArr) => [...rowArr]);
                                newGrid[r][c] = e.target.value.toUpperCase();
                                setMiniGrid(newGrid);
                              }}
                              className={`w-full h-full text-center text-lg font-bold uppercase focus:bg-blue-100 focus:outline-none ${
                                isError ? 'text-red-600 bg-red-50' : 'text-black'
                              }`}
                            />
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Clues Column */}
                <div className="text-xs space-y-3">
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-1.5">
                      Across
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li><strong>1</strong> Classic paper medium (PRINT)</li>
                      <li><strong>6</strong> By oneself, solo (ALONE)</li>
                      <li><strong>7</strong> Morning news sheet (PAPER)</li>
                      <li><strong>8</strong> Breaking scheduled gathering (EVENT)</li>
                      <li><strong>9</strong> Peruses the morning edition (READS)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-1.5">
                      Down
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li><strong>1</strong> Paper sheet (PAPER)</li>
                      <li><strong>2</strong> White House press room (ROSTRUM)</li>
                      <li><strong>3</strong> Essential target point (IP)</li>
                      <li><strong>4</strong> None other than (NONE)</li>
                      <li><strong>5</strong> Front page lead title (TEXT)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONNECTIONS TAB */}
          {activeTab === 'connections' && (
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-4">
                <h3 className="font-headline text-2xl font-bold">Connections</h3>
                <p className="text-xs text-gray-500">Group four words that share a common thread.</p>
              </div>

              {/* Solved Rows */}
              <div className="space-y-2 mb-3">
                {solvedCategories.map((cat) => {
                  const items = CONNECTIONS_ITEMS.filter((i) => i.category === cat);
                  const color = items[0]?.color || 'bg-gray-100';
                  return (
                    <div key={cat} className={`p-3 rounded text-center ${color} border border-black/10`}>
                      <span className="font-bold text-xs uppercase tracking-wider block text-black">
                        {cat}
                      </span>
                      <span className="text-xs text-gray-800">
                        {items.map((i) => i.word).join(', ')}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Feedback toast */}
              {connectionsMsg && (
                <div className="text-center text-xs font-bold text-[#326891] mb-2 animate-bounce">
                  {connectionsMsg}
                </div>
              )}

              {/* Remaining Grid */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {connectionsShuffled
                  .filter((item) => !solvedCategories.includes(item.category))
                  .map((item) => {
                    const isSelected = selectedWords.includes(item.word);
                    return (
                      <button
                        key={item.word}
                        onClick={() => toggleConnectionWord(item.word)}
                        className={`h-16 flex items-center justify-center font-bold text-xs uppercase p-1 border rounded transition text-center cursor-pointer ${
                          isSelected
                            ? 'bg-[#5A5A5A] text-white border-black scale-[0.98]'
                            : 'bg-[#EFEFE6] text-black border-transparent hover:bg-[#E2E2D8]'
                        }`}
                      >
                        {item.word}
                      </button>
                    );
                  })}
              </div>

              {/* Mistakes Counter & Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-nytBorder text-xs">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <span>Mistakes remaining:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: mistakesLeft }).map((_, i) => (
                      <span key={i} className="w-2 h-2 rounded-full bg-black inline-block" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setConnectionsShuffled([...connectionsShuffled].sort(() => Math.random() - 0.5));
                    }}
                    className="px-3 py-1.5 border border-gray-400 rounded-full text-xs font-semibold hover:border-black cursor-pointer"
                  >
                    Shuffle
                  </button>
                  <button
                    onClick={() => setSelectedWords([])}
                    className="px-3 py-1.5 border border-gray-400 rounded-full text-xs font-semibold hover:border-black cursor-pointer"
                  >
                    Deselect all
                  </button>
                  <button
                    onClick={submitConnections}
                    disabled={selectedWords.length !== 4}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                      selectedWords.length === 4
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SPELLING BEE TAB */}
          {activeTab === 'spellingBee' && (
            <div className="max-w-md mx-auto text-center">
              <h3 className="font-headline text-2xl font-bold">Spelling Bee</h3>
              <p className="text-xs text-gray-500 mb-4">How many words can you make with 7 letters?</p>

              {/* Honeycomb Display */}
              <div className="relative w-48 h-48 mx-auto mb-4 select-none">
                {/* Center Yellow Hive Letter */}
                <button
                  onClick={() => setSpellingBeeInput((p) => p + 'T')}
                  className="absolute top-[36%] left-[36%] w-14 h-14 bg-[#F7DA21] hover:bg-[#ebd01e] rounded-full flex items-center justify-center font-bold text-2xl text-black shadow-md cursor-pointer transition active:scale-95"
                >
                  T
                </button>
                {/* Outer Letters */}
                {[
                  { char: 'I', pos: 'top-1 left-[36%]' },
                  { char: 'M', pos: 'top-8 right-2' },
                  { char: 'E', pos: 'bottom-8 right-2' },
                  { char: 'S', pos: 'bottom-1 left-[36%]' },
                  { char: 'A', pos: 'bottom-8 left-2' },
                  { char: 'N', pos: 'top-8 left-2' },
                ].map((item) => (
                  <button
                    key={item.char}
                    onClick={() => setSpellingBeeInput((p) => p + item.char)}
                    className={`absolute ${item.pos} w-13 h-13 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold text-xl text-black shadow-sm cursor-pointer transition active:scale-95`}
                  >
                    {item.char}
                  </button>
                ))}
              </div>

              {/* Input Display */}
              <div className="h-10 border-b-2 border-black flex items-center justify-center text-xl font-bold tracking-widest uppercase mb-3">
                {spellingBeeInput || <span className="text-gray-300">TYPE OR CLICK</span>}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <button
                  onClick={() => setSpellingBeeInput((p) => p.slice(0, -1))}
                  className="px-3 py-1 border border-gray-400 rounded-full text-xs font-semibold hover:border-black cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    if (spellingBeeInput.length >= 4 && spellingBeeInput.includes('T')) {
                      if (!spellingBeeWords.includes(spellingBeeInput)) {
                        setSpellingBeeWords([...spellingBeeWords, spellingBeeInput]);
                        setBeeScore((s) => s + spellingBeeInput.length);
                      }
                      setSpellingBeeInput('');
                    }
                  }}
                  className="px-5 py-1 bg-black text-white rounded-full text-xs font-bold hover:bg-gray-800 cursor-pointer"
                >
                  Enter
                </button>
              </div>

              <div className="p-3 bg-gray-50 border border-nytBorder text-xs text-left">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold">Score: {beeScore} pts (Rank: Solid)</span>
                  <span className="text-gray-500">{spellingBeeWords.length} words found</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-gray-700">
                  {spellingBeeWords.map((w, i) => (
                    <span key={i} className="bg-white border border-gray-200 px-2 py-0.5 rounded text-[11px] font-medium">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
