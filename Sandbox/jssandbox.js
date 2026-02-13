function introButton() {
    let introButtonText = document.getElementById("intro-button-text");
    let introButton = document.getElementById("intro-button");
    let okEmoji = document.getElementById("ok-emoji");
    
    if (okEmoji.innerHTML == "") {
        alert("Hey, look below the button!")
        okEmoji.innerHTML = "👌";
        introButton.innerText = "Gotcha!";
        introButtonText.innerHTML = "Made you look!"
    }
    else {
        okEmoji.innerHTML = "";
        introButtonText.innerHTML = "Hey wait you can't just take it back...";
        introButton.style.display = "none";
    }
}

