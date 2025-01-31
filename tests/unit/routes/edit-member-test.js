import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { resolve } from 'rsvp';

module('Unit | Route | edit-member', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:edit-member');
    assert.ok(route);
  });

  test('it fetches member data based on member_id', async function (assert) {
    let route = this.owner.lookup('route:edit-member');

    // Mock global fetch to return the expected member data
    globalThis.fetch = () =>
      resolve({
        ok: true,
        json: () => resolve({ id: 1, name: 'coba', role: 'a', teamId: 1 })
      });

    // Mock the params object
    let params = { member_id: 1, team_id: 2 };

    // Call the model hook
    let model = await route.model(params);

    // Assert that the model contains the correct structure
    assert.deepEqual(model, {
      member: { id: 1, name: 'coba', role: 'a', teamId: 1 },
      teamId: 2
    }, 'member data is fetched correctly');
  });
});
