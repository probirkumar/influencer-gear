

function menuShowHide() {
    const toggleMenu = document.getElementById("toggle-nav");
    console.log(toggleMenu)

    if (toggleMenu.style.display === "block") {
        toggleMenu.style.display = "none"
    } else {
        toggleMenu.style.display = "block"
    }
}