import Route from '@ember/routing/route';

export default class EditTeamRoute extends Route {
  async model(params) {
    const response = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}`
    );

    if (response.ok) {
      return response.json(); // Return team data
    } else {
      throw new Error('Failed to fetch team details');
    }
  }
}
