// === Configuration à personnaliser ===
// Remplace par ton numéro WhatsApp au format international sans +
// Exemple : pour +33 6 12 34 56 78 -> "33612345678"
const WHATSAPP_NUMBER = "33600000000"; // <-- remplace ceci

// Message générique pré-rempli (tu peux modifier)
const DEFAULT_MESSAGE = "Bonjour Maison LIDAM, je souhaite commander : ";

// Liens réseaux
const INSTAGRAM_URL = "https://www.instagram.com/maison.lidam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="; // remplace par ton profil

// === Fonctions ===
function openWhatsApp(text) {
  const base = `https://wa.me/33761559454`;
  const url = base + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

// Bouton "Commander" sur chaque produit
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const product = this.dataset.product || "";
    const msg = DEFAULT_MESSAGE + product;
    openWhatsApp(msg);
  });
});

// Hero CTA
document.getElementById("order-now").addEventListener("click", function (e) {
  e.preventDefault();
  openWhatsApp(DEFAULT_MESSAGE);
});

// Footer / contact link
document.getElementById("whatsapp-link").addEventListener("click", function (e) {
  e.preventDefault();
  openWhatsApp(DEFAULT_MESSAGE);
});

// Remplir Instagram link
document.querySelectorAll('a[href="https://www.instagram.com/maison.lidam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="]').forEach(a => {
  a.href = INSTAGRAM_URL;
});
