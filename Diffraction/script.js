var btnShowResult = document.getElementById("showResult");
showResult.addEventListener("click", e => e.preventDefault());
showResult.onclick = function() {
  output.clear();
  var vk = getNumbers("ik"), vx = getNumbers("ix"),
    vWaveLen = Number(document.getElementById("waveLength").value),
    vDist = document.getElementById("distance").value;
  if (vDist.length == 0) {
    output.print("未输入距离 (衍射元件到 CCD)!");
    return;
  }
  if (vk.length <= 1 || vx.length <= 1) {
    output.print("数据组数不足!");
    return;
  }
  vDist = Number(vDist);

  if (vk.length != vx.length) {
    output.print("k 与 x_k 数量不同!");
    return;
  }
  var va = [], ax = iMath.linreg.a(vk, vx);
  for (let i = 0; i < vk.length; i++) {
    va.push(vk[i] * vWaveLen * vDist / (vx[i] - ax));
  }
  output.print("x 平均值: " + ax + " mm");
  for (let i = 0; i < va.length; i++) {
    output.print("计算得到 a[" + i + "]: " + va[i]/1000 + " \u03BCm");
  }
  output.print("a 平均值: " + iMath.average(va)/1000 + " \u03BCm");
};

