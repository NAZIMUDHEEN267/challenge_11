import React, { useRef, useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import {
    OtpInputContainer,
    TextInputHidden,
    SplitOtpBoxesContainer,
    SplitBoxes,
    SplitBoxText,
    SplitBoxesFocused
} from "./Styles";

const OtpInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    const inputRef = useRef();
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
    
    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
        console.log("handle: " + isInputBoxFocused);
    }
    
    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    const boxArray = new Array(maximumLength).fill(0);
    
    useEffect(() => {
        setIsPinReady(code.length === maximumLength);

      return () => {
        setIsPinReady(false);
      }
    }, [code]);
    
    
    const boxDigit = (_, index) => {
        const emptyInput = "";

        const digit = code[index] || emptyInput;
        
        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;
        if(index === maximumLength - 1) console.log("hello");
        
        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
        const StyledSplitBoxes = isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes; 
        console.log("input: "+isInputBoxFocused, isValueFocused);
        
        return (
            <StyledSplitBoxes key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </StyledSplitBoxes>
        )
    }
    return (
        <OtpInputContainer>
            <SplitOtpBoxesContainer onPress={handleOnPress}>
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