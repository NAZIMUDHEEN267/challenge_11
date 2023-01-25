import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BgImg from '../Components/BgImg'
import Words from '../Components/Words'
import BottomSheet from '../Components/BottomSheet';
import TextInputBox from '../Components/TextInputBox';
import { ButtonContainer, ButtonText } from '../Components/Button';
import { DropDown, DropDownText } from "./Styles/StudentDetails";
import Icon from "react-native-vector-icons/FontAwesome";

const StudentDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    const [pin, setPin] = useState("");


    return (
        <View>
            <BgImg>
                {/* text */}
                <Words
                    main="Student Details"
                />

                {/* bottom sheet */}
                <BottomSheet>
                    <TextInputBox
                        value={name}
                        onChangeText={setName}
                        placeholder={"full name"}
                        placeholderTextColor={"#999"} />
                    <TextInputBox
                        value={email}
                        onChangeText={setEmail}
                        placeholder={"Email"}
                        placeholderTextColor={"#999"} />
                    <DropDown>
                        <DropDownText>Select State</DropDownText>
                        <Icon name="angle-down" color="#999" size={20} />
                    </DropDown>
                    <TextInputBox
                        value={pin}
                        onChangeText={setPin}
                        placeholder={"Email"}
                        placeholderTextColor={"#999"}
                    />

                    <ButtonContainer>
                        <ButtonText>Register</ButtonText>
                    </ButtonContainer>
                </BottomSheet>
            </BgImg>
        </View>
    )
}

export default StudentDetails