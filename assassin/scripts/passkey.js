function checkPasskey(e) {
    const correctHash = "3bf7797ab36c0ac1d9741964a9ef37e4";
    const inputPasskey = document.getElementById("passkey").value;
    const inputHash = md5(inputPasskey);

    e.preventDefault();

    if (inputHash === correctHash) {
        document.getElementById("background").style.backdropFilter = "blur(0px)";
        document.getElementById("overlay").style.display = "none";
    } else {
        alert("Incorrect passkey!");
    }
}

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    checkPasskey(event);
});