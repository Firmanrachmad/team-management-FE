// app/router.js
import EmberRouter from '@ember/routing/router';
import config from 'team-management-fe/config/environment';

/**
 * Application Router
 * Defines the routes for the Team Management application.
 * The `location` and `rootURL` are configured based on the environment settings.
 */
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

/**
 * Route Mapping
 * Defines the routes and their corresponding paths.
 * - `teams`: Displays details for a specific team.
 * - `add-member`: Allows adding a new member to a team.
 * - `members`: Displays a list of all members (if applicable).
 * - `add-team`: Allows creating a new team.
 * - `edit-team`: Allows editing an existing team.
 * - `edit-member`: Allows editing an existing member within a team.
 */

Router.map(function () {
  this.route('teams', { path: '/teams/:team_id' });
  this.route('add-member', { path: '/teams/:team_id/add-member' });
  this.route('members');
  this.route('add-team');
  this.route('edit-team', { path: '/edit-team/:team_id' });
  this.route('edit-member', { path: '/teams/:team_id/edit-member/:member_id' });
});
