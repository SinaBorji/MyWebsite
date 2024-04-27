// Define custom blocks
Blockly.defineBlocksWithJsonArray([
  // Logic category
  // Define logic boolean block
  {
    "type": "logic_boolean",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "BOOL",
        "options": [
          ["true", "TRUE"],
          ["false", "FALSE"]
        ]
      }
    ],
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Boolean value: true or false",
    "helpUrl": ""
  },
  // Define logic negate block
  {
    "type": "logic_negate",
    "message0": "not %1",
    "args0": [
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      }
    ],
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Negate a boolean value",
    "helpUrl": ""
  },
  // Define test if block
  {
    "type": "test_if",
    "message0": "test %1 if true %2 if false %3",
    "args0": [
      {
        "type": "input_value",
        "name": "TEST",
        "check": null
      },
      {
        "type": "input_value",
        "name": "IF_TRUE"
      },
      {
        "type": "input_value",
        "name": "IF_FALSE"
      }
    ],
    "output": "Value",
    "colour": 210,
    "tooltip": "Test a condition and execute blocks based on true or false",
    "helpUrl": ""
  },
  // Define compare numbers block
  {
    "type": "compare_numbers",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "LEFT",
        "check": ["Number", "Variable"]
      },
      {
        "type": "field_dropdown",
        "name": "OPERATOR",
        "options": [
          ["=", "="],
          ["<", "<"],
          [">", ">"],
          ["≤", "≤"],
          ["≥", "≥"],
          ["≠", "≠"]
        ]
      },
      {
        "type": "input_value",
        "name": "RIGHT",
        "check": ["Number", "Variable"]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Compare two numbers or variables",
    "helpUrl": ""
  },
  // Define logic combine block
  {
    "type": "logic_combine",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "LEFT",
        "check": "Boolean"
      },
      {
        "type": "field_dropdown",
        "name": "OPERATOR",
        "options": [
          ["and", "AND"],
          ["or", "OR"]
        ]
      },
      {
        "type": "input_value",
        "name": "RIGHT",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 210,
    "tooltip": "Combine two boolean values with 'and' or 'or'",
    "helpUrl": ""
  },
  {
    "type": "controls_if",
    "message0": "if %1 then %2",
    "args0": [
      {
        "type": "input_value",
        "name": "IF0",
        "check": "Boolean"
      },
      {
        "type": "input_statement",
        "name": "DO0"
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "If condition then do something, else do something else",
    "mutator": "controls_if_mutator"
  },
  "controls_if_mutator", {
    "message0": "Add %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["elif", "ELIF"],
          ["else", "ELSE"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Add elif or else condition",
    "mutator": "controls_if_mutator"
  },  
  // Math category
  {
    "type": "math_trig_function",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FUNCTION",
        "options": [
          ["sin", "SIN"],
          ["cos", "COS"],
          ["tan", "TAN"],
          ["cot", "COT"]
        ]
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "Perform trigonometric functions",
    "helpUrl": ""
  },
  {
    "type": "math_comparison",
    "message0": "%1 is %2",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "COMPARISON",
        "options": [
          ["odd", "ODD"],
          ["even", "EVEN"],
          ["whole", "WHOLE"],
          ["positive", "POSITIVE"],
          ["negative", "NEGATIVE"],
          ["prime", "PRIME"]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 230,
    "tooltip": "Perform math comparisons",
    "helpUrl": ""
  },
  {
    "type": "math_advanced_operation",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OPERATION",
        "options": [
          ["Square root", "ROOT"],
          ["Logarithm", "LOG"],
          ["Absolute", "ABS"],
          ["-", "-"],
          ["+", "+"],
          ["*", "*"],
          ["/", "/"]
        ]
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "Perform advanced math operations",
    "helpUrl": ""
  },
  // Number block
  {
    "type": "math_number",
    "message0": "%1",
    "args0": [
      {
        "type": "field_number",
        "name": "NUM",
        "value": 0
      }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "A number block",
    "helpUrl": ""
  },
  // Math operation block
  {
    "type": "math_operation",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "LEFT",
        "check": ["Number", "Variable"]
      },
      {
        "type": "field_dropdown",
        "name": "OPERATOR",
        "options": [
          ["+", "+"],
          ["-", "-"],
          ["*", "*"],
          ["/", "/"],
          ["^", "^"]
        ]
      },
      {
        "type": "input_value",
        "name": "RIGHT",
        "check": ["Number", "Variable"]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 230,
    "tooltip": "Perform a math operation",
    "helpUrl": ""
  },
  // Variables category
  // Define variable block
  {
    "type": "variables_get",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "item"
      }
    ],
    "output": null,
    "colour": 330,
    "tooltip": "Get the value of a variable.",
    "helpUrl": ""
  },
  // Set variable block
  {
    "type": "variables_set",
    "message0": "set %1 to %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "Set a variable to a specific value.",
    "helpUrl": ""
  },
  // Change variable by block
  {
    "type": "variables_change",
    "message0": "change %1 by %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "item"
      },
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "Change the value of a variable by a certain amount.",
    "helpUrl": ""
  },
  // List category
  // Create empty list block
  {
    "type": "lists_create_empty",
    "message0": "create empty list",
    "output": "Array",
    "colour": 260,
    "tooltip": "Create an empty list.",
    "helpUrl": ""
  },
  // Create list with block
  {
    "type": "lists_create_with",
    "message0": "create list with %1",
    "args0": [
      {
        "type": "input_value",
        "name": "ADD0"
      }
    ],
    "output": "Array",
    "colour": 260,
    "tooltip": "Create a list with any number of items.",
    "helpUrl": ""
  },
  // Length of list block
  {
    "type": "lists_length",
    "message0": "length of %1",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Array"
      }
    ],
    "output": "Number",
    "colour": 260,
    "tooltip": "Returns the length of a list.",
    "helpUrl": ""
  },
  // Is list empty block
  {
    "type": "lists_isEmpty",
    "message0": "%1 is empty",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "Array"
      }
    ],
    "output": "Boolean",
    "colour": 260,
    "tooltip": "Returns true if the list is empty.",
    "helpUrl": ""
  },
  // Sort list block
  {
    "type": "lists_sort",
    "message0": "sort %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          ["alphabetically", "TEXT"],
          ["numerically", "NUMERIC"],
          ["randomly", "RANDOM"]
        ]
      },
      {
        "type": "input_value",
        "name": "LIST",
        "check": "Array"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Sort a list.",
    "helpUrl": ""
  },
  // Text category
  // Text block
  {
    "type": "text",
    "message0": " \" %1 \" ",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": ""
      }
    ],
    "output": "String",
    "colour": 70,
    "tooltip": "Text block",
    "helpUrl": ""
  },
  // Text length block
  {
    "type": "text_length",
    "message0": "length of %1",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      }
    ],
    "output": "Number",
    "colour": 70,
    "tooltip": "Returns number of letters in the provided text.",
    "helpUrl": ""
  },
  // Text join block
  {
    "type": "text_join",
    "message0": "join %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "STRING1",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "STRING2",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 70,
    "tooltip": "Join two pieces of text.",
    "helpUrl": ""
  },
  // Text change case block
  {
    "type": "text_changeCase",
    "message0": "change %1 case",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CASE",
        "options": [
          ["uppercase", "UPPERCASE"],
          ["lowercase", "LOWERCASE"],
          ["titlecase", "TITLECASE"]
        ]
      }
    ],
    "output": "String",
    "colour": 70,
    "tooltip": "Change the case of text.",
    "helpUrl": ""
  },
  // Text trim block
  {
    "type": "text_trim",
    "message0": "trim %1",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": "String"
      }
    ],
    "output": "String",
    "colour": 70,
    "tooltip": "Remove spaces from both ends of text.",
    "helpUrl": ""
  },
  {
    "type": "text_print",
    "message0": "print %1",
    "args0": [
      {
        "type": "input_value",
        "name": "TEXT",
        "check": ["String", "Number", "Boolean", "Array", "Variable", "Function", "Statement"]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 70,
    "tooltip": "Print text or number to the console",
    "helpUrl": ""
  },  
  // Loops category
  {
    "type": "controls_repeat_ext",
    "message0": "repeat %1 times",
    "args0": [
      {
        "type": "input_value",
        "name": "TIMES",
        "check": "Number"
      }
    ],
    "message1": "do %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "tooltip": "Repeat the block of code a specified number of times"
  },
  {
    "type": "controls_for_each",
    "message0": "for each item %1 in list %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "ITEM",
        "variable": "i"
      },
      {
        "type": "input_value",
        "name": "LIST",
        "check": "Array"
      }
    ],
    "message1": "do %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "tooltip": "For each item in the list, do the specified block of code"
  },
  {
    "type": "controls_loop_break_continue",
    "message0": "%1 of loop",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "LOOP",
        "options": [
          ["break out", "BREAK"],
          ["continue with next iteration", "CONTINUE"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "loop_blocks",
    "tooltip": "Choose whether to break out of the loop or continue with the next iteration"
  },  
  {
    "type": "controls_whileUntil",
    "message0": "repeat %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["while", "WHILE"],
          ["until", "UNTIL"]
        ]
      },
      {
        "type": "input_value",
        "name": "BOOL",
        "check": "Boolean"
      }
    ],
    "message1": "do %1",
    "args1": [
      {
        "type": "input_statement",
        "name": "DO"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Repeat the code inside the loop while or until a condition is true",
    "helpUrl": ""
  },
  // Functions category
  {
    "type": "functions_return",
    "message0": "if %1 return %2",
    "args0": [
      {
        "type": "input_value",
        "name": "CONDITION",
        "check": ["Boolean", "Number", "String", "Array", "Variable"]
      },
      {
        "type": "input_value",
        "name": "RETURN_VALUE",
        "check": ["Number", "String", "Array", "Variable"]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "procedure_blocks",
    "tooltip": "Define a condition to return a value within a function block",
    "extensions": ["blockly.mutator.valueblock"]
  }  
]);

// Define code generation for compare_numbers block
Blockly.Python['compare_numbers'] = function(block) {
  var leftValue = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var operator = block.getFieldValue('OPERATOR');
  var rightValue = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);

  var code = leftValue + ' ' + operator + ' ' + rightValue;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['logic_boolean'] = function(block) {
  var dropdown_bool = block.getFieldValue('BOOL');
  var code = dropdown_bool;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['logic_negate'] = function(block) {
  var value_bool = Blockly.Python.valueToCode(block, 'BOOL', Blockly.Python.ORDER_ATOMIC);
  var code = 'not ' + value_bool;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['test_if'] = function(block) {
  var value_test = Blockly.Python.valueToCode(block, 'TEST', Blockly.Python.ORDER_ATOMIC);
  var value_if_true = Blockly.Python.valueToCode(block, 'IF_TRUE', Blockly.Python.ORDER_ATOMIC);
  var value_if_false = Blockly.Python.valueToCode(block, 'IF_FALSE', Blockly.Python.ORDER_ATOMIC);
  var code = 'if ' + value_test + ':\n  ' + value_if_true + '\nelse:\n  ' + value_if_false;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['logic_combine'] = function(block) {
  var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_operator = block.getFieldValue('OPERATOR');
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = value_left + ' ' + dropdown_operator + ' ' + value_right;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['controls_if'] = function(block) {
  var value_if0 = Blockly.Python.valueToCode(block, 'IF0', Blockly.Python.ORDER_ATOMIC);
  var statements_do0 = Blockly.Python.statementToCode(block, 'DO0');
  var code = 'if ' + value_if0 + ':\n' + statements_do0;
  return code;
};

Blockly.Python['math_trig_function'] = function(block) {
  var dropdown_function = block.getFieldValue('FUNCTION');
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = dropdown_function + '(' + value_value + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_print'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_NONE);
  return 'print(' + value_text + ')\n';
};

// Define the toolbox
var defaultToolbox = '<xml>' +
  '<category name="Math">' +
  '<block type="math_number"></block>' +
  '<block type="math_operation"></block>' +
  '<block type="math_advanced_operation"></block>' +
  '<block type="math_trig_function"></block>' +
  '<block type="math_comparison"></block>' +
  '<block type="math_round"></block>' +
  '</category>' +
  '<category name="Logic">' +
  '<block type="logic_boolean"></block>' +
  '<block type="logic_negate"></block>' +
  '<block type="test_if"></block>' +
  '<block type="compare_numbers"></block>' +
  '<block type="logic_combine"></block>' +
  '<block type="controls_if"></block>' +
  '</category>' +
  '<category name="Loops">' +
  '<block type="controls_repeat_ext"></block>' +
  '<block type="controls_whileUntil"></block>' +
  '<block type="controls_for_each"></block>' +
  '<block type="controls_loop_break_continue"></block>' +
  '</category>' +
  '<category name="Text">' +
  '<block type="text"></block>' +
  '<block type="text_length"></block>' +
  '<block type="text_join"></block>' +
  '<block type="text_changeCase"></block>' +
  '<block type="text_trim"></block>' +
  '<block type="text_print"></block>' +
  '</category>' +
  '<category name="Lists">' +
  '<block type="lists_create_empty"></block>' +
  '<block type="lists_create_with"></block>' +
  '<block type="lists_length"></block>' +
  '<block type="lists_isEmpty"></block>' +
  '<block type="lists_sort"></block>' +
  '</category>' +
  '<category name="Variables">' +
  '<block type="variables_get"></block>' +
  '<block type="variables_set"></block>' +
  '<block type="variables_change"></block>' +
  '</category>' +
  '<category name="Functions">' + 
  // '<block type="functions_return"></block>' +
  '</category>' +
  '</xml>';



// Inject Blockly workspace
// var workspace = Blockly.inject('blocklyDiv', {
//   media: 'https://unpkg.com/blockly/media/',
//   toolbox: defaultToolbox
// });

// Event listener for block deletion
// workspace.addChangeListener(function(event) {
//   if (event.type == Blockly.Events.BLOCK_DELETE) {
//     console.log('Block deleted:', event.oldXml.outerHTML);
//   }
// });

// // Function to run code
// function runCode() {
//   var code = Blockly.JavaScript.workspaceToCode(workspace);
//   // Execute the generated code and display the result
//   var result = eval(code);
//   document.getElementById('output').textContent = "Result: " + result;
// }
