import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './Modal.css';
import './CVModal.css';

export default function CVModal({ isOpen, onClose }) {
  const [language, setLanguage] = useState('en');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const filename = language === 'en' ? 'resume-en.md' : 'resume-kr.md';

      fetch(`/${filename}`)
        .then(response => response.text())
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(error => {
          console.error('Failed to load CV:', error);
          setContent('Failed to load CV content');
          setLoading(false);
        });
    }
  }, [isOpen, language]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container modal-cv">
        <div className="modal-header">
          <div className="cv-header-content">
            <h3 className="modal-title">Curriculum Vitae</h3>
            <div className="language-toggle">
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
              <button
                className={`lang-btn ${language === 'kr' ? 'active' : ''}`}
                onClick={() => setLanguage('kr')}
              >
                한국어
              </button>
            </div>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-content cv-content">
          {loading ? (
            <p className="loading-text">Loading CV...</p>
          ) : (
            <>
              <div className="markdown-body">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
              <div className="cv-actions">
                <button className="btn-primary" onClick={handlePrint}>
                  Print CV
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
