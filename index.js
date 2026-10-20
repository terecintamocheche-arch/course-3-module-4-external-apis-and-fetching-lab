// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
const list = document.createElement("ul");

        alerts.forEach((alert) => {
          const item = document.createElement("li");
          item.textContent =
            alert.properties?.headline || "No headline available";
          list.appendChild(item);
        });
        