import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { resolve } from 'rsvp';

module('Unit | Route | edit-team', function (hooks) {
  setupTest(hooks);

  test('it fetches team data based on team_id', async function (assert) {
    let route = this.owner.lookup('route:edit-team');

    // Mock fetch globally
    globalThis.fetch = () =>
      resolve({
        ok: true,
        json: () => resolve({ id: 1, name: 'Team Alpha' })
      });

    // Mock the params object
    let params = { team_id: 1 };

    // Call the model hook
    let model = await route.model(params);

    // Assert that the model contains the correct team data
    assert.deepEqual(model, { id: 1, name: 'Team Alpha' }, 'team data is fetched correctly');
  });
});
