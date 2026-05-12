// ================= LOADER =================
window.addEventListener("load", () => {
    if (loader) {
        setTimeout(() => loader.classList.add("hide"), 600);
    }
});