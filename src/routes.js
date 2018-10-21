import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";

export default createStackNavigator(
  {
    Main
  },
  {
    navigationOptions: {
      title: "JSHunt - Titulo Default",
      headerTitleStyle: { // para centralizar o titulo 
        textAlign: "center",
        flex: 1
      },
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#FFF"
    }
  }
);
