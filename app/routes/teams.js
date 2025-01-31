// app/routes/teams.js
import Route from '@ember/routing/route';

/**
 * Teams Route
 * Fetches and displays details for a specific team, including its members.
 */
export default class TeamsRoute extends Route {
  /**
   * Model Hook
   * Fetches the team and its members from the API.
   * @param {Object} params - The route parameters, including `team_id`.
   * @returns {Promise<Object>} A promise that resolves to an object containing the team and its members.
   * @throws {Error} If the team/member cannot be fetched.
   */
  async model(params) {
    // Fetch team details
    let teamResponse = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}`
    );
    
    // Fetch members for the team
    let memberResponse = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}/members`
    );
    
    if (teamResponse.ok && memberResponse.ok) {
      let team = await teamResponse.json();
      let member = await memberResponse.json();
      return { team, member };// Return the team and its members
    } else {
      throw new Error('Failed to fetch team details');
    }
  }
}