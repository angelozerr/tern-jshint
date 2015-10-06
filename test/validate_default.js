var util = require("./util");

exports['test semi colon'] = function() {
  
  // never used
  util.assertLint("var arr", {
          messages : [{
            "message" : "Missing semicolon.",
            "severity" : "error",
            "from" : 7,
            "to" : 7,            
            "file": "test1.js"}
          ]
  }, [ "browser" ]); 
  
}

if (module == require.main) require('test').run(exports)
