import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | member-widget', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('name', 'John Doe');
    this.set('role', 'Developer');

    await render(hbs`<MemberWidget @name={{this.name}} @role={{this.role}} />`);

    // The assertions should pass
    assert.dom(this.element).includesText('John Doe');
    assert.dom(this.element).includesText('Developer');
    assert.dom(this.element).includesText('Edit');
    assert.dom(this.element).includesText('Delete');

  });
});
