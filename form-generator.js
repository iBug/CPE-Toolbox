(function(document, window) {
  const makeElement = function(type, classes = [], text) {
    let e = document.createElement(type);
    if (classes.constructor === Array){
      for (let i = 0; i < classes.length; i++) {
        e.classList.add(classes[i]);
      }
    } else {
      e.className = classes;
    }
    if (text) {
      e.textContent = text;
    }
    return e
  };

  document.title = g_name + " - CPE Toolbox";
  const mainForm = document.getElementById("main-form");

  for (let i = 0; i < g_globals.length; i++) {
    let div = makeElement("div", ["form-group", "row"]);
    mainForm.appendChild(div);

    div.appendChild(makeElement("label", "col-sm-2", g_globals[i][0]));
    let innerDiv = makeElement("div", "col-sm-10");
    let input = makeElement("input");
    input.type = "number";
    input.id = g_globals[i][1];
    innerDiv.appendChild(input);
    div.appendChild(innerDiv);
  }

  mainForm.appendChild(makeElement("hr"));

  for (let i = 0; i < g_values.length; i++) {
    let div = makeElement("div", ["form-group", "row"]);
    mainForm.appendChild(div);
    div.appendChild(makeElement("label", "col-sm-2", g_values[i][0]));

    const addData = function() {
      let innerDiv = makeElement("div", "col-sm-10");
      let input = makeElement("input");
      input.type = "number";
      input.name = g_values[i][1];
      innerDiv.appendChild(input);
      div.appendChild(innerDiv);
    };
    addData();

    let divBtn = makeElement("div", "col-sm-10");
    let btnAddData = makeElement("a", ["btn", "btn-secondary"], "添加新数据");
    btnAddData.href = "#";
    btnAddData.addEventListener("click", function(e) {
      e.preventDefault();
      addData();
    });
    divBtn.appendChild(btnAddData);
    div.appendChild(divBtn);
  }

  // Create the "Calculate" button
  let div = makeElement("div", ["form-group", "row"]);
  let btnCalcDiv = makeElement("div", "col-md-6");
  let btnCalc = makeElement("a", ["btn", "btn-primary"], "计算");
  btnCalc.id = "showResult";
  btnCalc.href = "#";
  btnCalc.addEventListener("click", function(e) {
    e.preventDefault();
    doCalculate();
  });
  btnCalcDiv.appendChild(btnCalc);
  div.appendChild(btnCalcDiv);
  mainForm.appendChild(div);
}(document, window));
