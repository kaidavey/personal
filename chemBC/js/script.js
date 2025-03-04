document.getElementById("chooseDay").addEventListener("submit", function(event) {
    // Prevent page from reloading and clear error
    event.preventDefault();
    document.getElementById("error").textContent = "";

    // Get selected radio button value
    const day = document.querySelector('input[name="day"]:checked').value;

    // Replace agenda given chosen day
    if (day === "1") {
        monday();
    } else if (day === "2") {
        tuesday();
    } else if (day === "3") {
        wednesday();
    } else if (day === "4") {
        thursday();
    } else if (day === "5") {
        friday();
    } else {
        console.log("Invalid date.");
        const err = document.createElement("p");
        err.innerText = "Invalid date.";
        document.getElementById("form").appendChild(err);
    }

    // Clear form selection
    this.reset();
});

const agenda = document.getElementById("agenda");

function monday() {
    clearForm();
    agenda.innerHTML = "<h3>Hello there</h3>";
}

function tuesday() {
    clearForm();
}

function wednesday() {
    clearForm();
}

function thursday() {
    clearForm();
}

function friday() {
    clearForm();
}

let clearForm = function() {
    document.getElementById("form").innerHTML = "";
}