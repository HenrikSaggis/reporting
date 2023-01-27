
let uploadedFileAsString = "";

function uploadFromFile() {
    // const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      //content.innerText = reader.result;
      uploadedFileAsString = reader.result;

      // Split the string into an array, separated by line breaks.
      var stringSplittedToArray = uploadedFileAsString.split(/\r?\n/);
      console.log(stringSplittedToArray);
      
      // Search trough the array and remove every item that has a empty string value. Return it as a new array.
      var arrayWithoutEmptyElements = [];
      for (var i = 0; i < stringSplittedToArray.length; i++) {
        if (stringSplittedToArray[i] !== "") {
          arrayWithoutEmptyElements.push(stringSplittedToArray[i])
        }
      }

      // Write the new array without empty elements to console.
      console.log(arrayWithoutEmptyElements);

//#region CLASSIFICATIONS
      // Create an array of all available classifications
      var allClassifications = document.querySelector(".classification select");
      var allClassificationsArray = [];
      // Push all the values from the query selector as string values to an array.
      for (var i = 1; i < allClassifications.length; i++) {
        allClassificationsArray.push(allClassifications.options[i].value);
      }

      // Check if the classification from the report matches one of the possible classifications, and set the report classification to the matched value.
      for (var i = 0; i < allClassificationsArray.length; i++) {
        if (allClassificationsArray[i] == arrayWithoutEmptyElements[0].slice(16,19)) {
          var classificationSelect = document.getElementById("klasser");
          classificationSelect.value = allClassificationsArray[i];
        }
      }

//#endregion

//#region STATIC VALUES
      // Get the "from" value from the report, and put it in the from-field. 
      var from = document.getElementById("from");
      from.value = arrayWithoutEmptyElements[1].slice(6,100);

      // Get the "to" value from the report, and put it in the to-field.
      var to = document.getElementById("to");
      to.value = arrayWithoutEmptyElements[2].slice(4,100);

      // Get the "writer/operator" from the report, and put it in the writer/operator field.
      var writerOperator = document.getElementById("writeroperator");
      writerOperator.value = arrayWithoutEmptyElements[3].slice(17,100);

      // Get the "own position" from the report, and put it in the "own position" field.
      var ownPosition = document.getElementById("ownposition");
      ownPosition.value = arrayWithoutEmptyElements[4].slice(14,100);

      // Get the NAI/TAI from the report, and put it in the NAI/TAI position field.
      var naitai = document.getElementById("naitai");
      naitai.value = arrayWithoutEmptyElements[5].slice(9,100);

      // Get the "DTG from" the report, and put it in the DTG-from field.
      var dtgFrom = document.getElementById("dtgfrom");
      dtgFrom.value = arrayWithoutEmptyElements[6].slice(9,100);

      // Get the "DTG to" the report, and put it in the DTG-to field.
      var dtgTo = document.getElementById("dtgto");
      dtgTo.value = arrayWithoutEmptyElements[7].slice(9,100);
//#endregion

//#region BLUF
      // Find the array elements that contains the BLUF information. Probably excessive because bluf will always start at array-index 8 for now.
      var blufStartsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Bottom Line Up Front:") {
          blufStartsAtIndex = i + 1;
        }
      }
      
      // Find the array element that contains pattern of life. This will indicate where the BLUF information ends.
      var blufEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Pattern of life:") {
          blufEndsAtIndex = i;
        }
      }
      
      // Iterate trough the elements in the array that contains the BLUF information, and write it to a string. 
      var blufContent = "";
      for (var i = blufStartsAtIndex; i < blufEndsAtIndex; i++) {
        blufContent = blufContent + arrayWithoutEmptyElements[i];
        blufContent = blufContent + "\n";
      }

      // Input the string in the BLUF-field in the report.
      var bluf = document.getElementById("bluf");
      bluf.value = blufContent;
//#endregion

//#region PATTERN OF LIFE
      // Find the array element that contains "Pattern of life"-string value. This will indicate the start of "Pattern of life"-information.
      var polStartsAtIndex = blufEndsAtIndex + 1;

      // Find the array element that contains "static units in NAI".
      var polEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Static units in NAI:") {
          polEndsAtIndex = i;
        }
      }

      // Iterate trough the elements in the array that contains the POL information, and write it to a string.
      var polContent = "";
      for (var i = polStartsAtIndex; i < polEndsAtIndex; i++) {
        polContent = polContent + arrayWithoutEmptyElements[i];
        polContent = polContent + "\n";
      }
      
      // Input the string in the POL-field in the report. 
      var patternOfLife = document.getElementById("patternoflife");
      patternOfLife.value = polContent;
//#endregion

//#region STATIC UNITS IN NAI
      // Find the start of the elements that belongs to "Static Units in NAI".
      var staticUnitsStartsAtIndex = polEndsAtIndex + 1;

      // Find the array element that contains "Overall comment".
      var staticUnitsEndsAtIndex = "";
      for (var i = 0; i < arrayWithoutEmptyElements.length; i++) {
        if (arrayWithoutEmptyElements[i] == "Overall comment:") {
          staticUnitsEndsAtIndex = i;
        }
      }
      console.log(staticUnitsEndsAtIndex);

      // Iterate trough the elements in the array that contains information about static units, and write it to the table in the report.
      var staticUnits;
      for (var i = staticUnitsStartsAtIndex; i < staticUnitsEndsAtIndex; i++) {
        staticUnits = arrayWithoutEmptyElements[i].split(" ");
      }
      console.log(staticUnits);
//#endregion


    }, false);
    if (file) {
      reader.readAsText(file);
    }
}
