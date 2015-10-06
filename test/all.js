exports['test JSHint default config'] = require('./validate_default');
exports['test JSHint custom config'] = require('./validate_custom');

if (require.main === module) require("test").run(exports);