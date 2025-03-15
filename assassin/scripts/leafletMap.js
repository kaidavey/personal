// Initialize the map centered on Roosevelt High School
var map = L.map('map').setView([47.6772, -122.3138], 17);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define the multi-section boundary (matching the image)
var boundary1 = [
    [47.6773, -122.3173], // Top-left done
    [47.6773, -122.3157], // Top-right
    [47.6765, -122.3157], // Bottom-right 8
    [47.6765, -122.3173], // Bottom-left done
    [47.6773, -122.3173]  // Close the polygon done
];

var boundary2 = [
    [47.6781, -122.3157], // Top-left
    [47.6781, -122.3120], // Top-right
    [47.6765, -122.3120], // Bottom-right
    [47.6765, -122.3157], // Bottom-left 8
    [47.6781, -122.3157]  // Close the polygon
];

var boundary3 = [
    [47.6794, -122.3120], // Top-left y
    [47.6794, -122.3097], // Top-right
    [47.6757, -122.3097], // Bottom-right
    [47.6757, -122.3120], // Bottom-left y
    [47.6794, -122.3120]  // Close the polygon
];

// Add the boundary polygons
L.polygon(boundary1, { color: 'green', fillOpacity: 0.3 }).addTo(map);
L.polygon(boundary2, { color: 'green', fillOpacity: 0.3 }).addTo(map);
L.polygon(boundary3, { color: 'green', fillOpacity: 0.3 }).addTo(map);

// Add a marker for Roosevelt High School
L.marker([47.6776, -122.3127]).addTo(map)
    .bindPopup("Roosevelt High School")
    .openPopup();