import React, { useState } from 'react';
import { View } from 'react-native';
import Register from './src/Screens/Register';
import AppTour from './src/Screens/AppTour';
import Otp from './src/Screens/OTP';

function App() {
  return (
    <View>
      <Register />
      {/* <Otp /> */}
    </View>
    )
}

export default App