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

function getNumbers(name) {
  return toNumArray(document.querySelectorAll('input[name="' + name + '"]'));
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
  uncertainty: function(l, t, k, acc, C) {
    return Math.sqrt(
      Math.pow(t * this.stddev(l) / Math.sqrt(l.length), 2) + Math.pow(k * acc / C, 2)
    );
  },
  name: "lib-iBug.iMath"
};
