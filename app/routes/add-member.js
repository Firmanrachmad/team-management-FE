// app/routes/add-member.js
import Route from '@ember/routing/route';

/**
 * Add Member Route
 * Sets up the context for adding a new member to a team.
 */
export default class AddMemberRoute extends Route {
  /**
   * Model Hook
   * Fetches the `team_id` from the URL to associate the new member with the team.
   * @param {Object} params - The route parameters, including `team_id`.
   * @returns {string} The `team_id` of the team to which the member will be added.
   */
  model(params) {
    return params.team_id; // Return the team ID
  }
}