// app/components/team-detail.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/**
 * Team Detail Component
 * Displays detailed information about a team and provides actions to edit or delete the team.
 */
export default class TeamDetailComponent extends Component {
  @service router; // Router service for navigation

  // Array of available Font Awesome icons
  icons = [
    'fa-user',
    'fa-users',
    'fa-cogs',
    'fa-lightbulb',
    'fa-rocket',
    'fa-star',
  ];

  /**
   * Random Icon
   * Returns a random icon from the `icons` array.
   * @returns {string} A random Font Awesome icon class.
   */
  get randomIcon() {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    return this.icons[randomIndex];
  }

  /**
   * Action: Stop Propagation
   * Prevents the click event from bubbling up to parent elements.
   * This is used to prevent the card's click event from triggering when the edit or delete buttons are clicked.
   * @param {Event} event - The click event.
   */
  @action
  stopPropagation(event) {
    event.stopPropagation();
  }

  /**
   * Action: Delete Team
   * Deletes the team by sending a DELETE request to the API.
   * Prompts the user for confirmation before deleting.
   */
  @action
  async deleteTeam() {
    const confirmDelete = confirm('Are you sure you want to delete this team?');
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/teams/${this.args.team.id}`,
          {
            method: 'DELETE',
          }
        );

        if (response.ok) {
          alert('Team deleted successfully!');
          this.router.transitionTo('index'); // Navigate back to the homepage
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