import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MemberFormComponent extends Component {
  
    @service router;
    @tracked name = '';
    @tracked role = '';

    @action
    updateName(event) {
        this.name = event.target.value;
    }

    @action
    updateRole(event) {
        this.role = event.target.value;
    }

    @action
    async submitForm(event) {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Submitting form:', { name: this.name, role: this.role, teamId: this.args.teamId });

        const memberData = {
            name: this.name,
            role: this.role,
            teamId: this.args.teamId,
        };

        const response = await fetch('http://localhost:3000/api/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
        });

        if (response.ok) {
            alert('Member created successfully!');
            this.router.transitionTo('teams', this.args.teamId);
        } else {
            alert('Failed to create member');   
        }
    }
}