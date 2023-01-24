import React, { useState } from 'react';
import { View } from 'react-native';
import Register from './src/Screens/Register';
import AppTour from './src/Screens/AppTour';
import Otp from './src/Screens/OTP';
import stateContext from './src/data/Context';

function App() {

  const [regText, setRegText] = useState(0);
  const [appText, setAppText] = useState(0);
  const [otpText, setOtpText] = useState(0);
  const [schlText, setSchlText] = useState(0);
  const [stdntText, setStdntText] = useState(0);
  return (
    <stateContext.Provider value={{
      regText, setRegText,
      appText, setAppText,
      otpText, setOtpText,
      schlText, setSchlText,
      stdntText, setStdntText
    }}>
      {/* <Register /> */}
      <Otp />
    </stateContext.Provider>
    )
}

export default App