var btnSubmit = document.getElementById("submit"),
  inputBox = document.getElementById("inbox"),
  outputBox = document.getElementById("outbox");

btnSubmit.addEventListener("click", e => e.preventDefault());
btnSubmit.onclick = function() {
  var modePrepend = document.getElementById("modePrepend");
  var modeAppend = document.getElementById("modeAppend");
  if (inputBox.value != "") {
    if (modePrepend.checked) {
      outputBox.innerText = inputBox.value + "\n" + outputBox.innerText;
    } else if (modeAppend.checked) {
      outputBox.innerText = outputBox.innerText + inputBox.value + "\n";
    } else {
      console.log("Error: No radio button is checked");
      return;
    }
    inputBox.value = "";
  }
};
