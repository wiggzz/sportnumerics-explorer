'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  apiUrl: 'http://localhost:4000'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
