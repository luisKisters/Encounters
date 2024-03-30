// import React, { useState, useEffect } from "react";
// import {
// 	View,
// 	Text,
// 	Image,
// 	Modal,
// 	StyleSheet,
// 	Pressable,
// 	TouchableOpacity,
// } from "react-native";
// import Voice from "@react-native-voice/voice";
// const VoiceTest = () => {
// 	const [isRecord, setIsRecord] = useState(false);
// 	const [modalVisible, setModalVisible] = useState(false);
// 	const [text, setText] = useState("");
// 	const buttonLabel = isRecord ? "Stop" : "Start";

// 	const voiceLabel = text ? text : isRecord ? "" : "";
// 	const voiceButtonText =
// 		text === "" && !isRecord
// 			? "Press Start Button"
// 			: text === "" && isRecord
// 			? "Say something..."
// 			: text !== "" && isRecord
// 			? "Press Stop Button"
// 			: "Press Start Button";
// 	const onSpeechStart = (event) => {
// 		console.log("onSpeechStart");
// 		setText("");
// 	};
// 	const onSpeechEnd = () => {
// 		setIsRecord(false);
// 		console.log("onSpeechEnd");
// 	};
// 	const onSpeechResults = (event) => {
// 		console.log(" onSpeechResults", event);
// 		console.log("onSpeechResults");
// 		setText(event.value[0]);
// 	};
// 	const onSpeechError = (event) => {
// 		console.log("onSpeechError");
// 		console.log(event.error);
// 	};
// 	const onRecordVoice = () => {
// 		if (isRecord) {
// 			Voice.stop();
// 			setModalVisible(!modalVisible);
// 		} else {
// 			Voice.start("en-US"); // languages code e.g 'en-US'
// 		}
// 		setIsRecord(!isRecord);
// 	};
// 	const onSpeechPartialResults = (event) => {
// 		console.log(event.value[0]);
// 		setText(event.value[0]);
// 	};
// 	const onSpeechVolumeChanged = (event) => {
// 		//console.log('onSpeechVolumeChanged 3333');
// 		//console.log(event.value);
// 	};
// 	useEffect(() => {
// 		Voice.onSpeechStart = onSpeechStart;
// 		Voice.onSpeechEnd = onSpeechEnd;
// 		Voice.onSpeechResults = onSpeechResults;
// 		Voice.onSpeechError = onSpeechError;
// 		Voice.onSpeechPartialResults = onSpeechPartialResults;
// 		Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
// 		return () => {
// 			Voice.destroy().then(Voice.removeAllListeners);
// 		};
// 	}, []);
// 	return (
// 		<View
// 			style={{
// 				flex: 1,
// 				alignItems: "center",
// 				backgroundColor: "#ffff",
// 				justifyContent: "center",
// 			}}
// 		>
// 			<Text
// 				style={{
// 					color: "black",
// 					fontSize: 20,
// 					position: "absolute",
// 					top: 0,
// 					marginTop: 80,
// 					fontWeight: "bold",
// 				}}
// 			>
// 				Voice Recognition React Native
// 			</Text>
// 			<Text style={{ color: "black" }}>{voiceLabel}</Text>
// 			<TouchableOpacity
// 				onPress={() => setModalVisible(true)}
// 				style={{ marginTop: 10 }}
// 			>
// 				{/* <Image
// 					style={{ width: 50, height: 50 }}
// 					source={require("./src/Images/mic.png")}
// 				/> */}
// 				<Text>Record</Text>
// 			</TouchableOpacity>
// 			<Modal
// 				animationType="slide"
// 				transparent={true}
// 				visible={modalVisible}
// 				onRequestClose={() => {
// 					// Alert.alert("Modal has been closed.");
// 					setModalVisible(!modalVisible);
// 				}}
// 			>
// 				<View style={styles.centeredView}>
// 					<View style={styles.modalView}>
// 						<TouchableOpacity
// 							style={{ position: "absolute", right: 0, margin: 15 }}
// 							onPress={() => setModalVisible(false)}
// 						>
// 							{/* <Image
// 								style={{
// 									// alignSelf:'flex-end',
// 									tintColor: "white",
// 									height: 20,
// 									width: 20,
// 								}}
// 								source={require("./src/Images/close.png")}
// 							{/> */}
// 							<Text>Close</Text>
// 						</TouchableOpacity>

// 						<Text style={{ color: "#ffff" }}>{voiceLabel}</Text>
// 						<TouchableOpacity
// 							onPress={onRecordVoice}
// 							style={{
// 								marginTop: 10,
// 							}}
// 						>
// 							<Text style={{ color: "#ffff", marginBottom: 10 }}>
// 								{buttonLabel}
// 							</Text>
// 							{/* <Image
// 								style={{}}
// 								tintColor="white"
// 								source={require("./src/Images/mic.png")}
// 							/> */}
// 							<Text>Record</Text>
// 						</TouchableOpacity>
// 						<Text style={{ color: "#ffff", marginTop: 5 }}>
// 							{voiceButtonText}
// 						</Text>
// 						<Text style={{ position: "absolute", bottom: 15, color: "#ffff" }}>
// 							English (United States)
// 						</Text>
// 					</View>
// 				</View>
// 			</Modal>
// 		</View>
// 	);
// };
// export default VoiceTest;
// const styles = StyleSheet.create({
// 	centeredView: {
// 		flex: 1,
// 		// justifyContent: "center",
// 		alignItems: "center",
// 		//marginTop: 22
// 	},
// 	modalView: {
// 		//margin: 20,
// 		backgroundColor: "#3FB65F",
// 		borderRadius: 10,
// 		maxHeight: "100%",
// 		padding: 35,
// 		paddingBottom: 100,
// 		borderBottomRightRadius: 0,
// 		borderBottomLeftRadius: 0,
// 		width: "100%",
// 		bottom: 0,
// 		position: "absolute",
// 		alignItems: "center",
// 	},
// 	button: {
// 		borderRadius: 20,
// 		padding: 10,
// 		elevation: 2,
// 	},
// 	buttonOpen: {
// 		backgroundColor: "#F194FF",
// 	},
// 	buttonClose: {
// 		backgroundColor: "#2196F3",
// 	},
// 	textStyle: {
// 		color: "white",
// 		fontWeight: "bold",
// 		textAlign: "center",
// 	},
// 	modalText: {
// 		marginBottom: 15,
// 		textAlign: "center",
// 	},
// });

import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
// import "../assets/button.png";

import Voice, {
	SpeechRecognizedEvent,
	SpeechResultsEvent,
	SpeechErrorEvent,
} from "@react-native-voice/voice";

type Props = {};
type State = {
	recognized: string;
	pitch: string;
	error: string;
	end: string;
	started: string;
	results: string[];
	partialResults: string[];
};

class VoiceTest extends Component<Props, State> {
	state = {
		recognized: "",
		pitch: "",
		error: "",
		end: "",
		started: "",
		results: [],
		partialResults: [],
	};

	constructor(props: Props) {
		super(props);
		Voice.onSpeechStart = this.onSpeechStart;
		Voice.onSpeechRecognized = this.onSpeechRecognized;
		Voice.onSpeechEnd = this.onSpeechEnd;
		Voice.onSpeechError = this.onSpeechError;
		Voice.onSpeechResults = this.onSpeechResults;
		Voice.onSpeechPartialResults = this.onSpeechPartialResults;
		Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
	}

	componentWillUnmount() {
		Voice.destroy().then(Voice.removeAllListeners);
	}

	onSpeechStart = (e: any) => {
		console.log("onSpeechStart: ", e);
		this.setState({
			started: "√",
		});
	};

	onSpeechRecognized = (e: SpeechRecognizedEvent) => {
		console.log("onSpeechRecognized: ", e);
		this.setState({
			recognized: "√",
		});
	};

	onSpeechEnd = (e: any) => {
		console.log("onSpeechEnd: ", e);
		this.setState({
			end: "√",
		});
	};

	onSpeechError = (e: SpeechErrorEvent) => {
		console.log("onSpeechError: ", e);
		this.setState({
			error: JSON.stringify(e.error),
		});
	};

	onSpeechResults = (e: SpeechResultsEvent) => {
		console.log("onSpeechResults: ", e);
		this.setState({
			results: e.value,
		});
	};

	onSpeechPartialResults = (e: SpeechResultsEvent) => {
		console.log("onSpeechPartialResults: ", e);
		this.setState({
			partialResults: e.value,
		});
	};

	onSpeechVolumeChanged = (e: any) => {
		console.log("onSpeechVolumeChanged: ", e);
		this.setState({
			pitch: e.value,
		});
	};

	_startRecognizing = async () => {
		this.setState({
			recognized: "",
			pitch: "",
			error: "",
			started: "",
			results: [],
			partialResults: [],
			end: "",
		});

		try {
			await Voice.start("en-US");
		} catch (e) {
			console.error(e);
		}
	};

	_stopRecognizing = async () => {
		try {
			await Voice.stop();
		} catch (e) {
			console.error(e);
		}
	};

	_cancelRecognizing = async () => {
		try {
			await Voice.cancel();
		} catch (e) {
			console.error(e);
		}
	};

	_destroyRecognizer = async () => {
		try {
			await Voice.destroy();
		} catch (e) {
			console.error(e);
		}
		this.setState({
			recognized: "",
			pitch: "",
			error: "",
			started: "",
			results: [],
			partialResults: [],
			end: "",
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native Voice!</Text>
				<Text style={styles.instructions}>
					Press the button and start speaking.
				</Text>
				<Text style={styles.stat}>{`Started: ${this.state.started}`}</Text>
				<Text
					style={styles.stat}
				>{`Recognized: ${this.state.recognized}`}</Text>
				<Text style={styles.stat}>{`Pitch: ${this.state.pitch}`}</Text>
				<Text style={styles.stat}>{`Error: ${this.state.error}`}</Text>
				<Text style={styles.stat}>Results</Text>
				{this.state.results.map((result, index) => {
					return (
						<Text key={`result-${index}`} style={styles.stat}>
							{result}
						</Text>
					);
				})}
				<Text style={styles.stat}>Partial Results</Text>
				{this.state.partialResults.map((result, index) => {
					return (
						<Text key={`partial-result-${index}`} style={styles.stat}>
							{result}
						</Text>
					);
				})}
				<Text style={styles.stat}>{`End: ${this.state.end}`}</Text>
				<TouchableHighlight onPress={this._startRecognizing}>
					{/* <Image
						style={styles.button}
						// custom image
						source={require("../assets/button.png")}
					/> */}
					<Text style={styles.action}>Start Recognizing</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._stopRecognizing}>
					<Text style={styles.action}>Stop Recognizing</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._cancelRecognizing}>
					<Text style={styles.action}>Cancel</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._destroyRecognizer}>
					<Text style={styles.action}>Destroy</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: 50,
		height: 50,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	action: {
		textAlign: "center",
		color: "#0000FF",
		marginVertical: 5,
		fontWeight: "bold",
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
	stat: {
		textAlign: "center",
		color: "#B0171F",
		marginBottom: 1,
	},
});

export default VoiceTest;
