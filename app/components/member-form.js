import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MemberFormComponent extends Component {
  @service router;

  @tracked name = this.args.member?.name || '';
  @tracked role = this.args.member?.role || '';

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

    const memberData = {
      name: this.name,
      role: this.role,
      teamId: this.args.teamId,
    };

    let url = 'http://localhost:3000/api/members';
    let method = 'POST';

    if (this.args.member) {
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
        alert(this.args.member ? 'Member updated successfully!' : 'Member created successfully!');
        this.router.transitionTo('teams', this.args.teamId);
      } else {
        throw new Error(this.args.member ? 'Failed to update member' : 'Failed to create member');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }
}
