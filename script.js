document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed!");

    // Initialize values
    let moistureLevel = Math.floor(Math.random() * 101);
    let points = 100;

    // Get the elements by their IDs
    const moistureLevelElement = document.getElementById("moisture-level");
    const rewardPointsElement = document.getElementById("reward-points");
    const pumpStatusElement = document.getElementById("pump-status");

    // Ensure elements are found
    if (moistureLevelElement  && pumpStatusElement&& pumpStatusElement) {
        moistureLevelElement.textContent = moistureLevel;  // Set moisture level
        rewardPointsElement.textContent = points;  // Set reward points
    } else {
        console.error("Some elements are missing in the HTML!");
    }

    // Simulate weather data
    let temp = Math.floor(Math.random() * 10) + 25;
    let humidity = Math.floor(Math.random() * 41) + 30;
    let rainfall = Math.floor(Math.random() * 101);
    let wind = Math.floor(Math.random() * 21) + 5;

    // Display weather data
    document.getElementById("temp").textContent = temp;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("rain").textContent = rainfall;
    document.getElementById("wind").textContent = wind;

    // Control Pump Status
    document.getElementById("pump-on").addEventListener("click", function() {
        pumpStatusElement.textContent = "Pump Status: ON";
    });

    document.getElementById("pump-off").addEventListener("click", function() {
        pumpStatusElement.textContent = "Pump Status: OFF";
    });


});
