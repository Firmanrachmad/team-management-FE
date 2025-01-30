import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
  async model(params) {
    let response = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}`
    );
    let team = await response.json();
    return team;
  }
}
