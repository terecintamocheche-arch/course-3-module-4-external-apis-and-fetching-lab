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
    
