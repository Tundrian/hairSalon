

// Event Listeners
document.querySelector(".nav-icon").addEventListener("touchend", handleMobileMenu)
document.querySelector(".nav-icon").addEventListener("click", handleMobileMenu)

// Functions
function handleMobileMenu(e) {
    const mobileMenu = window.getComputedStyle(document.querySelector('.nav-mobile-menu')).display
    // console.log(mobileMenu)
    mobileMenu === "flex" ? document.querySelector('.nav-mobile-menu').style.display = "none" : document.querySelector('.nav-mobile-menu').style.display = "flex"
}