import Route from '@ember/routing/route';

export default class AddMemberRoute extends Route {
    model(params) {
        // Fetch the team_id from the URL
        return params.team_id;
    }
}
