var btnShowResult = document.getElementById("showResult");
showResult.addEventListener("click", e => e.preventDefault());
showResult.onclick = function() {
  var sLens = document.querySelectorAll('input[name="sLen"]'),
    bDiams = document.querySelectorAll('input[name="bDiam"]'),
    wTimes = document.querySelectorAll('input[name="wTime"]');
  var vl = toNumArray(sLens), vd = toNumArray(bDiams), vT = toNumArray(wTimes),
    vN = Number(document.getElementById("N").value);
  output.clear();
  output.print("Average string length: " + iMath.average(vl));
  output.print("Average ball diagram: " + iMath.average(vd));
  output.print("Average wave time: " + iMath.average(vT)/vN);
  output.print("Standard deviation of string length: " + iMath.stddev(vl));
  output.print("Standard deviation of ball diagram: " + iMath.stddev(vd));
  output.print("Standard deviation of wave time: " + iMath.stddev(vT)/vN);
};

