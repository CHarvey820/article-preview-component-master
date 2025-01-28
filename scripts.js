const shareIconBtns = document.querySelectorAll(".iconArrow");
const socials_shareActive = document.querySelector(".socials_shareActive");
const iconArrowSocialsActive = document.querySelector(".iconArrowSocialsActive");
const iconArrowSocialsInactive = document.querySelector(".iconArrowSocialsInactive");
const popupArrow = document.querySelector(".popupArrow");

let mql = window.matchMedia("(min-width: 930px)");

/**
 * Adds a click event to all iconArrow elements to toggle the "isHidden" class of the socials_shareActive element
 * @param {any} shareIconBtns
 * @returns {any}
 */
Array.from(shareIconBtns).forEach((shareIconBtn) => {
    shareIconBtn.addEventListener("click", () => {
// Checks if the media query for desktop screens is active, in which case the socials_shareActive appears above. the existing arrow is used but changes color schemes
        if (mql.matches) {
            iconArrowSocialsActive.classList.add("isHidden");
            socials_shareActive.classList.toggle("isHidden");
            iconArrowSocialsInactive.classList.add("arrowDark");
            popupArrow.classList.toggle("isHidden");
            //change the arrow back to its regular state when closing the socials on desktop
            if(socials_shareActive.classList.contains("isHidden")){
                iconArrowSocialsInactive.classList.remove("arrowDark");
            }
        } else {
            socials_shareActive.classList.toggle("isHidden");
            iconArrowSocialsInactive.classList.toggle("isHidden");
        }
    });
});

/**
 * Handles arrow and popup   change if user resizes screen while socials are active
 * @param {any} 'resize'
 * @param {any} (
 * @returns {any}
 */
window.addEventListener('resize', () => {
    // if in desktop mode/grows to desktop mode
    if (mql.matches) {
        iconArrowSocialsActive.classList.add("isHidden");
        // if socials popup IS ACTIVE
        if (!socials_shareActive.classList.contains("isHidden")){
            iconArrowSocialsInactive.classList.add("arrowDark");
            popupArrow.classList.remove("isHidden");
            iconArrowSocialsInactive.classList.remove("isHidden");
        }
        // not in desktop mode/shrunk down to mobile
    } else {
        iconArrowSocialsActive.classList.remove("isHidden");
        popupArrow.classList.add("isHidden");
        iconArrowSocialsInactive.classList.remove("arrowDark");
        // if socials popup IS ACTIVE
        if (!socials_shareActive.classList.contains("isHidden")){
            iconArrowSocialsInactive.classList.add("isHidden");
        } else {
            iconArrowSocialsInactive.classList.remove("isHidden");
        }
    }  
});
