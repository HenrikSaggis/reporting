var tableRowCounter = 1;

function addTableRows() {
    // Get the table for static units.
    var staticUnitsTable = document.getElementById("staticunits");

    // Create a new row in the table.
    var row = document.createElement("tr");

    // Create a new cell for Unit, and a new cell for DTG in the table.
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    // Create input fields in the table, in order to accept user input. 
    var input1 = document.createElement("input");
    input1.id = 'staticunit' + tableRowCounter;
    var input2 = document.createElement("input");
    input2.maxLength = "6";
    input2.id = 'staticdtg' + tableRowCounter;

    // Place the input fields in the newly created cells.
    cell1.appendChild(input1);
    cell2.appendChild(input2);

    // Append the cells to the new row.
    row.appendChild(cell1);
    row.appendChild(cell2);

    // Append the row to the table.
    staticUnitsTable.appendChild(row);

    return tableRowCounter = tableRowCounter + 1;
}

function removeTableRows() {
    var staticUnitsTableLast = document.getElementById("staticunits").lastChild;
    document.getElementById('staticunits').removeChild(staticUnitsTableLast);

    return tableRowCounter = tableRowCounter - 1;
}