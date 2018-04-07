function makeElement(type, init={}) {
  const elem = document.createElement(type);
  for (let i in init) {
    if (init.hasOwnProperty(i)) {
      elem[i] = init[i];
    }
  }
  return elem;
}

// Parse an array of <input>s to an array of numbers
function toNumArray(l) {
  let res = [];
  for (let i = 0; i < l.length; i++) {
    res.push(Number(l[i].value));
  }
  return res;
}

const iMath = {
  average: function(l) {
    return this.sum(l) / l.length;
  },
  sum: function(l, s = 0) {
    for (let i = 0; i < l.length; i++) {
      s += l[i];
    }
    return s;
  },
  stddev: function(l) {
    let a = this.average(l);
    let dl = [];
    for (let i = 0; i < l.length; i++) {
      dl.push(Math.pow(l[i] - a, 2));
    }
    return Math.sqrt(this.sum(dl) / (dl.length - 1));
  },
  name: "lib-iBug.iMath"
};
