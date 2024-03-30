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
import Voice from "@react-native-voice/voice";

import MicrophonePermission from "./components/MicrophonePermission";
import VoiceTest from "./components/VoiceTest";

export default function App() {
	const [Encounter, setEncounter] = useState("");
	const [Input, setInput] = useState("");
	const [isPermissionGranted, setIsPermissionGranted] = useState(false);

	useEffect(() => {
		const requestAudioRecordingPermission = async () => {
			const { status } = await Permissions.askAsync(
				Permissions.AUDIO_RECORDING
			);
			setIsPermissionGranted(status === "granted");
		};

		requestAudioRecordingPermission();
	}, []);

	const handlePress = () => {
		if (isPermissionGranted) {
			setEncounter(Input);
		} else {
			alert("Permission to record audio is not granted.");
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={setInput}
				value={Input}
			/>
			<TouchableOpacity onPress={handlePress}>
				<Text>Submit</Text>
			</TouchableOpacity>
			<Text>Encounter: {Encounter}</Text>
			{/* <VoiceTest /> */}
			<MicrophonePermission />
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
