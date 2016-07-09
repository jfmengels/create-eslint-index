import test from 'ava';
import reqAll from 'req-all';
import lib from '../';

const rules = reqAll('./fixtures/', {camelize: false});

test('should create a string containing the description of each rule', t => {
  const settings = {
    descriptionField: 'meta.docs.description',
    docPath: 'docs/rules'
  };
  const expected = `
- [rule-1](docs/rules/rule-1.md) - This is rule 1
- [rule-2](docs/rules/rule-2.md) - This is rule 2
- [rule-3](docs/rules/rule-3.md) - This is rule 3
`.trim();

  t.deepEqual(lib.createRulesDescription(settings, rules), expected);
});

test('should throw when `docPath` is missing', t => {
  const settings = {
    descriptionField: 'meta.docs.description'
  };

  t.throws(
    () => lib.createRulesDescription(settings, rules),
    'Expected `settings.docPath` to exist'
  );
});

test('should throw when `descriptionField` is missing', t => {
  const settings = {
    docPath: 'docs/rules'
  };

  t.throws(
    () => lib.createRulesDescription(settings, rules),
    'Expected `settings.descriptionField` to exist'
  );
});
