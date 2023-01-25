import React, { useState } from 'react';
import { View } from 'react-native';
import Register from './src/Screens/Register';
import Otp from './src/Screens/OTP';
import StudentDetails from "./src/Screens/StudentDetails";
import AppTour from './src/Screens/AppTour';

function App() {
  return (
    <View>
      <Register />
      {/* <Otp /> */}
      {/* <StudentDetails /> */}
    </View>
    )
}

export default App