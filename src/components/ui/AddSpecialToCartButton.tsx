import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import { siteConfig, type LocationSpecial } from '@/siteConfig';
import { Check } from 'lucide-react';

interface Props {
  special: LocationSpecial;
  className?: string;
}

export function AddSpecialToCartButton({ special, className = '' }: Props) {
  const { addToCart, selectedLocationId } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const isSpecialAvailable = (): { ok: boolean; message: string } => {
    // Location check
    if (special.locationId && special.locationId !== selectedLocationId) {
      const locationName = siteConfig.locations.find(l => l.id === special.locationId)?.name || special.locationId;
      return {
        ok: false,
        message: `${special.name} is only available at ${locationName}. Please change your pickup location in the cart.`,
      };
    }
    // Day check
    if (special.availableDays && special.availableDays.length > 0) {
      const today = new Date().getDay();
      if (!special.availableDays.includes(today)) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const daysStr = special.availableDays.map(d => dayNames[d]).join(', ');
        return { ok: false, message: `${special.name} is only available on ${daysStr}.` };
      }
    }
    // Time check (optional – add if needed)
    if (special.availableHours) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const [startHour, startMin] = special.availableHours.start.split(':').map(Number);
      const [endHour, endMin] = special.availableHours.end.split(':').map(Number);
      const currentTotal = currentHour * 60 + currentMinute;
      const startTotal = startHour * 60 + startMin;
      const endTotal = endHour * 60 + endMin;
      if (currentTotal < startTotal || currentTotal > endTotal) {
        return {
          ok: false,
          message: `${special.name} is only available from ${special.availableHours.start} to ${special.availableHours.end}.`,
        };
      }
    }
    return { ok: true, message: '' };
  };

  const handleAdd = () => {
    const { ok, message } = isSpecialAvailable();
    if (!ok) {
      setToastMessage(message);
      setShowToast(true);
      return;
    }

    // Convert special to a menu-item-like object (CartContext accepts it)
    const specialAsMenuItem = {
      name: special.name,
      price: special.price || '',
      description: special.description || '',
      category: 'Specials' as any,
      tags: special.tags || [],
      image: special.image,
    };
    addToCart(specialAsMenuItem);
    setToastMessage(`${special.name} added to cart`);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <style>{`
        .btn-add-special {
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
        .btn-add-special:hover {
          background: var(--brand-primary);
          color: var(--brand-on-primary);
          border-color: var(--brand-primary);
        }
        .btn-add-special:active {
          transform: scale(0.97);
        }
      `}</style>

      <button onClick={handleAdd} className={`btn-add-special ${className}`}>
        Add to Cart
      </button>

      {showToast && (
        <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-5 duration-200 md:bottom-8">
          <div className="flex items-center gap-3 border-2 border-brand bg-panel px-4 py-3 shadow-lg">
            <Check size={18} style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-black uppercase tracking-wide">
              {toastMessage}
            </span>
          </div>
        </div>
      )}
    </>
  );
}