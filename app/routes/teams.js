import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
  async model(params) {
    let teamResponse = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}`
    );
    let team = await teamResponse.json();

    let memberResponse = await fetch(
      `http://localhost:3000/api/teams/${params.team_id}/members`
    );
    let member = await memberResponse.json();
    console.log(member)

    return { team, member };
  }
}
