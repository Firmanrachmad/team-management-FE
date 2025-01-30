import EmberRouter from '@ember/routing/router';
import config from 'team-management-fe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('teams', { path: '/teams/:team_id' });
  this.route('members');
  this.route('add-team');
  this.route('edit-team', { path: '/edit-team/:team_id' });
});
