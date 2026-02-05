function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
}

function filterCards(inputId, gridId) {
    const q = document.getElementById(inputId).value.toLowerCase().trim();
    const cards = document.querySelectorAll(`#${gridId} .dir-card`);

    cards.forEach((card) => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? "block" : "none";
    });
}
