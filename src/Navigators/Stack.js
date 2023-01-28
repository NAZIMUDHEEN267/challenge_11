import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Registers path component
import Register from '../Screens/Registers/Register';
import Otp from '../Screens/Registers/Otp';
import StudentDetails from '../Screens/Registers/StudentDetails';
import SchoolBoard from '../Screens/Registers/SchoolBoard';
import {
    Share,
    Learn,
    Kids,
    Page,
    TitlePage
} from '../Screens/Registers/AppTour';

import Home from "../Screens/Home/Home"; // Home based path components
import HomeBio from "../Screens/Home/Subjects/Biology";
import HomeEng from "../Screens/Home/Subjects/English";
import HomeMat from "../Screens/Home/Subjects/Maths";
import HomeIt from "../Screens/Home/Subjects/It";
import HomeChem from "../Screens/Home/Subjects/Chemistry";
import HomePhy from "../Screens/Home/Subjects/Physics";
import HomeHis from "../Screens/Home/Subjects/History";

import Drawer from "./Drawer" // navigator

const { Navigator, Screen } = createNativeStackNavigator();

// main stack navigator
export function StackNavigator() {
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName={"Drawer"}>
            <Screen name="Register" component={Register}/>
            <Screen name="OTP" component={Otp} />
            <Screen name="StudentDetails" component={StudentDetails} />
            <Screen name="SchoolBoard" component={SchoolBoard} />
            <Screen name="Share" component={Share} />
            <Screen name="Learn" component={Learn} />
            <Screen name="Kids" component={Kids} />
            <Screen name="Page" component={Page} />
            <Screen name="TitlePage" component={TitlePage}/>
            <Screen name="Drawer" component={Drawer} />
        </Navigator>
    )
};

// home stack navigator
export const HomeStackScreens = ({ navigation }) => (
    <Navigator screenOptions={{headerShown: false}}>
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
        <Screen name="Biology" component={HomeBio}/>
        <Screen name="English" component={HomeEng} />
        <Screen name="Maths" component={HomeMat} />
        <Screen name="It" component={HomeIt} />
        <Screen name="Chemistry" component={HomeChem} />
        <Screen name="Physics" component={HomePhy} />
        <Screen name="History" component={HomeHis} />
    </Navigator>
);