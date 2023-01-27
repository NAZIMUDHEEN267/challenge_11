import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

import HomeBio from "../Screens/Home/Subjects/Biology";
import HomeEng from "../Screens/Home/Subjects/English";
import HomeMat from "../Screens/Home/Subjects/Maths";
import HomeIt from "../Screens/Home/Subjects/It";
import HomeChem from "../Screens/Home/Subjects/Chemistry";
import HomePhy from "../Screens/Home/Subjects/Physics";
import HomeHis from "../Screens/Home/Subjects/History";

import BottomTab from "./BottomTab"

const { Navigator, Screen } = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName={"BottomTab"}>
            <Screen name="Register" component={Register}/>
            <Screen name="OTP" component={Otp} />
            <Screen name="StudentDetails" component={StudentDetails} />
            <Screen name="SchoolBoard" component={SchoolBoard} />
            <Screen name="Share" component={Share} />
            <Screen name="Learn" component={Learn} />
            <Screen name="Kids" component={Kids} />
            <Screen name="Page" component={Page} />
            <Screen name="TitlePage" component={TitlePage}/>
            <Screen name="BottomTab" component={BottomTab}/>
        </Navigator>
    )
};

export const HomeStackScreens = ({ navigation }) => (
    <Navigator>
        <Screen name="Biology" component={HomeBio}/>
        <Screen name="English" component={HomeEng} />
        <Screen name="Maths" component={HomeMat} />
        <Screen name="It" component={HomeIt} />
        <Screen name="Chemistry" component={HomeChem} />
        <Screen name="Physics" component={HomePhy} />
        <Screen name="History" component={HomeHis} />
    </Navigator>
);