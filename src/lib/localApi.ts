/**
 * Simple localStorage-backed API for demos: inquiries and orders.
 */
import { CartItem } from '@/types';

const INQUIRIES_KEY = 'trace_inquiries';
const ORDERS_KEY = 'trace_orders';

function readKey<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeKey<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function saveInquiry(payload: { name?: string; company?: string; subject: string; message: string; createdAt?: string }) {
  const list = readKey<any>(INQUIRIES_KEY);
  const entry = { id: `INQ-${Date.now()}`, ...payload, createdAt: payload.createdAt || new Date().toISOString() };
  list.unshift(entry);
  writeKey(INQUIRIES_KEY, list);
  return entry;
}

export function listInquiries() {
  return readKey<any>(INQUIRIES_KEY);
}

export function createOrder(items: CartItem[], metadata?: { customerName?: string; email?: string }) {
  const list = readKey<any>(ORDERS_KEY);
  const id = `TR-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
  const total = items.reduce((acc, it) => {
    // price lookup will be done by caller if needed; store quantity here
    return acc + (it.price || 0) * it.quantity;
  }, 0);
  const order = {
    id,
    items,
    total,
    status: 'Processing',
    createdAt: new Date().toISOString(),
    metadata: metadata || {},
    history: [
      { status: 'Processing', time: new Date().toISOString() }
    ]
  };
  list.unshift(order);
  writeKey(ORDERS_KEY, list);
  return order;
}

export function getOrderById(id: string) {
  const list = readKey<any>(ORDERS_KEY);
  return list.find(o => o.id === id) || null;
}

export function listOrders() {
  return readKey<any>(ORDERS_KEY);
}
