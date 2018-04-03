function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

