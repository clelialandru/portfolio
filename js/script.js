document.querySelectorAll("input").forEach(e => { e.addEventListener("change", filtre) });

function filtre() {
    document.querySelector(".resultat").classList.toggle(this.name);
}