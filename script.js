// Initialize Blockly workspace
var workspace = Blockly.inject('blocklyDiv', {
  media: 'https://unpkg.com/blockly/media/',
  toolbox: defaultToolbox
});

// Function to run code
function runCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  // Execute the generated code and display the result
  var result = eval(code);
  document.getElementById('output').textContent = "Result: " + result;
}

// // Function to save Blockly configurations
// function saveConfigurations() {
//   var xml = Blockly.Xml.workspaceToDom(workspace);
//   var xmlText = Blockly.Xml.domToText(xml);

//   // Use browser API to save the configurations
//   var blob = new Blob([xmlText], {type: "text/plain;charset=utf-8"});
//   saveAs(blob, "block_configurations.xml"); // Ensure to include FileSaver.js library
// }

// Function to save Blockly configurations
function saveConfigurations(event) {
  event.preventDefault(); // Prevent default action

  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xmlText = Blockly.Xml.domToText(xml);

  // Prompt user to choose where to save the file
  var fileName = prompt("Enter file name (without extension):");
  if (fileName === null || fileName === "") {
    console.error("File name cannot be empty.");
    return;
  }
  var fullFileName = fileName + ".xml";

  // Convert the XML text to a Blob
  var blob = new Blob([xmlText], { type: "text/xml" });

  // Use FileSaver.js to save the Blob as a file
  saveAs(blob, fullFileName);
}


// Function to load Blockly configurations
function loadConfigurations(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    try {
      var xmlText = event.target.result;
      var xml = Blockly.utils.xml.textToDom(xmlText);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
    } catch (error) {
      console.error('Error loading configurations:', error);
    }
  };

  reader.readAsText(file);
}

// Function to convert Blockly configurations to Python code
function convertToPython() {
  var code = Blockly.Python.workspaceToCode(workspace);
  document.getElementById('pythonCode').value = code;
}

// listeners to the buttons
document.getElementById('saveButton').addEventListener('click', saveConfigurations) 
document.getElementById('loadButton').addEventListener('click', loadConfigurations);
document.getElementById('convertToPythonButton').addEventListener('click', convertToPython);
