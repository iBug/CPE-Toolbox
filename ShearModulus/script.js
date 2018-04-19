var btnShowResult = document.getElementById("showResult");
showResult.onclick = function(clickEvent) {
  clickEvent.preventDefault();
  let pMode = getPossibilityMode(), possibility = getPossibility(pMode);

  let iL = getNumbers("iL"), // cm
    iR = forEach(getNumbers("iD"), x => x/2), // mm
    im = getNumbers("im"), // g
    iri = forEach(getNumbers("iri"), x => x/2), // cm
    iro = forEach(getNumbers("iro"), x => x/2), // cm
    iT0 = getNumbers("iT0"), // s
    iT1 = getNumbers("iT1"), // s
    iN0 = getNumber("iN0"),
    iN1 = getNumber("iN1");

  let L = iMath.average(iL),
    m = iMath.average(im),
    T0 = iMath.average(iT0) / iN0,
    T1 = iMath.average(iT1) / iN1,
    ri = iMath.average(iri),
    ro = iMath.average(iro),
    R = iMath.average(iR);
  let D = 2 * Math.PI * Math.PI * m * (ri * ri + ro * ro) / (T1 * T1 - T0 * T0)
  let G = 4 * Math.PI * L * m * (ri * ri + ro * ro) / ((T1 * T1 - T0 * T0) * Math.pow(R, 4))

  let UL = iMath.inacc(iL, 0.8, pMode, 3),
    UR = iMath.inacc(iR, 0.004, pMode, 3),
    Um = iMath.inacc(im, 0.5, pMode, 3),
    Uri = iMath.inacc(iri, 0.02, pMode, Math.sqrt(3)),
    Uro = iMath.inacc(iro, 0.02, pMode, Math.sqrt(3)),
    UT0 = iMath.inacc(iT0, 0.2 / iN0, pMode, 3),
    UT1 = iMath.inacc(iT1, 0.2 / iN1, pMode, 3);
  let UD = Math.sqrt(Math.pow(Um / m, 2) + 4 * Math.pow(Uri * ri / (ri * ri + ro * ro), 2) + 4 * Math.pow(Uro * ro / (ri * ri + ro * ro), 2) + 4 * Math.pow(UT0 * T0 / (T1 * T1 - T0 * T0), 2) + 4 * Math.pow(UT1 * T1 / (T1 * T1 - T0 * T0), 2)) * D;
  let UG = Math.sqrt(Math.pow(UL / L, 2) + Math.pow(UD / D, 2) + 16 * Math.pow(UR / R, 2)) * G;

  output.clear();
  output.print("Average string length: " + L + " cm");
  output.print("Average string radius: " + R + " mm");
  output.print("Average ring weight: " + m + " g");
  output.print("Average inner radius: " + ri + " mm");
  output.print("Average outer radius: " + ro + " mm");
  output.print("Average cycle without ring: " + T0 + " s");
  output.print("Average cycle with ring: " + T1 + " s");
  output.print("");
  output.print("Type A uncertainty of L: " + iMath.ua(iL) + " cm");
  output.print("Type A uncertainty of R: " + iMath.ua(iR) + " mm");
  output.print("Type A uncertainty of m: " + iMath.ua(im) + " g");
  output.print("Type A uncertainty of ri: " + iMath.ua(iri) + " mm");
  output.print("Type A uncertainty of ro: " + iMath.ua(iro) + " mm");
  output.print("Type A uncertainty of T0: " + iMath.ua(iT0) + " s");
  output.print("Type A uncertainty of T1: " + iMath.ua(iT1) + " s");
  output.print("");
  output.print("U[L, " + possibility + "] = " + UL + " cm");
  output.print("U[R, " + possibility + "] = " + UR + " mm");
  output.print("U[m, " + possibility + "] = " + Um + " g");
  output.print("U[ri, " + possibility + "] = " + Uri + " cm");
  output.print("U[ro, " + possibility + "] = " + Uro + " cm");
  output.print("U[T0, " + possibility + "] = " + UT0 + " s");
  output.print("U[T1, " + possibility + "] = " + UT1 + " s");
  output.print("");
  output.print("U[D] / D = " + UD / D);
  output.print("U[G] / G = " + UG / G);
  output.print("");
  output.print("Result: D = " + (D * 1.0e-9) + " kg * m^2 / s^2");
  output.print("Result: G = " + (G * 1.0e-9) + "*10^9 Pa");
};
