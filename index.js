'use strict';

const assert = require('assert');
const get = require('lodash.get');

const createConfig = (settings, rules) => {
  assert(settings.plugin, 'Expected `settings.plugin` to exist');
  assert(settings.field, 'Expected `settings.field` to exist');

  return Object.keys(rules)
    .reduce((res, ruleKey) => {
      const key = `${settings.plugin}/${ruleKey}`;
      const value = get(rules[ruleKey], settings.field);
      res[key] = value;
      return res;
    }, {});
};

module.exports = {
  createConfig
};
