// Opens a project popup when its card is clicked, and closes it with the ×,
// the Esc key (built in), or a click on the dimmed backdrop.

document.querySelectorAll("[data-dialog]").forEach((card) => {
  card.addEventListener("click", () => {
    document.getElementById(card.dataset.dialog).showModal();
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  // clicking the dark area outside the popup closes it
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
