import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// FIX 8 — Reusable BackButton component
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--color-text-secondary, #6B6B6B)',
        fontSize: '14px',
        padding: '8px 0',
        marginBottom: '12px',
        minHeight: '44px',
        minWidth: '44px',
      }}
      aria-label="Go back"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
