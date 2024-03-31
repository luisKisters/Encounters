import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import Encounter from "./components/Encounter";
import axios from "axios";
import { TodoistApi } from "@doist/todoist-api-typescript";
// import { fetchProjects } from "./api/getProjects";

const App = () => {
	const [Encounters, setEncounters] = useState([]);
	const [Title, setTitle] = useState("");
	const [Content, setContent] = useState("");
	const [Apikey, setApikey] = useState("");
	const [ProjectId, setProjectId] = useState("");

	// let api;
	// const api = new TodoistApi(Apikey);
	// useEffect(() => {
	// 	console.log("Encounters", Encounters);
	// }, [Encounters]);

	// function getProjects() {
	// 	const api = new TodoistApi("73858e8948b2258db1bc4769469879df7da0a78a");

	// 	// prettier-ignore
	// 	api.getProjects()
	// 		.then((projects) => console.log(projects))
	// 		.catch((error) => console.log(error));
	// }

	function sendEncounters() {
		console.log("sending encounters");
	}

	function handleEncounterSubmit() {
		const newEncounter = { title: Title, content: Content };
		if (newEncounter.title === "") {
			alert("Encounter Title is empty!");
		} else {
			setEncounters([...Encounters, newEncounter]);
			setTitle("");
			setContent("");
		}
	}

	function fetchProjects() {
		axios
			// .get("https://api.todoist.com/rest/v1/projects", {
			// 	headers: {
			// 		"Access-Control-Allow-Origin": "*",
			// 		Authorization: `Bearer ${Apikey}`,
			// 		// "Access-Control-Allow-Origin": "*",
			// 	},
			// .get("https://v2.jokeapi.dev/joke/Dark", {})
			.then((response) => {
				console.log(response.data);
				// Process response data here
			})
			.catch((error) => {
				console.error("Error fetching projects:", error);
			});
	}

	return (
		<View style={styles.container}>
			<Text>Configuration</Text>
			<TextInput
				style={{ height: 20, borderColor: "gray", borderWidth: 1 }}
				onChangeText={setApikey}
				value={Apikey}
				// placeholder="API Key" // wasnt designing yet and the placheolder was wayyy to fkn dark so i left it as it was
			/>
			{/* <TouchableOpacity onPress={() => handleApikeySubmit()}>
				<Text>set API Key</Text>
			</TouchableOpacity> */}
			<TextInput
				style={{ height: 20, borderColor: "gray", borderWidth: 1 }}
				onChangeText={setProjectId}
				value={ProjectId}
			/>
			<TouchableOpacity onPress={() => fetchProjects("SECRET:)")}>
				<Text>fetch Projects</Text>
			</TouchableOpacity>
			{Apikey ? <Text></Text> : null}

			<Text>Title</Text>
			<TextInput
				style={{ height: 20, borderColor: "gray", borderWidth: 1 }}
				onChangeText={setTitle}
				value={Title}
			/>
			<Text>Content</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={setContent}
				value={Content}
			/>
			<Text>Encounters</Text>
			{Encounters.map((encounter, index) => (
				<View key={index}>
					{encounter.content ? (
						<Encounter title={encounter.title} content={encounter.content} />
					) : (
						<Text>No content available for this encounter</Text>
					)}
				</View>
			))}
			<TouchableOpacity onPress={handleEncounterSubmit}>
				<Text>Submit</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={sendEncounters}>
				<Text>Upload</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
