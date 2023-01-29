import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Video from "../Screens/Home/Subjects/Chapter/Video";
import ChapterTest from "../Screens/Home/Subjects/Chapter/ChapterTest";
import QN_Bank from "../Screens/Home/Subjects/Chapter/QN_Bank";
import Resources from "../Screens/Home/Subjects/Chapter/Resources";

const {Navigator, Screen} = createMaterialTopTabNavigator();

export default function () {
    return (
        <Navigator>
            <Screen name="Video" component={Video}/>
            <Screen name="ChapterTest" component={ChapterTest} />
            <Screen name="QN_Bank" component={QN_Bank} />
            <Screen name="Resources" component={Resources} />
        </Navigator>
    )
}