import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | member-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MemberForm />`);

    assert.dom(this.element).includesText('Member Name');
    assert.dom(this.element).includesText('Member Role');
    assert.dom(this.element).includesText('Cancel');
    assert.dom(this.element).includesText('Submit');
  });
});
