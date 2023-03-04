window.addEventListener("load", () => {
  let playerCellsAll = document.querySelectorAll("td.player-cell");
  let resultCellsAll = document.querySelectorAll("td.result-cell");

  playerCellsAll.forEach((cell) => {
    cell.innerHTML +=
      '<select class="result"><option value=""><option value="cross">❌</option><option value="zero">O</option></option></select>';
  });
  resultCellsAll.forEach((cell) => {
    cell.innerHTML +=
      '<select class="result"><option value=""><option value="cross">❌</option><option value="zero">O</option></option><option value="tick">✅</option><option value="clear">Clear</option></select>';
  });

  let rows = document.querySelectorAll("tr.cell");

  rows.forEach((row) => {
    let playerCellsRow = row.querySelectorAll("td.player-cell");
    let resultCellRow = row.querySelector("td.result-cell");
    let resultCellOption = resultCellRow.querySelector("select.result");

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
  let result = true
  nodeList.forEach((el) => {
    if (el.children[0].value !== "") {
      result = false;
      return;
    }
  });
  return result;
}

function cellsAreAllZero(nodeList) {
  let result = true
  nodeList.forEach((el) => {
    if (el.children[0].value !== "zero") {
      result = false;
      return;
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
