import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class TeamWidgetComponent extends Component {
  @service router;
  // Array of available icons
  icons = [
    'fa-user',
    'fa-users',
    'fa-cogs',
    'fa-lightbulb',
    'fa-rocket',
    'fa-star',
  ];

  // Function to get a random icon
  get randomIcon() {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    return this.icons[randomIndex];
  }

  @action
  async deleteTeam() {
    const confirmDelete = confirm('Are you sure you want to delete this team?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/api/teams/${this.args.team.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Team deleted successfully!');
          window.location.reload();
        } else {
          throw new Error('Failed to delete team');
        }
      } catch (error) {
        console.error('Error deleting team:', error);
        alert('Failed to delete team. Please try again.');
      }
    }
  }
}
