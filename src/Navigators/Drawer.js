import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTab from "./BottomTab" // navigator component

const { Navigator, Screen } = createDrawerNavigator();

const DrawerScreens = () => (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name="BottomTab" component={BottomTab} />
    </Navigator>
)


export default DrawerScreens;