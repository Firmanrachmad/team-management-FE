// app/components/team-form.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

/**
 * Team Form Component
 * Handles the creation or editing of a team.
 * Manages form input, validation, and submission.
 */
export default class TeamFormComponent extends Component {
  @service router; // Router service for navigation

  @tracked name = this.args.team?.name || ''; // Tracked property for team name
  @tracked description = this.args.team?.description || ''; // Tracked property for team description

  /**
   * Action: Update Name
   * Updates the `name` property when the team name input changes.
   * @param {Event} event - The input event.
   */
  @action
  updateName(event) {
    this.name = event.target.value;
  }

  /**
   * Action: Update Description
   * Updates the `description` property when the team description input changes.
   * @param {Event} event - The input event.
   */
  @action
  updateDescription(event) {
    this.description = event.target.value;
  }

  /**
   * Action: Submit Form
   * Handles form submission for creating or editing a team.
   * Sends a POST or PUT request to the API based on whether the team is new or existing.
   * @param {Event} event - The form submission event.
   */
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
        if (this.args.team) {
          this.router.transitionTo('teams', this.args.team.id);
        } else {
          this.router.transitionTo('index');
        }
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