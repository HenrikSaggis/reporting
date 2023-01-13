
// Declaring a variable to be used as a counter inside the addJournalNumber-function.
var journalNumberCounter = 1;

// Declaring the function for adding a new journal number to a report.
function addJournalNumber() {

    // Declaring the container. This element will display all new journal number entries, and place them above the plus/minus buttons.
    var container = document.getElementById('addHere');

    // Creating a new field to display the journal number for the observation. 
    var journalNumberStart = document.getElementById("journalnumber").value; 
    var journalNumberNext = document.createElement('input'); 
    journalNumberNext.type = 'number';
    journalNumberNext.value = parseInt(journalNumberStart) + journalNumberCounter;
    container.appendChild(journalNumberNext);
    container.appendChild(document.createElement('br'));

    // Creating a new input field for the "Facts" section.
    var facts = document.createElement("input");
    facts.type = 'text';
    facts.placeholder = 'Facts';
    container.appendChild(facts);
    container.appendChild(document.createElement('br'));

    // Creating a new input field for the "Comment" section.
    var comment = document.createElement("input");
    comment.type = 'text';
    comment.placeholder = 'Comment';
    container.appendChild(comment);
    container.appendChild(document.createElement('br'));

    // Creating a new input field for the assessment section.
    var assessment = document.createElement("input");
    assessment.type = 'text';
    assessment.placeholder = 'Assessment';
    container.appendChild(assessment);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // Increment the journal number counter.
    return journalNumberCounter = journalNumberCounter + 1;
}

// Declaring the function for removing journal numbers. This one is ugly as fuck. Needs revisioning. 
function removeJournalNumber() {
    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    var topop = document.getElementById('addHere').lastChild;
    document.getElementById('addHere').removeChild(topop)

    return journalNumberCounter = journalNumberCounter - 1;
}

// Declaring the function for keeping track of journal numbers in the report.

