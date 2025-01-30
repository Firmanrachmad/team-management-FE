import Component from '@glimmer/component';

export default class TeamDetailComponent extends Component {
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
}
