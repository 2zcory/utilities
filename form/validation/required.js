const validateRequired = (value) => {
  if (value === "" || value === undefined) {
    return true;
  }
  return false;
};

module.exports = { validateRequired }