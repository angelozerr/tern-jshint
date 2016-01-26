var util = require("../util");
var path = require("path");

function normPath(name) { return name.replace(/\\/g, "//"); }

exports['test unkkown .jshintrc'] = function() {
  
  // Unknown .jshintrc file

  var file = normPath(path.resolve(__dirname, "..")) + "//XXX/.jshintrc";
  util.assertLint("var a = angular, b = XXX;", {
    messages : [{
      "message" : "Cannot find JSHint config files ['test//XXX/.jshintrc', '" + file + "']",
      "severity" : "warning",
      "from" : 0,
      "to" : 1,            
      "file": "test1.js"}
    ]
  }, null, {
    "configFile": "test//XXX/.jshintrc"
  });
  
}

exports['test bad JSON .jshintrc'] = function() {
  
  // bad JSON .jshintrc file

  util.assertLint("var a = angular, b = XXX;", {
    messages : [{
      "message" : "Error: Can't parse config file: test/jshintrc/.jshintrc_bad\nError:SyntaxError: Unexpected token :",
      "severity" : "warning",
      "from" : 0,
      "to" : 1,            
      "file": "test1.js"}
    ]
  }, null, {
    "configFile": "test/jshintrc/.jshintrc_bad"
  });
  
}

exports['test undef with .jshintrc'] = function() {
  
  // Undef 

  util.assertLint("var a = angular, b = XXX;", {
    messages : [{
      "message" : "'XXX' is not defined.",
      "severity" : "warning",
      "from" : 21,
      "to" : 24,            
      "file": "test1.js"}
    ]
  }, null, {
    "configFile": "test/jshintrc/.jshintrc"
  });
  
}

if (module == require.main) require('test').run(exports)
