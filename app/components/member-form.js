// app/components/member-form.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

/**
 * Member Form Component
 * Handles the creation or editing of a member.
 * Manages form input, validation, and submission.
 */
export default class MemberFormComponent extends Component {
  @service router; // Router service for navigation

  @tracked name = this.args.member?.name || ''; // Tracked property for member name
  @tracked role = this.args.member?.role || ''; // Tracked property for member role

  /**
   * Action: Update Name
   * Updates the `name` property when the member name input changes.
   * @param {Event} event - The input event.
   */
  @action
  updateName(event) {
    this.name = event.target.value;
  }

  /**
   * Action: Update Role
   * Updates the `role` property when the member role input changes.
   * @param {Event} event - The input event.
   */
  @action
  updateRole(event) {
    this.role = event.target.value;
  }

  /**
   * Action: Submit Form
   * Handles form submission for creating or editing a member.
   * Sends a POST or PUT request to the API based on whether the member is new or existing.
   * @param {Event} event - The form submission event.
   */
  @action
  async submitForm(event) {
    event.preventDefault();

    const memberData = {
      name: this.name,
      role: this.role,
      teamId: this.args.teamId, // Associate the member with a team
    };

    let url = 'http://localhost:3000/api/members';
    let method = 'POST';

    if (this.args.member) {
      // Edit existing member
      url = `http://localhost:3000/api/members/${this.args.member.id}`;
      method = 'PUT';
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });

      if (response.ok) {
        alert(
          this.args.member
            ? 'Member updated successfully!'
            : 'Member created successfully!'
        );
        this.router.transitionTo('teams', this.args.teamId); // Navigate back to the team details page
      } else {
        throw new Error(
          this.args.member ? 'Failed to update member' : 'Failed to create member'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
}