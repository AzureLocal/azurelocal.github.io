// Generated from azurelocal-ztp docs/.vitepress/theme/image-zoom.ts (same viewer on both sites), types removed.
// Docusaurus client module: diagrams in the ZTP docs open full screen with zoom and scroll when clicked.
// To use it for more images, widen the selector at the end of this file.
const MAX_SCALE = 8;
function enableImageZoom(selector) {
  if (typeof document === "undefined") return;
  const w = window;
  if (w.__imageZoom) return;
  w.__imageZoom = true;
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement) || !target.matches(selector) || target.closest("a")) return;
    event.preventDefault();
    openViewer(target);
  });
}
function button(label, title) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "iz-button";
  b.textContent = label;
  b.title = title;
  b.setAttribute("aria-label", title);
  return b;
}
function openViewer(source) {
  const previousFocus = document.activeElement;
  const previousOverflow = document.documentElement.style.overflow;
  const overlay = document.createElement("div");
  overlay.className = "iz-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", source.alt || "Image");
  const toolbar = document.createElement("div");
  toolbar.className = "iz-toolbar";
  const hint = document.createElement("span");
  hint.className = "iz-hint";
  hint.textContent = "Wheel or + / \u2212 to zoom \xB7 drag or scroll to move \xB7 Esc to close";
  const level = document.createElement("span");
  level.className = "iz-level";
  const zoomOut = button("\u2212", "Zoom out (-)");
  const fitButton = button("Fit", "Fit to window (0)");
  const actual = button("100%", "Actual size (1)");
  const zoomIn = button("+", "Zoom in (+)");
  const original = document.createElement("a");
  original.className = "iz-button";
  original.href = source.currentSrc || source.src;
  original.target = "_blank";
  original.rel = "noopener";
  original.textContent = "Open";
  original.title = "Open the image in a new tab";
  const close = button("\xD7", "Close (Esc)");
  toolbar.append(hint, level, zoomOut, fitButton, actual, zoomIn, original, close);
  const stage = document.createElement("div");
  stage.className = "iz-stage";
  stage.tabIndex = -1;
  const img = new Image();
  img.className = "iz-img";
  img.alt = source.alt;
  img.draggable = false;
  img.src = source.currentSrc || source.src;
  stage.append(img);
  overlay.append(toolbar, stage);
  document.body.append(overlay);
  document.documentElement.style.overflow = "hidden";
  stage.focus();
  let scale = 1;
  let fit = 1;
  let mode = "width";
  const naturalWidth = () => img.naturalWidth || source.naturalWidth || 1;
  const naturalHeight = () => img.naturalHeight || source.naturalHeight || 1;
  const computeFit = () => Math.min(stage.clientWidth / naturalWidth(), stage.clientHeight / naturalHeight());
  const computeWidth = () => Math.min(stage.clientWidth / naturalWidth(), 1);
  function setScale(next, x, y) {
    const min = Math.min(fit, 1) / 2;
    next = Math.max(min, Math.min(MAX_SCALE, next));
    const box = stage.getBoundingClientRect();
    const cx = x ?? box.left + stage.clientWidth / 2;
    const cy = y ?? box.top + stage.clientHeight / 2;
    const before = img.getBoundingClientRect();
    const ix = (cx - before.left) / scale;
    const iy = (cy - before.top) / scale;
    scale = next;
    img.style.width = `${naturalWidth() * scale}px`;
    img.style.height = `${naturalHeight() * scale}px`;
    const after = img.getBoundingClientRect();
    stage.scrollLeft += after.left + ix * scale - cx;
    stage.scrollTop += after.top + iy * scale - cy;
    level.textContent = `${Math.round(scale * 100)}%`;
  }
  function toFit() {
    fit = computeFit();
    mode = "page";
    setScale(fit);
  }
  function toWidth() {
    fit = computeFit();
    mode = "width";
    setScale(computeWidth());
    if (stage.scrollWidth > stage.clientWidth) setScale(computeWidth());
    stage.scrollLeft = 0;
    stage.scrollTop = 0;
  }
  if (img.complete && img.naturalWidth) toWidth();
  else img.addEventListener("load", toWidth, { once: true });
  const step = 1.25;
  const zoomBy = (factor, x, y) => {
    mode = null;
    setScale(scale * factor, x, y);
  };
  zoomIn.addEventListener("click", () => zoomBy(step));
  zoomOut.addEventListener("click", () => zoomBy(1 / step));
  fitButton.addEventListener("click", toFit);
  actual.addEventListener("click", () => {
    mode = null;
    setScale(1);
  });
  stage.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoomBy(Math.exp(-event.deltaY * 15e-4), event.clientX, event.clientY);
  }, { passive: false });
  stage.addEventListener("dblclick", (event) => {
    const near = Math.abs(scale - 1) < 0.05;
    mode = null;
    setScale(near ? computeFit() : 1, event.clientX, event.clientY);
  });
  let drag = null;
  stage.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || event.button !== 0) return;
    const box = stage.getBoundingClientRect();
    if (event.clientX - box.left >= stage.clientWidth || event.clientY - box.top >= stage.clientHeight) return;
    drag = { x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop };
    stage.setPointerCapture(event.pointerId);
    stage.classList.add("iz-dragging");
  });
  stage.addEventListener("pointermove", (event) => {
    if (!drag) return;
    stage.scrollLeft = drag.left - (event.clientX - drag.x);
    stage.scrollTop = drag.top - (event.clientY - drag.y);
  });
  const endDrag = () => {
    drag = null;
    stage.classList.remove("iz-dragging");
  };
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);
  const onResize = () => {
    if (mode === "page") toFit();
    else if (mode === "width") {
      fit = computeFit();
      setScale(computeWidth());
    } else fit = computeFit();
  };
  window.addEventListener("resize", onResize);
  function onKey(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeViewer();
    } else if (event.key === "+" || event.key === "=") zoomBy(step);
    else if (event.key === "-" || event.key === "_") zoomBy(1 / step);
    else if (event.key === "0") toFit();
    else if (event.key === "1") {
      mode = null;
      setScale(1);
    }
  }
  document.addEventListener("keydown", onKey);
  function closeViewer() {
    document.removeEventListener("keydown", onKey);
    window.removeEventListener("resize", onResize);
    overlay.remove();
    document.documentElement.style.overflow = previousOverflow;
    previousFocus?.focus?.();
  }
  close.addEventListener("click", closeViewer);
}
export {
  enableImageZoom
};

// Docusaurus renames images at build time (/assets/images/ztp-flow-<hash>.png), so match the file name.
enableImageZoom('.markdown img[src*="ztp-"]');
