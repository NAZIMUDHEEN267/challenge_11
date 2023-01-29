import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Video from "../Screens/Home/Subjects/Chapter/Video";
import ChapterTest from "../Screens/Home/Subjects/Chapter/ChapterTest";
import QN_Bank from "../Screens/Home/Subjects/Chapter/QN_Bank";
import Resources from "../Screens/Home/Subjects/Chapter/Resources";
import { Text } from "react-native";

const {Navigator, Screen} = createMaterialTopTabNavigator();

export default function () {
    return (
        <Navigator screenOptions={{
            tabBarIndicatorContainerStyle: { backgroundColor: "#002333"},
            tabBarPressColor: "red",
            tabBarLabel: ({ focused, children }) => (focused ? <Text style={{ color: "#fff" }}>{children}</Text> : <Text style={{ color: "#999" }}>{children}</Text>),
            tabBarIndicatorStyle: { borderColor: "#00C458", borderWidth: 1.5}
            }}>
            <Screen name="Video" component={Video}/>
            <Screen name="ChapterTest" component={ChapterTest} />
            <Screen name="QN_Bank" component={QN_Bank} />
            <Screen name="Resources" component={Resources} />
        </Navigator>
    )
}