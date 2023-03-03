function backgroundclr(){
    var bg = document.getElementById("selectbgid");
    var bgcolor = bg.options[bg.selectedIndex].value;
    document.body.style.backgroundColor=bgcolor;
}
function textclr(){
    var txt = document.getElementById("selecttxtid");
    var txtcolor = txt.options[txt.selectedIndex].value;
    document.body.style.color=txtcolor;
}
function image1() {
  var x = document.getElementById("details1");
  if (x.style.display === "none") {
      x.style.display = "block";
} else {
      x.style.display = "none";
}
}
function image2() {
  var x = document.getElementById("details2");
  if (x.style.display === "none") {
      x.style.display = "block";
} else {
      x.style.display = "none";
}
}
function image3() {
  var x = document.getElementById("details3");
  if (x.style.display === "none") {
      x.style.display = "block";
} else {
      x.style.display = "none";
}
}
function image4() {
  var x = document.getElementById("details4");
  if (x.style.display === "none") {
      x.style.display = "block";
} else {
      x.style.display = "none";
}
}
function image5() {
  var x = document.getElementById("details5");
  if (x.style.display === "none") {
      x.style.display = "block";
} else {
      x.style.display = "none";
}
}

document.getElementById("card1").addEventListener("click",function(){
  document.getElementById("card1").style.background="purple";
})