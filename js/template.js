// imports
let addMorebtn = document.getElementById("add-more-options-btn");
let addMoreForm = document.getElementById("add-more-options");
let addMoresection = document.getElementById("newlly-created-sections");
let removeBtn = document.getElementsByClassName("remove-btn");

//

function addNewSection(e) {
  e.preventDefault();
  let inputText = document.getElementById("add-more-options-input").value;
  // input text validation
  if (inputText == "") {
    alert("enter a valid name for the section");
  } else {
    // ctreate a new div and add the relevent
    let newSectionDiv = document.createElement("div");
    let newH3 = document.createElement("h3");
    newSectionDiv.className = "new-content";
    newH3.textContent = inputText;
    newSectionDiv.append(newH3);
    newSectionDiv.append(removeBtn);
    addMoresection.append(newSectionDiv);
  }
}

addMorebtn.addEventListener("click", addNewSection);
