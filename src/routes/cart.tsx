import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { siteConfig } from '@/siteConfig';
import { buildWhatsAppOrderMessage } from '@/lib/orderMessageBuilder';
import { Trash2, Plus, Minus } from 'lucide-react';

export const Route = createFileRoute('/cart')({
  component: CartComponent,
});

function CartComponent() {
  const {
    items,
    selectedLocationId,
    customerName,
    note,
    updateQuantity,
    removeFromCart,
    clearCart,
    setSelectedLocationId,
    setCustomerName,
    setNote,
    getTotalPrice,
  } = useCart();
  const navigate = useNavigate();
  const [isOrdering, setIsOrdering] = useState(false);

  const locations = siteConfig.locations;
  const selectedLocation = locations.find(l => l.id === selectedLocationId);
  const total = getTotalPrice();
  const totalDisplay = `R${total.toFixed(2)}`;

  const handleOrder = () => {
    if (!selectedLocationId) { alert('Please select a pickup location.'); return; }
    if (items.length === 0) { alert('Your cart is empty.'); return; }

    setIsOrdering(true);
    const message = buildWhatsAppOrderMessage({
      items,
      locationName: selectedLocation?.name || 'Pizza Familia',
      customerName,
      note,
      total: totalDisplay,
    });
    const whatsappUrl = `https://wa.me/${selectedLocation?.whatsapp?.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    clearCart();
    window.open(whatsappUrl, '_blank');
    setIsOrdering(false);
    navigate({ to: '/' });
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-2xl font-black uppercase">Your cart is empty</h2>
        <p className="mt-2 text-muted">Add some delicious items from our menu.</p>
        <button onClick={() => navigate({ to: '/menu' })} className="btn-primary mt-6">
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-black uppercase mb-8">Your Cart</h1>

      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex-1">
              <h3 className="font-bold uppercase">{item.name}</h3>
              <span className="text-sm text-muted">{item.priceDisplay}</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded">
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded">
                <Plus size={16} />
              </button>
              <button onClick={() => removeFromCart(item.id)} className="p-1 text-red-600">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block font-bold uppercase mb-2">Pickup Location</label>
        <select
          value={selectedLocationId || ''}
          onChange={e => setSelectedLocationId(e.target.value || null)}
          className="w-full border-2 p-3 bg-panel"
        >
          <option value="">Select a location</option>
          {locations.map(loc => (
            <option key={loc.id} value={loc.id}>{loc.name} – {loc.address}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-bold uppercase mb-2">Your Name (optional)</label>
        <input
          type="text"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          placeholder="e.g., John"
          className="w-full border-2 p-3 bg-panel"
        />
      </div>

      <div className="mb-6">
        <label className="block font-bold uppercase mb-2">Special Instructions (optional)</label>
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
          rows={3}
          placeholder="Any allergies, extra sauce, etc."
          className="w-full border-2 p-3 bg-panel"
        />
      </div>

      <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-black">{totalDisplay}</div>
        <div className="flex gap-4">
          <button onClick={clearCart} className="btn-outline py-2 px-4">Clear Cart</button>
          <button onClick={handleOrder} disabled={isOrdering || !selectedLocationId} className="btn-primary py-2 px-6">
            {isOrdering ? 'Processing...' : 'Order via WhatsApp'}
          </button>
        </div>
      </div>
    </div>
  );
}