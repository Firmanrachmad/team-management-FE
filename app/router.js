import EmberRouter from '@ember/routing/router';
import config from 'team-management-fe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('teams');
  this.route('members');
  this.route('add-team');
});
