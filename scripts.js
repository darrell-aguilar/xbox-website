var bannerIndex = 0;
showBanner(bannerIndex)

function nextBanner(value) {
    showBanner(bannerIndex += value)
}

function showBanner(index) {
    var gameBanner = document.getElementsByClassName("banner-slideshow")
    var gameTitle = document.getElementsByClassName("game-title")
    if (index > gameBanner.length - 1) {bannerIndex = 0}
    if (index == -1) {bannerIndex = gameBanner.length - 1}
    for (var i = 0; i < gameBanner.length; i++) {
        gameBanner[i].style.display = "none"
        gameTitle[i].style.display = "none"
        if(i == bannerIndex) {
            gameBanner[bannerIndex].style.display = "block"
            gameTitle[bannerIndex].style.display = "block"
        }
    }
}


function changeControllerImage(colorButton) {
    var color = colorButton.title
    var imageHolder = document.getElementById("controller-image")
    imageHolder.src = `assets/accessories/xbox-wireless-controller-${color.toLowerCase()}.jpeg`
}