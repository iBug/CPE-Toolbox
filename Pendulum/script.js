var btnShowResult = document.getElementById("showResult");
showResult.addEventListener("click", e => e.preventDefault());
showResult.onclick = function() {
  var sLens = document.querySelectorAll('input[name="sLen"]'),
    bDiams = document.querySelectorAll('input[name="bDiam"]'),
    wTimes = document.querySelectorAll('input[name="wTime"]');
  var vl = toNumArray(sLens), vd = toNumArray(bDiams), vT = toNumArray(wTimes),
    vN = Number(document.getElementById("N").value);
  output.clear();
  output.print("平均摆线长 (cm): " + iMath.average(vl));
  output.print("平均摆球直径 (mm): " + iMath.average(vd));
  output.print("平均时间 (s): " + iMath.average(vT)/vN);
  output.print("摆线长标准差 (cm): " + iMath.stddev(vl));
  output.print("摆球直径标准差 (mm): " + iMath.stddev(vd));
  output.print("总时间标准差 (s): " + iMath.stddev(vT)/vN);
};

