import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TeamFormComponent extends Component {
  @service router;
  @tracked name = '';
  @tracked description = '';

  @action
  async submitForm(event) {
    event.preventDefault();

    const teamData = {
      name: this.name,
      description: this.description,
    };

    try {
      const response = await fetch('http://localhost:3000/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
      });

      if (response.ok) {
        alert('Team created successfully!');
        // Reset the form
        this.name = '';
        this.description = '';
        // Optionally, navigate back to the homepage
        this.router.transitionTo('index');
        
      } else {
        throw new Error('Failed to create team');
      }
    } catch (error) {
      console.error('Error creating team:', error);
      alert('Failed to create team. Please try again.');
    }
  }
}