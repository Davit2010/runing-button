let runingButton = document.querySelector('#runingButton');

runingButton.onmouseenter = function () {
    runingButton.style.top = `${randTop()}px`
    runingButton.style.left = `${randleft()}px`
}
function randTop() {
    return Math.round(Math.random() * 600)
}
function randleft() {
    return Math.round(Math.random() * 1000)
}
