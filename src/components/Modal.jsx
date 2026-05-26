import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal({ isOpen, onClose, type, src, title }) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    if (type === 'video') {
      return (
        <video
          controls
          autoPlay
          style={{ width: '100%', maxHeight: '70vh', borderRadius: '8px' }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (type === 'pdf') {
      // Detect mobile/tablet devices (including modern iPads that report as Macintosh)
      const isMobileUA = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // Detect touch devices (includes iPads that identify as Mac)
      const isTouchDevice = (navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
      const isMobile = isMobileUA || isTouchDevice;

      if (isMobile) {
        // Mobile: Show buttons to open in native viewer
        return (
          <div className="pdf-mobile-fallback">
            <div className="fallback-icon">📄</div>
            <h4>{title}</h4>
            <p>PDFs work best in your device's native viewer</p>
            <div className="fallback-buttons">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={(e) => e.stopPropagation()}
              >
                Open PDF
              </a>
              <a
                href={src}
                download
                className="btn-secondary"
                onClick={(e) => e.stopPropagation()}
              >
                Download PDF
              </a>
            </div>
          </div>
        );
      }

      // Desktop: Standard iframe works fine
      return (
        <iframe
          src={src}
          title={title}
          style={{ width: '100%', height: '80vh', border: 'none', borderRadius: '8px' }}
        />
      );
    }
    return null;
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className={`modal-container modal-${type}`}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-content">
          {renderContent()}
        </div>
      </div>
    </div>,
    document.body
  );
}
