const WIDGET_IFRAME_ID = "widget_content";

function showWidget(show = true) {
  const widget = document.getElementById(WIDGET_IFRAME_ID);
  widget.style.display = show ? "block" : "none";
}
function onSubmit() {
  showWidget();
  return true;
}

// handlers for events triggered by callbacks
window.addEventListener("message", event => {
  const {id, action} = event.data;
  if (action === "cancel") {
    showWidget(false);
  }
  if (action === "done") {
    window.location.href = `./cache/results/get/${id}`;
  }
});
