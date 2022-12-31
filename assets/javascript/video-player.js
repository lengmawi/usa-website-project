// video player
var btnMovie = document.querySelector(".btnMovie"),
    btnCheckBox = document.querySelector(".btnCheckBox"),
    closeIcon = document.querySelector(".close-icon"),
    trailerContainer = document.querySelector(".trailer-container"),
    video = document.querySelector("video");
btnMovie.addEventListener("click", () => {
    trailerContainer.classList.remove("active");
});
btnCheckBox.addEventListener("click", () => {
    trailerContainer.classList.remove("active");
});
closeIcon.addEventListener("click", () => {
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});