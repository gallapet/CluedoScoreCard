window.addEventListener("load", () => {
    var playerCells = document.getElementsByName("player-cell");
    playerCells.forEach((cell) => {
        cell.innerHTML += "<select name=\"result\" id=\"result-select\"><option value=\"\"></option><option value=\"tick\">✅</option><option value=\"cross\">❌</option><option value=\"none\">O</option></select>"
    })
})



