// app/routes/edit-team.js
import Route from '@ember/routing/route';

/**
 * Edit Team Route
 * Fetches details for a specific team to allow editing.
 */
export default class EditTeamRoute extends Route {
  /**
   * Model Hook
   * Fetches the team details from the API.
   * @param {Object} params - The route parameters, including `team_id`.
   * @returns {Promise<Object>} A promise that resolves to the team data.
   * @throws {Error} If the team details cannot be fetched.
   */
  async model(params) {
    const response = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}`
    );

    if (response.ok) {
      return response.json(); // Return the team data
    } else {
      throw new Error('Failed to fetch team details');
    }
  }
}