var m = document.getElementById('move');
m.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp() {
    window.removeEventListener('mousemove', move, true);
}

function mouseDown(e) {
    window.addEventListener('mousemove', move, true);
}

function move(e) {
    m.style.top = e.clientY + 'px';
    m.style.left = e.clientX + 'px';
};