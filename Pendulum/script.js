var btnAddData = document.getElementById("addData");
btnAddData.addEventListener("click", e => e.preventDefault());
btnAddData.onclick = function() {
  let tr = makeElement("tr"), td;
  let names = ["sLen", "bDiam", "wTime"];
  for (let i = 0; i < names.length; i++) {
    td = makeElement("td");
    td.appendChild(makeElement("input", {type: "text", name: names[i]}));
    tr.appendChild(td);
  }
  td = makeElement("td");
  td.appendChild(makeElement("a", {href: "#delete", innerText: "Delete", onclick: function(e) {
    this.parentElement.parentElement.remove();
    e.preventDefault();
  }}));
  tr.appendChild(td);
  var addDataBefore = document.getElementById("addDataBefore");
  addDataBefore.parentElement.insertBefore(tr, addDataBefore);
};

const output = {
  field: document.getElementById("output"),
  clear: function() {
    this.field.innerText = "";
  },
  print: function(str) {
    this.field.innerText += str;
    return str;
  }
};

var btnShowResult = document.getElementById("showResult");
showResult.addEventListener("click", e => e.preventDefault());
showResult.onclick = function() {
  var sLens = document.querySelectorAll('input[name="sLen"]'),
    bDiams = document.querySelectorAll('input[name="bDiam"]'),
    wTimes = document.querySelectorAll('input[name="wTime"]');
  var vl = [], vd = [], vT = [], vN = Number(document.getElementById("N").value);
  for (let i = 0; i < sLens.length; i++) {
    vl.push(Number(sLens[i].value));
  }
  for (let i = 0; i < bDiams.length; i++) {
    vd.push(Number(bDiams[i].value));
  }
  for (let i = 0; i < wTimes.length; i++) {
    vT.push(Number(wTimes[i].value));
  }
  output.clear();
  output.print("Average string length: " + average(vl) + "\n");
  output.print("Average ball diagram: " + average(vd) + "\n");
  output.print("Average wave time: " + average(vT)/vN + "\n");
  output.print("Standard deviation of string length: " + stddev(vl) + "\n");
  output.print("Standard deviation of ball diagram: " + stddev(vd) + "\n");
  output.print("Standard deviation of wave time: " + stddev(vT)/vN + "\n");
};

function average(l) {
  return sum(l) / l.length;
}

function sum(l, s = 0) {
  for (let i = 0; i < l.length; i++) {
    s += l[i];
  }
  return s;
}

function stddev(l) {
  let a = average(l);
  let dl = [];
  for (let i = 0; i < l.length; i++) {
    dl.push(Math.pow(l[i] - a, 2));
  }
  return Math.sqrt(sum(dl) / (dl.length - 1));
}
