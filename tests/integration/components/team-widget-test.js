import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | team-widget', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('title', 'Team Gamma');
    this.set('description', 'A team that focus on UI/UX design');

    await render(hbs`<TeamWidget />`);

    await render(hbs`<TeamWidget @title={{this.title}} @description={{this.description}}/>`);

    // The assertions should pass
    assert.dom(this.element).includesText('Team Gamma');
    assert.dom(this.element).includesText('A team that focus on UI/UX design');
  });
});
