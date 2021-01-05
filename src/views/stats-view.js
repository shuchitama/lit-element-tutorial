import { html } from "lit-element";
import { BaseView } from "./base-view.js";

class StatsView extends BaseView {
	render() {
		return html`
			<h1>Another Page</h1>
			<p>To test navigation</p>
		`;
	}
}

customElements.define("stats-view", StatsView);
