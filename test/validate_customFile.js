var util = require("./util");

exports['test undef with config file'] = function() {
  
  // Undef 

  util.assertLint("var a = angular, b = XXX;", {
    messages : [{
      "message" : "'XXX' is not defined.",
      "severity" : "error",
      "from" : 21,
      "to" : 24,            
      "file": "test1.js"}
    ]
  }, null, {
    "configFile": "test/.jshintrc"
  });
  
}

if (module == require.main) require('test').run(exports)
