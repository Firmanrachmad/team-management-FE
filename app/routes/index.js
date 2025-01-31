// app/routes/index.js
import Route from '@ember/routing/route';

/**
 * Index Route
 * Fetches and displays a list of teams on the homepage.
 */
export default class IndexRoute extends Route {
  /**
   * Model Hook
   * Fetches the list of teams from the API.
   * @returns {Promise<Array>} A promise that resolves to an array of teams.
   * @throws {Error} If the team cannot be fetched.
   */
  async model() {
    const response = await fetch('http://localhost:3000/api/teams');
    if (response.ok) {
      const teams = await response.json();
      return teams; // Return the fetched teams
    } else {
      throw new Error('Failed to fetch team details');
    }
  }
}