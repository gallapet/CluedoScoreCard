window.addEventListener("load", () => {
  var playerCellsAll = document.querySelectorAll("td.player-cell");
  var resultCellsAll = document.querySelectorAll("td.result-cell");

  playerCellsAll.forEach((cell) => {
    cell.innerHTML +=
      '<select class="result"><option value=""><option value="cross">❌</option><option value="zero">O</option></option></select>';
  });
  resultCellsAll.forEach((cell) => {
    cell.innerHTML +=
      '<select class="result"><option value=""><option value="cross">❌</option><option value="zero">O</option></option><option value="tick">✅</option><option value="clear">Clear</option></select>';
  });

  var rows = document.querySelectorAll("tr.cell");

  rows.forEach((row) => {
    var playerCellsRow = row.querySelectorAll("td.player-cell");
    var resultCellRow = row.querySelector("td.result-cell");
    var resultCellOption = resultCellRow.querySelector("select.result");

    row.addEventListener("change", () => {
      playerCellsRow.forEach((cell) => {
        if (cell.querySelector("select.result").value === "cross") {
          resultCellOption.value = "cross";
          setRestOfRowAsZero(playerCellsRow);
        }
      });
      if (cellsAreAllZero(playerCellsRow)) {
        resultCellOption.value = "tick";
      }
    });

    resultCellRow.addEventListener("change", () => {
      if (resultCellOption.value === "clear") {
        playerCellsRow.forEach((cell) => {
          cell.querySelector("select.result").value = "";
          resultCellOption.value = "";
        });
      } else if (
        resultCellOption.value === "cross" &&
        !cellsAreAllEmpty(playerCellsRow)
      ) {
        playerCellsRow.forEach((cell) => {
          cell.children[0].value = "zero";
        });
      }
    });
  });
});

function cellsAreAllEmpty(nodeList) {
  var result = true
  nodeList.forEach((el) => {
    if (el.children[0].value !== "") {
      result = false;
    }
  });
  return result;
}

function cellsAreAllZero(nodeList) {
  var result = true
  nodeList.forEach((el) => {
    if (
      el.children[0].value !== "zero") {
      result = false;
    }
  });
  return result;
}

function setRestOfRowAsZero(nodeList) {
  nodeList.forEach((el) => {
    if (el.children[0].value !== "cross") {
      el.children[0].value = "zero";
    }
  });
}
