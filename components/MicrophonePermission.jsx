import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Permissions } from "expo";

const MicrophonePermission = () => {
	const [hasPermission, setHasPermission] = useState(null);

	useEffect(() => {
		// Check for microphone permission when component mounts
		const getPermission = async () => {
			const { status } = await Permissions.askAsync(
				Permissions.AUDIO_RECORDING
			);
			setHasPermission(status === "granted");
		};

		getPermission(); // Call the function to request permission
	}, []);

	const handlePermissionRequest = async () => {
		const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
		setHasPermission(status === "granted");
	};

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Microphone Permission Example</Text>
			{hasPermission === null ? (
				<Text>Requesting permission...</Text>
			) : hasPermission === false ? (
				<View>
					<Text>Microphone permission is not granted</Text>
					<Button title="Grant Permission" onPress={handlePermissionRequest} />
				</View>
			) : (
				<Text>Microphone permission is granted</Text>
			)}
		</View>
	);
};

export default MicrophonePermission;
