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
    iro = getNumebrs("iro"),
    iT0 = getNumbers("iT0"),
    iT1 = getNumbers("iT1");
  output.clear();
  output.print("Average string length: " + iMath.average(iL) + "\n");
  output.print("Average string radius: " + iMath.average(iD)/2 + "\n");
  output.print("Average ring weight: " + iMath.average(im) + "\n");
};

