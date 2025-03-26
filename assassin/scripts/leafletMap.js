// Initialize the map centered on Roosevelt High School
var map = L.map('map').setView([47.6772, -122.3138], 18);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define the multi-section boundary (matching the image)
var boundary3 = [
    [47.6780, -122.3155], // Top-left
    [47.6780, -122.3120], // Top-right
    [47.6774, -122.3120], // Bottom-right
    [47.6774, -122.3155], // Bottom-left 8
    [47.6780, -122.3155]  // Close the polygon
];

var boundary4 = [
    [47.6774, -122.3133], // Top-left y
    [47.6774, -122.3120], // Top-right
    [47.6766, -122.3120], // Bottom-right
    [47.6766, -122.3133], // Bottom-left y
    [47.6774, -122.3133]  // Close the polygon
];

// Add the boundary polygons
L.polygon(boundary3, { color: 'green', fillOpacity: 0.3 }).addTo(map);
L.polygon(boundary4, { color: 'green', fillOpacity: 0.3 }).addTo(map);

// Add a marker for Roosevelt High School
L.marker([47.6776, -122.3127]).addTo(map)
    .bindPopup("You are safe at all times in this zone")
    .openPopup();