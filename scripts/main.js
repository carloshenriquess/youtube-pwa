registerServiceWorker();

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("mr-service-worker.js");
    });
  }
}
