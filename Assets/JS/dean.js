// ================= DOM CACHING =================
const modals = document.querySelectorAll(".modal");
const triggers = document.querySelectorAll("[data-modal]");
const closers = document.querySelectorAll("[data-close]");
const loader = document.getElementById("loader");

// ================= LOADER =================
window.addEventListener("load", () => {
    if (loader) {
        setTimeout(() => loader.classList.add("hide"), 500);
    }
});

// ================= HITBOX FIX FOR CALENDAR =================
const dateInput = document.getElementById("appointDate");
if (dateInput) {
    dateInput.addEventListener("click", () => {
        if (dateInput.showPicker) {
            dateInput.showPicker();
        }
    });
}

// ================= MODALS =================

// Open Modal
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("active");
}

// Numerical Inputs Only
const phoneInput = document.getElementById('phoneInput');

phoneInput.addEventListener('input', function() {
    // Replace any character that isn't a digit with nothing
    this.value = this.value.replace(/\D/g, '');
});

// Close Modal
function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("active");
}

// ================= MODAL TRIGGERS =================
triggers.forEach(btn => {
    btn.addEventListener("click", () => {
        openModal(btn.dataset.modal);
    });
});

// ================= CLOSERS =================
closers.forEach(btn => {
    btn.addEventListener("click", () => {
        closeModal(btn.closest(".modal"));
    });
});

// Outside Click
window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) closeModal(modal);
    });
});

// ESC Key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modals.forEach(closeModal);
    }
});