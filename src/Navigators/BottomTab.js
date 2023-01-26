import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/BottomTab/Home";
import AntDesing from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomTab () {
    return (
        <Navigator screenOptions={options}>
            <Screen name="Home" component={Home} options={homeIcon}/>
            <Screen name="H" component={Home} options={recentIcon}/>
            <Screen name="Ho" component={Home} options={examIcon}/>
            <Screen name="Hom" component={Home} options={profileIcon}/>
            <Screen name="Homj" component={Home} options={contactIcon} />
        </Navigator>
    )
}

const options = { 
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        position: "absolute",
        left: 5,
        right: 5,
        bottom: 21,
        borderRadius: 12,
        height: 90,
        elevation: 5
    }
}

const homeIcon = { tabBarIcon: ({ focused }) => <AntDesing name="home" size={23} />};
const recentIcon = { tabBarIcon: () => <Ionic name="play-outline" size={23} /> };
const examIcon = { tabBarIcon: () => <Material name="book-open-page-variant-outline" size={23} /> };
const profileIcon = { tabBarIcon: () => <FontAwesome name="user-o" size={23} /> };
const contactIcon = { tabBarIcon: () => <Fontisto name="email" size={23} /> };