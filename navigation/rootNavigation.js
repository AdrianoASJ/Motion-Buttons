import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../src/screens/Welcome";

const MainNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false
    }
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
