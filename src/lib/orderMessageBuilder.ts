import type { CartItem } from '@/context/CartContext';

interface OrderParams {
  items: CartItem[];
  locationName: string;
  customerName: string;
  note: string;
  total: string;
}

export function buildWhatsAppOrderMessage(params: OrderParams): string {
  const { items, locationName, customerName, note, total } = params;

  let message = `🍕 *Pizza Familia Order* 🍕\n\n`;
  items.forEach(item => { message += `• ${item.name} x${item.quantity}\n`; });
  message += `\n📍 *Pickup:* ${locationName}`;
  if (customerName.trim()) message += `\n👤 *Name:* ${customerName.trim()}`;
  if (note.trim()) message += `\n📝 *Note:* ${note.trim()}`;
  message += `\n\n💰 *Total:* ${total}`;
  message += `\n\n_Order sent via Pizza Familia website_`;
  return message;
}