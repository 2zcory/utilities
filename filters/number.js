const commaNumber = (num) => {
  if (!num) return 0;
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

module.exports = { commaNumber };

console.log(commaNumber(1000));