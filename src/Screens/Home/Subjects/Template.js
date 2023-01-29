import { View } from "react-native";
import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";
import {} from "./api";
import {
    ChapterText,
    ContainerTop, 
    NavMenu, 
    ProfileContainer, 
    SubjectText,
    Row
} from "./Styles/Templete";

import { imgApi, videoApi } from "../../../Api/api";

export default function Template(props) {
    const [imgData, setImgData] = useState([]);
    const [videoData, setVideoData] = useState([]);

    // useEffect(async () => {
    //     const getImgData = await imgApi(props.subject);
    //     const getVideoData = await videoApi(props.subject);


    //     setImgData(imgData => [...imgData, getImgData]);
    //     setVideoData(videoData => [...videoData, getVideoData]);
        
    //     return () => {}
    // }, []);

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
                <ChapterText onPress={() => props.nav("TopTab", { name: props.subject })}>

                </ChapterText>
            </ProfileContainer>
       </View>
    )
}