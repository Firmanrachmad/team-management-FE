import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MemberWidgetComponent extends Component {
  @service router;

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
          window.location.reload();
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
