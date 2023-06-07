let btn = document.getElementById('btn');
if (localStorage.getItem("mode") == null) {
 localStorage.setItem("mode", "light");
}
let localmode = localStorage.getItem("mode");
if (localmode == "light") {
 btn.innerText = "Dark";
 document.body.classList.remove("darktheme");
}
else if (localmode == "dark") {
 btn.innerText = "Light";
 document.body.classList.add("darktheme");
}
btn.onclick = function() {
 document.body.classList.toggle("darktheme");
 if (document.body.classList.contains("darktheme")) {
  btn.innerText = "Light";
  localStorage.setItem("mode", "dark");
 }
 else {
  btn.innerText = "Dark";
  localStorage.setItem("mode", "light");
 }
}