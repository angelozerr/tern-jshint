exports['test JSHint with default config'] = require('./validate_default');
exports['test JSHint with custom config'] = require('./validate_custom');
exports['test JSHint with custom config file .jshintrc'] = require('./jshintrc/validate_customFile');
exports['test JSHint ignore with .jshintignore'] = require('./jshintignore/validate_ignore');

if (require.main === module) require("test").run(exports);