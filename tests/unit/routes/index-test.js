import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { resolve } from 'rsvp';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route, 'the route exists');
  });

  test('it fetches team data for the template', async function (assert) {
    let route = this.owner.lookup('route:index');

    // Mock the API response
    globalThis.fetch = () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: 'Team Alpha' }])
      });

    // Call the model hook
    let model = await route.model();

    // Assert that the model contains the expected team data
    assert.deepEqual(model, [{ id: 1, name: 'Team Alpha' }], 'team data is fetched correctly');
  });
});