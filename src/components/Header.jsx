import { useEffect, useState } from 'react';
import './Header.css';

export default function Header({ onCVClick }) {
  const [command, setCommand] = useState('');
  const [outputVisible, setOutputVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const fullCommand = 'whoami';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullCommand.length) {
        setCommand(fullCommand.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setOutputVisible(true), 600);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <header className="terminal-header">
      <div className="terminal-top-bar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="terminal-title">juan@dev: ~</span>
      </div>

      <div className="terminal-body">
        <p className="terminal-line">
          <span className="prompt">$</span>{command}
          <span className="cursor"></span>
        </p>
        {outputVisible && (
          <p className="terminal-output">
            Backend & Infra Engineer · Spring Boot · GCP · Claude Certified · AWS Certified
          </p>
        )}
      </div>

      <div className="nav-container">
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="prompt">$</span>menu{menuOpen ? ' ×' : <span className="cursor-blink"></span>}
        </button>

        <nav className={`terminal-nav ${menuOpen ? 'mobile-open' : ''}`}>
          <span className="desktop-prompt">
            <span className="prompt">$</span>menu<span className="colon">:</span>
          </span>
          <a href="#experience" onClick={() => setMenuOpen(false)}>experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>cert</a>
          <a href="#code" onClick={() => setMenuOpen(false)}>code</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>blog</a>
          <button onClick={() => { onCVClick(); setMenuOpen(false); }} className="nav-cv-btn">cv</button>
        </nav>
      </div>
    </header>
  );
}
