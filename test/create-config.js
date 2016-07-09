import test from 'ava';
import reqAll from 'req-all';
import lib from '../';

const rules = reqAll('./fixtures/', {camelize: false});

test('should create an object containing each prefixed rule and the value of the requested field', t => {
  const settings = {
    plugin: 'foo',
    field: 'meta.docs.recommended'
  };
  const expected = {
    'foo/rule-1': 'error',
    'foo/rule-2': 'warn',
    'foo/rule-3': ['error', 'option']
  };

  t.deepEqual(lib.createConfig(settings, rules), expected);
});

test('should be able to specify a different plugin name', t => {
  const settings = {
    plugin: 'plugin-name',
    field: 'meta.docs.recommended'
  };
  const expected = {
    'plugin-name/rule-1': 'error',
    'plugin-name/rule-2': 'warn',
    'plugin-name/rule-3': ['error', 'option']
  };

  t.deepEqual(lib.createConfig(settings, rules), expected);
});

test('should be able to specify a different field', t => {
  const settings = {
    plugin: 'foo',
    field: 'meta.docs.config'
  };
  const expected = {
    'foo/rule-1': 'off',
    'foo/rule-2': 'error',
    'foo/rule-3': ['error', 'other option']
  };

  t.deepEqual(lib.createConfig(settings, rules), expected);
});

test('should throw when `plugin` is missing', t => {
  const settings = {
    field: 'meta.docs.description'
  };

  t.throws(
    () => lib.createConfig(settings, rules),
    'Expected `settings.plugin` to exist'
  );
});

test('should throw when `field` is missing', t => {
  const settings = {
    plugin: 'foo'
  };

  t.throws(
    () => lib.createConfig(settings, rules),
    'Expected `settings.field` to exist'
  );
});
