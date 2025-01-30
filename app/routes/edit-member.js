import Route from '@ember/routing/route';

export default class EditMemberRoute extends Route {
    async model(params) {
        const { team_id, member_id } = params;
    
        // Fetch the member data
        const memberResponse = await fetch(
          `http://localhost:3000/api/members/${member_id}`
        );
        const member = await memberResponse.json();
    
        // Return both the member and team id
        return {
          member,
          teamId: team_id,
        };
    }
}
