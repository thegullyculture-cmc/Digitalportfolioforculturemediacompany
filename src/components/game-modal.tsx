import { useState } from "react";
import { X, Trophy } from "lucide-react";

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
  };
}

const questions = [
  {
    question: "What does D2C stand for in modern business?",
    options: ["Direct to Consumer", "Designed to Create", "Digital to Cash", "Data to Commerce"],
    correct: 0
  },
  {
    question: "Which Indian brand was featured in Shark Tank and became a unicorn?",
    options: ["Mamaearth", "Patanjali", "Dabur", "Himalaya"],
    correct: 0
  },
  {
    question: "What is the primary goal of brand positioning?",
    options: ["Lower prices", "Occupy unique space in customer's mind", "More ads", "Bigger logos"],
    correct: 1
  },
  {
    question: "Which shark is the co-founder of boAt Lifestyle?",
    options: ["Peyush Bansal", "Aman Gupta", "Ashneer Grover", "Anupam Mittal"],
    correct: 1
  },
  {
    question: "What makes a brand story authentic?",
    options: ["Celebrity endorsement", "Genuine origin & values", "Expensive production", "Viral marketing"],
    correct: 1
  },
  {
    question: "Which color psychology is best for food brands?",
    options: ["Blue", "Red & Yellow", "Black", "Purple"],
    correct: 1
  },
  {
    question: "What is the '7-second rule' in branding?",
    options: ["7 seconds to make website", "7 seconds to make first impression", "7 seconds ad length", "7 second load time"],
    correct: 1
  },
  {
    question: "Which Indian startup revolutionized eyewear retail?",
    options: ["Specsmakers", "Lenskart", "Titan Eye+", "GKB Opticals"],
    correct: 1
  },
  {
    question: "What does USP stand for in marketing?",
    options: ["Universal Sales Point", "Unique Selling Proposition", "Ultimate Service Provider", "User Satisfaction Product"],
    correct: 1
  },
  {
    question: "Which element is most crucial for Gen-Z branding?",
    options: ["Traditional media", "Authenticity & values", "Celebrity faces", "Radio ads"],
    correct: 1
  },
];

export function GameModal({ isOpen, onClose, theme }: GameModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setGameComplete(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setGameComplete(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className={`${theme.button} rounded-2xl sm:rounded-3xl max-w-2xl w-full relative p-6 sm:p-8`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:scale-110 transition-transform bg-black/50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {!gameComplete ? (
          <>
            <h2 
              className={`${theme.heading} text-3xl sm:text-4xl mb-4 font-black uppercase text-center`}
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CULTURE
            </h2>
            <p className={`${theme.accent} text-center mb-6 font-black uppercase tracking-wider`}>
              A Game for Indians - Test Your Branding Knowledge
            </p>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className={`${theme.accent} font-black`}>
                  Question {currentQuestion + 1}/{questions.length}
                </span>
                <span className={`${theme.accent} font-black`}>
                  Score: {score}
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-1 mb-6">
                <div 
                  className={`bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-lg transition-all duration-300`}
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="text-white text-xl sm:text-2xl mb-6 font-black leading-tight">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl font-bold transition-all ${
                      selectedAnswer === null
                        ? 'bg-white/10 hover:bg-white/20'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : index === questions[currentQuestion].correct
                        ? 'bg-green-500 text-white'
                        : 'bg-white/10'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <Trophy className={`${theme.accent.replace('text-', 'text-')} mx-auto mb-6`} size={80} />
            <h2 
              className={`${theme.heading} text-4xl sm:text-5xl mb-4 font-black uppercase`}
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Game Complete!
            </h2>
            <p className="text-white text-3xl mb-6 font-black">
              Your Score: {score}/{questions.length}
            </p>
            <p className={`${theme.accent} text-xl mb-8 font-bold`}>
              {score >= 8 ? "🎉 Branding Master!" : score >= 5 ? "👍 Good Knowledge!" : "📚 Keep Learning!"}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetGame}
                className={`${theme.accent.replace('text-', 'bg-')} text-gray-900 px-8 py-3 rounded-lg font-black uppercase hover:scale-105 transition-transform`}
              >
                Play Again
              </button>
              <button
                onClick={onClose}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-black uppercase hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
