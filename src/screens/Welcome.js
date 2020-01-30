import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MotionButton from '../components/MotionButton';

export default class Welcome extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MotionButton
					title={'Enviar'}
					// type={'success'}
					// textColor={'#d3d3d3'}
					loading={false}
					// onPress={suaMae()}
					// ButtonStyle={{'css'}}
					// theme={'black/white'}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
});
