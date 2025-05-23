// Get the target date
const targetDate = new Date("April 26, 2025 23:59:00").getTime();

// Refresh how much time left every 1 second
const countdownInterval = setInterval(function() {
    // Current date and time
    const now = new Date().getTime();

    const timeLeft = targetDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        "Round 3 Ends in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Round 3 is over!";
    }
}, 1000);
