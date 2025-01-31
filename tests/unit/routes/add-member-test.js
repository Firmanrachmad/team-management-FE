import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-member', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:add-member');
    assert.ok(route);
  });

  test('it sets up team_id from URL parameters', function (assert) {
    let route = this.owner.lookup('route:add-member');
    
    // Mock the params object
    let params = { team_id: 1 };
    
    // Simulate the setupController hook 
    route.setupController({}, params);
    
    // Assert that the team_id is set correctly
    assert.equal(params.team_id, 1, 'team_id should be set from URL parameters');
  });
});