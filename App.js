import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/Navigators/Stack";

function App() {
  return (
   <NavigationContainer>
      <StackNavigator />
   </NavigationContainer>
  )
}

export default App