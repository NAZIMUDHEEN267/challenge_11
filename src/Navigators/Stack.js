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

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"StudentDetails"}>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="OTP" component={Otp} />
            <Stack.Screen name="StudentDetails" component={StudentDetails} />
            <Stack.Screen name="SchoolBoard" component={SchoolBoard} />
            <Stack.Screen name="Share" component={Share} />
            <Stack.Screen name="Learn" component={Learn} />
            <Stack.Screen name="Kids" component={Kids} />
            <Stack.Screen name="Page" component={Page} />
            <Stack.Screen name="TitlePage" component={TitlePage}/>
        </Stack.Navigator>
    )
}