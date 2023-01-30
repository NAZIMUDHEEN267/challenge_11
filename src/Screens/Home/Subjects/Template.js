import { View } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";
import { videoApi, imgApi } from "./api";
import {
    ChapterText,
    ContainerTop,
    NavMenu,
    ProfileContainer,
    SubjectText,
    Row,
    ChapterBtn
} from "./Styles/Templete";

export default class Template extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgData: [],
            videoData: []
        }
    }

    async componentDidMount() {
        const imgResponce = await imgApi(this.props.subject);
        const videoResponce = await videoApi(this.props.subject);

    }

    render() {
    return (
        <View>
            {/* subject nav */}
            <ContainerTop>
                <NavMenu onPress={this.props.goBack}>
                    <FontAwesome name="angle-left" size={20} color="green" />
                </NavMenu>

                {/* subject text */}
                <View>
                    <SubjectText>
                        {this.props.subject}
                    </SubjectText>
                    <Row>
                        <Row>
                            <Ionic name="radio-button-on" size={12} color="#00C458" />
                            <ChapterText>12 chapters</ChapterText>
                        </Row>
                        <Row>
                            <Ionic name="radio-button-on" size={12} color="#00C458" />
                            <ChapterText>124 Hours</ChapterText>
                        </Row>
                    </Row>
                </View>
            </ContainerTop>

            {/* buttons for video */}
            <ProfileContainer>
                <ChapterBtn onPress={() => this.props.nav("TopTab", { name: props.subject })}>
                    <ChapterText>
                        aksdfjal;kdfja'sdf
                        asdfa;sldfkjasdfkjasdfkjas;dfkljas;dflk
                    </ChapterText>
                </ChapterBtn>
            </ProfileContainer>
        </View>
    )};
}