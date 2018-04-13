var btnAddData = document.getElementById("addData");
btnAddData.addEventListener("click", e => e.preventDefault());
btnAddData.onclick = function() {
  // Experimental new approach
  let tr = document.getElementById("inputUnit").cloneNode(true);
  tr.lastElementChild.firstElementChild.hidden = false;
  tr.lastElementChild.firstElementChild.onclick = function(e) {
    this.parentElement.parentElement.remove();
    e.preventDefault();
  };
  var addDataBefore = document.getElementById("addDataBefore");
  addDataBefore.parentElement.insertBefore(tr, addDataBefore);
};

var btnShowResult = document.getElementById("showResult");
showResult.addEventListener("click", e => e.preventDefault());
showResult.onclick = function() {
  let iL = getNumbers("iL"), // cm
    iD = getNumbers("iD"), // mm
    im = getNumbers("im"), // g
    iri = getNumbers("iri"), // cm
    iro = getNumbers("iro"), // cm
    iT0 = getNumbers("iT0"), // s
    iT1 = getNumbers("iT1"), // s
    iN0 = getNumber("iN0"),
    iN1 = getNumber("iN1");

  let L = iMath.average(iL),
    m = iMath.average(im),
    T0 = iMath.average(iT0) / iN0,
    T1 = iMath.average(iT1) / iN1,
    ri = iMath.average(iri) / 2,
    ro = iMath.average(iro) / 2,
    R = iMath.average(iD) / 2;
  let G = 4 * Math.PI * L * m * (ri * ri + ro * ro) / ((T1 * T1 - T0 * T0) * Math.pow(R, 4))

  output.clear();
  output.print("Average string length: " + iMath.average(iL));
  output.print("Average string radius: " + iMath.average(iD)/2);
  output.print("Average ring weight: " + iMath.average(im));
  output.print("Average inner radius: " + iMath.average(iri));
  output.print("Average outer radius: " + iMath.average(iro));
  output.print("Average cycle without ring: " + iMath.average(iT0)/iN0);
  output.print("Average cycle with ring: " + iMath.average(iT1)/iN1);
  output.print("Result: G = " + G);
};

