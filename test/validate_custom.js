var util = require("./util");

exports['test undef'] = function() {
  
  // Undef
  util.assertLint("var a = angular, b = XXX;", {
          messages : [{
            "message" : "'angular' is not defined.",
            "severity" : "error",
            "from" : 8,
            "to" : 15,            
            "file": "test1.js"},
            {
              "message" : "'XXX' is not defined.",
              "severity" : "error",
              "from" : 21,
              "to" : 24,            
              "file": "test1.js"}
          ]
  }, null, {
    "config": {
      "undef": true
    }
  }); 

  util.assertLint("var a = angular, b = XXX;", {
    messages : [{
      "message" : "'XXX' is not defined.",
      "severity" : "error",
      "from" : 21,
      "to" : 24,            
      "file": "test1.js"}
    ]
  }, null, {
    "config": {
      "globals": {"angular": true},
      "undef": true
    }
  });
  
}

if (module == require.main) require('test').run(exports)
