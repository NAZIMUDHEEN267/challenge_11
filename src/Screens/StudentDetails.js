import { View } from 'react-native'
import React, { useState } from 'react'
import BgImg from '../Components/BgImg'
import Words from '../Components/Words'
import BottomSheet from '../Components/BottomSheet';
import TextInputBox from '../Components/TextInputBox';
import { ButtonContainer, ButtonText } from '../Components/Button';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from "react-native-vector-icons/FontAwesome";

const StudentDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [color, setColor] = useState({
        name: "#999",
        email: "#999",
        pin: "#999",
        dropDown: "#999"
    });

    const states = ['Kerala', 'Tamilnadu', 'Karnataka', 'Andrapradesh', 'Thelangana', 'Maharashtra', 'Madhyapradesh'];
    const textStyle = {
        color: "#999", fontSize: 14, textAlign: "left"
    };

    return (
        <View>
            <BgImg>
                {/* text */}
                <Words
                    main="Student Details"
                    sub="ksjfl"
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
                    <TextInputBox
                        value={pin}
                        onChangeText={setPin}
                        placeholder={"Pincode"}
                        placeholderTextColor={"#999"}
                    />
                    <SelectDropdown
                        data={states}
                        defaultButtonText={"Select state"}
                        dropdownStyle={{ backgroundColor: "#062E40" }}
                        buttonStyle={{
                            width: "90%",
                            backgroundColor: "#062E40",
                            alignSelf: "center",
                            paddingHorizontal: 20,
                        }}
                        buttonTextStyle={textStyle}
                        rowTextStyle={textStyle}
                        renderDropdownIcon={() => <Icon name="angle-down" size={20} color={"#999"} />}
                        dropdownIconPosition={"right"}
                        // onFocus={() => set)}
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