function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

export default formatPrice;