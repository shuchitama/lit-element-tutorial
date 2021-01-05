import "./styles.css";
import "./views/todo-view";
import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
	initRouter();
});

function initRouter() {
	const router = new Router(document.querySelector("main"));
	router.setRoutes([
		{
			path: "/",
			component: "todo-view",
		},
		{
			path: "/stats",
			component: "stats-view",
			action: () => import("./views/stats-view"),
		},
		{
			path: "(.*)",
			component: "not-found-view",
			action: () => import("./views/not-found-view"),
		},
	]);
}
