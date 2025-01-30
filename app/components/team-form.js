import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TeamFormComponent extends Component {
  @service router;

  @tracked name = this.args.team?.name || '';
  @tracked description = this.args.team?.description || '';

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateDescription(event) {
    this.description = event.target.value;
  }

  @action
  async submitForm(event) {
    event.preventDefault();

    const teamData = {
      name: this.name,
      description: this.description,
    };

    try {
      let response;
      if (this.args.team) {
        // Edit existing team
        response = await fetch(
          `http://localhost:3000/api/teams/${this.args.team.id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(teamData),
          }
        );
      } else {
        // Create new team
        response = await fetch('http://localhost:3000/api/teams', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(teamData),
        });
      }

      if (response.ok) {
        alert(
          this.args.team
            ? 'Team updated successfully!'
            : 'Team created successfully!'
        );
        this.name = '';
        this.description = '';
        this.router.transitionTo('index');
      } else {
        throw new Error(
          this.args.team ? 'Failed to update team' : 'Failed to create team'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
}
