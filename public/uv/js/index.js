"use strict";

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
let searchEngine = localStorage.getItem('searchEngine');
if (!searchEngine) {
  searchEngine = "https://www.google.com/search?q=%s";
}
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");

const url = new URLSearchParams(window.location.search);
const q = url.get('q');
if (q) {
  const url = search(q, searchEngine);
  localStorage.setItem('url', __uv$config.prefix + __uv$config.encodeUrl(url));
  location.href = "/load.html"
} else {
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine);
  localStorage.setItem('url', __uv$config.prefix + __uv$config.encodeUrl(url));
  location.href = "/load.html"
});
