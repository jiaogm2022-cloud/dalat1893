const header = document.querySelector(".site-header");
const toggleButton = document.querySelector(".nav-toggle");

if (toggleButton && header) {
  toggleButton.addEventListener("click", () => {
    const nextState = !header.classList.contains("is-open");
    header.classList.toggle("is-open", nextState);
    toggleButton.setAttribute("aria-expanded", String(nextState));
  });
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;
    item.classList.toggle("is-open");
  });
});
