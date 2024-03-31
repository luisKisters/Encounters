import { TodoistApi } from "@doist/todoist-api-typescript";

function fetchProjects(token: string): void {
	const api = new TodoistApi(token);

	api
		.getProjects()
		.then((projects) => {
			console.log(projects);
		})
		.catch((error) => console.error(error));
}
