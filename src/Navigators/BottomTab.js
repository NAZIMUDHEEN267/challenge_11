import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesing from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

import Home from "../Screens/Home/Home";
import Recents from "../Screens/Recent/Recents";
import Exams from "../Screens/Exam/Exams";
import Profile from "../Screens/Profile/Profile";
import Contact from "../Screens/Contact/Contact";
import { TabButton, TabBtnText } from "./Style/BottomTab";

const { Navigator, Screen } = createBottomTabNavigator();
const afterStyle = { backgroundColor: "#9ff5b6", width: "22%", paddingHorizontal: 10 };
const beforStyle = { backgroundColor: "#fff", width: "20%" } ;

export default function BottomTab() {
    return (
        <Navigator screenOptions={options} initialRouteName={"Home"}>
            <Screen name="Home" component={Home} options={({ navigation }) => ({
                tabBarButton: (props) => (
                    <TabButton
                        style={navigation.isFocused() ? afterStyle : beforStyle}
                        onPress={() => navigation.navigate("Home")}
                    >
                        {navigation.isFocused() ? (
                            <>
                                <AntDesing name="home" size={20} color={"green"} />
                                <TabBtnText>Home</TabBtnText>
                            </>
                        ) : (
                            <AntDesing name="home" size={20} color={"#999"} />
                        )}
                    </TabButton>)
            })} />
            <Screen name="Recents" component={Recents} options={({ navigation }) => ({
                tabBarButton: (props) => (
                    <TabButton
                        style={navigation.isFocused() ? afterStyle : beforStyle}
                        onPress={() => navigation.navigate("Recents")}
                    >
                        {navigation.isFocused() ? (
                            <>
                                <Ionic name="play-outline" size={23} color={"green"} />
                                <TabBtnText>Recents</TabBtnText>
                            </>
                        ) : (
                            <Ionic name="play-outline" size={23} color={"#999"} />
                        )}
                    </TabButton>)
            })} />
            <Screen name="Exams" component={Exams} options={({ navigation }) => ({
                tabBarButton: (props) => (
                    <TabButton
                        style={navigation.isFocused() ? afterStyle : beforStyle}
                        onPress={() => navigation.navigate("Exams")}
                    >
                        {navigation.isFocused() ? (
                            <>
                                <Material name="book-open-page-variant-outline" size={20} color={"green"} />
                                <TabBtnText>Exams</TabBtnText>
                            </>
                        ) : (
                            <Material name="book-open-page-variant-outline" size={20} color={"#999"} />
                        )}
                    </TabButton>)
            })} />
            <Screen name="Profile" component={Profile} options={({ navigation }) => ({
                tabBarButton: (props) => (
                    <TabButton
                        style={navigation.isFocused() ? afterStyle : beforStyle}
                        onPress={() => navigation.navigate("Profile")}
                    >
                        {navigation.isFocused() ? (
                            <>
                                <FontAwesome name="user-o" size={20} color={"green"} />
                                <TabBtnText>Profile</TabBtnText>
                            </>
                        ) : (
                            <FontAwesome name="user-o" size={20} color={"#999"} />
                        )}
                    </TabButton>)
            })} />
            <Screen name="Contact" component={Contact} options={({ navigation }) => ({
                tabBarButton: (props) => (
                    <TabButton
                        style={navigation.isFocused() ? afterStyle : beforStyle}
                        onPress={() => navigation.navigate("Contact")}
                    >
                        {navigation.isFocused() ? (
                            <>
                                <Fontisto name="email" size={20} color={"green"} />
                                <TabBtnText>Contact</TabBtnText>
                            </>
                        ) : (
                            <Fontisto name="email" size={20} color={"#999"} />
                        )}
                    </TabButton>)
            })} />
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
        elevation: 5,
        paddingHorizontal: 10
    },
    lazy: true 
};