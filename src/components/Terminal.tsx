import { useState, useEffect } from "react";

interface TerminalProps {
  lines: string[];
  delay?: number;
}

export const Terminal = ({ lines, delay = 50 }: TerminalProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (currentLineIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + "\n");
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, delay * 10);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, lines, delay]);

  return (
    <div className="code-font text-sm leading-relaxed whitespace-pre-wrap">
      {displayedText}
      <span className="animate-pulse-glow text-primary">_</span>
    </div>
  );
};
