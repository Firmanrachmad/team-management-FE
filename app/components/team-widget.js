import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

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
  goToTeam() {
    this.router.transitionTo('teams', this.args.team.id);
  }

  
}
