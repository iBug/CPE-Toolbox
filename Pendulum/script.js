var btnAddData = document.getElementById("addData");

btnAddData.addEventListener("click", e => e.preventDefault());
btnAddData.onclick = function() {
  let tr = makeElement("tr"), td;
  let names = ["sLen", "bDiam", "wTime"];
  for (let i = 0; i < names.length; i++) {
    td = makeElement("td");
    td.appendChild(makeElement("input", {type: "text", name: names[i]}));
    tr.appendChild(td);
  }
  td = makeElement("td");
  td.appendChild(makeElement("a", {href: "#delete", innerText: "Delete", onclick: function(e) {
    this.parentElement.parentElement.remove();
    e.preventDefault();
  }}));
  tr.appendChild(td);
  var addDataBefore = document.getElementById("addDataBefore");
  addDataBefore.parentElement.insertBefore(tr, addDataBefore);
};
