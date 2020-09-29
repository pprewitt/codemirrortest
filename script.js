var languageMode;
function selectMode() {
    var languageMode = document.getElementById("dropdownMenuLink").value;
}
var myCodeMirror = CodeMirror(document.getElementById("demo"), {
    value: "function myScript(){return 100;}\n",
    mode: languageMode
  });

