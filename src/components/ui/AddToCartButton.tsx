import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import type { MenuEntry } from '@/siteConfig';
import { Check } from 'lucide-react';

interface Props {
  item: MenuEntry;
  className?: string;
}

export function AddToCartButton({ item, className = '' }: Props) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <style>{`
        .btn-add-to-cart {
          display: inline-block;
          background: transparent;
          color: var(--brand-primary);
          border: 2px solid var(--brand-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-add-to-cart:hover {
          background: var(--brand-primary);
          color: var(--brand-on-primary);
          border-color: var(--brand-primary);
        }
        .btn-add-to-cart:active {
          transform: scale(0.97);
        }
      `}</style>

      <button onClick={handleAdd} className={`btn-add-to-cart ${className}`}>
        Add to Cart
      </button>

      {showToast && (
        <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-5 duration-200 md:bottom-8">
          <div className="flex items-center gap-3 border-2 border-brand bg-panel px-4 py-3 shadow-lg">
            <Check size={18} style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-black uppercase tracking-wide">
              {item.name} added to cart
            </span>
          </div>
        </div>
      )}
    </>
  );
}