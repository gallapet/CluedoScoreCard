window.addEventListener("load", () => {
    var cells = document.querySelectorAll(".player-cell, .result-cell");
    cells.forEach((cell) => {
        cell.innerHTML += "<select name=\"result\" class=\"result-select\"><option value=\"\"></option><option value=\"tick\">✅</option><option value=\"cross\">❌</option><option value=\"none\">O</option></select>";
    })

    var row = document.querySelector("#green");
    row.addEventListener("click", () => {
        var playerCells = row.querySelectorAll("td.player-cell")
        var resultCell = row.querySelector("td.result-cell").querySelector("select.result-select")
        playerCells.forEach((cell) => {
            console.log(cell.querySelector("select.result-select").value);
            if (cell.querySelector("select.result-select").value === "cross") {
                resultCell.value = "cross";
            }
        })
    })

})