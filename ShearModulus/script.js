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
  let iL = getNumbers("iL"),
    iD = getNumbers("iD"),
    im = getNumbers("im"),
    iri = getNumbers("iri"),
    iro = getNumbers("iro"),
    iT0 = getNumbers("iT0"),
    iT1 = getNumbers("iT1"),
    iN0 = getNumber("iN0"),
    iN1 = getNumber("iN1");
  output.clear();
  output.print("Average string length: " + iMath.average(iL));
  output.print("Average string radius: " + iMath.average(iD)/2);
  output.print("Average ring weight: " + iMath.average(im));
  output.print("Average inner radius: " + iMath.average(iri));
  output.print("Average outer radius: " + iMath.average(iro));
  output.print("Average cycle without ring: " + iMath.average(iT0)/iN0);
  output.print("Average cycle with ring: " + iMath.average(iT1)/iN1);
};

