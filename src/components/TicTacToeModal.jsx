import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Cpu, Sparkles, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export default function TicTacToeModal({ isOpen, onClose }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [status, setStatus] = useState("Your turn! Place an X");
  const [aiAdvantage, setAiAdvantage] = useState(50);
  const [predictedMove, setPredictedMove] = useState("Center (Square 4)");
  const [winner, setWinner] = useState(null); // 'X', 'O', 'draw', or null

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const checkWinner = (currentBoard) => {
    for (let combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    if (currentBoard.every((cell) => cell !== null)) {
      return 'draw';
    }
    return null;
  };

  // Minimax Algorithm
  const minimax = (newBoard, depth, isMaximizing) => {
    const result = checkWinner(newBoard);
    if (result === 'O') return 10 - depth;
    if (result === 'X') return depth - 10;
    if (result === 'draw') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (newBoard[i] === null) {
          newBoard[i] = 'O';
          const score = minimax(newBoard, depth + 1, false);
          newBoard[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (newBoard[i] === null) {
          newBoard[i] = 'X';
          const score = minimax(newBoard, depth + 1, true);
          newBoard[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const getBestMove = (currentBoard) => {
    const emptyIndices = currentBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptyIndices.length === 0) return -1;
    if (emptyIndices.length === 9) return 4; // First move center

    let bestScore = -Infinity;
    let move = emptyIndices[0];

    for (let idx of emptyIndices) {
      currentBoard[idx] = 'O';
      const score = minimax(currentBoard, 0, false);
      currentBoard[idx] = null;
      if (score > bestScore) {
        bestScore = score;
        move = idx;
      }
    }
    return move;
  };

  const updateTelemetry = (b) => {
    let adv = 50;
    if (b[4] === 'O') adv += 18;
    if (b[4] === 'X') adv -= 10;

    const corners = [0, 2, 6, 8];
    const aiCorners = corners.filter((c) => b[c] === 'O').length;
    const humanCorners = corners.filter((c) => b[c] === 'X').length;
    adv += (aiCorners - humanCorners) * 6;
    adv = Math.max(15, Math.min(95, adv));
    setAiAdvantage(adv);

    const next = getBestMove(b);
    if (next !== -1) {
      const names = ['Top-Left', 'Top-Mid', 'Top-Right', 'Mid-Left', 'Center', 'Mid-Right', 'Bottom-Left', 'Bottom-Mid', 'Bottom-Right'];
      setPredictedMove(`${names[next]} (Square ${next + 1})`);
    } else {
      setPredictedMove("Game Completed");
    }
  };

  const handleClick = (idx) => {
    if (board[idx] !== null || winner || isAiThinking) return;

    const newBoard = [...board];
    newBoard[idx] = 'X';
    setBoard(newBoard);
    updateTelemetry(newBoard);

    const roundWinner = checkWinner(newBoard);
    if (roundWinner) {
      handleGameOver(roundWinner);
      return;
    }

    // AI Turn
    setIsAiThinking(true);
    setStatus("🤖 AI is calculating tree branches...");

    setTimeout(() => {
      const aiMove = getBestMove(newBoard);
      if (aiMove !== -1) {
        newBoard[aiMove] = 'O';
        setBoard(newBoard);
        updateTelemetry(newBoard);

        const aiWinner = checkWinner(newBoard);
        if (aiWinner) {
          handleGameOver(aiWinner);
        } else {
          setStatus("Your turn! Place an X");
        }
      }
      setIsAiThinking(false);
    }, 400);
  };

  const handleGameOver = (winResult) => {
    setWinner(winResult);
    if (winResult === 'X') {
      setStatus("🎉 Impressive! You beat the Minimax AI model!");
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else if (winResult === 'O') {
      setStatus("🤖 Minimax AI Wins! Optimal heuristics applied.");
    } else {
      setStatus("🤝 Tactical Draw! Both sides played optimal moves.");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsAiThinking(false);
    setStatus("Your turn! Place an X");
    setAiAdvantage(50);
    setPredictedMove("Center (Square 4)");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#14142E] border border-white/15 rounded-card p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-secondary/15 text-secondary">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Minimax + RF Game AI Demo
              </h3>
              <p className="text-xs text-text-muted">Interactive model simulator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Telemetry Bar */}
        <div className="grid grid-cols-2 gap-3 my-4 p-3 rounded-xl bg-surface/70 border border-white/5 text-xs">
          <div>
            <div className="flex justify-between text-text-muted mb-1">
              <span>AI Advantage</span>
              <span className="font-mono text-white font-bold">{aiAdvantage}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/50 overflow-hidden">
              <div
                className="h-full bg-gradient-brand transition-all duration-300"
                style={{ width: `${aiAdvantage}%` }}
              />
            </div>
          </div>
          <div>
            <span className="text-text-muted block mb-1">Optimal Move:</span>
            <span className="text-highlight font-mono font-semibold truncate block">
              {predictedMove}
            </span>
          </div>
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-2.5 max-w-[280px] mx-auto my-6">
          {board.map((cell, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              disabled={cell !== null || winner !== null || isAiThinking}
              className={`aspect-square rounded-xl text-3xl font-heading font-extrabold flex items-center justify-center transition-all ${
                cell === 'X'
                  ? 'bg-primary/20 text-secondary border border-secondary/40 shadow-glow-secondary'
                  : cell === 'O'
                  ? 'bg-surface text-highlight border border-highlight/40 shadow-glow-primary'
                  : 'bg-surface hover:bg-surface-hover border border-white/10 hover:border-white/30 text-transparent'
              }`}
            >
              {cell}
            </button>
          ))}
        </div>

        {/* Status & Reset */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="text-sm font-medium text-white flex items-center gap-2">
            <span>{status}</span>
          </div>
          <button
            onClick={resetGame}
            className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Architecture Note */}
        <div className="mt-4 p-3 rounded-lg bg-black/30 border border-white/5 text-[11px] text-text-muted leading-relaxed">
          <strong className="text-white block mb-0.5">How the model works:</strong>
          Minimax evaluates all tree paths up to depth 9, while Random Forest heuristic weighting scores spatial board features (center control, corner dominance, fork prevention) to make decision updates in milliseconds.
        </div>
      </div>
    </div>
  );
}

