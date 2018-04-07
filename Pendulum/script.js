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

var btnShowResult = document.getElementById("showResult");
showResult.addEventListener("click", e => e.preventDefault());
showResult.onclick = function() {
  var sLens = document.querySelectorAll('input[name="sLen"]'),
    bDiams = document.querySelectorAll('input[name="bDiam"]'),
    wTimes = document.querySelectorAll('input[name="wTime"]');
  var vl = toNumArray(sLens), vd = toNumArray(bDiams), vT = toNumArray(wTimes),
    vN = Number(document.getElementById("N").value);
  output.clear();
  output.print("Average string length: " + iMath.average(vl) + "\n");
  output.print("Average ball diagram: " + iMath.average(vd) + "\n");
  output.print("Average wave time: " + iMath.average(vT)/vN + "\n");
  output.print("Standard deviation of string length: " + iMath.stddev(vl) + "\n");
  output.print("Standard deviation of ball diagram: " + iMath.stddev(vd) + "\n");
  output.print("Standard deviation of wave time: " + iMath.stddev(vT)/vN + "\n");
};

