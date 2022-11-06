"use strict";
const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const toggleMenu = () => {
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.toggle("hidden");
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.toggle("flex");
        hamburgerBtn === null || hamburgerBtn === void 0 ? void 0 : hamburgerBtn.classList.toggle("toggle-btn");
    };
    hamburgerBtn === null || hamburgerBtn === void 0 ? void 0 : hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);
