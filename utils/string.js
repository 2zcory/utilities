const getFirstLetter = (str) => str.trim().charAt(0);

const getRandomString = (length) => {
  const base = "abcdefghijklmnopqrstuvwxyz";
  const baseLength = base.length;
  let name = "";
  for (let i = 0; i < length; i++) {
    name += base[Math.floor(Math.random() * baseLength)];
  }
  name += new Date().getTime().toString();
  return name;
};

module.exports = { getFirstLetter, getRandomString };