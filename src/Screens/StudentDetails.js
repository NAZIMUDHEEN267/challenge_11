import { View, TextInput } from 'react-native'
import React from 'react'
import BgImg from '../Components/BgImg'
import Words from '../Components/Words'
import BottomSheet from '../Components/BottomSheet';
import TextInputBox from '../Components/TextInputBox';
import { ButtonContainer, ButtonText } from '../Components/Button';

const StudentDetails = () => {
    return (
        <View>
            <BgImg>
                {/* text */}
                <Words
                    main="Student Details"
                />

                {/* bottom sheet */}
                <BottomSheet>
                    <TextInputBox placeholder="full name" placeholderTextColor={"white"}/>
                    <TextInputBox />
                    <TextInputBox />
                    <TextInputBox />

                    <ButtonContainer>
                        <ButtonText>Register</ButtonText>
                    </ButtonContainer>
                </BottomSheet>
            </BgImg>
        </View>
    )
}

export default StudentDetails