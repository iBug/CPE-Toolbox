var btnAddData = document.getElementById("addData");
btnAddData.addEventListener("click", e => e.preventDefault());
btnAddData.onclick = function() {
  let tr = makeElement("tr"), td;
  let names = ["ik", "ix"];
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
  output.clear();
  var vk = getNumbers("ik"), vx = getNumbers("ix"),
    vWaveLen = Number(document.getElementById("waveLength").value),
    vDist = document.getElementById("distance").value;
  if (vDist.length == 0) {
    output.print("You forgot to enter L (distance between diffraction component and the CCD)!");
    return;
  }
  if (vk.length <= 1 || vx.length <= 1) {
    output.print("Cannot work with only 1 set of data!");
    return;
  }
  vDist = Number(vDist);

  if (vk.length != vx.length) {
    output.print("You supplied a different number of k's and x[k]'s.");
    return;
  }
  var va = [], ax = iMath.linreg.a(vk, vx);
  for (let i = 0; i < vk.length; i++) {
    va.push(vk[i] * vWaveLen * vDist / (vx[i] - ax));
  }
  output.print("Average of x: " + ax + " mm");
  for (let i = 0; i < va.length; i++) {
    output.print("Calculated a[" + i + "]: " + va[i]/1000 + " \u03BCm");
  }
  output.print("Average of a: " + iMath.average(va)/1000 + " \u03BCm");
};

