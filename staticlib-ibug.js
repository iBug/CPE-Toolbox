var btnAddData = document.getElementById("addData"),
  inputUnit = document.getElementById("inputUnit"),
  addDataBefore = document.getElementById("addDataBefore");

if (Boolean(btnAddData) && Boolean(inputUnit) && Boolean(addDataBefore)) {
  btnAddData.onclick = function(e){
    e.preventDefault();
    let tr = inputUnit.cloneNode(true);
    let inputs = tr.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    tr.lastElementChild.firstElementChild.hidden = false;
    tr.lastElementChild.firstElementChild.onclick = function(e) {
      this.parentElement.parentElement.remove();
      e.preventDefault();
    };
    addDataBefore.parentElement.insertBefore(tr, addDataBefore);
  };
}
