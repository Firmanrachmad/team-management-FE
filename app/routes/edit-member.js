// app/routes/edit-member.js
import Route from '@ember/routing/route';

/**
 * Edit Member Route
 * Fetches details for a specific member to allow editing.
 */
export default class EditMemberRoute extends Route {
  /**
   * Model Hook
   * Fetches the member details and associates them with the team ID.
   * @param {Object} params - The route parameters, including `team_id` and `member_id`.
   * @returns {Promise<Object>} A promise that resolves to an object containing the member and team ID.
   */
  async model(params) {
    const { team_id, member_id } = params;

    // Fetch the member data
    const memberResponse = await fetch(
      `http://localhost:3000/api/members/${member_id}`
    );

    if (memberResponse.ok) {
      const member = await memberResponse.json(); // Return the team data
      // Return both the member and team ID
      return {
        member,
        teamId: team_id,
      };
    } else {
      throw new Error('Failed to fetch team details');
    }
  }
}