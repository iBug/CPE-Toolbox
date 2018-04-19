function makeElement(type, init={}) {
  const elem = document.createElement(type);
  for (let i in init) {
    if (init.hasOwnProperty(i)) {
      elem[i] = init[i];
    }
  }
  return elem;
}

// Parse an array of <input>s to an array of numbers, ignore blank inputs
function toNumArray(l) {
  let res = [], text;
  for (let i = 0; i < l.length; i++) {
    text = l[i].value;
    if (text.length == 0 && "placeholder" in l[i]) {
      // Get placeholder if exist
      text = l[i].placeholder;
    }
    if (text.length != 0) {
      res.push(Number(l[i].value));
    }
  }
  return res;
}

function getNumbers(name) {
  return toNumArray(document.querySelectorAll('input[name="' + name + '"]'));
}

function getNumber(name) {
  let val = document.getElementById(name).value;
  if (val.length == 0) {
      val = document.getElementById(name).placeholder;
  }
  if (val.length == 0) {
    val = 0;
  }
  return Number(val);
}

function getPossibilityMode() {
  return Number(document.querySelector('input[name="possibility"]:checked').value);
}

function getPossibility(mode) {
  if (mode == 1)
    return 0.683;
  if (mode == 2)
    return 0.95;
  return undefined;
}

function forEach(l, f) {
  let r = [];
  for (let i = 0; i < l.length; i++) {
    r.push(f(l[i]));
  }
  return r;
}

const lib = {
  t_factor: function(n, mode) {
    const A = [3.00, 2.04, 1.56, 1.32, 1.20, 1.14, 1.11, 1.09, 1.08, 1.07, 1.06, 1.04, 1.03, 1.00];
    const B = [0.00, 0.00, 0.00, 4.30, 3.18, 2.78, 2.57, 2.46, 2.37, 2.31, 2.26, 2.15, 2.09, 1.96]
    if (mode == 1) {
      if (n >= 0 && n <= 10)
        return A[n];
      if (n > 10 && n < 15)
        return A[10];
      if (n >= 15 && n < 20)
        return A[11];
      if (n >= 20)
        return A[12];
      return A[13];
    } else if (mode == 2) {
      if (n >= 0 && n <= 10)
        return B[n];
      if (n > 10 && n < 15)
        return B[10];
      if (n >= 15 && n < 20)
        return B[11];
      if (n >= 20)
        return B[12];
      return B[13];
    }
    return 1.0;
  },
  k_factor: function(mode) {
    if (mode == 1)
      return 1.0;
    if (mode == 2)
      return 1.96;
    return 1.0;
  },
  name: "lib-iBug.lib"
};

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
  stddev: function(l, unbiased = 1) {
    if (l.length <= 1 && unbiased) {
      return 0;
    }
    let a = this.average(l);
    let dl = [];
    for (let i = 0; i < l.length; i++) {
      dl.push(Math.pow(l[i] - a, 2));
    }
    return Math.sqrt(this.sum(dl) / (dl.length - !!unbiased));
  },
  inacc: function(l, acc, mode = 1, C = 3) {
    t = lib.t_factor(l, mode);
    k = lib.k_factor(mode);
    return Math.sqrt(
      Math.pow(t * this.ua(l), 2) + Math.pow(k * acc / C, 2)
    );
  },
  ua: function(l) {
    if (l.length <= 1) {
      return 0;
    }
    return this.stddev(l) / Math.sqrt(l.length);
  },
  linreg: {
    b: function(lx, ly) {
      let n = lx.length, ax, ay;
      ax = iMath.average(lx);
      ay = iMath.average(ly);
      let sxy = 0, sxx = 0;
      for (let i = 0; i < n; i++) {
        sxy += lx[i] * ly[i];
        sxx += lx[i] * lx[i];
      }
      return (sxy - n * ax * ay) / (sxx - n * ax * ax)
    },
    a: function(lx, ly) {
      return iMath.average(ly) - iMath.linreg.b(lx, ly) * iMath.average(lx);
    },
    r: function(lx, ly) {
      return undefined;
    },
    name: "lib-iBug.iMath.linreg"
  },
  name: "lib-iBug.iMath"
};
