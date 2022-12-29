window.addEventListener("load", () => {
  var cells = document.querySelectorAll(".player-cell, .result-cell");
  cells.forEach((cell) => {
    cell.innerHTML +=
      '<select class="result"><option value=""></option><option value="tick">✅</option><option value="cross">❌</option><option value="none">O</option></select>';
  });

  var rows = document.querySelectorAll("tr.cell");
  rows.forEach((row) => {
    var playerCells = row.querySelectorAll("td.player-cell");
    var resultCellOption = row
      .querySelector("td.result-cell")
      .querySelector("select.result");
    row.addEventListener("change", () => {
      console.log(playerCells);
      playerCells.forEach((cell) => {
        if (cell.querySelector("select.result").value === "cross") {
          resultCellOption.value = "cross";
        }
      });
      if (resultCellOption.value === "cross") {
        playerCells.forEach((cell) => {
          if (cell.querySelector("select.result").value === "") {
            cell.querySelector("select.result").value = "none";
          }
        });
      }
    });
  });
});
