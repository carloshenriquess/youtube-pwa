const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("mr-service-worker.js");
    });
  }
};

registerServiceWorker();
