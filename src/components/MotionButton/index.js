import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

export default class MotionButton extends Component {
	componentDidMount() {
		this.animation.play();
		// Or set a specific startFrame and endFrame with:
		// this.animation.play(30, 120);
	}

	resetAnimation = () => {
		this.animation.reset();
		this.animation.play();
	};
	render() {
		return (
			<TouchableOpacity>
				<View>
					{this.props.loading ? (
						<Text>aloo</Text>
					) : (
						<LottieView
							ref={animation => {
								this.animation = animation;
							}}
							style={{
								width: 200,
								height: 100,
								backgroundColor: '#fff',
							}}
							source={require('../../../assets/loading.json')}
							// OR find more Lottie files @ https://lottiefiles.com/featured
							// Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
						/>
					)}
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	animationContainer: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	buttonContainer: {
		paddingTop: 20,
	},
});
