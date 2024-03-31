import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Permissions } from "expo";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import Encounter from "./components/Encounter";

export default function App() {
	// let encountersArr = [];
	const [Encounters, setEncounters] = useState([]);
	const [Title, setTitle] = useState("");
	const [Content, setContent] = useState("");

	useEffect(() => {
		console.log("Encounters", Encounters);
		// console.log("encountersArr", encountersArr);
	}, [Encounters]);

	function handleSubmit() {
		// encountersArr.push({ title: Title, content: Content });
		// setEncounters(encountersArr);
		const newEncounter = { title: Title, content: Content };
		setEncounters([...Encounters, newEncounter]);
		setTitle("");
		setContent("");
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
			<TouchableOpacity
				// onPress={() => encounters.push({ title: Title, content: Content })}
				onPress={() => handleSubmit()}
			>
				<Text>Submit</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity onPress={() => console.log(encounters)}>
				Print Encounters
			</TouchableOpacity> */}
			{/* <Text>encounter: {[Encounters]}</Text> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
