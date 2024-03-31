import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import Encounter from "../components/Encounter";

const Home = () => {
	const [Encounters, setEncounters] = useState([]);
	const [Title, setTitle] = useState("");
	const [Content, setContent] = useState("");

	useEffect(() => {
		console.log("Encounters", Encounters);
	}, [Encounters]);

	function sendEncounters() {
		console.log("sending encounters");
	}

	function handleSubmit() {
		const newEncounter = { title: Title, content: Content };
		if (newEncounter.title === "") {
			alert("Encounter Title is empty!");
		} else {
			setEncounters([...Encounters, newEncounter]);
			setTitle("");
			setContent("");
		}
	}

	return (
		<View style={styles.container}>
			<Text>Title</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
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
			<TouchableOpacity onPress={handleSubmit}>
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

export default Home;
