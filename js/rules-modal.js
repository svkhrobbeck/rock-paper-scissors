// DOCUMENT CLICK EVT
document.addEventListener("click", (evt) => {
  rulesModalOpenClick(evt);
  rulesModalCloseClick(evt);
});

function rulesModalOpenClick(evt) {
  const el = evt.target.closest("[data-rules-btn]");

  if (!el) return;

  const elSelector = el.dataset.rulesBtn;
  document.querySelector(`${elSelector}`).classList.add("show");
  el.classList.add("hidden");
}

function rulesModalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-close-btn]");

  if (!el) return;

  el.parentElement.parentElement.parentElement.classList.remove("show");
  el.parentElement.parentElement.parentElement.previousElementSibling.classList.remove(
    "hidden"
  );
}
