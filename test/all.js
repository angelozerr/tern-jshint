exports['test JSHint default config'] = require('./validate_default');
exports['test JSHint custom config'] = require('./validate_custom');
exports['test JSHint custom config file'] = require('./validate_customFile');

if (require.main === module) require("test").run(exports);