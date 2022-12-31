// Interactive US Map
var hoverState = document.getElementById("details-box");
document.addEventListener("mouseover", function (e) {
    if (e.target.tagName == "path" || e.target.tagName == "text") {
        hoverState.innerHTML = e.target.dataset.name;
        hoverState.style.opacity = "100%";  
    }
    else {
        hoverState.style.opacity = "0%";
    }
});
window.onmousemove = function (e) {
    hoverState.style.top = (e.clientY + 20) + "px";
    hoverState.style.left = (e.clientX) + "px";
};