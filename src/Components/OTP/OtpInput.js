import React, { useRef, useState } from "react";
import {
    OtpInputContainer,
    TextInputHidden,
    SplitOtpBoxesContainer,
    SplitBoxes,
    SplitBoxText
} from "./Styles";

const OtpInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const inputRef = useRef();
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
    const handleOnBlur = () => {};

    const boxArray = new Array(maximumLength).fill(0);
    const boxDigit = (_, index) => {
        const emptyInput = "";

        const digit = code[index] || emptyInput;
        return (
            <SplitBoxes key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </SplitBoxes>
        )
    }
    return (
        <OtpInputContainer>
            <SplitOtpBoxesContainer>
                {boxArray.map(boxDigit)}
            </SplitOtpBoxesContainer>
            <TextInputHidden
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
                keyboardType="number-pad"
            />
        </OtpInputContainer>
    )
}

export default OtpInput;