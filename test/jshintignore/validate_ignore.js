var util = require("../util");
var path = require("path");

function normPath(name) { return name.replace(/\\/g, "//"); }

var projectDir = path.resolve(__dirname, "..");
var resolve = function(pth) {
  return path.resolve(projectDir, pth);
};

exports['test ignore with .jshintignore'] = function() {
  
  // See test/.jshintignore content
  
  // test1.js is not ignored 
  var test1 = "jshintignore/a.js";
  util.assertLint("var a = angular, b = XXX;", {
    messages : [{
      "message" : "'XXX' is not defined.",
      "severity" : "warning",
      "from" : 21,
      "to" : 24,            
      "file": test1}
    ]
  }, null, {
    "configFile": "test/jshintrc/.jshintrc"
  }, test1);
  
  // test2.js is not ignored
  var test2 = "jshintignore/b.js";
  util.assertLint("var a = angular, b = XXX;", {
    messages : []
  }, null, {
    "configFile": "test/jshintrc/.jshintrc"
  }, test2);
  
}

if (module == require.main) require('test').run(exports)
