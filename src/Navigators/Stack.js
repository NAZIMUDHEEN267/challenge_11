import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from '../Screens/Register';
import Otp from '../Screens/Otp';
import StudentDetails from '../Screens/StudentDetails';
import SchoolBoard from '../Screens/SchoolBoard';
import {
    Share,
    Learn,
    Kids,
    Page,
    TitlePage
} from '../Screens/AppTour';

import BottomTab from "./BottomTab"

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackNavigator() {
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
}