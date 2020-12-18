import { LitElement, html } from "lit-element";

class TodoView extends LitElement {
	render() {
		return html`<p>Hello world</p> `;
	}
}

customElements.define("todo-view", TodoView);
