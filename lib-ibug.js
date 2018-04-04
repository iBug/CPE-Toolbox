function makeElement(type, init={}) {
  const elem = document.createElement(type);
  for (let i in init) {
    if (init.hasOwnProperty(i)) {
      elem[i] = init[i];
    }
  }
  return elem;
}
