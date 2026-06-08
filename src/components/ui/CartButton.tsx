import { useNavigate } from '@tanstack/react-router';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart } from 'lucide-react';

export function CartButton() {
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const itemCount = getItemCount();

  const handleClick = () => {
    if (itemCount === 0) {
      // Toast notification (same style)
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-20 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-5 duration-200 md:bottom-8';
      toast.innerHTML = `
        <div class="flex items-center gap-3 border-2 border-brand bg-panel px-4 py-3 shadow-lg">
          <span class="text-sm font-black uppercase tracking-wide">Your cart is empty. Browse the menu first.</span>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
      navigate({ to: '/menu' });
    } else {
      navigate({ to: '/cart' });
    }
  };

  return (
    <>
      <style>{`
        .btn-cart {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border: 2px solid var(--brand-primary);
          background: transparent;
          color: var(--brand-primary);
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .btn-cart:hover {
          background: var(--brand-primary);
          color: var(--brand-on-primary);
        }
        .btn-cart:active {
          transform: scale(0.95);
        }
        .cart-badge {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 1.25rem;
          height: 1.25rem;
          padding: 0 0.25rem;
          background: var(--brand-primary);
          color: var(--brand-on-primary);
          font-size: 0.7rem;
          font-weight: 900;
          line-height: 1;
          text-align: center;
        }
      `}</style>

      <button onClick={handleClick} className="btn-cart" aria-label="Cart">
        <ShoppingCart size={20} />
        {itemCount > 0 && (
          <span className="cart-badge">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </button>
    </>
  );
}