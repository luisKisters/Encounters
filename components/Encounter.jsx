import { View, Text } from "react-native";
import React from "react";

const Encounter = (props) => {
	return (
		<View>
			<Text>Title: {props.title}</Text>
			<Text>Content: {props.content}</Text>
		</View>
	);
};

export default Encounter;
