const delay = () => {
  let timer = 0;
  return (cb, ms) => {
    console.log(timer);
    clearTimeout(timer);
    timer = setTimeout(cb, ms);
  }
}

const autoSave = delay();

module.exports = { delay, autoSave };

// auto save after 500ms
const cbCallAPI = () => { console.log('API called') };
autoSave(cbCallAPI, 500);

// Reference: https://ponyfoo.com/