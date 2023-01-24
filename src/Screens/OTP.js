import React, { Component, useState } from 'react';
import BottomSheet from '../Components/BottomSheet';
import BgImg from '../Components/BgImg';
import Words from '../Components/Words';
import OTPInput from '../Components/OTP/OtpInput';

 function Otp() {

    const [otpCode, setOtpCode] = useState("00000");
    const [isPinReady, setIsPinReady] = useState(false);
    const maxCodeLength = 5;

        return (
            <BgImg>
                {/* text */}
                <Words 
                    main="Verificatioin code"
                    sub="Please enter verification code that sent to"
                />
                {/* bottom sheet */}
                <BottomSheet>
                    <OTPInput 
                        code={otpCode}
                        setCode={setOtpCode}
                        maximumLength={maxCodeLength}
                        setIsPinReady={setIsPinReady}
                    />
                </BottomSheet>
            </BgImg>
        )
}

export default Otp;