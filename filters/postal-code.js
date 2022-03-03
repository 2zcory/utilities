const formatPostalCode7 = (str) => {
  if (typeof str !== 'string') return str;
  if (!str || str.length !== 7) return str;
  return str.replace(/(\d{3})(\d{4})/, "₸$1-$2");
}

module.exports = { formatPostalCode7 };