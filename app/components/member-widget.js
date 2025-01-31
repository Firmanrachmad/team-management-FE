// app/components/member-widget.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/**
 * Member Widget Component
 * Displays a member's name, role, and provides actions to edit or delete the member.
 */
export default class MemberWidgetComponent extends Component {
  @service router; // Router service for navigation

  /**
   * Action: Delete Member
   * Deletes the member by sending a DELETE request to the API.
   * Prompts the user for confirmation before deleting.
   */
  @action
  async deleteMember() {
    const confirmDelete = confirm('Are you sure you want to delete this member?');
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/members/${this.args.member.id}`,
          {
            method: 'DELETE',
          }
        );

        if (response.ok) {
          alert('Member deleted successfully!');
          window.location.reload(); // Reload the page to reflect the changes
        } else {
          throw new Error('Failed to delete member');
        }
      } catch (error) {
        console.error('Error deleting member:', error);
        alert('Failed to delete member. Please try again.');
      }
    }
  }
}