export const SHIPPING_COST = 12;
export const DISCOUNT_RATE = 0.05;

export type CheckoutCartItem = {
  id: string;
  title: string;
  bookLabel: string;
  format: string;
  price: string;
  original: string;
  quantity: number;
  src: string;
  slug: string;
};

export type ShippingDetails = {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  zipCode: string;
};

export const parseCurrency = (value: string) =>
  Number(value.replace(/[^0-9.]/g, "")) || 0;

export const formatCurrency = (value: number) => `$${value.toFixed(2)}`;

export const getCartTotals = (items: CheckoutCartItem[]) => {
  const subtotal = items.reduce(
    (total, item) => total + parseCurrency(item.price) * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? SHIPPING_COST : 0;
  const discount = subtotal > 0 ? subtotal * DISCOUNT_RATE : 0;
  const total = subtotal + shipping - discount;

  return { subtotal, shipping, discount, total };
};
