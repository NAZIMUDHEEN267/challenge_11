import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";
import { Text } from "react-native";
import Register from "../Screens/Registers/Register";

import BottomTab from "./BottomTab" // navigator component

const { Navigator, Screen } = createDrawerNavigator();

const DrawerScreens = () => (
    <Navigator screenOptions={{headerShown: true}} drawerContent={DrawerContents}>
        <Screen name="BottomTab" component={BottomTab} />
        <Screen name="Register" component={Register} />
    </Navigator>
);

function DrawerContents(props) {
    return (
        
    )
}


export default DrawerScreens;