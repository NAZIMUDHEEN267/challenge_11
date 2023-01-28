import { View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";
import {
    ChapterText,
    ContainerTop, 
    NavMenu, 
    ProfileContainer, 
    SubjectText,
    Row
} from "./Styles/Templete";


export default function Template(props) {
    return (
       <View>
            {/* subject nav */}
            <ContainerTop>
                <NavMenu onPress={props.goBack}>
                    <FontAwesome name="angle-left" size={20} color="green"/>
                </NavMenu>
                
                {/* subject text */}
                <View>
                    <SubjectText>
                        {props.subject}
                    </SubjectText>
                    <Row>
                        <Row>
                            <Ionic name="radio-button-on" size={12} color="#00C458"/>
                            <ChapterText>12 chapters</ChapterText>
                        </Row>
                        <Row>
                            <Ionic name="radio-button-on" size={12} color="#00C458"/>
                            <ChapterText>124 Hours</ChapterText>
                        </Row>
                    </Row>
                </View>
            </ContainerTop>

            {/* buttons for video */}
            <ProfileContainer>
            </ProfileContainer>
       </View>
    )
}