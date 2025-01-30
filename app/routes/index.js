import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @tracked teams = [];

  async model() {
    // Fetch data from the API
    const response = await fetch('http://localhost:3000/api/teams');
    const teams = await response.json();
    return teams; // Return the fetched data
  }

  @action
  async deleteTeam(teamId) {
    if (!confirm('Are you sure you want to delete this team?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/teams/${teamId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Team deleted successfully!');
        
        // Update teams list
        this.teams = this.teams.filter(team => team.id !== teamId);
      } else {
        throw new Error('Failed to delete team');
      }
    } catch (error) {
      console.error('Error deleting team:', error);
      alert('Failed to delete team. Please try again.');
    }
  }
}
