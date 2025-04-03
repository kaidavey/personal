function checkPasskey(e) {
    const correctHash = "3bf7797ab36c0ac1d9741964a9ef37e4";
    const inputPasskey = document.getElementById("passkey").value;
    const inputHash = md5(inputPasskey);

    e.preventDefault();

    if (inputHash === correctHash) {
        var list = document.getElementsByClassName("name");
        for (var i = 0; i < list.length; i++) {
            list[i].style.display = "block";
        }
        document.getElementById("overlay").style.display = "none";
    } else {
        alert("Incorrect passkey!");
    }
}

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    checkPasskey(event);
});

var playerCount = document.getElementById("playerCount");
document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    playerCount.textContent = "" + document.getElementsByClassName("in").length;
})

var playersOut = document.getElementById("playersOut");
document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();
    playersOut.textContent = "" + document.getElementsByClassName("out").length;
})