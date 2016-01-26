var util = require("./util");

exports['test warning/error'] = function() {

  // warning
  util.assertLint("var arr", {
    messages : [{
      "message" : "Missing semicolon.",
      "severity" : "warning",
      "from" : 7,
      "to" : 7,            
      "file": "test1.js"}
    ]
  }, [ "browser" ]); 
  
  // error
  util.assertLint("var", {
    messages : [{
      "message" : "Expected an identifier and instead saw ''.",
      "severity" : "error",
      "from" : 0,
      "to" : 3,            
      "file": "test1.js"},
      {
        "message" : "Unrecoverable syntax error. (100% scanned).",
        "severity" : "error",
        "from" : 0,
        "to" : 1,            
        "file": "test1.js"}      
    ]
  }, [ "browser" ]); 

}

exports['test semi colon'] = function() {
  
  // never used
  util.assertLint("var arr", {
          messages : [{
            "message" : "Missing semicolon.",
            "severity" : "warning",
            "from" : 7,
            "to" : 7,            
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

if (module == require.main) require('test').run(exports)
