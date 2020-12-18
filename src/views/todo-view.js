import { LitElement, html } from "lit-element";

// object with different filter options
const VisibilityFilters = {
	SHOW_ALL: "All",
	SHOW_ACTIVE: "Active",
	SHOW_COMPLETED: "Completed",
};

class TodoView extends LitElement {
	// static getter for properties - return definition of the property names and types
	static get properties() {
		return {
			todos: { type: Array },
			filter: { type: String },
			task: { type: String },
		};
	}

	// create constructor, set defaults for the properties
	constructor() {
		super();
		this.todos = [];
		this.filter = VisibilityFilters.SHOW_ALL;
		this.task = "";
	}
	render() {
		return html`<p>Hello world</p> `;
	}
}

customElements.define("todo-view", TodoView);
