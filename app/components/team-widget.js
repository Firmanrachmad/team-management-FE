// app/components/team-widget.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/**
 * Team Widget Component
 * Displays a team's name, description, and a random icon.
 * Clicking the widget navigates to the team's details page.
 */
export default class TeamWidgetComponent extends Component {
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
   * Action: Go to Team
   * Navigates to the team's details page when the widget is clicked.
   */
  @action
  goToTeam() {
    this.router.transitionTo('teams', this.args.team.id);
  }
}