let logs = [];

function convert() {
    try {
        let number = document.getElementById("number").value.trim();
        let baseFrom = parseInt(document.getElementById("baseFrom").value);
        let baseTo = parseInt(document.getElementById("baseTo").value);

        if (baseFrom < 1 || baseFrom > 36 || baseTo < 1 || baseTo > 36) {
            throw "Invalid base";
        }

        let decimalValue;

        // Base 1 (unary)
        if (baseFrom === 1) {
            decimalValue = number.length;
        } else {
            decimalValue = parseInt(number, baseFrom);
        }

        let convertedValue;

        if (baseTo === 1) {
            convertedValue = "1".repeat(decimalValue);
        } else {
            convertedValue = decimalValue.toString(baseTo).toUpperCase();
        }

        document.getElementById("result").value = convertedValue;

        let logEntry = `${number}(${baseFrom}) -> ${convertedValue}(${baseTo})`;
        logs.push(logEntry);
        updateLogs();

    } catch (e) {
        alert("Invalid input. Please check number and bases.");
        document.getElementById("result").value = "";
    }
}

function swapBases() {
    let baseFromField = document.getElementById("baseFrom");
    let baseToField = document.getElementById("baseTo");

    let temp = baseFromField.value;
    baseFromField.value = baseToField.value;
    baseToField.value = temp;
}

function clearFields() {
    document.getElementById("number").value = "";
    document.getElementById("baseFrom").value = "";
    document.getElementById("baseTo").value = "";
    document.getElementById("result").value = "";
}

function updateLogs() {
    let logBox = document.getElementById("logBox");
    logBox.innerHTML = "";

    logs.forEach(entry => {
        let div = document.createElement("div");
        div.textContent = entry;
        logBox.appendChild(div);
    });
}
