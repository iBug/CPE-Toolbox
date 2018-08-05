var g_name = "单摆";
var g_globals = [
  ["周期数", "N"],
];
var g_values = [
  ["String Length", "sLen"],
  ["Ball Diameter", "bDiam"],
  ["Total Time", "wTime"],
];

function doCalculate() {
  var vl = getNumbers("sLen"),
      vd = getNumbers("bDiam"),
      vT = getNumbers("wTime");
  var vN = getNumber("N");

  output.clear();
  output.print("平均摆线长 (cm): " + iMath.average(vl));
  output.print("平均摆球直径 (mm): " + iMath.average(vd));
  output.print("平均时间 (s): " + iMath.average(vT)/vN);
  output.print("摆线长标准差 (cm): " + iMath.stddev(vl));
  output.print("摆球直径标准差 (mm): " + iMath.stddev(vd));
  output.print("总时间标准差 (s): " + iMath.stddev(vT)/vN);
}
