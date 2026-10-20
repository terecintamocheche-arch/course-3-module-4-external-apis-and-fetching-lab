// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
const weatherApi = "https://api.weather.gov/alerts/active?area=";

document.addEventListener("DOMContentLoaded", () => {
  const stateInput = document.getElementById("state-input");
  const fetchButton = document.getElementById("fetch-alerts");
  const alertsDisplay = document.getElementById("alerts-display");
  const errorMessage = document.getElementById("error-message");

  fetchButton.addEventListener("click", async () => {
    const state = stateInput.value.trim().toUpperCase();


    stateInput.value = "";

    // Validate the input
    if (!/^[A-Z]{2}$/.test(state)) {
      errorMessage.textContent =
        "Please enter a valid two-letter state abbreviation.";
      errorMessage.classList.remove("hidden");
      return;
    }
errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
    alertsDisplay.textContent = "";

    try {
      const response = await fetch(`${weatherApi}${state}`);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const alerts = data.features || [];

      const heading = document.createElement("h2");
      heading.textContent = `Weather Alerts: ${alerts.length}`;
      alertsDisplay.appendChild(heading);

      if (alerts.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No active weather alerts for this state.";
        alertsDisplay.appendChild(message);
      } else {
        const list = document.createElement("ul");

        alerts.forEach((alert) => {
          const item = document.createElement("li");
          item.textContent =
            alert.properties?.headline || "No headline available";
          list.appendChild(item);
        });

        alertsDisplay.appendChild(list);
      }
