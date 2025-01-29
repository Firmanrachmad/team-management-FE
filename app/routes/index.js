import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        // Fetch data from the API
        const response = await fetch('http://localhost:3000/api/teams');
        const teams = await response.json();
        return teams; // Return the fetched data
    }
}
