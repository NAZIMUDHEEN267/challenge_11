import styled from "styled-components/native";

export const OtpInputContainer = styled.View`
    align-items: center;
    `;

export const TextInputHidden = styled.TextInput`
    width: 300px;
    border-color: #e5e5e5;
    border-width: 1px;
    border-radius: 5px;
    padding: 15px;
    `;

export const SplitOtpBoxesContainer = styled.Pressable`
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
` ;

export const SplitBoxes = styled.View`
    border-color: #e5e5e5;
    border-width: 2px;
    border-radius: 5px;
    padding: 12px;
    min-width: 50px;
`;

export const SplitBoxText = styled.Text`
    font-size: 20px;
    color: #e5e5e5;
`;
