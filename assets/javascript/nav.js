function openNav() {
    var currentStatus = document.getElementById("menu").getAttribute("status");
  if(currentStatus === "visible") {
    document.getElementById("menu").setAttribute("status", "hidden");
  }
  else{
    document.getElementById("menu").setAttribute("status", "visible");
  }
    document.getElementById("menu").style.height = "100%";
}
function closeNav() {
    document.getElementById("menu").style.height = "0%";
}