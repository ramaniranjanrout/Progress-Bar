function fillProgressBar() {
let progressBar = document.getElementById("progressBar");
let width = 0;
let interval = setInterval(function() {
if (width >= 100) {
    clearInterval(interval);
} else {
width++;
progressBar.style.width = width + '%'; 
progressBar.innerHTML = width + '%';
}
}, 300); 
} 

function stopProgressBar() {
    clearInterval(interval);
}