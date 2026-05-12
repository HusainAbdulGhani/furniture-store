export function formatIdr(amount) {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

export function isOnSale(product) {
  return typeof product.originalPrice === 'number' && product.originalPrice > product.price;
}

export function discountPercent(product) {
  if (!isOnSale(product)) return null;
  return Math.round((1 - product.price / product.originalPrice) * 100);
}
